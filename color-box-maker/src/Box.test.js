import { render } from '@testing-library/react';
import Box from './Box';
import React from 'react';

test("should render without crashing", () => {
  render(<Box width={300} height={300} color="green" />);
});

test("should match snapshot", () => {
  const r = render(<Box width={300} height={300} color="green" />);
  expect (r.asFragment()).toMatchSnapshot();
});