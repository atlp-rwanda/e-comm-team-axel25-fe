import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MultiStepForm } from './MultiStepForm';

const meta = {
  title: 'Components/MultiStepForm',
  component: MultiStepForm,
  argTypes: {
    onCancel: { action: 'clicked' },
    onSubmit: { action: 'clicked' },
    actionLabel: { control: 'text' },
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    secondaryAction: { action: 'clicked' },
    secondaryActionLabel: { control: 'text' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiStepForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "It's fast and free to get started",
    actionLabel: 'Next',
    secondaryActionLabel: 'Back',
    disabled: false,
  },
};
