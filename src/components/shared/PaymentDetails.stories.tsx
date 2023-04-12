import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { PaymentDetailsCard } from './PaymentDetailsCard';
import store from '../../store';
import { ThemeToggle } from './navbar/ThemeToggle';

const meta = {
  title: 'Components/PaymentDetailsCard',
  component: PaymentDetailsCard,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'text' },
    required: { control: 'boolean' },
  },
  decorators: [
    (StoryComponent) => (
      <Provider store={store}>
        <ThemeToggle />
        <div>
          <StoryComponent />
        </div>
      </Provider>
    ),
  ],
} satisfies Meta<typeof PaymentDetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaymentDetails: Story = {
  args: {
    id: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
};
