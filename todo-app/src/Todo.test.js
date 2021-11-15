import {render, fireEvent} from "@testing-library/react";
import Todo from "./Todo";
import React from "react";

test("renders without crashing", () => {
  render(<Todo task="Hello World" />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Todo task="Hello World" />);
  expect(asFragment()).toMatchSnapshot();
});

test("executes deleteItem callback on button click", () => {
  let x = 0;
  const foo = () => {x = 5};
  const r = render(<Todo deleteItem={foo} task="Hello World" />);

  expect(x).toEqual(0);
  fireEvent.click(r.getByText("X"));
  expect(x).toEqual(5);
});