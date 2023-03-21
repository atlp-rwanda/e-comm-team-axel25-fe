import { Home, Login } from '../pages';

type routeConfigs = {
  path: string;
  element: React.ReactElement;
};

export const routes: routeConfigs[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
