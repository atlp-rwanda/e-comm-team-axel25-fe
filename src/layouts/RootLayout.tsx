import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import { SidebarDash } from '../components/Dashboard/SidebarDash';

export function RootLayout() {
  const location = useLocation();
  const hideSidebar = ['/login', '/register', '/dashboard/seller'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {!hideSidebar && <SidebarDash />}
      <main className="pt-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
