import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TMessage, User } from '../utils/types';
import { useGetUserQuery } from '../features/authentication/services/getUser';
import { RootState } from '../store';

export function Message({
  id,
  message: msg,
  sender: senderData,
  isSelf: sameSender,
  senderId,
  receiverId,
}: TMessage) {
  const [sender, setSender] = useState<User>({});

  const { isLoading, data } = useGetUserQuery(senderId);

  const { id: userId } = useSelector(
    (state: RootState) => state.auth.user,
  );

  const [isSelf] = useState(() => senderId === userId || sameSender);

  useEffect(() => {
    if (senderData) {
      setSender(senderData);
    } else if (data) setSender({ surname: data.data.surname, given_name: data.data.given_name });
  }, [data, senderData]);

  if (isLoading) return (<p>loading message...</p>);

  return (
    <li key={id} className={`flex ${isSelf ? 'justify-end' : 'justify-start'}`}>
      <div className={`${isSelf ? 'bg-cyan-300' : 'bg-slate-300'} dark:text-black font-medium px-8 rounded-md py-1 grid my-4`} id={receiverId}>
        <Link to={`/chat/${senderId}`}>
          <p className="text-right font-thin text-[0.6rem]  ">{isSelf ? 'you' : `${sender.surname} ${sender.given_name} `}</p>
        </Link>
        <p>{msg}</p>
      </div>
    </li>
  );
}
