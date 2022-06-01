import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FilterOptionsForm from "./FilterOptionsForm";

describe("<FilterOptionsForm /> Spec", () => {
  const props = {
    options: [
      { id: "big", title: "Big" },
      { id: "small", title: "Small" },
    ],
    selectedValues: [{ id: "big", title: "Big" }],
    onApply: jest.fn(),
    afterApply: jest.fn(),
  };

  test("renders the component", () => {
    const { asFragment } = render(<FilterOptionsForm {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders given options", () => {
    render(<FilterOptionsForm {...props} />);
    expect(screen.getByText(props.options[0].title)).toBeInTheDocument();
    expect(screen.getByText(props.options[1].title)).toBeInTheDocument();
  });
  test("selected values are checked", () => {
    render(<FilterOptionsForm {...props} />);
    expect(screen.getByTestId("big")).toBeChecked();
  });
});
