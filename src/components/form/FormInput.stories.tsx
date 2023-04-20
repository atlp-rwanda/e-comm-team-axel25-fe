import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaUser } from 'react-icons/fa';
import FormInput from './FormInput';

const meta = {
  title: 'Components/FormInput',
  component: FormInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormInput: Story = {
  args: {
    label: 'Email',
    success: false,
    id: 'email-id1',
    icon: <FaUser />,
  },
};

export const FormInputSuccess = {
  args: {
    label: 'Email',
    id: 'email-id2',
    success: true,
  },
};

export const PasswordInputSuccess = {
  args: {
    label: 'Password',
    success: true,
    type: 'password',
    id: 'Password-id1',
  },
};

export const FormInputWarning = {
  args: {
    label: 'Email',
    warning: true,
    id: 'Email-id4',
    statusText: 'missing @ in your email',
  },
};
