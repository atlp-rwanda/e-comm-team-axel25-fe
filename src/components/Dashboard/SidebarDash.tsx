import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useHomeLogic } from '../../hooks';
import { Sidebar } from '../sidebar/Sidebar';
import { SideBarButton } from '../sidebar';
import { datadown, subMenuList, menuItems } from '../../utils/sidebarData';

export function SidebarDash() {
  const { handleToggleSideBar } = useHomeLogic();

  const sideBar = useSelector((state: RootState) => state.sideBar);

  const user = useSelector((state: RootState) => state.auth.user);

  const profileData = {
    image: user.avatar ? <img src={user.avatar} alt="Profile" className="w-[50px] h-[50px] rounded-full" /> : '',
    name: user.given_name !== null && user.given_name !== undefined ? user.given_name : '',
    role: user.role !== null && user.role !== undefined ? user.role : '',
  };

  return (
    <>
      <SideBarButton />
      <Sidebar
        isOpen={sideBar.isOpen}
        onClose={handleToggleSideBar}
        headerProfile={profileData}
        menuItems={menuItems}
        footerData={datadown}
        dropDown={{ title: 'Features', data: subMenuList }}
      />
    </>
  );
}
