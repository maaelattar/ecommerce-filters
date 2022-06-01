import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import FilterOptionsForm from "../FilterOptionsForm";
import FilterWrapper from "../FilterWrapper";
import { Filters, FormattedFiltersData, FormOptions } from "../../data-model";
import FiltersAccordion from "../FiltersAccordion";

type Props = {
  selectedValues: Filters;
  onSelectValue: (value: Filters) => void;
  data: Filters;
};

function FiltersBar({
  selectedValues,
  onSelectValue,
  data: filtersData,
}: Props) {
  const [selectedFilters, setSelectedFilters] = useState<Filters>(
    selectedValues || {}
  );
  const onSelectFilter = (filters: Filters) => {
    setSelectedFilters(filters);
    onSelectValue?.(filters);
  };

  useEffect(() => {
    setSelectedFilters(selectedValues);
  }, [selectedValues]);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 650px)" });

  const onFilterFormApply = ({ title, checkedOptions }: FormOptions) => {
    if (checkedOptions.length > 0) {
      onSelectFilter({
        ...selectedFilters,
        [title]: checkedOptions,
      });
    } else {
      const filters = { ...selectedFilters };
      delete filters[title];
      onSelectFilter(filters);
    }
  };

  const renderNavFilters = (filters: FormattedFiltersData) =>
    filters.map(([title, options]) => (
      <FilterWrapper
        key={title}
        title={title}
        selectedValuesCount={selectedValues[title]?.length}
        content={
          <FilterOptionsForm
            title={title}
            options={options}
            selectedValues={selectedValues[title]}
            onApply={onFilterFormApply}
          />
        }
      />
    ));

  const renderCollapsibleFilters = (filters: FormattedFiltersData) => (
    <FilterWrapper
      key="more-filters"
      title="More Filters"
      content={
        <FiltersAccordion
          filters={filters}
          selectedValues={selectedValues}
          onApply={onFilterFormApply}
        />
      }
    />
  );

  const renderLargeScreenFilters = () =>
    renderNavFilters(Object.entries(filtersData));

  const renderMobileFilters = () => {
    const formattedFiltersData = Object.entries(filtersData);
    const filters = [];
    const navFilters = renderNavFilters(formattedFiltersData.slice(0, 2));
    filters.push(navFilters);
    const collapsibleFilters = renderCollapsibleFilters(
      formattedFiltersData.slice(2)
    );
    filters.push(collapsibleFilters);
    return filters;
  };

  const renderAllFilters = () =>
    isLargeScreen ? renderLargeScreenFilters() : renderMobileFilters();

  return <>{renderAllFilters()}</>;
}

export default FiltersBar;
