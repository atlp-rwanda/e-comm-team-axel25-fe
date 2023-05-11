import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../shared';
import { UserTableProps } from './UserTable';
import {
  useAssignRoleMutation,
  useDisableUserMutation,
} from '../../services/user';
import { InputField, Modal } from '../../components';
import { TRoleSchemaValue } from '../../utils/schemas/role.schema';
import SmallLoadingSpinner from '../shared/SmallLoadingSpinner';

export function UserTableBody({ users }: UserTableProps) {
  const [isAssigning, setIsAssigning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState('');
  const [isAssigningLoading, setIsAssigningLoading] = useState(false);
  const [isDisablingError, setIsDisablingError] = useState(false);
  const [disablingError, setDisablingError] = useState('');

  const [disableUser] = useDisableUserMutation();
  const [assignRole] = useAssignRoleMutation();
  const { register, handleSubmit } = useForm<TRoleSchemaValue>();
  const navigate = useNavigate();

  const onCancelHandler = () => {
    navigate(0);
  };

  const setRoleHandler = (role: TRoleSchemaValue) => {
    setDisabled(true);
    setIsAssigningLoading(true);
    assignRole({ role, userId })
      .unwrap()
      .then(() => {
        setIsAssigningLoading(false);
        navigate(0);
      })
      .catch((err) => {
        setIsAssigningLoading(false);
        setDisabled(false);
        setError(err.data.message);
      });
  };

  const disableHandler = (id: string) => () => {
    setIsLoading(id);
    setIsDisabled(true);
    disableUser(id)
      .unwrap()
      .then((response) => {
        setIsLoading('');
        setIsDisabled(false);

        if (response) navigate(0);
      })
      .catch((err) => {
        setIsLoading('');
        setIsDisabled(false);
        setIsDisablingError(true);
        setDisablingError(err.data.message);
      });
  };

  const assignRoleHandler = (id: string) => () => {
    setIsAssigning(true);
    setUserId(id);
  };

  return (
    <tbody>
      {!isAssigning ? (
        users?.map((user) => (
          <tr
            key={user?.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <label htmlFor="checkbox-table-search-1">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="sr-only">checkbox</span>
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-2 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="object-cover w-12 h-12 rounded"
                src={user?.avatar}
                alt="Something"
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{`${user.given_name} ${user.surname}`}</div>
                <div className="font-normal text-gray-500">{user?.role}</div>
              </div>
            </th>
            <td className="px-2 py-4">
              <span className="px-4 py-2 font-bold text-black border rounded-md shadow-sm dark:text-white">
                {user?.email}
              </span>
            </td>
            <td className="px-2 py-4">
              <span className="px-4 py-2 font-bold text-black border rounded-md shadow-sm dark:text-white">
                {user?.status}
              </span>
            </td>
            <td className="flex gap-2 px-2 py-4">
              <div className="grid grid-cols-2 gap-5">
                {isLoading === user.id ? (
                  <SmallLoadingSpinner />
                ) : (
                  <div className="col-span-1">
                    <Button
                      key={user.id}
                      colorScheme="btn-primary-outline"
                      label="Disable"
                      disabled={isDisabled}
                      onClick={disableHandler(user.id)}
                    />
                  </div>
                )}

                <Button
                  colorScheme="btn-warning-outline"
                  label="Set role"
                  onClick={assignRoleHandler(user.id)}
                />
              </div>
            </td>
          </tr>
        ))
      ) : (
        <Modal
          isOpen
          disabled={disabled}
          onClose={onCancelHandler}
          actionColorScheme="btn-secondary"
          onSubmit={onCancelHandler}
          title="Assigning role to user"
          body={(
            <>
              {error && <p>Error: {error}</p>}
              {isAssigningLoading && <SmallLoadingSpinner />}
              {!error && !isAssigningLoading && (
                <form onSubmit={handleSubmit(setRoleHandler)}>
                  <InputField
                    id="role"
                    label="Enter role id"
                    type="tel"
                    register={register}
                    required
                  />
                  <Button
                    isSubmit
                    label="Assign Role"
                    colorScheme="btn-primary"
                  />
                </form>
              )}
            </>
          )}
          actionLabel="Cancel"
        />
      )}
      {isDisablingError && (
        <Modal
          isOpen
          disabled={disabled}
          onClose={onCancelHandler}
          actionColorScheme="btn-secondary"
          onSubmit={onCancelHandler}
          title="Error while disabling User"
          body={<>Error: {disablingError}</>}
          actionLabel="Back"
        />
      )}
    </tbody>
  );
}
