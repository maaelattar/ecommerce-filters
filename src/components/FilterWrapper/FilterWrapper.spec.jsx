import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import FilterWrapper from "./FilterWrapper";

describe("<FilterWrapper /> Spec", () => {
  function MockContent() {
    return <div>Hi</div>;
  }

  const props = {
    title: "Size",
    content: <MockContent />,
    selectedValuesCount: 2,
  };

  test("renders the component", async () => {
    const { asFragment } = render(<FilterWrapper {...props} />);
    fireEvent.click(await screen.findByTestId("filter-title-button"));
    expect(await screen.findByTestId("filters-popover")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders title, content and selectedValuesCount", async () => {
    render(<FilterWrapper {...props} />);
    fireEvent.click(await screen.findByTestId("filter-title-button"));
    expect(await screen.findByText(props.title)).toBeInTheDocument();
    expect(await screen.findByText("Hi")).toBeInTheDocument();
    expect(
      await screen.findByText(`(${props.selectedValuesCount})`)
    ).toBeInTheDocument();
  });
  test("filter button has active class when selectedValuesCount is more that zero", async () => {
    render(<FilterWrapper {...props} />);
    expect(await screen.findByTestId("filter-title-button")).toHaveClass(
      "active"
    );
  });
});
