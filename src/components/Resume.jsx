import React from "react";
import ResumePDF from "../assets/Zafar-Resume-FSD-2022-23.pdf";

const Resume = () => {
  return (
    <div className="bg-[#0a192f]  border-[#0a192f] border-2">
      <button className="text-white border-2 hover:bg-emerald-600 hover:border-emerald-600 px-4 py-2 my-2 mx-auto flex items-center bg-[#0a192f] shadow-lg shadow-[#54749b]">
        <a href={ResumePDF} target="_blank" rel="noreferrer">
          Download CV
        </a>{" "}
      </button>
    </div>
  );
};

export default Resume;
