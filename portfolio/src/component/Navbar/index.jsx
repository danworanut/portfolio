import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const navs = [
  // { title: "About", sectionId: "About-section" },
  { title: "Education", sectionId: "Education-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
];

export default function Navbar({ navBarItems, currentSection }) {
  const [isMouseEnter, setisMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    // console.log(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  console.log(currentSection);
  return (
    <>
      <div className="hidden lg:flex flex-col justify-center font-semibold">
        {navBarItems.map((e, i) => (
          <div
            key={`nav-${e}-${i}`}
            onClick={() => handleClick(e.sectionId)}
            onMouseEnter={() => {
              setisMouseEnter({ [e.title]: true });
            }}
            onMouseLeave={() => ({ [e.title]: false })}
            className="cursor-pointer flex py-3"
          >
            <div className="">
              <FontAwesomeIcon
                className={`new-arrow   ${
                  currentSection === e.sectionId
                    ? " text-primaryTitle "
                    : isMouseEnter[e.title]
                    ? ""
                    : "hidden"
                }`}
                icon={faArrowRight}
              />
            </div>
            <div
              className={` ${
                isMouseEnter[e.title] || currentSection === e.sectionId
                  ? "translate-x-2"
                  : ""
              } duration-500 ease-out`}
            >
              {e.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
