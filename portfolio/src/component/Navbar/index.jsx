import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div>
        <FontAwesomeIcon
          className="mr-2 text-PrimaryTitle"
          icon={faArrowAltCircleRight}
        />
        About
      </div>
      <div>Education</div>
      <div>Skill</div>
      <div>Experience</div>
      <div>Certificate</div>
    </>
  );
}
