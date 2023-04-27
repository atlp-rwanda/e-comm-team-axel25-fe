import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../data';
import { checkEnv } from '../utils';

const baseUrl = checkEnv(config.REACT_APP_API_BASE_URL);

export const googleApi = createApi({
  reducerPath: 'googleApi',
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
  }),
});

export const { useGoogleLoginMutation } = googleApi;
