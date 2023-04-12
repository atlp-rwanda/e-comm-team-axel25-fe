import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '../../../tables/Table';
import { useGetProductsQuery } from '../../../../services';
import { Loader } from '../../../Loader';
import { TProduct } from '../../../../utils/schemas';

export function Product() {
  const { isLoading, error, data, refetch } = useGetProductsQuery();
  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, [refetch]);
  const thisSellersId = localStorage.getItem('id');
  if (isLoading) return <Loader />;
  if (error) {
    if (!error.data.verified && error.data.verified !== undefined) {
      navigate('/dashboard/seller/settings/2fa/success-route');
      return <div />;
    }
    return <div>Error: {error.data.message}</div>;
  }
  const products = data?.data;
  const filteredProducts = products?.filter(
    (product: TProduct) => product.sellerId === thisSellersId,
  );
  return <Table products={filteredProducts} />;
}
