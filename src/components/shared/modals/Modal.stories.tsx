import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Heading } from '../../Heading';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    onClose: { action: 'closed' },
    onSubmit: { action: 'submitted' },
    actionLabel: { control: 'text' },
    secondaryActionLabel: { control: 'text' },
    secondaryAction: { action: 'secondary action' },
    isOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Modal Title',
    body: (
      <section className="flex flex-col gap-4">
        <Heading
          title="Heading: Do something"
          subtitle="Sub-Heading: Do something else"
        />
      </section>
    ),
    footer: <div>Modal Footer</div>,
    actionLabel: 'Primary Action',
    isOpen: true,
    onClose: () => {
      // do something
    },
    onSubmit: () => {
      // do something
    },
  },
};

export const WithSecondaryAction: Story = {
  args: {
    title: 'Modal Title',
    body: (
      <section className="flex flex-col gap-4">
        <Heading
          title="Heading: We are all centered"
          subtitle="Sub-Heading: Do something else"
          center
        />
      </section>
    ),
    footer: <div>Modal Footer</div>,
    actionLabel: 'Primary Action',
    secondaryActionLabel: 'Secondary Action',
    secondaryAction: () => {
      // do something
    },
    isOpen: true,
    onClose: () => {
      // do something
    },
    onSubmit: () => {
      // do something
    },
  },
};

export const Disabled: Story = {
  args: {
    title: 'Modal Title',
    body: <div>Modal Body</div>,
    footer: <div>Modal Footer</div>,
    actionLabel: 'Primary Action',
    secondaryActionLabel: 'Secondary Action',
    secondaryAction: () => {
      // do something
    },
    isOpen: true,
    onClose: () => {
      // do something
    },
    onSubmit: () => {
      // do something
    },
    disabled: true,
  },
};
