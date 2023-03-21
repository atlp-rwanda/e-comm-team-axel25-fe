import React from 'react';
import { LinkFacade } from '../lib';

export const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>
        My job is to catch all 404 Not Found pages and display this message.
      </p>

      <p>
        Now try to navigate to the home page. You can now go{' '}
        <LinkFacade to="/">back</LinkFacade>
      </p>
    </div>
  );
};
