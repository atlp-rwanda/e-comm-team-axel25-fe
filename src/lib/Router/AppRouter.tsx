import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  LinkProps,
  NavLink,
  NavLinkProps,
} from 'react-router-dom';
import { NotFound } from '../../pages';
import { BrowserRouterFacadeProps, RouterFacadeProps } from '../../utils/types';

/**
 * AppRouter
 * This is a facade component for the react-router-dom Router component.
 * @param routes - The routes to render.
 * @returns A Router component.
 * @example
 * <AppRouter routes={routes} />
 */

export function AppRouter({ routes }: RouterFacadeProps) {
  const routeConfigs = routes.filter((route) => route.element !== null);

  return (
    <Routes>
      {routeConfigs.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

/**
 * Link
 * This is a facade component for the react-router-dom Link component.
 * @param to - The path to navigate to.
 * @param children - The children of the Link component.
 * @returns A Link component.
 * @example
 * <LinkFacade to="/login">Login</LinkFacade>
 */

export function LinkFacade({ to, children }: LinkProps) {
  return <Link to={to}>{children}</Link>;
}

/**
 * NavLink
 * This is a facade component for the react-router-dom NavLink component.
 * @param to - The path to navigate to.
 * @param className - The class name of the NavLink component.
 * @param children - The children of the NavLink component.
 * @returns A NavLink component.
 * @example
 * <NavLinkFacade to="/login" className="text-blue-500">Login</NavLinkFacade>
 */

export function NavLinkFacade({ to, className, children }: NavLinkProps) {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
}

/**
 * BrowserRouter
 * This is a facade component for the react-router-dom BrowserRouter component.
 * @param children - The children of the BrowserRouter component.
 * @returns A BrowserRouter component.
 * @example
 * <BrowserRouterFacade>
 * <Navbar />
 * <AppRouter routes={routes} />
 * </BrowserRouterFacade>
 */

export function BrowserRouterFacade({ children }: BrowserRouterFacadeProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
