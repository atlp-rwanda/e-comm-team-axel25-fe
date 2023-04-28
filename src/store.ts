import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useSideBar, useTheme } from './hooks';
import { authSlice } from './reducers';
import { googleApi, productApi } from './services';

const store = configureStore({
  reducer: {
    theme: useTheme.reducer,
    sideBar: useSideBar.reducer,
    auth: authSlice.reducer,
    [googleApi.reducerPath]: googleApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (g) => g().concat(googleApi.middleware, productApi.middleware),
});

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>;
