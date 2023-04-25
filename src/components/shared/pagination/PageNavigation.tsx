import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

type PageNavigationProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
  }
function PageNavigation({ currentPage, totalPages, handlePageChange }: PageNavigationProps) {
  return (
    <div className="flex justify-center my-4">
      {currentPage !== 1 && (
      <button
        type="button"
        className="px-3 py-1 bg-gray-200 text-gray-700 border border-gray-300 rounded-l-md hover:bg-primary hover:text-white"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaAngleLeft />
      </button>
      )}
      {Array.from({ length: totalPages }).map((_, index: number) => (
        <button
          type="button"
          key={uuidv4()}
          className={`px-3 py-1 ${
            currentPage === index + 1
              ? 'bg-primary text-white'
              : 'bg-white text-primary border border-primary dark:bg-dark'
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {currentPage !== totalPages && (
      <button
        type="button"
        className="px-3 py-1 bg-gray-200 text-gray-700 border border-gray-300 rounded-r-md hover:bg-primary hover:text-white"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaAngleRight />
      </button>
      )}
    </div>
  );
}

export default PageNavigation;
