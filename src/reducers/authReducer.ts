import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../utils/types';

const userToken = localStorage.getItem('token');
const userRole = localStorage.getItem('Role');
const userId = localStorage.getItem('userId');
const surname = localStorage.getItem('surname');
const given_name = localStorage.getItem('given_name');
const avatar = localStorage.getItem('avatar');

type AuthState = {
  user: User;
  isAuthenticated: boolean;

};

const initialState: AuthState = {
  user: {
    token: userToken,
    id: userId,
    email: '',
    given_name,
    surname,
    avatar,
    role: userRole,
  },
  isAuthenticated: Boolean(localStorage.getItem('token')),

};
const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => ({
      ...state,
      user: action.payload,
      isAuthenticated: true,
    }),
    logout: (state) => ({
      ...state,
      user: initialState.user,
      isAuthenticated: false,

    }),
  },
});

export const { login, logout } = authSlice.actions;
export { authSlice };
