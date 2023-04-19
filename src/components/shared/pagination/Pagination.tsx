import React, { useState } from 'react';
import Pagination from './PaginationComp';
import { data } from '../../../utils/DataToDisplay';

type Props = {
  itemsPerPage: number;
};

function PaginatedData({ itemsPerPage }: Props) {
  return (
    <div className="m-52">
      <Pagination itemsPerPage={itemsPerPage} data={data} />
    </div>
  );
}

export default PaginatedData;
