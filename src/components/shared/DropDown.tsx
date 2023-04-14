import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { MenuItem } from './navbar/MenuItem';

type Props = {
  icon: JSX.Element;
  dropItems: { label: string; onClick: () => void }[];
}

export default function Dropdown({ icon, dropItems }:Props) {
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
        {/* will be here */}
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleOpen}
          className=" hover:text-primary dark:text-white dark:hover:text-primary"
        >
          {icon}

        </button>
      </div>
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute right-0  text-sm bg-white-100  shadow-md dark:bg-dark/25  dark:border dark:border-cyan-500 top-5"
        >
          <div className="flex flex-col">
            {dropItems.map((item) => (
              <MenuItem
                key={item.label}
                label={item.label}
                onClick={item.onClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function DataDropdown() {
  return (
    <Dropdown
      icon={<FaEllipsisV />}
      dropItems={[
        {
          label: 'View ',
          onClick: () => {
            //  xxxxxxxx
          },
        },
        {
          label: 'Delete',
          onClick: () => {
            // xxxxxxx
          },
        },
      ]}
    />
  );
}
