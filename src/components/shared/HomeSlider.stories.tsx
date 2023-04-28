import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { HomeSlider } from './HomeSlider';

type HomeSliderProps = {
  images: string[];
  linkInfo: [
    {
      url: string;
      anchor: string;
    },
  ];
};

export default {
  title: 'Components/HomeSlider',
  component: HomeSlider,
  argTypes: {
    images: {
      control: {
        type: 'array',
        of: { type: 'string' },
      },
      description: 'An array of image URLs to display in the slider',
      defaultValue: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80',
        'https://media.istockphoto.com/id/1340117122/photo/cube-with-shopping-trolley-symbol-on-the-laptop-keyboard.webp?s=1024x1024&w=is&k=20&c=NrLj8EqERZXWTqMYEoINRs8bQLslU1H7smnXVgIbTuQ=',
        'https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.webp?s=1024x1024&w=is&k=20&c=U-WywrpANXEOMnCB69B0UjEzZ1M4AEUIV4vi2idBmak=',
        'https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=',
      ],
    },
  },
} satisfies Meta<typeof HomeSlider>;

const Template: StoryFn<HomeSliderProps> = function ({
  images,
  linkInfo,
}: HomeSliderProps): JSX.Element {
  return <HomeSlider images={images} linkInfo={linkInfo} />;
};

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80',
    'https://media.istockphoto.com/id/1340117122/photo/cube-with-shopping-trolley-symbol-on-the-laptop-keyboard.webp?s=1024x1024&w=is&k=20&c=NrLj8EqERZXWTqMYEoINRs8bQLslU1H7smnXVgIbTuQ=',
    'https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.webp?s=1024x1024&w=is&k=20&c=U-WywrpANXEOMnCB69B0UjEzZ1M4AEUIV4vi2idBmak=',
    'https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=1024x1024&w=is&k=20&c=N5Fw7BZfKcYJMH9camA7rQ3q--7Ev7pKlQYEB_gPfo8=',
  ],
  linkInfo: [
    {
      url: '#',
      anchor: 'Sample of Clickable Link',
    },
  ],
};
