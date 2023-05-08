import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { TpasswordResetValue, passwordResetSchema } from '../utils/schemas/reset.schema';
import { useResetPasswordMutation } from '../services';
import { InputField } from '../components';
import { Button } from '../components/shared';

function ResetForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState<{ message: string } | null>(null);
  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TpasswordResetValue>({
    resolver: zodResolver(passwordResetSchema),
  });

  const onReset = (data: TpasswordResetValue) => {
    setIsLoading(true);
    resetPassword(data)
      .unwrap()
      .then((payload) => {
        setIsLoading(false);
        setResponse(payload);
        reset();
        setError('');
        navigate('/login');
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err?.data?.message);
      });
    setIsLoading(false);
  };
  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-center text-xl">{response?.message || 'Reset your your password'}</h2>
      <p className="my-4">{error}</p>
      <p className="my-4">{errors?.['']?.message}</p>
      <form onSubmit={handleSubmit(onReset)}>
        <div className="grid gap-2">
          <InputField<TpasswordResetValue>
            id="token"
            label="reset code"
            type="text"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <InputField<TpasswordResetValue>
            id="password"
            label="new password"
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <InputField<TpasswordResetValue>
            id="confirmpassword"
            label="confirm new upassword"
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          {isLoading ? (
            <div className="w-full px-4 py-2 rounded border-[0.5px] border-white btn-secondary  backdrop-blur-sm col-span-1 flex justify-center items-center">
              <svg className="animate-spin h-5 w-5 text-gray-500" viewBox="0 0 24 24">
                <circle
                  className="opacity-100"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="8"
                  strokeDashoffset="-82"
                />
              </svg>
            </div>
          ) : (
            <div className="col-span-1">
              <Button
                isSubmit
                disabled={isLoading}
                colorScheme="btn-secondary"
                label="reset password"
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ResetForm;
