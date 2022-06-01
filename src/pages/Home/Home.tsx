import React, { useState } from "react";
import filtersData from "../../mockStore";
import FiltersBar from "../../components/FiltersBar";
import { Filters } from "../../data-model";
import "./Home.scss";
import OptionsList from "../../components/OptionsList";

function Home() {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});

  const deleteFilter = (filterTitle: string) => {
    const filters = { ...selectedFilters };
    delete filters[filterTitle];
    setSelectedFilters(filters);
  };
  const renderSelectedFilters = () =>
    Object.entries(selectedFilters).map(([title, values]) => (
      <OptionsList
        key={title}
        title={title}
        values={values}
        onOptionEscape={(valueId) => {
          const filterOptions = [...selectedFilters[title]];
          if (filterOptions.length > 1) {
            setSelectedFilters({
              ...selectedFilters,
              [title]: filterOptions.filter((val) => val.id !== valueId),
            });
          } else {
            deleteFilter(title);
          }
        }}
        onClearAll={deleteFilter}
      />
    ));

  return (
    <div>
      <div className="filters-bar">
        <FiltersBar
          data={filtersData}
          selectedValues={selectedFilters}
          onSelectValue={(data) => setSelectedFilters(data)}
        />
      </div>

      <div className="applied-filters">
        <h2>Applied Filters</h2>
        {Object.keys(selectedFilters).length > 0 ? (
          renderSelectedFilters()
        ) : (
          <p>-none-</p>
        )}
      </div>
    </div>
  );
}

export default Home;
