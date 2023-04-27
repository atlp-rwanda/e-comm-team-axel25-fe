import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { config } from '../data';
import { useGoogleLoginMutation } from '../services';
import { login } from '../reducers/authReducer';
import { User } from '../utils/types';
import { checkEnv } from '../utils';

const baseUrl = checkEnv(config.REACT_APP_API_BASE_URL);

export const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const [googleLogin] = useGoogleLoginMutation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = useCallback(
    async ({ credential }: { credential: string }) => {
      setLoading(true);
      googleLogin({ credential })
        .unwrap()
        .then((payload: User) => {
          setLoading(false);
          localStorage.setItem('user', JSON.stringify(payload));
          dispatch(login(payload));
          navigate('/');
        })
        .catch((err) => {
          setLoading(false);
          if (err.data.message === 'You are not registered. Please sign up') {
            window.location.href = `${baseUrl}/auth/google`;
          }
          setError(err?.message);
        });
    },
    [googleLogin, dispatch, navigate],
  );

  return { handleGoogleLogin, error, loading };
};
