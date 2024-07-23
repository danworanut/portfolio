import React from "react";

export default function Picture({ picture, title }) {
  if (!picture) return null;
  return (
    <>
      <div>
        <img
          src={picture}
          alt={title}
          className="w-5/6 rounded-md border-2 border-bg-primaryBg mt-6"
        />
      </div>
    </>
  );
}
