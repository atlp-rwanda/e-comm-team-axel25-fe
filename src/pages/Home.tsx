import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import Counter from '../components/Counter';
import { LinkFacade } from '../lib';

export const Home = () => {
  return (
    <div>
      <h1>Team Cypher</h1>
      <Provider store={store}>
        <main>
          <h1>Team Cypher</h1>
          <Counter />
        </main>
      </Provider>
      <p>
        Let's see if routing works. Click on the links below to navigate to
        different pages.
      </p>
      <ul>
        <li>
          <LinkFacade to="/login">Login</LinkFacade>
        </li>
        <li>
          <LinkFacade to="/not-found">404</LinkFacade>
        </li>
      </ul>
    </div>
  );
};

export default Home;
