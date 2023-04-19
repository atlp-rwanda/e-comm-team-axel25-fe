import React from 'react';
import { Provider } from 'react-redux';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '../navbar/ThemeToggle';
import store from '../../../store';
import PaginatedData from './Pagination';

const meta = {
  title: 'Components/pagination',
  component: PaginatedData,
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
  argTypes: {
    itemsPerPage: { control: 'number' },
  },
}satisfies Meta<typeof PaginatedData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageExample: Story = {
  args: {
    itemsPerPage: 4,
  },
};
