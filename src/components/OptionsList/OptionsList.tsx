import React from "react";
import { Button } from "react-bootstrap";
import { Option } from "../../data-model";
import "./OptionsList.scss";

type Props = {
  title: string;
  values: Option[];
  onOptionEscape: (value: string) => void;
  onClearAll: (title: string) => void;
};
function OptionsList({ title, values, onOptionEscape, onClearAll }: Props) {
  const renderSelectedFilters = () => (
    <div className="applied-filter">
      <span className="filter-name">{title}: </span>

      {values.map((value) => (
        <span key={value.id} className="option-name">
          <span className="me-2">{value.title}</span>
          <button type="button" onClick={() => onOptionEscape(value.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
            </svg>
          </button>
        </span>
      ))}
      <Button
        variant="danger"
        type="button"
        className=""
        onClick={() => onClearAll(title)}
      >
        Clear All
      </Button>
    </div>
  );

  return <>{renderSelectedFilters()}</>;
}

export default OptionsList;
