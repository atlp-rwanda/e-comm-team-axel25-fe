import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeSlider } from './HomeSlider';

const meta = {
  title: 'Components/HomeSlider',
  component: HomeSlider,
  tags: ['autodocs'],
  argTypes: {
    images: {
      control: {
        type: 'array',
        of: { type: 'string' },
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof HomeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeSliderExample: Story = {
  args: {
    images: [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchameleoncollective.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fe-commerce-blog-post-scaled.jpg&f=1&nofb=1&ipt=639a9b0fcadb1c59ce6a0e8fb20592dea9e09b2a4e66dbea74d2335b9d2890ee&ipo=images',
      'https://picsum.photos/id/2/367/267',
    ],
  },
};
