import React from 'react';

export function Spiner() {
  return (
    <svg className="animate-spin h-5 w-5 text-gray-500" viewBox="0 0 24 24">
      <circle
        className="opacity-100"
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeDasharray="8"
        strokeDashoffset="-82"
      />
    </svg>
  );
}

export function SpinerButton() {
  return (
    <div className="w-full px-4 py-2 rounded border-[0.5px] border-white btn-secondary  backdrop-blur-sm col-span-1 flex justify-center items-center">
      <Spiner />
    </div>
  );
}
