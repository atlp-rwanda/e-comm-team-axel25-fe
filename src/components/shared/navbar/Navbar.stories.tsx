import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './Navbar';
import store from '../../../store';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [
    (StoryComponent) => (
      <Provider store={store}>
        <BrowserRouter>
          <StoryComponent />
        </BrowserRouter>
      </Provider>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
