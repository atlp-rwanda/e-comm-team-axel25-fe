import React from 'react';
import { Button } from '../shared';
import { mergeClassNames } from '../../lib';
import { UserMenu } from '../shared/navbar/UserMenu';
import { useSideBarLogic } from '../../hooks';

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SideBarProps) {
  const { containerRef, handleClose, showSideBar } = useSideBarLogic(
    isOpen,
    onClose,
  );

  const sideBarAnimationClassNames = mergeClassNames({
    'duration-300 w-[80%] md:w-96 h-full bg-light dark:bg-dark2 border border-primary':
      true,
    'opacity-100 -translate-x-0': showSideBar,
    'opacity-0 -translate-x-full': !showSideBar,
  });

  if (!isOpen) return null;

  return (
    <aside className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80">
      <div className="relative w-full h-full">
        <div ref={containerRef} className={sideBarAnimationClassNames}>
          <header className="flex items-center justify-center w-full gap-2 px-6 py-2 text-black shadow-inner backdrop-blur-sm bg-primary/10 dark:text-white">
            <UserMenu />
          </header>
          <div className="absolute top-1 left-[82%] md:left-96 w-10 h-10 ml-2">
            <Button
              onClick={handleClose}
              label="X"
              colorScheme="btn-danger-outline"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
