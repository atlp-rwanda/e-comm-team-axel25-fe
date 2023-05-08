import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { config } from '../data';
import { useGoogleAuth } from '../hooks';
import Alert from '../components/shared/Alert';
import { checkEnv } from '../utils';
import { LoginForm } from '../features/authentication';
import { RootState } from '../store';
import loginImage from '../../public/images/loginImage.png';

declare global {
  interface Window {
    google: typeof import('google-one-tap');
  }
}

export function Login() {
  const { handleGoogleLogin, error, loading } = useGoogleAuth();

  useEffect(() => {
    const CLIENT_ID = checkEnv(config.REACT_APP_GOOGLE_CLIENT_ID);

    if (window.google && CLIENT_ID) {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleGoogleLogin,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('loginDiv') as HTMLDivElement,
        {
          theme: 'outline',
          text: 'continue_with',
          shape: 'circle',
          type: 'standard',
          logo_alignment: 'center',
          size: 'large',
          width: 400,
        },
      );
    }
  }, [handleGoogleLogin]);

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    window.location.href = '/';
  }

  return (
    <div className="flex flex-col-reverse sm:grid sm:grid-flow-col justify-items-center ">
      <div>
        <div className="hidden sm:flex">
          <img src={loginImage} alt="" />
        </div>
        <h1 className="mt-4 text-xl text-center text-gray-800 dark:text-white pb-7 sm:text-4xl">
          Dont have account,
          <Link to="/register" className="text-re">
            {' '}
            Signup here
          </Link>
        </h1>
      </div>

      <div className="flex flex-col">
        <LoginForm />

        <p className="my-4">
          <Link to="/password-reset">forgot password?</Link>
        </p>
        <main className="flex__center mt-3 align-middle self-center">
          {!error && loading ? <div>Loading....</div> : <div id="loginDiv" />}
          {error && <Alert message={error} />}
        </main>
      </div>
    </div>
  );
}
