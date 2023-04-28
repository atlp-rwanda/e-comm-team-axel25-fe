import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type Props = {
  allowedRoles: string[];
};
export function RequireAuth({ allowedRoles }: Props) {
  const role = useSelector((state: RootState) => state.auth.user.role);

  if (!role) return <Navigate to="/login" />;

  if (!allowedRoles.includes(role)) return <Navigate to="/forbidden" />;

  return <Outlet />;
}
