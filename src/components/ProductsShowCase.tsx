import React from 'react';
import { Link } from 'react-router-dom';

import { TProduct } from '../utils/schemas';

type Props = {
  product: TProduct;
};

export function ProductsShowCase({ product }: Props) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="relative space-y-6 overflow-hidden rounded-lg group">
        <img
          className="object-cover object-top w-full mx-auto transition duration-500 h-96 grayscale group-hover:scale-105 group-hover:grayscale-0"
          src={product.images}
          alt={product.name}
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute inset-x-0 bottom-0 px-8 py-6 mt-auto transition duration-300 ease-in-out translate-y-24 bg-light/50 backdrop-blur-sm h-max group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold text-white dark:text-gray-700">
              {product.name}
            </h4>
            <span className="block text-sm text-gray-800">
              {product.category}
            </span>
          </div>
          <p className="mt-8 text-gray-900">{product.description}</p>
        </div>
      </div>
    </Link>
  );
}
