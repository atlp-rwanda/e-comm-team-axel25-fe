import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SoldByCard from './SoldByCard';
import { BrowserRouterFacade } from '../../lib';

const meta = {
  title: 'Components/SoldByCard',
  component: SoldByCard,
  tags: ['autodocs'],
  argTypes: {
    seller: { control: 'text' },
    feedback: { control: 'number' },
  },
  decorators: [
    (StoryComponent) => (
      <BrowserRouterFacade>
        <StoryComponent />
      </BrowserRouterFacade>
    ),
  ],
} satisfies Meta<typeof SoldByCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    seller: 'WatchDealer2',
    feedback: 92,
    sellerItems: '/not-found',
    contactSeller: '/not-found',
  },
};
