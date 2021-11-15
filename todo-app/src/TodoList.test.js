import {render, fireEvent} from "@testing-library/react";
import TodoList from "./TodoList";
import React from "react";

test("renders without crashing", () => {
  render(<TodoList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});