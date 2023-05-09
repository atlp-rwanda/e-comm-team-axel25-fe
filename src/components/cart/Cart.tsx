import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSideBarLogic } from '../../hooks';
import { mergeClassNames } from '../../lib';
import { useClearCartMutation, useGetCartItemsQuery } from '../../services';
import { Loader } from '../Loader';
import CartItem from './CartItem';
import { TCart } from '../../utils/schemas';
import { Button } from '../shared';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function Cart({ isOpen, onClose }: Props) {
  const {
    isLoading, error, data, refetch,
  } = useGetCartItemsQuery();
  const [clearCart] = useClearCartMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const [customError, setCustomError] = useState('');
  const { containerRef, handleClose, showSideBar } = useSideBarLogic(
    isOpen,
    onClose,
  );

  if (error instanceof Error) setCustomError(error.message);
  const fetchedData = data?.data as TCart;
  const cartSideBarAnimationClassNames = mergeClassNames({
    'absolute right-0 top-0 duration-300 w-[35%] h-[100vh] bg-light dark:bg-dark2':
      true,
    'opacity-100 translate-x-0': showSideBar,
    'opacity-0 translate-x-full': !showSideBar,
  });

  if (!isOpen) return null;

  const handleCartClear = () => {
    clearCart(null)
      .unwrap()
      .then(() => refetch())
      .catch((e) => console.log(e.message));
  };

  return (
    <aside className="fixed top-[69px] left-0 z-40 w-full h-full bg-black/80">
      <div className="relative">
        <div ref={containerRef} className={cartSideBarAnimationClassNames}>
          <header className="flex items-center justify-between w-full px-6 py-2 text-black shadow-inner backdrop-blur-sm bg-primary/10 dark:text-white">
            <div className="flex items-center justify-center gap-5">
              <p className="text-2xl !text-transparent bg-clip-text bg-gradient-to-r from-success  to-secondary">
                Cart 🛒
              </p>
            </div>
            <div className="absolute right-0 flex w-10 h-10 ml-2 top-1">
              <button type="button" onClick={handleClose}>
                <FaTimes size={20} />
              </button>
            </div>
          </header>

          <div className="flex flex-col w-full h-full gap-5 p-5 overflow-y-scroll max-h-[65vh]">
            {isLoading && <Loader />}
            {error && <p className="text-center text-red-500">{customError}</p>}
            {fetchedData?.items.length === 0 && (
              <p className="text-center text-red-500">No items in cart</p>
            )}
            {fetchedData?.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.Product.name}
                image={item.Product.images}
                price={item.Product.price}
                quantity={item.quantity}
                available={item.Product.quantity}
                productId={item.Product.id}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5 p-5">
            <p className="text-2xl !text-transparent bg-clip-text bg-gradient-to-r from-success  to-secondary">
              Cart Total: <span className="border-b">{fetchedData?.total}</span>
            </p>
            <div className="flex items-center justify-center gap-5">
              <Button
                label="Clear Cart"
                colorScheme="btn-warning-outline"
                onClick={handleCartClear}
              />
              <Button
                label="Checkout"
                colorScheme="btn-secondary-outline"
                onClick={() => alert('Checkout')}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
