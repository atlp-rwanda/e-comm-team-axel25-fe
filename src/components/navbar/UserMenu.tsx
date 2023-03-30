import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FiList, FiUser } from 'react-icons/fi';
import MenuItem from './MenuItem';

export default function UserMenu() {
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
      <div className="flex items-center justify-center gap-3">
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleOpen}
          className="text-red-500 p-2 border border-secondary flex items-center justify-center gap-3 rounded hover:shadow-lg transition"
        >
          <FiList stroke="purple" />
          <div className="hidden md:grid place-items-center">
            <FiUser stroke="purple" />
          </div>
        </button>
      </div>
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute rounded-lg shadow-md w-28 md:w-48 bg-light/50 dark:bg-dark2/50 border border-white dark:border-primary overflow-hidden left-0 top-12 text-sm backdrop-blur transition"
        >
          <div className="flex flex-col">
            <MenuItem label="Login" path="/login" />
            <MenuItem label="Sign Up" path="/signup" />
          </div>
        </div>
      )}
    </div>
  );
}
