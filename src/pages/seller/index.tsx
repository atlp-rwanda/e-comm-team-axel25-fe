import React from 'react';
import { Overview } from '../../components/dashboards';

export function SellerCentral() {
  return (
    <section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
      <Overview />
      <Overview />
      <Overview />
      <Overview />
      <Overview />
      <Overview />
    </section>
  );
}
