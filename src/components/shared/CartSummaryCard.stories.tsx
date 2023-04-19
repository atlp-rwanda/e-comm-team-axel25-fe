import type { Meta, StoryObj } from '@storybook/react';
import CartSummary from './CartSummaryCard';

const meta = {
  title: 'Components/CartSummary',
  component: CartSummary,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'number' },
    shipping: { control: 'number' },
    subtotal: { control: 'number' },
    total: { control: 'number' },
  },
} satisfies Meta<typeof CartSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    items: 7,
    shipping: 70,
    subtotal: 770,
    total: 770,
  },
};
