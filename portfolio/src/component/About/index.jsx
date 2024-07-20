import React from "react";
import { data } from "../../contents/about";
export default function About() {
  return (
    <>
      <div className="space-y-4 ">
        <div className="text-PrimaryTitle font-medium">{data.title}</div>
        <div className="">{data.description}</div>
      </div>
    </>
  );
}
