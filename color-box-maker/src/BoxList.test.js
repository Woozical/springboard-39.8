import {render} from '@testing-library/react';
import React from 'react';
import BoxList from './BoxList';


test("renders without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});