import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsFillLockFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decodeToken } from 'react-jwt';
import { InputField } from '../../../components/inputs/InputField';
import { Button } from '../../../components/shared';
import {
  TLoginFieldValues,
  loginSchema,
} from '../../../utils/schemas/login.schema';
import { useLoginMutation } from '../services/login';
import { login } from '../../../reducers/authReducer';
import { config } from '../../../data';
import { SpinerButton } from '../../../components';

const baseUrl = config.REACT_APP_API_BASE_URL;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginFieldValues>({
    resolver: zodResolver(loginSchema),
  });

  const [loginUser] = useLoginMutation();

  const dispatch = useDispatch();

  const loginUserFunc: SubmitHandler<TLoginFieldValues> = (
    data: TLoginFieldValues,
  ) => {
    setIsLoading(true);
    interface UserToken {
      payload: {
        payload?: {
          id: string;
        };
      };
    }

    loginUser(data)
      .unwrap()
      .then(async (payload: { data: string; message: string } | null) => {
        setIsLoading(false);
        setMessage(payload?.message as string);

        setError('');
        const usertoken: UserToken | null = decodeToken(
          payload?.data as string,
        );

        const request = await fetch(`${baseUrl}/user/${usertoken?.payload}`);
        const user = await request.json();
        localStorage.setItem('Role', user?.data.role);
        localStorage.setItem('id', user?.data.id);

        if (user?.data) {
          dispatch(
            login({
              email: user?.data.email,
              given_name: user?.data.given_name,
              surname: user?.data.surname,
              avatar: user?.data.avatar,
              id: user?.data.id,
              status: user?.data.status,
              role: user?.data.role,
              token: payload?.data,
            }),
          );
          localStorage.setItem('userId', user?.data.id);
        }

        if (request.ok) {
          if (user.data.twoFAenabled) {
            localStorage.setItem('token', payload?.data as string);
            window.location.href = '/dashboard/seller/settings/2fa/success-route';
          } else if (user?.data.status === 'Needs_Password_Reset') {
            window.location.href = '/need-pri';
          } else {
            localStorage.setItem('token', payload?.data as string);
            window.location.href = '/';
            window.location.href = '/';
          }
        }
        reset();
      })
      .catch((err) => {
        setError(err.message);
        setMessage('');
        setIsLoading(false);
      });
  };

  return (
    <>
      <form
        className="dark:bg-dark dark:border-2 dark:border-gray-500 max-w-md mx-auto mt-10 shadow-xl p-8"
        onSubmit={handleSubmit(loginUserFunc)}
      >
        <h1>Welcome to cypher ecommerce, Login now!</h1>

        <div className="flex flex-col">
          <p className="text-success">{!error && message}</p>
          <p className="text-warning">{error}</p>

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

          <div className="relative">
            <InputField<TLoginFieldValues>
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              disabled={isLoading}
              register={register}
              errors={errors}
              icon={BsFillLockFill}
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 transform-translate-y-1/2"
              onClick={toggleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <Link to="/password-reset">
          <small className="ml-15">Forget password</small>
        </Link>
        {isLoading ? (
          <div className="w-full px-4 py-2 rounded border-[0.5px] border-white btn-secondary  backdrop-blur-sm col-span-1 flex justify-center items-center">
            <svg
              className="animate-spin h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
            >
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
              label="Login"
            />
          </div>
        )}
      </form>
      <div className="flex items-center justify-center">
        <hr className="border-2 w-[10%] mx-4" />
        <p className="text-gray-500  font-bold">or</p>
        <hr className="border-2 w-[10%] mx-4" />
      </div>
    </>
  );
}
