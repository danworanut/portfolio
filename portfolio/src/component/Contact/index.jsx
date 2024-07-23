import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <>
      <a href="https://github.com/danworanut" target="_blank">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle transition-all"
          icon={faGithub}
        />
      </a>
      <a href="mailto:dan.woranut@gmail.com">
        <div>
          <FontAwesomeIcon
            className="hover:scale-125  hover:text-primaryTitle transition-all"
            icon={faEnvelope}
          />
        </div>
      </a>
    </>
  );
}
