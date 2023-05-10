import React, { Dispatch, SetStateAction } from 'react';

import { MdDangerous } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { TProduct } from '../../../../utils/schemas';
import { Modal } from '../../../shared';
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from '../../../../services';

type DeleteProductDialogueProps = {
  currentProduct: TProduct;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function DeleteProductDialogue({
  currentProduct,
  isOpen,
  setIsOpen,
}: DeleteProductDialogueProps) {
  const [deleteProduct] = useDeleteProductMutation();
  const { refetch } = useGetProductsQuery();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleProductDelete = (id: string) => {
    deleteProduct(id)
      .unwrap()
      .then(() => {
        setIsOpen(!isOpen);
        refetch();
        navigate('/dashboard/seller/product');
      });
  };
  const bodyContent = (
    <div className="flex flex-col items-center justify-center text-gray-700 dark:text-white">
      <MdDangerous className="w-10 h-10 text-red-500" />
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
      title="Are you sure you want to delete this product?"
      actionLabel="Delete Product"
      onSubmit={() => handleProductDelete(currentProduct.id)}
      isOpen={isOpen}
      onClose={handleClose}
      body={bodyContent}
      actionColorScheme="btn-danger"
    />
  );
}
