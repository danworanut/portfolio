import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <>
      <div>
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryTitle transition-all"
          icon={faGithub}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className="hover:scale-125  hover:text-primaryTitle transition-all"
          icon={faEnvelope}
        />
      </div>
    </>
  );
}
