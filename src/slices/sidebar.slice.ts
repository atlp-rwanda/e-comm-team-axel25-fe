/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type SidebarState = {
  isOpen: boolean;
};

const initialState: SidebarState = {
  isOpen: false,
};

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sideBarSlice.actions;
