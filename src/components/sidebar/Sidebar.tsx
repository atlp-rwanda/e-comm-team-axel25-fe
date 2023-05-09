import React from 'react';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { BiUserMinus } from 'react-icons/bi';
import Profile from './profile';
import { SidebarFooter } from './SidebarFooter';
import { mergeClassNames } from '../../lib';
import { useSideBarLogic } from '../../hooks';
import { SidebarMenuItem, DropDownsList } from './SidebarMenuItem';
import { RootState } from '../../store';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  headerProfile: { image: JSX.Element|string; name: string; role: string };
  menuItems: Array<{ to: string; icon: IconType; label: string; className?: string }>;
  dropDown: {
    title: string;
    data: { name: string; icon: IconType; menus: string[] }[];
  };
  footerData: Array<{ name: string; icon: React.ElementType }>;
};

export function Sidebar({
  isOpen,
  onClose,
  headerProfile,
  menuItems,
  dropDown,
  footerData,
}: Props) {
  const { containerRef, handleClose, showSideBar } = useSideBarLogic(isOpen, onClose);

  const sharedStyles = 'p-2 flex items-center md:cursor-pointer duration-300 font-medium flex-row dark:text-white dark:hover:text-primary hover:text-primary';
  const sideBarAnimationClassNames = mergeClassNames({
    ' duration-300 w-[70%] md:w-96 h-[100vh] bg-light dark:bg-dark2 border border-primary': true,
    'opacity-100 -translate-x-0': showSideBar,
    'opacity-0 -translate-x-full': !showSideBar,
  });
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isOpen) return null;

  return (
    <aside className="fixed top-[69px] left-0 z-40 w-full h-full bg-black/80">
      <div className="relative">
        <div ref={containerRef} className={sideBarAnimationClassNames}>
          <header className="flex items-center justify-center w-full px-6 py-2 text-black shadow-inner backdrop-blur-sm bg-primary/10 dark:text-white">
            <Profile
              image={isAuthenticated ? headerProfile.image : <BiUserMinus className="w-10 h-10" />}
              name={isAuthenticated ? headerProfile.name : 'Not logged in'}
              role={isAuthenticated ? headerProfile.role : ''}
            />
            <div className="absolute top-6 left-[90%] md:left-[82%] w-10 h-10 ml-2">
              <button type="button" onClick={handleClose}>
                <FaTimes />
              </button>
            </div>
          </header>

          <div className="m-5 overflow-y-auto max-h-[58vh]">
            {menuItems.map((item) => (
              <SidebarMenuItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                className={sharedStyles}
              />
            ))}
            <DropDownsList title={dropDown.title} data={dropDown.data} />
          </div>
          <footer className="ml-8">
            <SidebarFooter data={footerData} />
          </footer>
        </div>
      </div>
    </aside>
  );
}
