import React from 'react';
import { IconType } from 'react-icons';
import { Home, Login } from '../pages';

type routeConfigs = {
  path: string;
  name: string;
  element: React.ReactElement;
  icon: IconType;
};

export const routes: routeConfigs[] = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    icon: Home,
  },
  {
    path: '/login',
    name: 'Login',
    element: <Login />,
    icon: Login,
  },
];
