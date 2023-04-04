/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  currentTheme: string;
};

const initialState = {
  currentTheme: 'system',
} satisfies ThemeState;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    },
    setSystemPreference: (state) => {
      state.currentTheme = 'system';
    },
  },
});

export const { toggleTheme, setSystemPreference } = themeSlice.actions;
