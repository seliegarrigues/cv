import React from "react";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
import Hobby from "../components/Hobby";
import Language from "../components/Language";
import Experience from "../components/Experience";
import Formation from "../components/Formation";

const cv = ({ cvData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 flex flex-col gap-6">
        <Contact />
        <Skill />
        <Language />
        <Hobby />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <Experience />
        <Formation />
      </div>
    </div>
  );
};

export default cv;
