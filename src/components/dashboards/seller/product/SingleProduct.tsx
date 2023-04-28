import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetProductQuery } from '../../../../services';
import { Loader } from '../../../Loader';
import { NotFound } from '../../../../pages';
import { Button } from '../../../shared';
import { ProductCard } from '../../../products/ProductCard';
import { TProduct } from '../../../../utils/schemas';

export function SingleProduct({ id }: { id: string }) {
  const { isLoading, error, data } = useGetProductQuery(id);
  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (data === undefined) return <div>Product not found</div>;
  const product = data.data as TProduct;

  if (id === undefined) return <NotFound />;
  return (
    <div>
      <div className="max-w-[100px] my-2">
        <Button
          colorScheme="btn-warning-outline"
          label="Go Back"
          onClick={() => navigate(-1)}
        />
      </div>
      <ProductCard
        category={product.category}
        description={product.description}
        image={product.images}
        price={product.price}
        title={product.name}
        rating={product.quantity}
      />
    </div>
  );
}
