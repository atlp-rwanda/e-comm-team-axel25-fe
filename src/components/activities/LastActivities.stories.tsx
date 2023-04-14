import React from 'react';
import { Provider } from 'react-redux';
import type { Meta, StoryObj } from '@storybook/react';
import { FaShoppingCart } from 'react-icons/fa';
import LastUpdade from './LastActivities';
import { ThemeToggle } from '../shared/navbar/ThemeToggle';
import store from '../../store';

const meta = {
  title: 'Components/Activities',
  component: LastUpdade,
  decorators: [
    (Story: React.ComponentType) => (
      <>
        <Provider store={store}>
          <ThemeToggle />
        </Provider>
        <div>
          <Story />
        </div>
      </>
    ),
  ],

}satisfies Meta<typeof LastUpdade>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    picture: <FaShoppingCart />, title: 'string', name: 'string', numberOfStars: 3,
  },
};
