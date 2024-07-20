import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Left from "./section/Left";
import Right from "./section/Right";

function App() {
  return (
    <>
      <div className="mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%] mt-12">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
