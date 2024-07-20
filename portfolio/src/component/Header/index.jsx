import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/header";
export default function Header() {
  return (
    <>
      <div className="text-3xl text-primaryTitle font-semibold ">
        {data.name}
      </div>
      <div className="text-PrimaryAccent font-semibold">{data.title}</div>
      <div className="text-sm w-5/6">{data.caption}</div>
      <div className="mt-4 ">
        <a href="{data.link}" target="_blank">
          <span className="bg-primaryTitle text-white py-2 px-4 rounded-md">
            {data.btnText}
            <FontAwesomeIcon
              className="ml-2 animate-bounce"
              icon={faDownload}
            />
          </span>
        </a>
      </div>
    </>
  );
}
