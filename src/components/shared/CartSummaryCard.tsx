import React from 'react';
import { Button } from '.';
import logo from '../../assets/images/logo.svg';
import padlock from '../../assets/icons/padlock.svg';

type CartSummaryProps = {
  items: number;
  shipping: number;
  subtotal: number;
  total: number;
};

function CartSummary({
  items, shipping, subtotal, total,
}: CartSummaryProps) {
  return (
    <div className="bg-white dark:bg-dark2 rounded-lg w-60 h-[370px] drop-shadow-lg">
      <h3 className="text-dark dark:text-white ml-4 pt-2 text-lg font-medium">
        Cart Summary
      </h3>
      <hr className="border-gray-300 mr-3 ml-3 mt-3" />
      <div className="flex flex-row space-x-[84px]">
        <p className="text-gray-500 dark:text-gray-400 ml-4 mt-2 pt-0 font-light text-lg">
          Items
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2 pt-0 font-light text-lg">
          {items}
        </p>
      </div>
      <div className="flex flex-row space-x-14">
        <p className="text-gray-500 dark:text-gray-400 ml-4 mt-2 pt-0 font-light text-lg">
          Shipping
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2 pt-0 font-light text-lg">
          ${shipping}
        </p>
      </div>
      <div className="flex flex-row space-x-[60px]">
        <p className="text-gray-800 dark:text-gray-200 ml-4 mt-2 pt-0 font-light text-lg">
          Subtotal
        </p>
        <p className="text-gray-800 dark:text-gray-200 mt-2 pt-0 font-light text-lg">
          ${subtotal}
        </p>
      </div>

      <hr className="border-gray-300 mr-3 ml-3 mt-3" />
      <div className="flex flex-row space-x-20">
        <p className="text-dark dark:text-white ml-4 mt-2 pt-0 text-xl font-semibold">
          Total
        </p>
        <p className="text-dark dark:text-white ml-4 mt-2 pt-0 text-xl font-semibold">
          ${total}
        </p>
      </div>

      <div className="mx-6 my-2">
        <Button
          label="Proceed to checkout"
          colorScheme="btn-primary"
          onClick={() => {
            // do nothing
          }}
        />
      </div>
      <div className="flex justify-center flex-col py-2">
        <div className="flex flex-row items-center mx-2">
          <img className="w-24" src={logo} alt="Logo" />
          <div className="flex flex-row h-4 ml-2">
            <img className="w-3" src={padlock} alt="padlock" />
            <span className="text-primary text-xs">buyer protection</span>
          </div>
        </div>
        <span className="text-gray-500 mr-3 ml-3 mt-3 text-xs text-center">
          We guarantee that you will receive the items or you can get a refund
        </span>
      </div>
    </div>
  );
}
export default CartSummary;
