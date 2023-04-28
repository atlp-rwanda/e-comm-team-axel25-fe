import React from 'react';

export function Loader() {
  return (
    <div className="grid place-items-center">
      <img
        src="/spinning-circles.svg"
        alt="Loader svg"
        className="w-16 h-16 text-indigo-500"
      />
    </div>
  );
}
