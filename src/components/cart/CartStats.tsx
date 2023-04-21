import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';

type CartStatsProps = {
  price: number;
  delivery: number;
  shipping: number;
  onDelete: () => void;
  onAdd: () => void;
};

export function CartStats({
  price,
  delivery,
  shipping,
  onDelete,
  onAdd,
}: CartStatsProps) {
  const handleAddToWishlist = () => {
    // TODO: add to wishlist
    onAdd();
  };
  const handleDeleteFromCart = () => {
    // TODO: delete from cart
    onDelete();
  };
  return (
    <div className="flex flex-col gap-5 text-start md:text-end">
      <strong className="text-base md:text-lg">${price}</strong>
      <p className="text-sm md:text-base">
        Delivery/Shipping: <strong>${shipping}</strong>
      </p>
      <p className="text-sm md:text-base">
        Estimated Delivery:{' '}
        <span className="text-success">{delivery} days</span>
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          aria-label="Add item to wish list"
          className="text-sm md:text-base hover:text-primary"
          onClick={handleAddToWishlist}
        >
          <BsFillSuitHeartFill className="inline-block fill-success" /> Add to
          wishlist
        </button>
        <div className="border-[0.5px] border-neutral-500" />
        <button
          type="button"
          aria-label="Delete item from cart"
          className="text-sm md:text-base hover:text-primary"
          onClick={handleDeleteFromCart}
        >
          <MdDeleteForever className="inline-block fill-danger" /> Delete
        </button>
      </div>
    </div>
  );
}
