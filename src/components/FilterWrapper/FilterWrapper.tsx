import React, { useState } from "react";
import CustomOverlayTrigger from "../CustomOverlayTrigger";

type Props = {
  title: string;
  content: React.ReactElement;
  selectedValuesCount: number;
};

function FilterWrapper({ title, content, selectedValuesCount }: Props) {
  const [showOverlay, setShowOverlay] = useState(false);

  const Component = React.cloneElement(content, {
    afterApply: () => setShowOverlay(false),
  });

  return (
    <CustomOverlayTrigger
      showOverlay={showOverlay}
      setShowOverlay={setShowOverlay}
      title={title}
      selectedValuesCount={selectedValuesCount}
      content={Component}
    />
  );
}

export default FilterWrapper;
