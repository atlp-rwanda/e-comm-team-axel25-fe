import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from 'socket.io-client';
import { checkEnv, getToken } from '../../utils';
import { config } from '../../data';

const token = getToken();

export function Notification() {
  const socket = io(checkEnv(config.REACT_APP_API_BASE), {
    query: {
      token,
    },
    autoConnect: true,
  });
  const [data, setData] = useState('');

  useEffect(() => {
    if (data) {
      toast.success(data);
    }
  }, [data]);

  socket.on('connection', () => {
    // console.log(`I'm connected with the back-end`);
  });
  socket.on('connectToRoom', () => {
    // console.log(data);
  });
  socket.on('on product create', (dataInfo) => {
    dataInfo.map((message: string) => setData(() => message));
  });
  socket.on('on product delete', (dataInfo) => {
    dataInfo.map((message: string) => setData(() => message));
  });
  socket.on('on product edit', (dataInfo) => {
    dataInfo.map((message: string) => setData(() => message));
  });
  socket.on('on product expiry', (dataInfo) => {
    dataInfo.map((message: string) => setData(() => message));
  });

  return (
    <ToastContainer
      position="top-right"
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}
export default Notification;
