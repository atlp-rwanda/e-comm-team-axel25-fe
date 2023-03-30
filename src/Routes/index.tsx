import React, { ReactElement } from 'react';
import { FiAlertTriangle, FiHome, FiUser } from 'react-icons/fi';
import { Home, Login, NotFound } from '../pages';

type routeConfigs = {
  name: string;
  path: string;
  element: ReactElement;
  icon: ReactElement;
};

export const routes: routeConfigs[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
    icon: <FiHome />,
  },
  {
    name: 'Login',
    path: '/login',
    element: <Login />,
    icon: <FiUser />,
  },
  {
    name: '404',
    path: '*',
    element: <NotFound />,
    icon: <FiAlertTriangle />,
  },
];
