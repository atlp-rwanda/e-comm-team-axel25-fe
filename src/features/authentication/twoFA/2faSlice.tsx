import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../../data';
import { checkEnv } from '../../../utils';

const REACT_APP_API_BASE_URL = checkEnv(config.REACT_APP_API_BASE_URL);

const createApiInstance = (token: string) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: REACT_APP_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  });

  return createApi({
    reducerPath: '2fa',
    baseQuery,
    endpoints: (builder) => ({
      create2fa: builder.mutation({
        query: () => ({
          url: '/auth/2fa',
          method: 'POST',
        }),
      }),
      verify2faCode: builder.mutation({
        query: (codeObj) => ({
          url: '/auth/2fa/verify2FAToken',
          method: 'POST',
          body: { code: codeObj.code.toString() },
        }),
      }),
    }),
  });
};

export const twoFactorAuthApi = createApiInstance(
  localStorage.getItem('token') as string,
);

export const { useCreate2faMutation, useVerify2faCodeMutation } =
  twoFactorAuthApi;
