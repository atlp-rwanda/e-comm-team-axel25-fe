import React from 'react';
import { useParams } from 'react-router-dom';
import { Update } from '../../components/dashboards';
import { NotFound } from '../NotFound';
import { useGetProductQuery } from '../../services';
import { Loader } from '../../components';
import { TProduct } from '../../utils/schemas';

export function UpdateProduct() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetProductQuery(id);

  if (isLoading) return <Loader />;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (data === undefined) return <div>Product not found</div>;
  const product = data.data as TProduct;

  if (id === undefined) return <NotFound />;

  return <Update product={product} />;
}
