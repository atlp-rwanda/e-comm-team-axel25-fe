import React from 'react';
import { Outlet } from 'react-router-dom';

export function Home() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
