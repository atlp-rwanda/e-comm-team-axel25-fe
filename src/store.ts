import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useSideBar, useTheme } from './hooks';
import { authApi, cartApi, productApi, resetPasswordApi } from './services';
import { ecomApi } from './features/authentication/services/login';
import { ecomUserApi } from './features/authentication/services/getUser';
import { userApi } from './services/user';
import { cartSlice, authSlice } from './reducers';
import { twoFactorAuthApi } from './features/authentication/twoFA/2faSlice';
import { notificationApi } from './features/notification/services/notifications';

const store = configureStore({
  reducer: {
    theme: useTheme.reducer,
    sideBar: useSideBar.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [ecomApi.reducerPath]: ecomApi.reducer,
    [ecomUserApi.reducerPath]: ecomUserApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [twoFactorAuthApi.reducerPath]: twoFactorAuthApi.reducer,

    [notificationApi.reducerPath]: notificationApi.reducer,
  },

  middleware: (g) =>
    g().concat(
      authApi.middleware,
      resetPasswordApi.middleware,
      ecomApi.middleware,
      ecomUserApi.middleware,
      productApi.middleware,
      cartApi.middleware,
      notificationApi.middleware,
      twoFactorAuthApi.middleware,
      userApi.middleware,
    ),
});

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>;
