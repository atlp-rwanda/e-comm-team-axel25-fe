import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdEmail } from 'react-icons/md';
import { Container, InputField } from '../components';
import { TemailFieldValue, emailSchema } from '../utils/schemas/email.schema';
import { Button } from '../components/shared';
import { useRequestResetPasswordMutation } from '../services/resetPasswordApi';
import ResetForm from './ResetForm';

export function PasswordReset() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState<{ message: string } | null>(null);

  const [requestResetPassword] = useRequestResetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TemailFieldValue>({
    resolver: zodResolver(emailSchema),
  });

  const resetPasswordRequest = (data: TemailFieldValue) => {
    setIsLoading(true);
    requestResetPassword(data)
      .unwrap()
      .then((payload) => {
        setResponse(payload);
        reset();

        setIsLoading(false);
        setError('');
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err?.data?.message);
      });
    setIsLoading(false);
  };

  return (
    <Container>
      {response ? (
        <ResetForm />
      ) : (
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-xl">{response?.message || 'Reset your your password'}</h2>
          <p className="my-4">{error}</p>
          <form onSubmit={handleSubmit(resetPasswordRequest)}>
            <div className="grid gap-5">
              <InputField<TemailFieldValue>
                id="email"
                label="Email"
                type="text"
                disabled={isLoading}
                register={register}
                errors={errors}
                icon={MdEmail}
                required
              />
              <Button
                isSubmit
                disabled={isLoading}
                colorScheme="btn-secondary"
                label="send email"
              />
            </div>
          </form>
        </div>
      )}
    </Container>
  );
}
