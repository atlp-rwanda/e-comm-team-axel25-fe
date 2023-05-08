import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMoon, FiSun } from 'react-icons/fi';
import { RootState } from '../../../store';
import { toggleTheme } from '../../../hooks';

export function ThemeToggle() {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const setSystemTheme = () => {
      if (currentTheme === 'system') {
        if (mediaQuery.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    setSystemTheme();
    mediaQuery.addEventListener('change', setSystemTheme);
    return () => mediaQuery.removeEventListener('change', setSystemTheme);
  }, [currentTheme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    document.documentElement.classList.toggle('dark');
  };

  let icon;
  if (currentTheme === 'light') {
    icon = <FiMoon size={20} stroke="cyan" />;
  } else {
    icon = <FiSun size={20} stroke="yellow" />;
  }
  return (
    <button
      onClick={handleToggleTheme}
      type="button"
      className="hidden px-4 py-3 text-sm font-semibold transition rounded-md md:block hover:bg-neutral-100 dark:hover:bg-dark"
    >
      {icon}
    </button>
  );
}
