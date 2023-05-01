import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../../data/constants';

const baseUrl = config.REACT_APP_API_BASE_URL;
export const ecomUserApi = createApi({
  reducerPath: 'ecomUserApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetUserQuery } = ecomUserApi;
