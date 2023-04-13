import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../data';
import { checkEnv } from '../utils';
import { TRegisterFieldValues } from '../utils/schemas/register.schema';

const baseUrl = checkEnv(config.REACT_APP_API_BASE_URL);

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: (body) => ({
        url: '/auth/google-login',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    register: builder.mutation<null, TRegisterFieldValues>({
      query: (payload) => ({
        url: 'user',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useGoogleLoginMutation, useRegisterMutation } = authApi;
