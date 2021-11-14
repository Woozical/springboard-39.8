import { render, fireEvent } from "@testing-library/react";
import React from "react";
import NewBoxForm, { DEFAULT_STATE as NewBoxFormDefaultState } from "./NewBoxForm";

test("renders without crashing", () => {
  render(<NewBoxForm />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("updates on field change", () => {
  const r = render(<NewBoxForm />);

  // height
  const hInput = r.getByLabelText("Height:");
  expect(hInput.value).toEqual(`${NewBoxFormDefaultState.height}`);
  fireEvent.change(hInput, {target: {value: 500}});
  expect(hInput.value).toEqual("500");

  // width
  const wInput = r.getByLabelText("Width:");
  expect(wInput.value).toEqual(`${NewBoxFormDefaultState.width}`);
  fireEvent.change(wInput, {target: {value: 125}});
  expect(wInput.value).toEqual("125");

  // color
  const cInput = r.getByLabelText("Color:");
  expect(cInput.value).toEqual(`${NewBoxFormDefaultState.color}`);
  fireEvent.change(cInput, {target: {value: "#121212"}});
  expect(cInput.value).toEqual("#121212");
});

test("executes addBox callback on submit", () => {
  let x = 0;
  const foo = () => {x = 5;}

  const r = render(<NewBoxForm addBox={foo} />);
  expect(x).toEqual(0);
  fireEvent.click(r.getByText("Add Box"));
  expect(x).toEqual(5);
});

test("reset fields on submit", () => {
  const r = render(<NewBoxForm addBox={() => {}} />);
  const hInput = r.getByLabelText("Height:");
  const wInput = r.getByLabelText("Width:");
  const cInput = r.getByLabelText("Color:");
  const sButton = r.getByText("Add Box");
  // Change Fields
  fireEvent.change(hInput, {target: {value: 500}});
  fireEvent.change(wInput, {target: {value: 125}});
  fireEvent.change(cInput, {target: {value: "#121212"}});
  // Submit
  fireEvent.click(sButton);
  // Check for reset to default state
  expect(hInput.value).toEqual(`${NewBoxFormDefaultState.height}`);
  expect(wInput.value).toEqual(`${NewBoxFormDefaultState.width}`);
  expect(cInput.value).toEqual(`${NewBoxFormDefaultState.color}`);
});