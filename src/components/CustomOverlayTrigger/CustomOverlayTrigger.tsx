import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

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
      <button type="button" onClick={() => setShowOverlay(!showOverlay)}>
        <span className="me-1">{title}</span>
        {selectedValuesCount > 0 && <span>({selectedValuesCount})</span>}
      </button>
    </OverlayTrigger>
  );
}

export default CustomOverlayTrigger;
