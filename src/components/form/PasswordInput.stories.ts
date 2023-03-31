// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'Password' },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultPasswordInput: Story = {
  args: {
    label: 'Password',
    success: false,
  },
};

export const PasswordInputSuccess = {
  args: {
    label: 'Password',
    success: true,
  },
};

export const PasswordInputWarning = {
  args: {
    label: 'Password',
    warning: true,
    statusText: 'password must be 6 characters long',
  },
};
