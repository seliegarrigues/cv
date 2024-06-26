//src/page/Cv.jsx
import React from "react";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Hobby from "../components/Hobby";
import Language from "../components/Language";
import Experience from "../components/Experience";
import Education from "../components/Education";

// import other section components here

const cv = ({ cvData }) => {
  return (
    <div className=" flex cv-container">
     
      <div className=" flex-row cv-container">
        <Contact />
        <Skill />
        <Language />
        <Hobby />
      </div>

      <div className="cv-container flex-row">
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default cv;
