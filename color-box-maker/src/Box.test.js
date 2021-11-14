import { render, fireEvent } from '@testing-library/react';
import Box from './Box';
import React from 'react';

test("should render without crashing", () => {
  render(<Box width={300} height={300} color="green" />);
});

test("should match snapshot", () => {
  const r = render(<Box width={300} height={300} color="green" />);
  expect (r.asFragment()).toMatchSnapshot();
});

test("executes deleteBox callback on button click", () => {
  let x = 0;
  const foo = () => {x = 5};
  const r = render(<Box deleteBox={foo} width={300} height={300} color="green" />);

  expect(x).toEqual(0);
  fireEvent.click(r.getByText("X"));
  expect(x).toEqual(5);
});