import React from 'react';
import { Provider } from 'react-redux';
import Footer from './Footer';
import { ThemeToggle } from '../navbar/ThemeToggle';
import { BrowserRouterFacade } from '../../../lib';
import store from '../../../store';

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story:string) => (
      <>
        <Provider store={store}>
          <ThemeToggle />
        </Provider>
        <div style={{ margin: '1rem' }}>
          <Story />
        </div>
      </>
    ),
  ],
};

export function Default() {
  return (
    <BrowserRouterFacade>
      <Footer />
    </BrowserRouterFacade>
  );
}
