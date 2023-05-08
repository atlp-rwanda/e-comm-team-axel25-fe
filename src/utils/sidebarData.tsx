import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  FaSignOutAlt,
  FaTable,
  FaRegSun,
  FaRegUser,
  FaShoppingCart,
  FaHouseUser,
  FaTh,
  FaBullhorn,
  FaRocketchat,
} from 'react-icons/fa';

export const subMenuList = [
  {
    name: 'Product',
    icon: FaTable,
    menus: ['Add Product', 'Product List'],
  },
  {
    name: 'Orders',
    icon: FaShoppingCart,
    menus: ['All Orders', 'Concered Orders'],
  },
  {
    name: 'Users',
    icon: FaHouseUser,
    menus: ['All users', 'Buyer', 'Seller', 'Dissabled user'],
  },
];
export const datadown = [
  {
    icon: FaRegSun,
    name: 'Settings',
  },
  {
    icon: FaRegUser,
    name: 'Account',
  },
  {
    icon: FaSignOutAlt,
    name: 'Logout',
  },
];

export const menuItems = [
  {
    to: '/dashboard',
    icon: FaTh,
    label: 'Dashboard',
  },
  {
    to: '/notification',
    icon: FaBullhorn,
    label: 'Notification',
  },
  {
    to: '/messages',
    icon: FaRocketchat,
    label: 'Messages',
  },
];
