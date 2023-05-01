import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useSideBar, useTheme } from './hooks';
import { authSlice } from './reducers/authReducer';
import { googleApi, productApi } from './services';
import { ecomApi } from './features/authentication/services/login';
import { ecomUserApi } from './features/authentication/services/getUser';

const store = configureStore({
  reducer: {
    theme: useTheme.reducer,
    sideBar: useSideBar.reducer,
    auth: authSlice.reducer,
    [googleApi.reducerPath]: googleApi.reducer,
    [ecomApi.reducerPath]: ecomApi.reducer,
    [ecomUserApi.reducerPath]: ecomUserApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(googleApi.middleware)
    .concat(ecomApi.middleware)
    .concat(ecomUserApi.middleware)
    .concat(productApi.middleware),

});

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>;
