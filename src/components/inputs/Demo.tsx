import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsFillLockFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { InputField } from './InputField';
import { Button } from '../shared';
import { TLoginFieldValues, loginSchema } from '../../utils/schemas';

export function Demo() {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginFieldValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLoginFieldValues> = (
    data: TLoginFieldValues,
  ) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5">
        <InputField<TLoginFieldValues>
          id="email"
          label="Email"
          type="email"
          disabled={isLoading}
          register={register}
          errors={errors}
          icon={MdEmail}
          required
        />

        <InputField<TLoginFieldValues>
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          icon={BsFillLockFill}
          required
        />
      </div>
      <div className="col-span-1">
        <Button
          isSubmit
          disabled={isLoading}
          colorScheme="btn-secondary"
          label="Login"
        />
      </div>
    </form>
  );
}
