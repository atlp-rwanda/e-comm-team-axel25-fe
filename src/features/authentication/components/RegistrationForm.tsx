import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { BsFillLockFill } from 'react-icons/bs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/shared';
import { InputField } from '../../../components';
import { TRegisterFieldValues, registerSchema } from '../../../utils/schemas/register.schema';
import { useRegisterMutation } from '../../../services/authenticationApi';

export function RegistrationForm() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFieldValues>({
    resolver: zodResolver(registerSchema),
  });
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();
  const signup = (data: TRegisterFieldValues) => {
    setIsLoading(true);

    registerUser(data)
      .unwrap()
      .then(() => {
        setIsLoading(false);

        setError('');
        navigate('/login');
      })
      .catch((err) => {
        setIsLoading(false);

        setError(err.message);
        setMessage('');
      });
  };
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit(signup)}>
      <h2 className="text-4xl text-center">Register</h2>
      <p>{!error && message}</p>
      <p>{error}</p>

      <InputField
        register={register}
        id="email"
        required
        errors={errors}
        type="email"
        icon={MdEmail}
        label="Email"
      />
      <InputField
        register={register}
        id="password"
        required
        errors={errors}
        type="password"
        icon={BsFillLockFill}
        label="Password"
      />
      <InputField
        register={register}
        id="surname"
        required
        errors={errors}
        type="text"
        label="Sur name"
      />
      <InputField
        register={register}
        id="given_name"
        required
        type="text"
        errors={errors}
        label="Given name"
      />

      <p className="mt-4">
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
            <Button isSubmit disabled={isLoading} label="sign up" colorScheme="btn-secondary" />
          </div>
        )}
      </p>
      <p className="text-center mt-4 text-gray-500">
        <Link to="/login">login instead</Link>
      </p>
    </form>
  );
}
