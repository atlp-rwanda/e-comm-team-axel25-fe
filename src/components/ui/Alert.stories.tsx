import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FaBusAlt } from 'react-icons/fa';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClosableAlert: Story = {
  args: {
    message: 'missing your name',

    closable: true,
    colorScheme: 'danger',
    icon: <FaBusAlt />,
  },
};

export const AlertSecondary: Story = {
  args: {
    message: 'missing your name',
    colorScheme: 'secondary',
  },
};

export const AlertWarning: Story = {
  args: {
    message: 'missing your name',
    colorScheme: 'warning',
  },
};
