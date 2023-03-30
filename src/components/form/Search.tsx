import React from 'react';

export function Search() {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="placeholder-slate-400 text-cyan-400 p-2 bg-cyan-400/5 border-[0.5px] border-cyan-400/30 rounded-md backdrop-blur-md focus:outline-none focus:ring-1 focus:border-cyan-400 transition"
    />
  );
}
