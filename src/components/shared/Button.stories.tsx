import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    colorScheme: {
      control: {
        type: 'select',
      },
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorScheme: 'btn-primary',
    label: 'Button',
  },
};

export const PrimaryOutline: Story = {
  args: {
    colorScheme: 'btn-primary-outline',
    label: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    colorScheme: 'btn-primary-disabled',
    label: 'Button',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    colorScheme: 'btn-secondary',
    label: 'Button',
  },
};

export const SecondaryOutline: Story = {
  args: {
    colorScheme: 'btn-secondary-outline',
    label: 'Button',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    colorScheme: 'btn-secondary-disabled',
    label: 'Button',
    disabled: true,
  },
};

export const Success: Story = {
  args: {
    colorScheme: 'btn-success',
    label: 'Button',
  },
};

export const SuccessOutline: Story = {
  args: {
    colorScheme: 'btn-success-outline',
    label: 'Button',
  },
};

export const SuccessDisabled: Story = {
  args: {
    colorScheme: 'btn-success-disabled',
    label: 'Button',
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    colorScheme: 'btn-danger',
    label: 'Button',
  },
};

export const DangerOutline: Story = {
  args: {
    colorScheme: 'btn-danger-outline',
    label: 'Button',
  },
};

export const DangerDisabled: Story = {
  args: {
    colorScheme: 'btn-danger-disabled',
    label: 'Button',
    disabled: true,
  },
};

export const Warning: Story = {
  args: {
    colorScheme: 'btn-warning',
    label: 'Button',
  },
};

export const WarningOutline: Story = {
  args: {
    colorScheme: 'btn-warning-outline',
    label: 'Button',
  },
};

export const WarningDisabled: Story = {
  args: {
    colorScheme: 'btn-warning-disabled',
    label: 'Button',
    disabled: true,
  },
};
