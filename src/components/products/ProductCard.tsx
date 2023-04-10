import React from 'react';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { Container } from '../Container';
import { ProductCardProps } from '../../utils/types';

export function ProductCard({
  title,
  category,
  description,
  images,
  price,
  rating,
}: ProductCardProps) {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto ">
        <div className="grid items-start grid-cols-1 gap-6 sm:grid-cols-3">
          <ProductImage images={images} />
          <ProductInfo
            title={title}
            category={category}
            description={description}
            price={price}
            rating={rating}
          />
        </div>
      </div>
    </Container>
  );
}
