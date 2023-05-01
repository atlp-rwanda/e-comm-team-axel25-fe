import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TLoginFieldValues } from '../../../utils/schemas/index';
import { config } from '../../../data';

const baseUrl = config.REACT_APP_API_BASE_URL;
export const ecomApi = createApi({
  reducerPath: 'ecomApi',
  tagTypes: ['auth'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<null, TLoginFieldValues>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});
export const { useLoginMutation } = ecomApi;
