import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Left from "./section/Left";
import Right from "./section/Right";
import "../src/index.css";
function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navBarItems, setNavBarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  //ดึงข้อมูลฝั่งขวา
  const addSetionIds = (sectionIds) => {
    //ดึง section_id ฝั่งขวา
    const elementsId = document.getElementById(sectionIds).id;
    setSectionIds((prev) => [...new Set([...prev, elementsId])]);

    //ดึง section_name ฝั่งขวา
    const elementTitle =
      document.getElementById(elementsId).childNodes[0].textContent;

    //สร้าง obj เก็บ
    const obj = { title: elementTitle, sectionId: elementsId };
    setNavBarItems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = () => {
    console.log(scroll);
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index];
      const elementOffsetTop = document
        .getElementById(element)
        .getClientRects()[0].y;
      const height =
        document.getElementById(element).getClientRects()[0].height * 0.5;

      const viewHeight = window.innerHeight * 0.3;

      if (elementOffsetTop <= 0) {
        if (elementOffsetTop + height) {
          setCurrentSection(element);
        }
      } else if (elementOffsetTop > 0 && elementOffsetTop < viewHeight) {
        setCurrentSection(element);
      }
    }
  };

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);
  return (
    <>
      <div className="mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%] mt-12 font-poppins">
        <Left navBarItems={navBarItems} currentSection={currentSection} />
        <Right onInitial={addSetionIds} />
      </div>
    </>
  );
}

export default App;
