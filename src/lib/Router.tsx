import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { NotFound } from '../pages';

type LinkFacadeProps = LinkProps & {
  // add any other props you want to pass to the Link component
};

type RouteConfig = {
  path: string;
  element: React.ReactNode;
  // add any other route props here
};

type RouterFacadeProps = {
  routes: RouteConfig[];
  // add any other props that the underlying Routes component needs here
};

export const RouterFacade = ({ routes, ...props }: RouterFacadeProps) => {
  return (
    <BrowserRouter>
      <Routes {...props}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

// you can also create facades for other react-router components like NavLink, Link etc.
// e.g
export const LinkFacade = ({ to, children, ...props }: LinkFacadeProps) => {
  return (
    <RouterLink to={to} {...props}>
      {children}
    </RouterLink>
  );
};
