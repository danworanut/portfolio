import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Meterial({ icon, link }) {
  return (
    <>
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={icon} className={`hover:scale-110 `} />
      </a>
      {/* <a href={link}>
          <FontAwesomeIcon icon={faGithub} className={`hover:scale-110 `} />
        </a> */}
      {/* <a href="http://" target="_blank">
          <FontAwesomeIcon icon={faMedium} className="hover:scale-110" />
        </a>
        <a href="http://" target="_blank">
          <FontAwesomeIcon icon={faYoutube} className="hover:scale-110" />
        </a> */}
    </>
  );
}
