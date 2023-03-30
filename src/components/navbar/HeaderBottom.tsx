import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { Sidebar } from './Sidebar';
import { RootState } from '../../store';
import { toggleSidebar } from '../../slices';

export function HeaderBottom() {
  const sideBar = useSelector((state: RootState) => state.sideBar);
  const dispatch = useDispatch();

  const handleOpenSideBar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="w-full px-4 h-9 bg-gray-100 dark:bg-gray-800 flex items-center shadow fixed top-14 mdl:top-16 z-40">
      {/* List Items Start Here */}
      <ul className="flex items-center gap-10 text-sm tracking-wide">
        <li className="flex items-center gap-1 text-black dark:text-white">
          <button onClick={handleOpenSideBar} type="button">
            <FiMenu stroke="cyan" size={20} />
          </button>
          All
        </li>
        <li className="text-black dark:text-white hidden md:inline-flex">
          Today&apos;s Deals
        </li>
        <li className="text-black dark:text-white hidden md:inline-flex">
          Customer Service
        </li>
        <li className="text-black dark:text-white hidden md:inline-flex">
          Gift Cards
        </li>
        <li className="text-black dark:text-white hidden md:inline-flex">
          Registry
        </li>
        <li className="text-black dark:text-white hidden md:inline-flex">
          Sell
        </li>
      </ul>
      {/* List Items End Here */}
      {/* Side Nav Start Here */}
      {sideBar.isOpen && <Sidebar />}
      {/* Side Nav End Here */}
    </div>
  );
}
