import React, { ReactNode } from 'react';
import { Navbar, Footer } from '../components';

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-36">{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};
