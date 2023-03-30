import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

type SideBarContentProps = {
  category?: string;
  products?: string[];
};

export function SideBarContent({ category, products }: SideBarContentProps) {
  return (
    <div className="py-3 border-b border-b-gray-300">
      <ul className="">
        <h3 className="text-black font-semibold mb-1 px-6 text-lg">
          {category}
        </h3>
        {products?.map((product) => (
          <li
            key={product}
            className="flex items-center justify-between hover:bg-zinc-200 hover:text-black px-6 py-2 rounded-3xl cursor-pointer"
          >
            {product}
            <span>
              <FiChevronRight />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

SideBarContent.defaultProps = {
  category: 'Category',
  products: ['Product 1', 'Product 2', 'Product 3'],
};
