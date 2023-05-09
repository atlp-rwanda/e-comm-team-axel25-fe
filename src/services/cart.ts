import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../data';
import { checkEnv, getToken } from '../utils';
import { TCart } from '../utils/schemas';

const token = getToken();

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: checkEnv(config.REACT_APP_API_BASE_URL),
  }),
  tagTypes: ['Cart Items'],
  endpoints: (builder) => ({
    getCartItems: builder.query<
      { data: TCart; status: number; success: boolean },
      void
    >({
      query: () => ({
        url: '/cart',
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: '/cart/add',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateCart: builder.mutation({
      query: ({ id, body }) => ({
        url: `/cart/update/${id}`,
        method: 'PATCH',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/remove/${id}`,
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: '/cart/clear',
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
  useGetCartItemsQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteCartItemMutation,
  useClearCartMutation,
} = cartApi;
