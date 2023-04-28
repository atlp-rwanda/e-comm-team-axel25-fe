import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { BiMoney, BiPackage, BiPencil } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { FaNewspaper } from 'react-icons/fa';
import { FcCameraIdentification } from 'react-icons/fc';

import { Button } from '../../../shared';
import {
  TCreateProductFieldValues,
  TProduct,
  createProductSchema,
  stockOptions,
} from '../../../../utils/schemas';
import { InputField } from '../../../inputs/InputField';
import { SelectorField } from '../../../inputs/SelectorField';
import { UploadImage } from './UploadImage';
import { useCreateProductMutation } from '../../../../services';
import { Loader } from '../../../Loader';
import { EditProductDialogue } from './EditProductDialogue';

export function Create() {
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<TProduct>({
    id: 'Camera',
    name: 'Camera',
    price: 0,
    description: 'Canon Camera',
    category: 'Accessories',
    stock: 'Available',
    images: 'https://picsum.photos/200/300',
    createdAt: new Date(),
    updatedAt: new Date(),
    expiredAt: new Date(),
    quantity: 0,
    sellerId: '',
  });
  const [createProduct] = useCreateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TCreateProductFieldValues>({
    resolver: zodResolver(createProductSchema),
  });

  const setImgSrc = (value: string) => {
    setValue('images', value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<TCreateProductFieldValues> = (
    data: TCreateProductFieldValues,
  ) => {
    setIsLoading(true);
    createProduct(data)
      .unwrap()
      .then((payload) => {
        setCurrentProduct(payload.data[0]);
        setIsOpen(true);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
    reset();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isOpen) {
    return (
      <EditProductDialogue
        currentProduct={currentProduct}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
  }

  return (
    <section>
      <header>
        <h1 className="px-4 py-2 text-2xl font-medium text-gray-700 dark:text-white">
          Create your Product
        </h1>
      </header>

      <main>
        <UploadImage
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
          setImgSrc={setImgSrc}
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full p-4 border border-white rounded-md shadow-md dark:bg-dark2 dark:border-none"
        >
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <InputField<TCreateProductFieldValues>
                id="name"
                label="Name"
                type="text"
                disabled={isLoading}
                register={register}
                errors={errors}
                icon={BiPencil}
                required
              />
            </div>
            <div>
              <InputField<TCreateProductFieldValues>
                id="category"
                label="Category"
                type="text"
                disabled={isLoading}
                register={register}
                errors={errors}
                icon={BiPackage}
                required
              />
            </div>
          </div>

          <InputField<TCreateProductFieldValues>
            id="description"
            label="Description"
            type="text"
            disabled={isLoading}
            register={register}
            errors={errors}
            icon={FaNewspaper}
            required
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div>
              <SelectorField<TCreateProductFieldValues>
                id="stock"
                options={[...stockOptions]}
                type="text"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div>
              <InputField<TCreateProductFieldValues>
                id="quantity"
                label="Quantity"
                type="number"
                disabled={isLoading}
                register={register}
                errors={errors}
                icon={BiMoney}
                required
              />
            </div>
            <div>
              <InputField<TCreateProductFieldValues>
                id="price"
                label="Price"
                type="number"
                disabled={isLoading}
                register={register}
                errors={errors}
                icon={BiMoney}
                required
              />
            </div>
            <div>
              <InputField<TCreateProductFieldValues>
                id="expiredAt"
                label="Expires At"
                type="date"
                disabled={isLoading}
                register={register}
                errors={errors}
                icon={BsClock}
                required
              />
            </div>

            <div>
              {!imgUrl && (
                <InputField<TCreateProductFieldValues>
                  id="images"
                  label="Image"
                  type="text"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  customOnChange={(e) => setImgSrc(e.target.value)}
                  icon={FcCameraIdentification}
                />
              )}
            </div>
          </div>

          <div className="m-4">
            <Button
              isSubmit
              disabled={isLoading}
              colorScheme="btn-secondary"
              label="Create Product"
            />
          </div>
        </form>
      </main>
    </section>
  );
}
