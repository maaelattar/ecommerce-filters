import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import OptionsList from "./OptionsList";

describe("<OptionsList /> Spec", () => {
  const props = {
    title: "Size",
    values: [
      { id: "big", title: "Big" },
      { id: "small", title: "Small" },
    ],
    onOptionEscape: jest.fn(),
    onClearAll: jest.fn(),
  };

  test("renders the component", () => {
    const { asFragment } = render(<OptionsList {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders title and values", () => {
    render(<OptionsList {...props} />);
    expect(screen.getByText(`${props.title}:`)).toBeInTheDocument();
    expect(screen.getByText(props.values[0].title)).toBeInTheDocument();
    expect(screen.getByText(props.values[1].title)).toBeInTheDocument();
  });
});
