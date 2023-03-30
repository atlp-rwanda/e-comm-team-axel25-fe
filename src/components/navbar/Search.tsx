import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FiSearch } from 'react-icons/fi';
import { VscTriangleDown } from 'react-icons/vsc';
import { CATEGORIES } from '../../data';

export default function Search() {
  const [showAll, setShowAll] = useState(false);
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
        setShowAll(false);
      }
    };

    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowAll(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  return (
    <div className="h-10 rounded-md hidden lgl:flex items-center flex-grow relative shadow">
      <button
        type="button"
        ref={buttonRef}
        onClick={toggleShowAll}
        className={`z-50 flex items-center justify-center w-14 h-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 text-sm rounded-tl-md ${
          showAll ? 'rounded-bl-none' : 'rounded-bl-md'
        }`}
      >
        All
        <VscTriangleDown />
      </button>
      {showAll && (
        <div ref={modalRef}>
          <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white/50 dark:bg-white/5 backdrop-blur-lg border-[0.5px] border-dark2 p-2 flex-col gap-1 z-50 rounded-b-md">
            {CATEGORIES.map((category) => (
              <li
                key={category.id}
                className="text-sm tracking-wide border-b border-b-transparent hover:border-b-dark2 dark:hover:border-b-primary cursor-pointer duration-200"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <input
        type="text"
        placeholder="Search..."
        className="h-full text-base text-dark2 flex-grow outline-none border-none dark:bg-primary/5 dark:text-white backdrop-blur-md focus:outline-none focus:ring-1 focus:border-cyan-400 transition px-2"
      />
      <button
        type="button"
        className="w-12 h-full flex items-center justify-center bg-primary hover:bg-cyan-600 duration-300 rounded-tr-md rounded-br-md"
      >
        <FiSearch />
      </button>
    </div>
  );
}
