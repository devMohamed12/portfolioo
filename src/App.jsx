import React, { useState } from "react";
import "./App.css";
import { projectsData, skillsArray } from "./data";
import {
  AboutME,
  Skills,
  Projects,
  ContactUs,
  TitleMarquee,
  Circlee,
} from "./export.js";

function App() {
  const sections = [
    <AboutME />,
    <Skills data={skillsArray} />,
    <Projects data={projectsData} />,
    <ContactUs />,
  ];
  const [sectionIndex, setSectionIndex] = useState(0); // Index to track current section

  const sectionsTitles = [" About ME ", " skills ", " projects ", " contact"];

  // bg-[#ECECEC;]

  return (
    <div
      className=" flex justify-between flex-col lg:flex-row gap-9 lg:gap-2 lg:pl-10 pl-5  mx-auto  
      bg-[#ebeced] text-black lg:min-h-screen lg:py-10"
    >
      <div className="lg:w-4/5">
        <TitleMarquee data={sectionsTitles[sectionIndex]} dir={"right"} />

        <div>{sections[sectionIndex]}</div>

        <TitleMarquee data={sectionsTitles[sectionIndex]} dir={"left"} />
        <div className="btn-container">
          {/* Next button */}
          <button
            className={`block next-btn text-xl rounded-lg py-3 px-6  outline-none text-white mr-5 ${
              sectionIndex >= sections.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-sky-700"
            }`}
            onClick={() =>
              setSectionIndex((prev) =>
                prev < sections.length - 1 ? prev + 1 : 0
              )
            }
            disabled={sectionIndex >= sections.length - 1}
          >
            next
          </button>

          {/* Previous button */}
          <button
            className={`block prev-btn text-xl rounded-lg py-3 px-6 outline-none text-white ${
              sectionIndex <= 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-teal-600"
            }`}
            onClick={() => setSectionIndex((prev) => (prev > 0 ? prev - 1 : 0))}
            disabled={sectionIndex <= 0}
          >
            prev
          </button>
        </div>
      </div>

      {/* ============================================ */}
      {/* */}
      <div className="overflow-hidden  lg:w-1/5  max-lg:h-[25vh] max-lg:mt-10">
        <Circlee
          sectionIndex={sectionIndex}
        />
      </div>
    </div>
  );
}

export default App;
