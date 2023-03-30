import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter, BrowserRouterFacade } from './lib';
import { routes } from './Routes';
import store from './store';
import { Layout } from './layouts';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouterFacade>
        <Layout>
          <AppRouter routes={routes} />
        </Layout>
      </BrowserRouterFacade>
    </Provider>
  );
}
export default App;
