import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../data';
import { checkEnv, getToken } from '../utils';
import { TProduct } from '../utils/schemas';

const token = getToken();

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: checkEnv({ param: config.REACT_APP_API_BASE_URL }),
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAvailableProducts: builder.query<
      { data: TProduct[]; status: number; success: boolean },
      void
    >({
      query: () => ({
        url: '/product/available',
        method: 'GET',
      }),
    }),
    getProducts: builder.query<{ data: TProduct[]; status: number; success: boolean }, void>({
      query: () => ({
        url: '/product/items',
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `/product/available/${id}`,
        method: 'GET',
      }),
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: '/product',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/product/update/${id}`,
        method: 'PATCH',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/delete/${id}`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAvailableProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
