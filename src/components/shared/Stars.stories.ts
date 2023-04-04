import type { Meta, StoryObj } from '@storybook/react';
import Stars from './Stars';

const meta = {
  title: 'Components/Stars',
  component: Stars,
  tags: ['autodocs'],
  argTypes: {
    num: { control: 'number' },
  },
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StarsExample: Story = {
  args: {
    num: 2,
  },
};
