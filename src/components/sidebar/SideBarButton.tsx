import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useHomeLogic } from '../../hooks';

export function SideBarButton() {
  const { handleToggleSideBar } = useHomeLogic();
  return (
    <div className="top-0 left-0 mr-2 border-r-2">
      <button
        onClick={handleToggleSideBar}
        type="button"
        className="flex flex-col items-center justify-center gap-1 mx-5 text-secondary"
      >
        <FiMenu size={30} />
      </button>
    </div>
  );
}
