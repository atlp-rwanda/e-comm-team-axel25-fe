import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FiUser, FiXCircle } from 'react-icons/fi';
import { SideBarContent } from './SideBarContent';
import { toggleSidebar } from '../../slices';

export function Sidebar() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        dispatch(toggleSidebar());
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [dispatch]);

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside className="w-full h-screen fixed top-16 left-0 bg-dark2 bg-opacity-50 z-10">
      <div className="w-full h-full relative">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          ref={ref}
          className="w-[80%] md:w-96 h-full bg-light dark:bg-dark2 border border-primary rounded-r-lg overflow-x-hidden"
        >
          <header className="w-full bg-slate-700 py-2 px-6 flex items-center gap-2">
            <FiUser size={30} stroke="cyan" />
            <h3 className="text-white font-bold text-base tracking-normal md:text-lg md:tracking-wide">
              Hello, Logged In User
            </h3>
          </header>
          <SideBarContent />
          <button
            type="button"
            onClick={handleCloseSidebar}
            className="absolute top-0 left-[82%] md:left-96 w-10 h-10 ml-2 flex items-center justify-center
             bg-dark hover:bg-dark/50 border-[0.5px] border-danger rounded hover:rounded-full backdrop-blur-sm z-20
             transition"
          >
            <FiXCircle stroke="red" size={25} />
          </button>
        </motion.div>
      </div>
    </aside>
  );
}
