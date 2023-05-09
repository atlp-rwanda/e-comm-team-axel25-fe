import React from 'react';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { Container } from '../Container';
import { ProductCardProps } from '../../utils/types';

export function ProductCard({
  id,
  title,
  category,
  description,
  image,
  price,
  rating,
  quantity,
}: ProductCardProps) {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto ">
        <div className="grid items-start grid-cols-1 gap-6 sm:grid-cols-3">
          <ProductImage image={image} />
          <ProductInfo
            id={id}
            title={title}
            category={category}
            description={description}
            price={price}
            rating={rating}
            quantity={quantity}
          />
        </div>
      </div>
    </Container>
  );
}
