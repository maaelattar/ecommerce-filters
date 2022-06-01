import React, { useState } from "react";
import clsx from "clsx";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "./FilterWrapper.scss";

type Props = {
  title: string;
  content: React.ReactElement;
  selectedValuesCount?: number;
};

function FilterWrapper({ title, content, selectedValuesCount = 0 }: Props) {
  const [showOverlay, setShowOverlay] = useState(false);

  const Component = React.cloneElement(content, {
    afterApply: () => setShowOverlay(false),
  });

  return (
    <OverlayTrigger
      trigger="click"
      show={showOverlay}
      rootClose
      placement="bottom"
      overlay={
        <Popover id="filters-popover" data-testid="filters-popover">
          <Popover.Body>{Component}</Popover.Body>
        </Popover>
      }
    >
      <button
        type="button"
        data-testid="filter-title-button"
        onClick={() => setShowOverlay(!showOverlay)}
        className={clsx(
          "filter",
          (showOverlay || selectedValuesCount > 0) && "active"
        )}
      >
        <span className="me-1">{title}</span>
        {selectedValuesCount > 0 && <span>({selectedValuesCount})</span>}
      </button>
    </OverlayTrigger>
  );
}

export default FilterWrapper;
