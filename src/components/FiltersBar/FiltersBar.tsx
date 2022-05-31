import React, { useState, useEffect } from "react";
import FilterOptionsForm from "../FilterOptionsForm";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import { Filters, FormOptions, FormattedFiltersData } from "../../data-model";

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

  const renderFilterWrappers = (filterForms: React.ReactElement[]) =>
    filterForms.map((filterForm) => (
      <FilterWrapper
        key={filterForm.props.title}
        title={filterForm.props.title}
        content={filterForm}
        selectedValuesCount={selectedValues[filterForm.props.title]?.length}
      />
    ));

  const renderFilterForms = (formattedFiltersData: FormattedFiltersData) =>
    formattedFiltersData.map(([title, options]) => (
      <FilterOptionsForm
        title={title}
        options={options}
        onApply={onFilterFormApply}
        selectedValues={selectedValues[title]}
      />
    ));

  const renderAllFilters = () => {
    const formattedFiltersData: FormattedFiltersData =
      Object.entries(filtersData);
    const filters = [];
    const filterForms = renderFilterForms(formattedFiltersData);
    const filterWrappers = renderFilterWrappers(filterForms);
    filters.push(filterWrappers);
    return filters;
  };

  return <>{renderAllFilters()}</>;
}

export default FiltersBar;
