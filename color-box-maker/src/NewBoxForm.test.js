import {render} from "@testing-library/react";
import React from "react";
import NewBoxForm from "./NewBoxForm";

test("renders without crashing", () => {
  render(<NewBoxForm />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});