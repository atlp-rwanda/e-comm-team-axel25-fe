import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FiTruck, FiShoppingCart, FiMoon, FiSun,
} from 'react-icons/fi';
import { NavLinkFacade } from '../../lib';
import { HeaderBottom } from '../navbar/HeaderBottom';
import { RootState } from '../../store';
import { toggleTheme } from '../../slices';
import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import UserMenu from './UserMenu';

export function Navbar() {
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
    icon = <FiMoon stroke="purple" />;
  } else if (currentTheme === 'dark') {
    icon = <FiSun stroke="yellow" />;
  } else {
    icon = <FiSun />;
  }
  return (
    <nav>
      <div className="w-full bg-gray-50 dark:bg-dark2 text-white px-4 py-3 flex items-center gap-4 fixed z-50 shadow">
        {/* Logo Start Here */}
        <Logo />
        {/* Logo End Here */}
        {/* Deliver Start Here */}
        <Location />
        {/* Deliver End Here */}
        {/* Search Start Here */}
        <Search />
        {/* Search End Here */}
        {/* UserMenu Start Here */}
        <UserMenu />
        {/* User Menu End Here */}
        {/* Orders Start Here */}
        <div className="flex flex-col items-start justify-center">
          <NavLinkFacade
            to="/orders"
            className="border border-secondary rounded p-2 grid place-items-center"
          >
            <FiTruck stroke="purple" />
          </NavLinkFacade>
        </div>
        {/* Orders End Here */}
        {/* Cart Start Here */}
        <div className="flex flex-col items-start justify-center relative">
          <NavLinkFacade
            to="/cart"
            className="border border-secondary rounded p-2 grid place-items-center"
          >
            <FiShoppingCart stroke="purple" />
            <span className="absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-danger text-white rounded-full flex justify-center items-center">
              0
            </span>
          </NavLinkFacade>
        </div>
        {/* Cart End Here */}
        {/* Theme Toggle Start Here */}
        <div className="flex flex-col items-start justify-center">
          <button
            type="button"
            onClick={handleToggleTheme}
            className="border border-secondary rounded p-2 grid place-items-center"
          >
            {icon}
          </button>
        </div>

        {/* Theme Toggle End Here */}
      </div>
      {/* Header Bottom Start Here */}
      <HeaderBottom />
      {/* Header Bottom End Here */}
    </nav>
  );
}
