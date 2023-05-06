import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../../data';
import { checkEnv, getToken } from '../../../utils';
import { TNotification } from '../schemas';

const token = getToken();

export const notificationApi = createApi({
  reducerPath: 'notification',
  baseQuery: fetchBaseQuery({
    baseUrl: checkEnv(config.REACT_APP_API_BASE_URL),
  }),
  tagTypes: ['Notifications'],
  endpoints: (builder) => ({
    getAllNotifications: builder.query<
      {
        data: TNotification[];
        status: number;
        success: boolean;
      },
      void
    >({
      query: () => ({
        url: '/notification/all',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    readNotification: builder.mutation({
      query: (id) => ({
        url: `/notification/read/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    readAllNotifications: builder.mutation({
      query: () => ({
        url: '/notification/read',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useReadNotificationMutation,
  useReadAllNotificationsMutation,
} = notificationApi;
