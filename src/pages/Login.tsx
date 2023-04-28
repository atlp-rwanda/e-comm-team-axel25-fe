import React, { useEffect } from 'react';
import { LinkFacade } from '../lib';
import { Container } from '../components/Container';
import { config } from '../data';
import { useGoogleAuth } from '../hooks';
import Alert from '../components/shared/Alert';
import { checkEnv } from '../utils';

declare global {
  interface Window {
    google: typeof import('google-one-tap');
  }
}

export function Login() {
  const { handleGoogleLogin, error, loading } = useGoogleAuth();

  const baseUrl = checkEnv(config.REACT_APP_API_BASE_URL);

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
          shape: 'pill',
          type: 'standard',
          logo_alignment: 'center',
        },
      );
    }
  }, [handleGoogleLogin]);

  return (
    <Container>
      <h1>Login</h1>
      <p>Awesome 🎉! You just reached the login page.</p>
      <p>{baseUrl}</p>
      <p>Now try to navigate to the home page.</p>
      <LinkFacade to="/">Home</LinkFacade>
      <main className="flex__center">
        {!error && loading ? <div>Loading....</div> : <div id="loginDiv" />}
        {error && <Alert message={error} />}
      </main>
    </Container>
  );
}
