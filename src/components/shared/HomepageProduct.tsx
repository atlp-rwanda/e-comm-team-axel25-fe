import React from 'react';
import { Link } from 'react-router-dom';
import { TProduct } from '../../pages';

function HomepageProduct({ name, image, id }: TProduct) {
  return (
    <div
      className=" bg-white p-3
  "
    >
      <p className="text-xl">{name}</p>
      <img src={image} alt="product" className="w-full object-cover" />
      <Link to={`/product/${id}`} className="text-green-900">
        shop now
      </Link>
    </div>
  );
}

export default HomepageProduct;
