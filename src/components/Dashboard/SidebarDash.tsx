import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillPersonFill } from 'react-icons/bs';
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
    image: `${user.avatar}` || <BsFillPersonFill size={50} />,
    name: 'Unkwon name',
    role: 'user',
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
