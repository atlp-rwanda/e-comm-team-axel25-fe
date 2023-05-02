/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useUpdateProductMutation } from '../../../../services';
import {
  TProduct,
  TUpdateProductFieldValues,
  stockOptions,
  updateProductSchema,
} from '../../../../utils/schemas';
import { Button } from '../../../shared';
import { Loader } from '../../../Loader';

export function Update({ product }: { product: TProduct }) {
  const [isLoading, setIsLoading] = useState(false);
  const [updateProduct] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUpdateProductFieldValues>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
      stock: product.stock,
      images: product.images,
      quantity: product.quantity,
    },
  });

  const onSubmit: SubmitHandler<TUpdateProductFieldValues> = (
    data: TUpdateProductFieldValues,
  ) => {
    setIsLoading(true);
    updateProduct({
      id: product.id,
      body: data,
    })
      .unwrap()
      .then(() => {
        reset();
        window.location.href = '/dashboard/seller/product';
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  if (isLoading) return <Loader />;

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          {...register('name')}
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
        {errors?.name && (
          <p className="my-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          id="category"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          {...register('category')}
        />
        <label
          htmlFor="category"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Category
        </label>
        {errors?.category && (
          <p className="my-2 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          id="description"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          {...register('description')}
        />
        <label
          htmlFor="description"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Description
        </label>
        {errors?.description && (
          <p className="my-2 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <label htmlFor="stock" className="sr-only">
            Stock
          </label>
          <select
            id="stock"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            {...register('stock')}
          >
            {stockOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors?.stock && (
            <p className="my-2 text-sm text-red-500">{errors.stock.message}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="quantity"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register('quantity', {
              valueAsNumber: true,
            })}
          />
          <label
            htmlFor="quantity"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Quantity
          </label>
          {errors?.quantity && (
            <p className="my-2 text-sm text-red-500">
              {errors.quantity.message}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register('price', {
              valueAsNumber: true,
            })}
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
          {errors?.price && (
            <p className="my-2 text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="images"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            {...register('images')}
          />
          <label
            htmlFor="images"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image
          </label>
          {errors.images && (
            <p className="my-2 text-sm text-red-500">{errors.images.message}</p>
          )}
        </div>
      </div>
      <Button label="Update" isSubmit colorScheme="btn-secondary-outline" />
    </form>
  );
}
