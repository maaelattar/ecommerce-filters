import React, { useContext } from "react";
import clsx from "clsx";
import {
  useAccordionButton,
  AccordionContext,
  Accordion,
} from "react-bootstrap";

import "./FiltersAccordionItem.scss";

type CustomAccordionHeaderProps = {
  eventKey: string;
  callback?: Function;
  title: string;
  selectedValuesCount: number;
};

function CustomAccordionHeader({
  eventKey,
  callback,
  title,
  selectedValuesCount = 0,
}: CustomAccordionHeaderProps) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      className={clsx(
        "accordion-toggle",
        (isCurrentEventKey || selectedValuesCount) && "active"
      )}
      type="button"
      onClick={decoratedOnClick}
    >
      <div>
        <span> {title}</span>
        {selectedValuesCount > 0 && <span>({selectedValuesCount})</span>}
      </div>
      <span>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          {isCurrentEventKey ? (
            <path d="M0 12v1h23v-1h-23z" />
          ) : (
            <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
          )}
        </svg>
      </span>
    </button>
  );
}

type FiltersAccordionItemProps = {
  eventKey: string;
  title: string;
  selectedValuesCount: number;
  children: React.ReactElement;
};

export default function FiltersAccordionItem({
  eventKey,
  title,
  selectedValuesCount,
  children,
}: FiltersAccordionItemProps) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <CustomAccordionHeader
        eventKey={eventKey}
        title={title}
        selectedValuesCount={selectedValuesCount}
      />
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Item>
  );
}
