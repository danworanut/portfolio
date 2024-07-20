import React from "react";

export default function Picture({ picture, title }) {
  return (
    <>
      <div>
        <img
          src={picture}
          alt={title}
          className="w-5/6 rounded-md border-2 border-blue-500"
        />
      </div>
    </>
  );
}
