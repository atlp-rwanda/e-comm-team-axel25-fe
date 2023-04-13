import React from 'react';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import { router } from './Routes';
import { ecomApi } from './features/authentication/services/login';

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
