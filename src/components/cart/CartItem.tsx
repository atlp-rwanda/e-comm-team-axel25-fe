import React from 'react';
import { CartDescription } from './CartDescription';
import { CartStats } from './CartStats';

type CartItemProps = {
  price: number;
  stock: string;
  leftInStock: number;
  delivery: number;
  shipping: number;
  soldBy: string;
  name: string;
  image: string;
  onDelete: () => void;
  onAdd: () => void;
};
function CartItem({
  price,
  stock,
  leftInStock,
  delivery,
  shipping,
  name,
  soldBy,
  image,
  onDelete,
  onAdd,
}: CartItemProps) {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-10 p-2 border-b bg-light md:p-5 dark:bg-dark dark:text-white md:flex-row md:gap-2 border-neutral-300 dark:border-neutral-400">
      <CartDescription
        image={image}
        stock={stock}
        leftInStock={leftInStock}
        name={name}
        soldBy={soldBy}
      />
      <CartStats
        price={price}
        delivery={delivery}
        onAdd={onAdd}
        onDelete={onDelete}
        shipping={shipping}
      />
    </div>
  );
}
export default CartItem;
