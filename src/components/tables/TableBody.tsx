import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDistanceToNow } from 'date-fns';
import { Button } from '../shared';
import { ProductTableProps } from './Table';
import { DeleteProductDialogue } from '../dashboards/seller/product/DeleteProductDialogue';
import { TProduct } from '../../utils/schemas';

export function TableBody({ products }: ProductTableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState({} as TProduct);
  const handleDelete = (product: TProduct) => {
    setProductToDelete(product);
    setIsOpen(true);
  };

  if (isOpen) {
    return (
      <DeleteProductDialogue
        currentProduct={productToDelete}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
  }
  return (
    <tbody>
      {products?.map((product) => (
        <tr
          key={product?.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="w-4 p-4">
            <div className="flex items-center">
              <label htmlFor="checkbox-table-search-1">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="sr-only">checkbox</span>
              </label>
            </div>
          </td>
          <th
            scope="row"
            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img
              className="object-cover w-12 h-12 rounded"
              src={product?.images}
              alt="Something"
            />
            <div className="pl-3">
              <div className="text-base font-semibold">{product.name}</div>
              <div className="font-normal text-gray-500">
                {product?.category}
              </div>
            </div>
          </th>
          <td className="px-6 py-4">
            <span className="px-4 py-2 font-bold text-black border rounded-md shadow-sm dark:text-white">
              {product?.quantity}
            </span>
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />
              {product.price}
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="text-sm text-gray-900 dark:text-gray-100">
              {formatDistanceToNow(new Date())}
            </div>
          </td>
          <td className="flex gap-2 px-6 py-4">
            <div className="grid grid-cols-3 gap-5">
              <Link to={`/dashboard/seller/product/${product.id}`}>
                <Button colorScheme="btn-primary-outline" label="View" />
              </Link>
              <Link to={`/dashboard/seller/product/update/${product.id}`}>
                <Button colorScheme="btn-warning-outline" label="Edit" />
              </Link>
              <Button
                colorScheme="btn-danger-outline"
                onClick={() => handleDelete(product)}
                label="Delete"
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
