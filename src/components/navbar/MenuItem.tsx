'use client';

import React from 'react';
import { NavLinkFacade } from '../../lib';

type MenuItemProps = {
  label: string;
  path: string;
};

export default function MenuItem({ label, path }: MenuItemProps) {
  return (
    <button
      type="button"
      className="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-dark transition font-semibold border-b border-white shadow dark:border-primary w-full text-left"
    >
      <NavLinkFacade to={path}>{label}</NavLinkFacade>
    </button>
  );
}
