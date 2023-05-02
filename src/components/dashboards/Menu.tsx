import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../shared';
import { mergeClassNames } from '../../lib';

const sellerMenuLinks = [
  {
    name: 'Overview',
    path: '/dashboard/seller',
  },
  {
    name: 'Products',
    path: 'product',
  },
  {
    name: 'Orders',
    path: 'orders',
  },
  {
    name: 'Shipping',
    path: 'shipping',
  },
  {
    name: 'Settings',
    path: 'settings',
  },
];
export function Menu() {
  const navLinkStyles = mergeClassNames({
    'active:bg-primary flex items-center p-3 w-full text-sm font-medium text-gray-700 hover:bg-gray-100 dark:hover:bg-dark hover:text-secondary dark:hover:text-secondary dark:text-white':
      true,
  });

  return (
    <section className="hidden sm:block">
      <header>
        <NavLink to="/dashboard/seller">
          <h2 className="px-4 py-2 text-2xl font-bold text-gray-700 dark:text-white">
            Seller Central
          </h2>
        </NavLink>
      </header>
      <Link to="/dashboard/seller/product/create" className="w-full">
        <Button label="Create product" colorScheme="btn-secondary-outline" />
      </Link>
      <nav className="sticky flex flex-col items-start mt-4 overflow-hidden font-medium text-gray-700 bg-white rounded-lg shadow top-20 dark:text-white dark:bg-dark2">
        {sellerMenuLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => (isActive
              ? 'text-secondary p-3 bg-gray-100 dark:bg-dark w-full'
              : navLinkStyles)}
            end
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </section>
  );
}
