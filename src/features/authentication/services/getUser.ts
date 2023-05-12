import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../../data/constants';
import { getToken } from '../../../utils';
import { User } from '../../../utils/types';

const token = getToken();
const baseUrl = config.REACT_APP_API_BASE_URL;

export const ecomUserApi = createApi({
  reducerPath: 'ecomUserApi',
  tagTypes: ['user'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<{data: User}, unknown>({
      query: (id) => ({
        url: `user/${id}`,
        method: 'GET',
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/user/update/${id}`,
        method: 'PATCH',
        body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const { useGetUserQuery, useUpdateUserMutation } = ecomUserApi;
