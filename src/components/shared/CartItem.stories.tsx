import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import CartItem from '../cart/CartItem';
import { ThemeToggle } from './navbar/ThemeToggle';
import store from '../../store';

const meta = {
  title: 'Components/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'number' },
    price: { control: 'number' },
    leftInStock: { control: 'number' },
    delivery: { control: 'number' },
    shipping: { control: 'number' },
    soldBy: { control: 'text' },
    stock: { control: 'text' },
    image: { control: 'text' },
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
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CartItemExample: Story = {
  args: {
    name: "Rolex watch, Men's watches",
    price: 500,
    leftInStock: 3,
    delivery: 5,
    shipping: 10,
    soldBy: 'watchDealer1',
    stock: 'In Stock',
    image:
      'https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m126711chnr-0002.png?impolicy=v6-upright&imwidth=270',
  },
};
