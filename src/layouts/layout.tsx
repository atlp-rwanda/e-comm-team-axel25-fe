import React, { ReactNode } from 'react';
import { Navbar } from '../components';

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};
