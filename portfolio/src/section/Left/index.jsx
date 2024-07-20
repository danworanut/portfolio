import React from "react";
import Header from "../../component/Header";
import Navbar from "../../component/Navbar";
import Contact from "../../component/Contact";

export default function Left() {
  return (
    <div>
      <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[85vh] px-3">
        <div className="flex flex-col gap-2">
          <Header />
        </div>

        <div className="flex flex-col gap-4 font-semibold">
          <Navbar />
        </div>
        <div className="flex items-end gap-4 text-2xl ">
          <Contact />
        </div>
      </div>
    </div>
  );
}
