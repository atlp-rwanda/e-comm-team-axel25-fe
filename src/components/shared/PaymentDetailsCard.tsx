import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './Button';
import { InputField } from '../inputs/InputField';
import {
  TPaymentFieldValues,
  paymentSchema,
} from '../../utils/schemas/payment.schema';

export function PaymentDetailsCard() {
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPaymentFieldValues>({
    resolver: zodResolver(paymentSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (Number(data.cardNumber) || Number(data.cvv)) {
          // TODO: Logic here
          setError(null);
        } else {
          setError('Card Number and CVV must be numbers');
        }
      })}
      className="bg-white dark:bg-dark2 rounded-md w-[500px] space-y-5 py-5 px-5"
    >
      {error && <p>{error}</p>}
      <h3 className="text-xl font-medium text-black dark:text-white">
        Add a card
      </h3>
      <div className="grid grid-cols-1 md:gap-2 md:grid-cols-2">
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="Card number"
          id="cardNumber"
          type="text"
          register={register}
        />
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="Card holder name"
          id="cardHolderName"
          type="text"
          register={register}
        />
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="CVV"
          id="cvv"
          type="text"
          register={register}
        />
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="MM / YY"
          id="mmYy"
          type="date"
          register={register}
        />
      </div>

      <h3 className="text-xl font-medium text-black">Billing Address</h3>
      <div className="grid grid-cols-1 md:gap-2 md:grid-cols-2">
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="Full Name"
          id="fullName"
          type="text"
          register={register}
        />
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="Email"
          id="email"
          type="email"
          register={register}
        />
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="Province"
          id="province"
          type="text"
          register={register}
        />
        <InputField<TPaymentFieldValues>
          errors={errors}
          label="District"
          id="district"
          type="text"
          register={register}
        />
      </div>

      <div className="w-full px-5">
        <Button isSubmit colorScheme="btn-secondary" label="Pay now" />
      </div>
    </form>
  );
}
