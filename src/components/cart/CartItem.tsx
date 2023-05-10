import React from 'react';
import { CartDescription } from './CartDescription';

type CartItemProps = {
  id: string;
  price: number;
  name: string;
  image: string;
  quantity: number;
  available: number;
  productId: string;
};
function CartItem({
  id,
  price,
  name,
  image,
  quantity,
  available,
  productId,
}: CartItemProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 p-5 rounded-lg shadow">
      <ul className="w-full">
        <CartDescription
          id={id}
          image={image}
          name={name}
          totalPrice={price}
          quantity={quantity}
          available={available}
          productId={productId}
        />
      </ul>
    </div>
  );
}
export default CartItem;
