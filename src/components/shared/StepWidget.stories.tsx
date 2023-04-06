import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import Stepper from './StepWidget';
import store from '../../store';
import { ThemeToggle } from './navbar/ThemeToggle';

type stepperProps = { steps: string[]; stepNum: number };

export default {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: {
        type: 'array',
        of: { type: 'string' },
      },
      description: 'An array of steps',
      defaultValue: ['Customer info', 'Shipping info', 'Payment', 'Step n'],
    },
  },
  decorators: [
    (Story) => (
      <>
        <Provider store={store}>
          <ThemeToggle />
        </Provider>
        <div style={{ margin: '3rem' }}>
          <Story />
        </div>
      </>
    ),
  ],
} satisfies Meta<typeof Stepper>;

const Template: StoryFn<stepperProps> = function ({
  steps,
  stepNum,
}: stepperProps): JSX.Element {
  return <Provider store={store}><Stepper steps={steps} /></Provider>;
};

export const Default = Template.bind({});
Default.args = {
  steps: ['Customer info', 'Shipping info', 'Payment', 'Step n'],
};
