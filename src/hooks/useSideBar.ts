import { createSlice } from '@reduxjs/toolkit';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';

type SidebarState = {
  isOpen: boolean;
};

const initialState: SidebarState = {
  isOpen: false,
};

export const useSideBar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSideBar: (state) => ({ ...state, isOpen: !state.isOpen }),
  },
});

export const { toggleSideBar } = useSideBar.actions;

// UI Logic (Sidebar.tsx)

export const useSideBarLogic = (isOpen: boolean, onClose: () => void) => {
  const [showSideBar, setShowSideBar] = useState(isOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowSideBar(isOpen);

    let timeoutId: NodeJS.Timeout;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current
        && !containerRef.current.contains(e.target as Node)
      ) {
        setShowSideBar(false);
        timeoutId = setTimeout(() => {
          onClose();
        }, 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, [isOpen, onClose, containerRef]);

  const handleClose = useCallback(() => {
    setShowSideBar(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  return { showSideBar, containerRef, handleClose };
};
