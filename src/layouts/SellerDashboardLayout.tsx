import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../components/Container';
import { Menu } from '../components/dashboards';

export function SellerDashboardLayout() {
  return (
    <Container>
      <section className="grid grid-flow-row grid-cols-1 gap-5 pb-10 sm:grid-cols-5">
        <Menu />
        <main
          id="section-content"
          className="flex justify-center col-span-2 sm:col-span-4"
        >
          <Outlet />
        </main>
      </section>
    </Container>
  );
}
