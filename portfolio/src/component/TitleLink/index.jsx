import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TitleLink({ title, isHighlight, link }) {
  if (!link) {
    return (
      <>
        <div
          className={` font-semibold ${
            isHighlight ? "text-primaryTitle" : ""
          }  `}
        >
          {title}
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={` font-semibold  ${isHighlight ? "text-primaryTitle" : ""} `}
      >
        <a href={link} target="_blank">
          {title}
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`text-xs -rotate-45 duration-500 ease-out  pl-2 ${
              isHighlight ? "translate-x-1 -translate-y-1 " : ""
            }`}
          />
        </a>
      </div>
    </>
  );
}
