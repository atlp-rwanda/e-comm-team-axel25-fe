import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeToggle } from '../shared/navbar/ThemeToggle';
import store from '../../store';

import { SidebarDash } from '../Dashboard/SidebarDash';

export default {
  title: 'Components/Sidebar',
  component: SidebarDash,
  decorators: [
    (Story:string) => (
      <>
        <Provider store={store}>
          <ThemeToggle />
        </Provider>
        <div style={{ margin: '0' }}>
          <Story />
        </div>
      </>
    ),
  ],
};

export function Default() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SidebarDash />
      </Provider>
    </BrowserRouter>

  );
}
