import {
  faGithub,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import picExp from "../../assets/picExp.png";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Date from "../Date/index";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Meterial from "../Meterial";
import Description from "../Description";
import Tech from "../Tech";
export default function Experience() {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  return (
    <>
      <div className="">
        <div className="text-PrimaryTitle font-medium">Experience</div>
        <div
          className={`grid grid-cols-[25%_75%] py-6 px-2 transition-all ${
            isMouseEnter["exp1"] ? "bg-blue-300  rounded-md" : ""
          } `}
          onMouseEnter={() => setIsMouseEnter({ exp1: true })}
          onMouseLeave={() => setIsMouseEnter({ exp1: false })}
        >
          <div>
            <Date isHighlight={isMouseEnter["exp1"]}> 2022-2023</Date>
            <Picture picture={picExp} title="PortFolio" />
          </div>
          <div className="grid gap-y-4">
            <TitleLink
              title="PortFolio"
              isHighlight={isMouseEnter["exp1"]}
              link="https://thiti.dev/blog/7193/"
            />

            <div className="flex gap-4 text-xl">
              <Meterial icon={faGithub} link="https://thiti.dev/blog/7193/" />
              <Meterial icon={faYoutube} link="https://thiti.dev/blog/7193/" />
            </div>
            <Description
              desc="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution"
            />
            <div>
              <Tech
                isHighlight={isMouseEnter["exp1"]}
                data={["react", "test"]}
              />
              {/* <div className="flex gap-4 text-sm">
                <div
                  className={`bg-blue-400 text-blue-800 px-2 py-1 rounded-md  ${
                    isMouseEnter["exp1"] ? "text-red-900" : ""
                  }`}
                >
                  React
                </div>
                <div
                  className={`bg-blue-400 text-blue-800 px-2 py-1 rounded-md  ${
                    isMouseEnter["exp1"] ? "text-red-900" : ""
                  }`}
                >
                  Tailwind
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-[25%_75%] py-6 px-2 transition-all ${
            isMouseEnter["exp2"] ? "bg-blue-300  rounded-md" : ""
          } `}
          onMouseEnter={() => setIsMouseEnter({ exp2: true })}
          onMouseLeave={() => setIsMouseEnter({ exp2: false })}
        >
          <div>
            <div>
              <span
                className={`text-sm ${
                  isMouseEnter["exp2"] ? "text-red-800" : ""
                }`}
              >
                2022-2023
              </span>
            </div>
            <div>
              <img
                src={picExp}
                className="w-5/6 rounded-md border-2 border-blue-500"
              />
            </div>
          </div>
          <div className="grid gap-y-4">
            <div className={` ${isMouseEnter["exp2"] ? "text-red-800" : ""} `}>
              PortFolio{" "}
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className={`text-xs -rotate-45 duration-500 ease-out ${
                  isMouseEnter["exp2"] ? "translate-x-1 -translate-y-1 " : ""
                }`}
              />
            </div>
            <div className="flex gap-4 text-xl">
              <a href="http://">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`hover:scale-110 `}
                />
              </a>
              <a href="http://" target="_blank">
                <FontAwesomeIcon icon={faMedium} className="hover:scale-110" />
              </a>
              <a href="http://" target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="hover:scale-110" />
              </a>
            </div>
            <div className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution
            </div>
            <div>
              <div className="flex gap-4 text-sm">
                <div
                  className={`bg-blue-400 text-blue-800 px-2 py-1 rounded-md  ${
                    isMouseEnter["exp2"] ? "text-red-900" : ""
                  }`}
                >
                  React
                </div>
                <div
                  className={`bg-blue-400 text-blue-800 px-2 py-1 rounded-md  ${
                    isMouseEnter["exp2"] ? "text-red-900" : ""
                  }`}
                >
                  Tailwind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
