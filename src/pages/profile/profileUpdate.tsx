import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { BiImage, BiMap, BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../../features/authentication/services/getUser';
import { TProfileFieldValues, profileSchema } from '../../utils/schemas/profile.schem';
import { Button } from '../../components/shared';
import { InputField, Loader } from '../../components';
import { RootState } from '../../store';
import { Alert } from '../../components/ui/Alert';

export function ProfileUpdate() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  // const { userId } = useParams();
  const userId = useSelector((state: RootState) => state.auth.user.id);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated === false) {
    navigate('/login');
  }

  const [success, setSuccess] = useState<boolean>(false);
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm<TProfileFieldValues>({
    resolver: zodResolver(profileSchema),

  });

  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (data: TProfileFieldValues) => {
    setIsLoading(true);
    setError(null);

    // filter out empty values
    const filteredValues = Object.entries(data).reduce(
      (acc, [key, value]) => {
        if (value) {
          return {
            ...acc,
            [key as keyof TProfileFieldValues]: value,
          };
        }
        return acc;
      },
      {} as TProfileFieldValues,
    );

    try {
      setIsLoading(true);
      await updateUser({
        id: userId,
        body: filteredValues,
      }).unwrap()
        .then(() => {
          setSuccess(true);
          handleGoBack();
        })
        .catch(() => {
          setError('Nothing to update profile');
          setSuccess(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (e) {
      setIsLoading(false);
    }
    reset();
  };

  if (isLoading) return <Loader />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className="w-[300px] absolute right-0 top-20">{error && <Alert colorScheme="danger" closable message="error,profile not updated" />}</div>
      <div className="flex flex-col items-center space-y-6 py-10 bg-gray-100 dark:bg-dark">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Update Your Profile</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {success && <p className="text-green-500 mb-4">Profile updated successfully!</p>}

          <div className="flex flex-row flex-wrap justify-between">
            {/* Step 1 */}
            <div className="w-full md:w-5/12 mb-4 md:mb-0">
              <InputField
                register={register}
                id="surname"
                errors={errors}
                type="text"
                icon={BiUser}
                label="Surname"
              />

              <InputField
                register={register}
                id="given_name"
                type="text"
                errors={errors}
                icon={BiUser}
                label="Given Name"
              />

              <InputField
                register={register}
                id="province"
                errors={errors}
                type="text"
                icon={BiMap}
                label="Province"
              />
              <InputField
                register={register}
                id="district"
                errors={errors}
                type="text"
                icon={BiMap}
                label="District"
              />
            </div>

            {/* Step 2 */}
            <div className="w-full md:w-5/12">

              <InputField
                register={register}
                id="street"
                errors={errors}
                type="text"
                icon={BiMap}
                label="Street"
              />

              <InputField
                register={register}
                id="cell"
                errors={errors}
                type="text"
                icon={BiMap}
                label="Cell"
              />

              <InputField
                register={register}
                id="sector"
                errors={errors}
                type="text"
                icon={BiMap}
                label="Sector"
              />

              <InputField
                type="text"
                register={register}
                id="avatar"
                icon={BiImage}
                label="Picture URL"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              colorScheme="btn-secondary-outline"
              label="Back"
              onClick={handleGoBack}
            />
            <Button
              colorScheme="btn-primary"
              label="Update Profile"
              isSubmit
            />
          </div>
        </div>
      </div>
    </form>

  );
}
