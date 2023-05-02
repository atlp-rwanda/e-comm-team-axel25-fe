import React from 'react';
import { useParams } from 'react-router-dom';
import { NotFound } from '../NotFound';
import { SingleProduct } from '../../components/dashboards';

export function ProductDetails() {
  const { id } = useParams();
  if (id === undefined) return <NotFound />;

  return <SingleProduct id={id} />;
}
