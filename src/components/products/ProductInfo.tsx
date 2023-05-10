import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../Heading';
import Stars from '../shared/Stars';
import { Button } from '../shared';
import { Counter } from '../inputs/Counter';
import { useAddToCartMutation, useGetCartItemsQuery } from '../../services';

type ProductInfoProps = {
  id: string;
  title: string;
  category: string;
  rating: number;
  price: number;
  description: string;
  quantity: number;
};

export function ProductInfo({
  id,
  title,
  category,
  rating,
  price,
  description,
  quantity,
}: ProductInfoProps) {
  const [addToCart] = useAddToCartMutation();
  const { refetch } = useGetCartItemsQuery();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ productId: id, quantity: selectedQuantity })
      .unwrap()
      .then(() => refetch())
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className="grid gap-5">
      <header className="grid gap-2">
        <Heading title={title} subtitle={category} />
        <div className="flex items-center justify-start gap-2">
          <Stars num={rating} />
          <Link to={`/products/${category}`}>
            <span className="text-sm text-primary">125 Reviews</span>
          </Link>
          <span className="px-1 text-sm border-l text-neutral-500 dark:text-neutral-400 border-neutral-700">
            123 Orders
          </span>
        </div>
      </header>
      <main className="grid gap-5">
        <article className="text-sm text-neutral-500 dark:text-neutral-400 ">
          {description}
        </article>
        <h2 className="text-2xl font-bold dark:text-white">${price}</h2>
        <span className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          Stock:{' '}
          <span className="px-4 py-2 font-bold text-black border rounded-md shadow-sm dark:text-white">
            {quantity}
          </span>
          available
        </span>
        <hr className="dark:border-primary" />
        <Counter
          title="Quantity"
          onChange={(value) => {
            setSelectedQuantity(value);
          }}
          value={selectedQuantity}
          max={quantity}
        />
        <Button
          label="Buy now"
          colorScheme="btn-secondary"
          onClick={() => {
            // TODO: Buy now
          }}
        />
        <Button
          label="Add to cart"
          colorScheme="btn-secondary-outline"
          onClick={handleAddToCart}
        />
      </main>
    </section>
  );
}
