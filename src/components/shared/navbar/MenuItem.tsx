import React from 'react';

type MenuItemProps = {
  onClick: () => void;
  label: string;
};

export function MenuItem({ onClick, label }: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-3 font-semibold text-left transition dark:text-white hover:bg-neutral-100 dark:hover:bg-primary/50 hover:text-primary"
    >
      {label}
    </button>
  );
}
