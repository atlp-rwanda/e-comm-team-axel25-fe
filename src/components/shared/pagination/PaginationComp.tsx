import React from 'react';
import { usePagination } from '../../../hooks';

import PageList from './PageList';
import PageNavigation from './PageNavigation';

type Props = {
  itemsPerPage: number;
  data: string[];
};

function Pagination({ itemsPerPage, data }: Props) {
  const {
    currentPage, totalPages, handlePageChange, paginatedData,
  } = usePagination(
    itemsPerPage,
    data,
  );

  return (
    <>
      <PageList data={paginatedData} />
      <PageNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default Pagination;
