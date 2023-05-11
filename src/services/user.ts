import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../data';
import { checkEnv, getToken } from '../utils';
import { TProduct } from '../utils/schemas';
import { TUser } from '../utils/schemas/user.schema';

const token = getToken();

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery: fetchBaseQuery({
    baseUrl: checkEnv(config.REACT_APP_API_BASE_URL),
  }),
  tagTypes: ['Users'],

  endpoints: (builder) => ({
    getAllUsers: builder.query<
      { data: TUser[]; status: number; success: boolean },
      void
    >({
      query: () => ({
        url: '/user/all',
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getOneUser: builder.query<
      { data: TUser[]; status: number; success: boolean },
      void
    >({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    disableUser: builder.mutation({
      query: (id) => ({
        url: `/user/disable/${id}`,
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    assignRole: builder.mutation({
      query: (args: { userId: string; role: { role: string } }) => ({
        url: `/role/assign/${args.userId}`,
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
        body: args.role,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetOneUserQuery,
  useDisableUserMutation,
  useAssignRoleMutation,
  useLazyGetAllUsersQuery,
  useLazyGetOneUserQuery,
  usePrefetch,
} = userApi;
