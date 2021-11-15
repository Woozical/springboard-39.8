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