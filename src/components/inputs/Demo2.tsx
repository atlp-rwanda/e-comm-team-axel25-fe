import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BiMoney, BiPackage, BiPaperPlane, BiPencil,
} from 'react-icons/bi';
import { InputField } from './InputField';
import { Button } from '../shared';
import {
  TCreateProductFieldValues,
  createProductSchema,
} from '../../utils/schemas';

export function Demo2() {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCreateProductFieldValues>({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit: SubmitHandler<TCreateProductFieldValues> = (
    data: TCreateProductFieldValues,
  ) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5">
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

        <InputField<TCreateProductFieldValues>
          id="description"
          label="Description"
          type="text"
          disabled={isLoading}
          register={register}
          errors={errors}
          icon={BiPaperPlane}
          required
        />

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
      <div className="col-span-1">
        <Button
          isSubmit
          disabled={isLoading}
          colorScheme="btn-secondary"
          label="Create Product"
        />
      </div>
    </form>
  );
}
