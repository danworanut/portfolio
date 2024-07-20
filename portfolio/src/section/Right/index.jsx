import React from "react";
import About from "../../component/About";
import Experience from "../../component/Experience";

export default function Right() {
  return (
    <div className="grid gap-y-40 px-3">
      <About />
      <Experience />

      <div>Project</div>
      <div>Experience</div>
    </div>
  );
}
