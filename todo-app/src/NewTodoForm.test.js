import {render, fireEvent} from "@testing-library/react";
import React from "react";
import NewTodoForm from "./NewTodoForm";

test("should render without crashing", () => {
  render(<NewTodoForm />);
});

test("should match snapshot", () => {
  const {asFragment} = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
