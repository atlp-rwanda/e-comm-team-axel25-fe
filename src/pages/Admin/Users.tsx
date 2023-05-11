import React, { useEffect } from 'react';
import { UserTable } from '../../components/tables/UserTable';
import { Loader } from '../../components';
import { useGetAllUsersQuery } from '../../services/user';

export function Users() {
  const {
    isLoading, error, data, refetch,
  } = useGetAllUsersQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) return <Loader />;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  const users = data?.data;
  return <UserTable users={users} />;
}
