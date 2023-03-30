import React, { ReactNode } from 'react';
import { Navbar, Footer } from '../components';

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};
