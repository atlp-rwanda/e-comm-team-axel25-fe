import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, sideBarSlice, themeSlice } from './slices';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themeSlice.reducer,
    sideBar: sideBarSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
