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

test("updates on field change", () => {
  const r = render(<NewTodoForm />);
  const input = r.getByLabelText("New Task:");
  expect(input.value).toEqual("");
  fireEvent.change(input, {target: {value: "Walk the plants"}});
  expect(input.value).toEqual("Walk the plants");
  expect(r.getByDisplayValue("Walk the plants")).toBeInTheDocument();
});

test("does not execute addItem callback if input field is empty", () => {
  let x = 0;
  const foo = () => { x = 5 };
  const r = render(<NewTodoForm addItem={foo} />);
  fireEvent.click(r.getByText("Add"));
  expect(x).toEqual(0);
});

test("executes addItem callback if input field has text", () => {
  let x = 0;
  const foo = () => { x = 5 };
  const r = render(<NewTodoForm addItem={foo} />);
  const input = r.getByLabelText("New Task:");
  fireEvent.change(input, {target: {value: "Water the cats"}});
  fireEvent.click(r.getByText("Add"));
  expect(x).toEqual(5);
});

test("resets input field on form submission", () => {
  const r = render(<NewTodoForm addItem={() => {}} />);
  const input = r.getByLabelText("New Task:");
  fireEvent.change(input, {target: {value: "Water the cats"}});
  fireEvent.click(r.getByText("Add"));
  expect(input.value).toEqual("");
});