import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useSideBar, useTheme } from './hooks';
import authReducer from './reducers/authReducer';
import { googleApi } from './services';

const store = configureStore({
  reducer: {
    theme: useTheme.reducer,
    sideBar: useSideBar.reducer,
    authReducer,
    [googleApi.reducerPath]: googleApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(googleApi.middleware),
});

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>;
