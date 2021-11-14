import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import BoxList from './BoxList';
import { DEFAULT_STATE as NewBoxFormDefaultState } from './NewBoxForm';


test("renders without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders a new box with form props on form submit", () => {
  const r = render(<BoxList />);
  expect(r.queryByTestId("color-box")).not.toBeInTheDocument();
  fireEvent.click(r.getByText("Add Box"));
  expect(r.getByTestId("color-box")).toBeInTheDocument();
  expect(r.getByTestId("color-box")).toHaveStyle(
    { backgroundColor: NewBoxFormDefaultState.color,
      width: `${NewBoxFormDefaultState.width}px`,
      height: `${NewBoxFormDefaultState.height}px` });
});

test("deletes a box when clicking on its X button", () => {
  const r = render(<BoxList />);
  fireEvent.click(r.getByText("Add Box"));
  expect(r.getByTestId("color-box")).toBeInTheDocument();
  fireEvent.click(r.getByText("X"));
  expect(r.queryByTestId("color-box")).not.toBeInTheDocument();
});