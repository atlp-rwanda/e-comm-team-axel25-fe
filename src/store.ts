import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './hooks';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
