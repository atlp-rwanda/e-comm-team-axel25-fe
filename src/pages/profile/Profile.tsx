import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../../features/authentication/services/getUser';
import profileImage from '../../../public/images/images.jpeg';
import sniping from '../../../public/spinning-circles.svg';
import { RootState } from '../../store';

export function Profile() {
  const { userId } = useParams();
  const id = useSelector((state: RootState) => state.auth.user.id);

  const {
    data: user, error, isLoading, refetch,
  } = useGetUserQuery(id);
  useEffect(() => {
    refetch();
  }, [refetch]);

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated === false) {
    navigate('/login');
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <img src={sniping} alt="" />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching user</div>;
  }

  const {
    given_name, surname, street, email, avatar, cell, district, province, role, sector,
  } = user.data;
  localStorage.setItem('given_name', given_name);
  localStorage.setItem('surname', surname);
  localStorage.setItem('avatar', avatar);
  return (
    <div className="h-full flex justify-center items-center mb-3 dark:bg-dark dark:text-white">
      <div className="profile-container w-full max-w-3xl bg-white rounded-lg shadow-xl flex flex-col sm:flex-row space-y-6 sm:space-y-0 justify-between dark:  dark:bg-gray-800 dark:border-white p-3 ">
        <div className="flex flex-col pl-3 sm:w-1/2">
          {avatar ? (
            <img src={avatar} alt="" className="h-60 w-60 object-cover rounded-full" />
          ) : (
            <img src={profileImage} alt="" className="h-60 w-60 object-cover rounded-full" />
          )}
          <h1 className="text-3xl font-bold my-3">
            {given_name} {surname}
          </h1>
          <div className="flex items-center space-x-2">
            <p className=""><strong>Email:</strong> {email}</p>
            <p className=""><strong>Role:</strong> {role}</p>
          </div>
        </div>
        <hr className="sm:hidden" />
        <div className="bottom-portion p-6 flex flex-col sm:w-1/2 space-y-6">
          <div className="user-profile-info flex flex-col space-y-2 dark:text-gray-300">
            <h1 className="text-3xl font-bold">Personal Address</h1>
            <p className=""><strong>Province:</strong> {province}</p>
            <p className=""><strong>District:</strong> {district}</p>
            <p className=""><strong>Sector:</strong>  {sector}</p>
            <p className=""><strong>Cell:</strong>  {cell}</p>
            <p className=""><strong>Street:</strong>  {street}</p>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="flex items-center justify-center rounded-full dark:text-gray-300 dark:hover:text-cyan-500 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-1/2 focus:ring-gray-500"
              onClick={() => navigate(`/profile/edit/${userId}`)}
            >
              <FaEdit size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
