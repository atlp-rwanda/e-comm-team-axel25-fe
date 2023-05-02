import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
