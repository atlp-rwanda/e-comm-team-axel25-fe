import React from 'react';
import { IconType } from 'react-icons';
import { FiChevronRight } from 'react-icons/fi';

type SideBarItemProps = {
  label: string;
  icon: IconType;
  description: string;
};

export function SideBarItem({
  label,
  icon: Icon,
  description,
}: SideBarItemProps) {
  return (
    <div className="py-3 text-black border-b border-b-gray-300 dark:text-white">
      <ul>
        <header className="flex items-center ml-5">
          <Icon size={20} />
          <h3 className="px-6 mb-1 text-lg font-semibold ">{label}</h3>
        </header>
        <li className="flex items-center px-6 py-2 space-x-2 text-sm font-medium tracking-wide transition cursor-pointer hover:bg-gray-200">
          <span>{description}</span>
          <FiChevronRight size={20} />
        </li>
        {/* TODO: Render at least the first 3 products of the category */}
      </ul>
    </div>
  );
}
