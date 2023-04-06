import { configureStore } from '@reduxjs/toolkit';
import { useSideBar, useTheme } from './hooks';

const store = configureStore({
  reducer: {
    theme: useTheme.reducer,
    sideBar: useSideBar.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
