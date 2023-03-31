import type { Meta, StoryObj } from '@storybook/react';
import ReviewsCard from './ReviewsCard';

const meta = {
  title: 'Components/ReviewsCard',
  component: ReviewsCard,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    rating: { control: 'number' },
    date: { control: 'text' },
    message: { control: 'text' },
  },
} satisfies Meta<typeof ReviewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    name: 'Mike Tyson',
    rating: 3,
    date: 'October 13, 2023',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, sem non rhoncus porta, ex purus posuere urna, et commodo ante odio a enim. Maecenas aliquam consectetur massa id placerat. In massa sapien, consectetur sit amet lectus id',
  },
};
