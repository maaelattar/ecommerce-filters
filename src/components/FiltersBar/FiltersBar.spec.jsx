import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FiltersBar from "./FiltersBar";

describe("<FiltersBar /> Spec", () => {
  const props = {
    selectedValues: [{ id: "big", title: "Big" }],
    data: {
      size: [
        { id: "big", title: "Big" },
        { id: "small", title: "Small" },
      ],
      color: [
        { id: "red", title: "Red" },
        { id: "blue", title: "Blue" },
      ],
    },
    onSelectValue: jest.fn(),
  };

  test("renders the component", () => {
    const { asFragment } = render(<FiltersBar {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders given data titles", () => {
    const titles = Object.keys(props.data);
    render(<FiltersBar {...props} />);
    expect(screen.getByText(titles[0])).toBeInTheDocument();
    expect(screen.getByText(titles[1])).toBeInTheDocument();
  });
});
