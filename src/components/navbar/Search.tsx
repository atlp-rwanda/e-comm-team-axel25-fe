'use client';

import React from 'react';
import { BiSearch } from 'react-icons/bi';

export function Search() {
  return (
    <div className="w-full py-2 transition border rounded-md shadow-sm cursor-pointer dark:border-primary md:w-1/2 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="px-6 text-sm font-semibold dark:text-white">Search</div>
        <div className="flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="p-2 text-white rounded dark:text-black bg-primary">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
