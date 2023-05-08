import React from 'react';
import { TProductsList } from '../pages';
import HomepageProduct from './shared/HomepageProduct';

export function ProductCategoryGroup({ productsGroup }: { productsGroup: TProductsList }) {
  return (
    <>
      <h1 className="text-3xl mt-4">{productsGroup.category}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {productsGroup.products.map(({ id, name, image }) => (
          <HomepageProduct id={id} key={id} name={name} image={image} />
        ))}
      </div>
    </>
  );
}
