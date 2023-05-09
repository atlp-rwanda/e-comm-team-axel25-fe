import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useHomeLogic } from '../../hooks';
import { Cart } from './Cart';

export function Sidebar() {
  const { handleToggleSideBar } = useHomeLogic();

  const sideBar = useSelector((state: RootState) => state.sideBar);

  return (
    <section>
      <Cart isOpen={sideBar.isOpen} onClose={handleToggleSideBar} />
    </section>
  );
}
