import React, { useState } from "react";
import filtersData from "../../mock-store";
import FiltersBar from "../../components/FiltersBar";
import { Filters } from "../../data-model";

function Home() {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});

  const renderSelectedFilters = () =>
    Object.entries(selectedFilters).map(([title, values]) => (
      <div key={title}>
        <span>{title}: </span>

        {values.map((value) => (
          <span key={value.id}>{value.title}</span>
        ))}
      </div>
    ));

  return (
    <div>
      <div>
        <FiltersBar
          data={filtersData}
          selectedValues={selectedFilters}
          onSelectValue={(data) => setSelectedFilters(data)}
        />
      </div>

      <div>
        <h2>Applied Filters</h2>
        {renderSelectedFilters()}
      </div>
    </div>
  );
}

export default Home;
