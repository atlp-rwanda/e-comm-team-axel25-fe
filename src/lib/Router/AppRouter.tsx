import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { NotFound } from '../../pages';

type LinkFacadeProps = LinkProps & {
  // add any other props you want to pass to the Link component
  /**
   * The additional props in the 'LinkFacadeProps' type would depend on your specific 'use case' for the 'LinkFacade' component.
   * You can add 'any props' that 'you want to pass' to 'the Link' component from the 'LinkFacade' component.
   * For example, if you want to pass a 'className' prop to the Link component,
   * you can add it to the LinkFacadeProps type like this:
   *
   * type LinkFacadeProps = LinkProps & {
   *    className?: string;
   *  };
   *
   * Then, you can pass the className prop to the Link component like this:
   * export const LinkFacade = ({ to, children, className, ...props }: LinkFacadeProps) => {
   *    return (
   *      <RouterLink to={to} className={className} {...props}>
   *        {children}
   *      </RouterLink>
   *    );
   *  };
   *
   * Please note the way I have extract  'className' prop from passed object as well.
   */
};

export type RouteConfig = {
  path: string;
  element: React.ReactNode;
  // add any other route props here
};

export type RouterFacadeProps = {
  routes: RouteConfig[];
  // add any other props that the underlying Routes component needs here
};

export const AppRouter = ({ routes }: RouterFacadeProps) => {
  const routeConfigs = routes.filter((route) => route.element !== null);

  return (
    <Router>
      <Routes>
        {routeConfigs.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
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