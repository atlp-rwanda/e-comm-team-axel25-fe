import React, { useEffect } from 'react';
import { Table } from '../../../tables/Table';
import { useGetProductsQuery } from '../../../../services';
import { Loader } from '../../../Loader';

export function Product() {
  const {
    isLoading, error, data, refetch,
  } = useGetProductsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);
  const thisSellersId = localStorage.getItem('id');
  if (isLoading) return <Loader />;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  const products = data?.data;
  const filteredProducts = products?.filter((product) => product.sellerId === thisSellersId);
  return <Table products={filteredProducts} />;
}
