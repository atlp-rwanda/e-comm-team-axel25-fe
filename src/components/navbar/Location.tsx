import React from 'react';
import { FiMapPin } from 'react-icons/fi';

export default function Location() {
  return (
    <div className="hidden mdl:inline-flex">
      <FiMapPin stroke="gold" />
      <p className="text-black dark:text-white text-sm font-light flex flex-col">
        Deliver to <span className="text-primary font-bold -mt-1">Kigali</span>
      </p>
    </div>
  );
}
