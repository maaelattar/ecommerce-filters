import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FiltersAccordion from "./FiltersAccordion";

describe("<FiltersAccordion /> Spec", () => {
  const props = {
    filters: [
      [
        "size",
        [
          { id: "big", title: "Big" },
          { id: "small", title: "Small" },
        ],
      ],
    ],
    selectedValues: { size: [{ id: "big", title: "Big" }] },
    onApply: jest.fn(),
    afterApply: jest.fn(),
  };

  test("renders the component", async () => {
    const { asFragment } = render(<FiltersAccordion {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders title, filters and selectedValuesCount", async () => {
    render(<FiltersAccordion {...props} />);
    const title = props.filters[0][0];
    const filters = props.filters[0][1];
    const selectedValuesCount = props.selectedValues.size.length;

    expect(await screen.findByText(title)).toBeInTheDocument();
    expect(
      await screen.findByText(`(${selectedValuesCount})`)
    ).toBeInTheDocument();
    expect(await screen.findByText(filters[0].title)).toBeInTheDocument();
    expect(await screen.findByText(filters[1].title)).toBeInTheDocument();
  });
});
