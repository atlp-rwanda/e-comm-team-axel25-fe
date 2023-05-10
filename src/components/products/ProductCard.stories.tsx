import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { images } from '../../data';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    category: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
    price: { control: 'number' },
    rating: { control: 'number' },
    quantity: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    title: 'Product Title',
    category: 'Product Category',
    description: 'Product Description',
    image: images[0].imageSrc,
    price: 100,
    rating: 4,
    quantity: 10,
  },
};
