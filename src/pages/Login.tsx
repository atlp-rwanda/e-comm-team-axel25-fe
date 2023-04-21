import React from 'react';
import { LinkFacade } from '../lib';

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>Awesome 🎉! You just reached the login page.</p>

      <p>Now try to navigate to the home page.</p>
      <LinkFacade to="/">Home</LinkFacade>
    </div>
  );
}
