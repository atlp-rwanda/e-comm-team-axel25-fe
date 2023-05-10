import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FcShipped } from 'react-icons/fc';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '../../Avatar';
import { MenuItem } from './MenuItem';
import { ThemeToggle } from './ThemeToggle';
import { RootState } from '../../../store';
import { logout } from '../../../reducers/authReducer';
import { useGetCartItemsQuery } from '../../../services';
import { useHomeLogic } from '../../../hooks';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { handleToggleSideBar } = useHomeLogic();
  const cartLength = useGetCartItemsQuery().data?.data.items.length ?? 0;

  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        modalRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const userId = useSelector((state: RootState) => state.auth.user.id);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        {/* THEME TOGGLE START HERE */}
        <ThemeToggle />
        {/* THEME TOGGLE END HERE */}
        {/* CART START HERE */}
        <div className="relative flex flex-col items-start justify-center">
          <button
            type="button"
            onClick={handleToggleSideBar}
            className="hidden px-4 py-3 text-sm font-semibold transition rounded-md md:block hover:bg-neutral-100"
          >
            <FaShoppingCart className="dark:text-primary" size={20} />
            <span className="absolute top-0 flex items-center justify-center h-4 p-1 text-xs font-semibold text-white rounded-full left-10 bg-danger">
              {cartLength}
            </span>
          </button>
        </div>
        {/* CART END HERE */}
        {/* ORDERS START HERE */}
        <NavLink
          to="/orders"
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-md md:block hover:bg-neutral-100"
        >
          <FcShipped size={20} />
        </NavLink>
        {/*  ORDERS END HERE */}
        {!isAuthenticated ? (
          <button
            ref={buttonRef}
            type="button"
            onClick={toggleOpen}
            className="flex items-center gap-3 px-4 py-3 transition rounded-md hover:shadow-md hover:bg-neutral-100"
          >
            <AiOutlineMenu className="dark:text-primary" />
            <div className="hidden md:block">
              <Avatar />
            </div>
          </button>
        ) : (
          <button
            ref={buttonRef}
            type="button"
            onClick={toggleOpen}
            className="flex items-center gap-3 px-4 py-3 transition rounded-md hover:shadow-md hover:bg-neutral-100"
          >
            <div className="">
              <Avatar />
            </div>
          </button>
        )}
      </div>
      {isOpen &&
        (!isAuthenticated ? (
          <div
            ref={modalRef}
            className="absolute right-0 z-10 w-[40vw] overflow-hidden text-sm bg-white rounded shadow-md dark:bg-dark/25 backdrop-blur dark:border dark:border-primary md:w-3/4 top-12"
          >
            <div className="flex flex-col">
              <MenuItem
                label="Login"
                onClick={() => {
                  navigate('/login');
                }}
              />
              <MenuItem
                label="Sign Up"
                onClick={() => {
                  navigate('/register');
                }}
              />
            </div>
          </div>
        ) : (
          <div
            ref={modalRef}
            className="absolute right-0 z-10 w-[40vw] overflow-hidden text-sm bg-white rounded shadow-md dark:bg-dark/25 backdrop-blur dark:border dark:border-primary md:w-3/4 top-12"
          >
            <div className="flex flex-col">
              <MenuItem
                label="profile"
                onClick={() => {
                  navigate(`/profile/${userId}`);
                }}
              />
              <MenuItem
                label="logout"
                onClick={() => {
                  localStorage.clear();
                  dispatch(logout());
                  navigate('/login');
                }}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
