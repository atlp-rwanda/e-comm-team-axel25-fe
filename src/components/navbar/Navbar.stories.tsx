import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

import { Navbar } from './Navbar';
import store from '../../store';
import { BrowserRouterFacade } from '../../lib';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    (StoryComponent) => (
      <Provider store={store}>
        <BrowserRouterFacade>
          <StoryComponent />
        </BrowserRouterFacade>
      </Provider>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
