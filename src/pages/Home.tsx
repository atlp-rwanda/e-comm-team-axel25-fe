import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import Counter from '../components/Counter';
import { LinkFacade } from '../lib';

export function Home() {
  return (
    <div>
      <Provider store={store}>
        <main>
          <h1>Team Cypher</h1>
          <Counter />
        </main>
      </Provider>
      <p>
        Let us see if routing works. Click on the links below to navigate to
        different pages.
      </p>
      <LinkFacade
        to="/login"
        className="bg-gradient-to-r p-2 m-2 from-cyan-400 to-purple-400"
      >
        Login
      </LinkFacade>
      <LinkFacade
        to="/not-found"
        className="bg-gradient-to-r p-2 m-2 from-cyan-400 to-red-400"
      >
        404
      </LinkFacade>
    </div>
  );
}
