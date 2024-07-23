import React from "react";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import Contact from "../../component/Contact";

export default function Left({ navBarItems, currentSection }) {
  return (
    <>
      <div className="px-5 mb-14 lg:mb-0">
        <div className="lg:sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[81.5vh] ">
          <div className="flex flex-col gap-3">
            <Header />
          </div>

          <Navbar navBarItems={navBarItems} currentSection={currentSection} />

          <div className="flex items-end gap-4 text-2xl ">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
