import { configureStore } from '@reduxjs/toolkit';

import myReducer from './reducers';

const store = configureStore({
  reducer: {
    // add reducers here
    myReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
