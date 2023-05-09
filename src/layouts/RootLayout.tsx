import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import { Sidebar } from '../components/cart/Sidebar';

export function RootLayout() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('token');
  const isSupposedToBeVisible = ![
    '/login',
    '/register',
    '/dashboard/seller',
  ].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {isLoggedIn && isSupposedToBeVisible && <Sidebar />}
      <main className="pt-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
