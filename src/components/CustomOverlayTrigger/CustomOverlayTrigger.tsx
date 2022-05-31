import React from "react";
import clsx from "clsx";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "./CustomOverlayTrigger.scss";

type Props = {
  title: string;
  content: React.ReactElement;
  showOverlay: boolean;
  setShowOverlay: (value: boolean) => void;
  selectedValuesCount: number;
};
function CustomOverlayTrigger({
  title,
  content,
  showOverlay,
  setShowOverlay,
  selectedValuesCount = 0,
}: Props) {
  return (
    <OverlayTrigger
      trigger="click"
      show={showOverlay}
      rootClose
      placement="bottom"
      overlay={
        <Popover id="filters-popover">
          <Popover.Body>{content}</Popover.Body>
        </Popover>
      }
    >
      <button
        type="button"
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

export default CustomOverlayTrigger;
