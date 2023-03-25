import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../components/Toggle';

describe('<Toggle />', () => {
  it('should render OFF by default', () => {
    render(<Toggle />);

    expect(screen.getByText(/OFF/)).toBeInTheDocument();
  });

  it('should render ON when clicked', () => {
    render(<Toggle />); // render toggle button

    expect(screen.getByText(/OFF/)).toBeInTheDocument(); // check if the OFF string to be rendered
    fireEvent.click(screen.getByText(/OFF/)); // trigger click event on the element

    expect(screen.getByText(/ON/)).toBeInTheDocument(); // check if the ON string to be rendered after clicked
  });
});
