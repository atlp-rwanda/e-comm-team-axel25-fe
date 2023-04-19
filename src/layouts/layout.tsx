import React, { ReactNode } from 'react';
import { Navbar } from '../components';

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="pb-20 pt-28 bg-light dark:bg-dark">{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};
