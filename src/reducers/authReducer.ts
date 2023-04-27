import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../utils/types';

type AuthState = {
  user: User;
};

const initialState: AuthState = {
  user: {
    token: null,
  },
};
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => ({
      ...state,
      user: action.payload,
    }),
    logout: (state) => ({
      ...state,
      user: initialState.user,
    }),
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
