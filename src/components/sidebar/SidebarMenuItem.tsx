import React from 'react';

import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import SubMenu from './Dropdownmenu';

type props = {
    to: string;
    icon: IconType;
    label: string;
    className: string;
}

export function SidebarMenuItem({
  to, icon: Icon, label, className,
}:props) {
  return (

    <ul className="opacity-60 dark:opacity-75 flex flex-col
    font-medium"
    >
      <li>
        <NavLink to={to} className={className}>
          <Icon size={23} className="mr-3" />
          {label}
        </NavLink>
      </li>
    </ul>
  );
}

type prop = {
  title: string
  data: { name: string;
    icon: IconType;
    menus: string[]}[]
}
export function DropDownsList({ title, data }:prop) {
  return (
    <div className="border-y-2  py-5 border-slate-300">
      <small className="text-slate-500 mb-1 pl-3">
        {title}
      </small>
      {
      data?.map((menu) => (
        <div key={menu.name} className=" flex flex-col my-1 opacity-60 ">
          <SubMenu name={menu.name} icon={menu.icon} menus={menu.menus} />
        </div>
      ))
      }
    </div>
  );
}
