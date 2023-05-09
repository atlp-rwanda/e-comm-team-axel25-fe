import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { BsFillCheckCircleFill } from 'react-icons/bs';

import { TProduct } from '../../../../utils/schemas';
import { Modal } from '../../../shared';
import { useGetProductsQuery } from '../../../../services';

type EditProductDialogueProps = {
  currentProduct: TProduct;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function EditProductDialogue({
  currentProduct,
  isOpen,
  setIsOpen,
}: EditProductDialogueProps) {
  const navigate = useNavigate();
  const { refetch } = useGetProductsQuery();
  const handleClose = () => {
    setIsOpen(!isOpen);
    refetch();
    navigate('/dashboard/seller/product');
  };

  const handleProductEdit = () => {
    setIsOpen(!isOpen);
    refetch();
    navigate('/dashboard/seller/product');
  };
  const bodyContent = (
    <div className="flex flex-col items-center justify-center text-gray-700 dark:text-white">
      <BsFillCheckCircleFill className="w-10 h-10 text-green-500" />
      <h1 className="my-5 text-xl font-semibold ">
        Do you wish to edit anything else on this product?
      </h1>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {currentProduct.name}
          </h5>
        </div>
        <div className="flow-root">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-20 h-20 rounded"
                    src={currentProduct.images}
                    alt={currentProduct.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {currentProduct.id}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {currentProduct.category}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {currentProduct.description}
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {currentProduct.quantity}
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {currentProduct.stock}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-primary">
                  {currentProduct.price}
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      title="Product Created Successfully"
      actionLabel="Update Product"
      onSubmit={handleProductEdit}
      isOpen={isOpen}
      onClose={handleClose}
      body={bodyContent}
      actionColorScheme="btn-primary-outline"
    />
  );
}
