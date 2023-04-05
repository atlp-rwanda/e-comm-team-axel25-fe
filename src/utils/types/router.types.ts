import { ReactNode } from 'react';

export type RouteConfig = {
  path: string;
  element: ReactNode;
};

export type RouterFacadeProps = {
  routes: RouteConfig[];
};

export type BrowserRouterFacadeProps = {
  children: ReactNode;
};
