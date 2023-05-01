import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import store from './store';
import { ecomApi } from './features/authentication/services/login';

import { router } from './Routes';

export function App() {
  return (
    <ApiProvider api={ecomApi}>

      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApiProvider>

  );
}
export default App;
