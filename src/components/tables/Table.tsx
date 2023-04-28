import React from 'react';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableSearch } from './TableSearch';
import { TableDropDown } from './TableDropDown';
import { TProduct } from '../../utils/schemas';

export type ProductTableProps = {
  products: TProduct[] | undefined;
};

export function Table({ products }: ProductTableProps) {
  return (
    <section className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
        <TableDropDown />
        <TableSearch />
      </header>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHead />

        <TableBody products={products} />
      </table>
      {!products?.length && (
        <div className="w-full my-10">
          <h1 className="font-bold text-xl !text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600">
            No products🐒
          </h1>
        </div>
      )}
    </section>
  );
}
