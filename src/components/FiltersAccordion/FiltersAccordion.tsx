import React from "react";
import { Accordion } from "react-bootstrap";

import FilterOptionsForm from "../FilterOptionsForm";
import FiltersAccordionItem from "../FiltersAccordionItem";
import { Filters, FormattedFiltersData } from "../../data-model";

type Props = {
  filters: FormattedFiltersData;
  selectedValues: Filters;
  onApply: Function;
  afterApply?: Function;
};

export default function FiltersAccordion({
  filters,
  selectedValues,
  onApply,
  afterApply,
}: Props) {
  return (
    <Accordion defaultActiveKey="0">
      {filters.map(([title, options], index: number) => (
        <FiltersAccordionItem
          key={title}
          eventKey={`${index}`}
          title={title}
          selectedValuesCount={selectedValues[title]?.length}
        >
          <FilterOptionsForm
            title={title}
            options={options}
            selectedValues={selectedValues[title]}
            onApply={onApply}
            afterApply={afterApply}
          />
        </FiltersAccordionItem>
      ))}
    </Accordion>
  );
}
