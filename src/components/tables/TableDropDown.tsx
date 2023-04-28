import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../shared/navbar/MenuItem';

export function TableDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
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
    <div>
      <button
        id="dropdownActionButton"
        data-dropdown-toggle="dropdownAction"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={toggleOpen}
        ref={buttonRef}
      >
        <span className="sr-only">Action button</span>
        Action
        <MdArrowDropDown />
      </button>
      <div>
        {isOpen && (
          <div
            ref={modalRef}
            className="absolute right-0 z-10 w-[40vw] overflow-hidden text-sm bg-white rounded shadow-md dark:bg-dark/25 backdrop-blur dark:border dark:border-primary md:w-3/4 top-12"
          >
            <div className="flex flex-col">
              <MenuItem
                label="Login"
                onClick={() => {
                  navigate('/');
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
    </div>
  );
}
