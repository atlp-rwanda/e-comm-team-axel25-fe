import type { Meta, StoryObj } from '@storybook/react';
import { MdEmail } from 'react-icons/md';
import { InputField } from './InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'email',
    label: 'Email',
    type: 'email',
    disabled: false,
    icon: MdEmail,
    required: true,
  },
};
