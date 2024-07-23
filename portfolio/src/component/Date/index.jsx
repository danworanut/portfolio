import React from "react";
import { children } from "react";

export default function Date({ isHighlight, children }) {
  return (
    <>
      <div>
        <span className={`text-sm ${isHighlight ? "text-primaryTitle" : ""}`}>
          {children}
        </span>
      </div>
    </>
  );
}
