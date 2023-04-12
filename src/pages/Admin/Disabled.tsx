import React, { useEffect } from 'react';
import { UserTable } from '../../components/tables/UserTable';
import { Loader } from '../../components';
import { useGetAllUsersQuery } from '../../services/user';

export function Disabled() {
  const {
    isLoading, error, data, refetch,
  } = useGetAllUsersQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) return <Loader />;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  const users = data?.data;
  const filteredUsers = users?.filter((user) => user.status === 'Disabled');
  return <UserTable users={filteredUsers} />;
}
