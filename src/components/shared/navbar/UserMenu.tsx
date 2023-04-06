import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FcShipped } from 'react-icons/fc';
import { FaShoppingCart } from 'react-icons/fa';
import { Avatar } from '../../Avatar';
import { MenuItem } from './MenuItem';
import { NavLinkFacade } from '../../../lib';
import { ThemeToggle } from './ThemeToggle';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current
        && modalRef.current
        && !buttonRef.current.contains(e.target as Node)
        && !modalRef.current.contains(e.target as Node)
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

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        {/* THEME TOGGLE START HERE */}
        <ThemeToggle />
        {/* THEME TOGGLE END HERE */}
        {/* CART START HERE */}
        <div className="relative flex flex-col items-start justify-center">
          <NavLinkFacade
            to="/cart"
            className="hidden px-4 py-3 text-sm font-semibold transition rounded-md md:block hover:bg-neutral-100"
          >
            <FaShoppingCart className="dark:text-primary" size={20} />
            <span className="absolute top-0 flex items-center justify-center h-4 p-1 text-xs font-semibold text-white rounded-full left-10 bg-danger">
              0
            </span>
          </NavLinkFacade>
        </div>
        {/* CART END HERE */}
        {/* ORDERS START HERE */}
        <NavLinkFacade
          to="/orders"
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-md md:block hover:bg-neutral-100"
        >
          <FcShipped size={20} />
        </NavLinkFacade>
        {/*  ORDERS END HERE */}
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
      </div>
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute right-0 z-10 w-[40vw] overflow-hidden text-sm bg-white rounded shadow-md dark:bg-dark/25 backdrop-blur dark:border dark:border-primary md:w-3/4 top-12"
        >
          <div className="flex flex-col">
            <MenuItem
              label="Login"
              onClick={() => {
                // TODO: Implement login modal
              }}
            />
            <MenuItem
              label="Sign Up"
              onClick={() => {
                // TODO: Implement sign up modal
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
