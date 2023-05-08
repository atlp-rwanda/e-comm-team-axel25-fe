import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../data';
import { checkEnv } from '../utils';

const baseUrl = checkEnv(config.REACT_APP_API_BASE_URL);

export const resetPasswordApi = createApi({
  reducerPath: 'resetPasswordApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    requestResetPassword: builder.mutation({
      query: (body) => ({
        url: '/auth/requestResetPassword',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    resetPassword: builder.mutation<null, { token: string; password: string }>({
      query: (body) => ({
        url: `/auth/resetPassword/${body.token}`,
        method: 'POST',
        body: JSON.stringify({ password: body.password }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useRequestResetPasswordMutation, useResetPasswordMutation } = resetPasswordApi;
