import React from "react";

export default function Tech({ isHighlight, data }) {
  return (
    <>
      <div className="flex gap-4 text-sm">
        {data.map((e, i) => (
          <div
            key={`${e}-tech-${i}`}
            className={`bg-blue-100 text-bg-primaryAccent px-2 py-1 rounded-md ${
              isHighlight ? "text-primaryTitle" : ""
            }`}
          >
            {e}
          </div>
        ))}
      </div>
    </>
  );
}
