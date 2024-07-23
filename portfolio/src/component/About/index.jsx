import React from "react";
import { data } from "../../contents/about";
import { useEffect } from "react";

export default function About({ title = "", onInitial }) {
  const section_id = `${title}-section`;

  useEffect(() => {
    onInitial(section_id);
  }, []);

  return (
    <>
      <div className="space-y-4 px-2 scroll-mt-16" id={section_id}>
        <div className="text-PrimaryTitle font-medium pt-2">
          <span>{data.title}</span>
        </div>
        <div className="">{data.description}</div>
      </div>
    </>
  );
}
