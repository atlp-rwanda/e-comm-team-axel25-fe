import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useHomeLogic } from '../../hooks';

export function SideBarButton() {
  const { handleToggleSideBar } = useHomeLogic();
  return (
    <div className="fixed top-[75px] lg:top-[90px] left-0 border-r-2 z-30">
      <button
        onClick={handleToggleSideBar}
        type="button"
        className="flex flex-col items-center justify-center gap-1 mx-2 text-secondary"
      >
        <FiMenu size={30} />
      </button>
    </div>
  );
}
