import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Accordion } from "react-bootstrap";
import FiltersAccordionItem from "./FiltersAccordionItem";

describe("<FiltersAccordionItem /> Spec", () => {
  const props = {
    eventKey: 0,
    title: "Size",
    selectedValuesCount: 2,
  };

  const children = "Hello There";

  test("renders the component", async () => {
    const { asFragment } = render(
      <FiltersAccordionItem {...props}>{children} </FiltersAccordionItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders title, selectedValuesCount and children", async () => {
    render(<FiltersAccordionItem {...props}>{children} </FiltersAccordionItem>);

    expect(await screen.findByText(props.title)).toBeInTheDocument();
    expect(
      await screen.findByText(`(${props.selectedValuesCount})`)
    ).toBeInTheDocument();
    expect(await screen.findByText(children)).toBeInTheDocument();
  });
  test("show plus icon when accordion header is not active and minus icon if it's active", async () => {
    render(
      <Accordion>
        <FiltersAccordionItem {...props} />
      </Accordion>
    );

    expect(await screen.findByTestId("plus-icon")).toBeInTheDocument();
    fireEvent.click(await screen.findByRole("button"));
    expect(await screen.findByTestId("minus-icon")).toBeInTheDocument();
  });
});
