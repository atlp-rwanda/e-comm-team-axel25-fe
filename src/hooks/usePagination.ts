import { SetStateAction, useState } from 'react';

export const usePagination = (itemsPerPage: number, data: string[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return {
    currentPage, totalPages, handlePageChange, paginatedData,
  };
};
