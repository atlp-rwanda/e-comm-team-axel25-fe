import React, { ReactNode } from 'react';
import { MainSection } from '.';
import { Navbar } from '../components';

type LayoutProps = {
  children?: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <div className="flex h-full">
          <MainSection>{children}</MainSection>
        </div>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};
