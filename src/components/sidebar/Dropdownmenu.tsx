import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

type DropdownMenuProps = {
  name: string;
  icon: IconType;
  menus: string[];
};

function DropdownMenu({ name, icon: Icon, menus }: DropdownMenuProps) {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      setSubMenuOpen(!subMenuOpen);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`ml-2 pt-3 items-center cursor-pointer duration-300 font-medium flex flex-row  dark:text-white dark:hover:text-primary hover:text-primary ${
          pathname.includes(name) && 'text-blue-600'
        }`}
        onClick={handleMenuClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <Icon size={23} className="mr-3" />
        <p className="mr-3">{name}</p>
        <FaChevronDown className={`${subMenuOpen && 'rotate-180'} duration-200`} />
      </button>
      <motion.ul
        animate={
          subMenuOpen
            ? {
              height: 'fit-content',
            }
            : {
              height: 0,
            }
        }
        className="flex flex-col pl-14 font-normal overflow-hidden"
      >
        {menus.map((menu) => (
          <li key={menu}>
            <NavLink to={`/${name}/${menu}`} className="bg-transparent capitalize dark:text-white dark:hover:text-primary hover:text-primary">
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
}

export default DropdownMenu;
