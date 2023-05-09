import { io } from 'socket.io-client';
import React, {
  useState, useEffect,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getToken } from '../utils';
import { TMessage } from '../utils/types';
import { Message } from '../components/Message';
import { Container, InputField } from '../components';
import { RootState } from '../store';
import { TMessageValue, messageSchema } from '../utils/schemas/message.schema';
import { Button } from '../components/shared';

const token = getToken();

const socket = io('https://cypherapi.onrender.com', {
  query: {
    token,
  },
});

export function Chat() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    navigate('/login');
  }
  const getChat = async () => {
    const chatReq = await fetch('https://cypherapi.onrender.com/api/v1/chat', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const chat = await chatReq.json();
    return chat;
  };

  useEffect(() => () => {
    getChat().then((chat) => {
      setMessages(chat.data);
    });

    const room = crypto.randomUUID();
    localStorage.setItem('room', room);
    socket.emit('room', { room, to: null });
    socket.on('chat message', (data) => {
      setMessages((prevMsg) => [...prevMsg, data]);
      console.log(data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMessageValue>({
    resolver: zodResolver(messageSchema),
  });

  const { userId } = useParams();
  const [room, setRoom] = useState('');
  useEffect(() => {
    if (!userId) return;
    setRoom(userId);
  }, [userId]);

  const sendMessage: SubmitHandler<TMessageValue> = (
    dataValue: TMessageValue,
  ) => {
    socket.emit('room', {
      room,
      to: room,
    });

    socket.emit('chat message', dataValue.message, room);

    setMessages((prevMessages) => [...prevMessages, {
      message: dataValue.message,
      isSelf: true,
    }]);
    reset();
  };

  return (
    <Container>
      <h1>your messages are private</h1>
      <ul>
        {messages?.map((msg) => (
          <Message
            key={msg.id + msg.message}
            id={msg.id}
            receiverId="1234"
            message={msg.message}
            sender={msg.sender}
            senderId={msg.senderId}
            isSelf={msg.isSelf}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit(sendMessage)} className="relative">
        <input type="text" placeholder="receiver id" value={room} className="hidden" readOnly />

        <InputField<TMessageValue>
          id="message"
          label="message"
          type="text"
          register={register}
          errors={errors}
          required
        />

        <div className="absolute top-full -translate-y-[75%] right-0">

          <Button isSubmit label="send" colorScheme="btn-secondary" />
        </div>
      </form>
    </Container>
  );
}
