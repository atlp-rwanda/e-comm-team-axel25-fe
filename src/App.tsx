import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import { router } from './Routes';
import Notification from './features/notification/Notification';

export function App() {
  return (
    <Provider store={store}>
      <Notification />
      <RouterProvider router={router} />
    </Provider>
  );
}
export default App;
