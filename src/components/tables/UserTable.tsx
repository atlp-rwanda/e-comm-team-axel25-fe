import React from 'react';
import { TableSearch } from './TableSearch';
import { TableDropDown } from './TableDropDown';
import { UserTableBody } from './UserTableBody';
import { TUser } from '../../utils/schemas/user.schema';
import { UserTableHead } from './UserTableHead';

export type UserTableProps = {
  users: TUser[] | undefined;
};

export function UserTable({ users }: UserTableProps) {
  return (
    <section className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
        <TableDropDown />
        <TableSearch />
      </header>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <UserTableHead />

        <UserTableBody users={users} />
      </table>
      {!users?.length && (
        <div className="w-full my-10">
          <h1 className="font-bold text-xl !text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600">
            No Users Yet!
          </h1>
        </div>
      )}
    </section>
  );
}
