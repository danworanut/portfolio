import React from "react";
import About from "../../component/About";
import ContentContainer from "../../component/ContentContainer";
import { data as expData } from "../../contents/experience";
import { data as projectData } from "../../contents/project";
import { data as eduData } from "../../contents/exducation";
import Footer from "../Footer";

export default function Right({ onInitial }) {
  return (
    <div className="grid gap-y-14 lg:gap-y-40 px-3">
      {/* <About title="About" onInitial={onInitial} /> */}
      <ContentContainer
        title="Education"
        data={eduData}
        onInitial={onInitial}
      />
      <ContentContainer
        title="Experience"
        data={expData}
        onInitial={onInitial}
      />
      <ContentContainer
        title="Project"
        data={projectData}
        onInitial={onInitial}
      />
      <Footer />
    </div>
  );
}
