import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { FaRegBell } from 'react-icons/fa';
import {
  useGetAllNotificationsQuery,
  useReadAllNotificationsMutation,
  useReadNotificationMutation,
} from './services/notifications';

export function NotificationPane() {
  const { data, refetch } = useGetAllNotificationsQuery();
  const [readNotification] = useReadNotificationMutation();
  const [readAllNotifications] = useReadAllNotificationsMutation();

  const handleNotificationRead = (id: string) => {
    readNotification(id)
      .unwrap()
      .then(() => refetch());
  };
  const handleReadAllNotifications = () => {
    readAllNotifications(null)
      .unwrap()
      .then(() => refetch());
  };

  const notifications = data?.data;
  const notificationsLength = notifications?.length;

  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current
        && modalRef.current
        && !buttonRef.current.contains(e.target as Node)
        && !modalRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current
        && modalRef.current
        && !buttonRef.current.contains(e.target as Node)
        && !modalRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, []);
  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleOpen}
        className="pt-2 cursor-pointer"
      >
        <FaRegBell size={20} />
      </button>
      {isOpen ? (
        <div
          ref={modalRef}
          className="px-4 py-4 flex flex-col md:h-[90vh] overflow-y-scroll fixed right-0 z-10 w-[40vw] text-sm bg-white rounded-md shadow-md dark:bg-dark md:w-[35%] top-16"
        >
          <button
            type="button"
            className="mb-4 text-right text-danger"
            onClick={() => {
              handleReadAllNotifications();
            }}
          >
            {notificationsLength ? 'Clear All' : 'Empty'}
          </button>
          {notifications?.map((notification) => (
            <div
              key={notification.id}
              className="w-full px-2 mb-5 rounded-md dark:hover:bg-gray-700 hover:bg-neutral-100"
            >
              <div className="relative flex">
                <h5 className="text-lg font-semibold">{notification.title}</h5>
                <button
                  type="button"
                  onClick={() => {
                    handleNotificationRead(notification.id);
                  }}
                  className="absolute top-0 right-0 text-danger"
                >
                  X
                </button>
              </div>
              <span>{notification.message}</span>
              <hr className="mt-1 border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
