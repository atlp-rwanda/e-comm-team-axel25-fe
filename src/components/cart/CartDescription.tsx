import React, { FormEvent } from 'react';
import {
  useDeleteCartItemMutation,
  useGetCartItemsQuery,
  useUpdateCartMutation,
} from '../../services';
import { Button } from '../shared';

type CartDescriptionProps = {
  id: string;
  name: string;
  image: string;
  totalPrice: number;
  quantity: number;
  available: number;
  productId: string;
};

export function CartDescription({
  id,
  name,
  image,
  totalPrice,
  quantity,
  available,
  productId,
}: CartDescriptionProps) {
  const [updateCartItem] = useUpdateCartMutation();
  const { refetch } = useGetCartItemsQuery();
  const [deleteItem] = useDeleteCartItemMutation();

  const handleRemoveFromCart = () => {
    deleteItem(id)
      .unwrap()
      .then(() => refetch())
      .catch((e: any) => {
        console.log(e.message);
      });
  };
  const handleUpdateCart = (event: FormEvent) => {
    event.preventDefault();
    updateCartItem({
      id: productId,
      body: {
        quantity: Number((event.target as HTMLSelectElement).value),
      },
    })
      .unwrap()
      .then(() => refetch())
      .catch((e: any) => console.log(e));
  };

  return (
    <li className="grid grid-cols-2 gap-5 pb-3 border-b place-items-center sm:pb-4 border-dark dark:border-light">
      <img
        className="object-cover w-full h-auto rounded-lg"
        src={image}
        alt={name}
      />
      <div className="flex flex-col gap-5">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          {name}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          Quantity: {quantity}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          Unit Price: {totalPrice}
        </p>
      </div>
      <p>Subtotal: {totalPrice * quantity}</p>
      <div className="flex items-center justify-between gap-5">
        <form className="grid col-span-2 gap-5" onSubmit={handleUpdateCart}>
          <select
            name="quantity"
            id="quantity"
            defaultValue={quantity}
            onChange={(e) => handleUpdateCart(e)}
            className="bg-primary/5 backdrop-blur-sm border-[0.5px] border-secondary px-10 py-2 rounded flex items-center justify-center"
          >
            {Array.from({ length: available }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </form>
        <Button
          label="Remove"
          colorScheme="btn-danger-outline"
          onClick={handleRemoveFromCart}
        />
      </div>
    </li>
  );
}
