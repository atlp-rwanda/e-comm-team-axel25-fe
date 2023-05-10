import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillLockFill } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RootState } from '../store';
import {
  TUpdatePasswordFieldValues,
  updatePasswordSchema,
} from '../utils/schemas';
import { Button } from '../components/shared';
import { InputField, SpinerButton } from '../components';
import { logout } from '../reducers';
import { useUpdatePasswordMutation } from '../services';

export function PasswordUpdate() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updatePassword] = useUpdatePasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdatePasswordFieldValues>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const passwordUpdateHandler: SubmitHandler<TUpdatePasswordFieldValues> = (
    data: TUpdatePasswordFieldValues,
  ) => {
    setIsLoading(true);
    updatePassword(data)
      .unwrap()
      .then(() => {
        setIsLoading(false);
        dispatch(logout());
        localStorage.clear();
        navigate('/login');
      })
      .catch((err) => {
        setIsLoading(false);

        setError(err.data.message);
        setMessage('');
      });
  };

  return (
    <form
      className="dark:bg-dark dark:border-2 dark:border-gray-500 max-w-md mx-auto mt-10 shadow-xl p-8"
      onSubmit={handleSubmit(passwordUpdateHandler)}
    >
      <h1 className="text-center">update your current password.</h1>

      <div className="flex flex-col">
        <p className="text-success">{!error && message}</p>
        <p className="text-warning text-center">{error}</p>

        <div className="relative">
          <InputField<TUpdatePasswordFieldValues>
            id="currentPassword"
            label="current password"
            type={showCurrentPassword ? 'text' : 'password'}
            disabled={isLoading}
            register={register}
            errors={errors}
            icon={BsFillLockFill}
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform-translate-y-1/2"
            onClick={() => setShowCurrentPassword((prevState) => !prevState)}
          >
            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="relative">
          <InputField<TUpdatePasswordFieldValues>
            id="newPassword"
            label="new password"
            type={showNewPassword ? 'text' : 'password'}
            disabled={isLoading}
            register={register}
            errors={errors}
            icon={BsFillLockFill}
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform-translate-y-1/2"
            onClick={() => setShowNewPassword((prevState) => !prevState)}
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="relative">
          <InputField<TUpdatePasswordFieldValues>
            id="newPasswordConfirmation"
            label="confirm password"
            type={showNewPasswordConfirmation ? 'text' : 'password'}
            disabled={isLoading}
            register={register}
            errors={errors}
            icon={BsFillLockFill}
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform-translate-y-1/2"
            onClick={() => setShowNewPasswordConfirmation((prevState) => !prevState)}
          >
            {showNewPasswordConfirmation ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      {isLoading ? (
        <SpinerButton />
      ) : (
        <div className="col-span-1">
          <Button
            isSubmit
            disabled={isLoading}
            colorScheme="btn-secondary"
            label="Update password"
          />
        </div>
      )}
    </form>
  );
}
