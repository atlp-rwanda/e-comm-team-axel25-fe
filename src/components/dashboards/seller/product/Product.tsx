import React from 'react';
import { useSelector } from 'react-redux';

import { Table } from '../../../tables/Table';
import { useGetProductsQuery } from '../../../../services';
import { Loader } from '../../../Loader';
import { RootState } from '../../../../store';

export function Product() {
  const { isLoading, error, data } = useGetProductsQuery();
  const sellerId = useSelector((state: RootState) => state.auth.user.id);
  if (isLoading) return <Loader />;

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const products = data?.data;

  // const thisSellersProducts = products?.filter(
  //   (product) => product.sellerId === sellerId,
  // );

  return <Table products={products} />;
}
