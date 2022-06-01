import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Option } from "../../data-model";
import "./FilterOptionsForm.scss";

type Props = {
  title: string;
  options: Option[];
  selectedValues: Option[];
  onApply: Function;
  afterApply?: Function;
};

function FilterOptionsForm({
  title,
  options,
  onApply,
  selectedValues,
  afterApply,
}: Props) {
  const [checkedOptions, setCheckedOptions] = useState(selectedValues || []);

  return (
    <form>
      <div className="options-container">
        {options.map((option) => (
          <div key={option.id} className="option">
            <input
              id={option.id}
              defaultChecked={
                !!checkedOptions.find((val) => val.id === option.id)
              }
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setCheckedOptions([...checkedOptions, option]);
                } else {
                  setCheckedOptions(
                    checkedOptions.filter(
                      (selectedOption) => selectedOption.id !== option.id
                    )
                  );
                }
              }}
            />

            <label htmlFor={option.id}>{option.title}</label>
          </div>
        ))}
      </div>
      <div className="actions-container">
        {checkedOptions.length > 0 && (
          <Button
            variant="outline-danger"
            type="button"
            onClick={() => {
              setCheckedOptions([]);
              onApply({ checkedOptions: [], title });
              afterApply?.();
            }}
          >
            Cancel
          </Button>
        )}
        <Button
          variant="primary"
          className="apply-btn"
          type="button"
          onClick={() => {
            onApply({ checkedOptions, title });
            afterApply?.();
          }}
        >
          Apply
        </Button>
      </div>
    </form>
  );
}

export default FilterOptionsForm;
