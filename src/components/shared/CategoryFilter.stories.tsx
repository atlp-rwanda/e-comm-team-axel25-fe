import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';
import {
  categorySeeker,
  ProductAPIData,
  ProductAPIDataProps,
} from '../../utils/dummyCategories';

import store from '../../store';
import { ThemeToggle } from './navbar/ThemeToggle';

export default {
  title: 'Components/CategoryFilter',
  component: CategoryFilter,
  tags: ['autodocs'],
  argTypes: {
    categories: {
      control: {
        type: 'array',
        of: { type: 'string' },
      },
      description: 'An array of categories',
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
} satisfies Meta<typeof CategoryFilter>;

const Template: StoryFn<JSX.Element> = function (): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CategoryFilter
          categories={categorySeeker(ProductAPIData)}
          apiData={ProductAPIData}
        />
      </BrowserRouter>
    </Provider>
  );
};

export const Default = Template.bind({});
