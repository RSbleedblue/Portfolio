import React from "react";
import Intelliscan from "../../assets/intelliscan.png";
import ProjectData from "../../utils/projects";
import ProjectTags from "./ProjectTags";
import { FaEye } from "react-icons/fa";

const Projects = ({ isExpanded }) => {
  return (
    <div className={`h-screen flex flex-col items-start gap-10 w-full transition-all p-6 ${isExpanded ? 'ml-[16%]' : 'ml-14'}`}>
      <div className="bg-white p-4 rounded-full">
        <label className="text-[80px] text-gray-700">Projects</label>
      </div>
      <div className="w-full flex flex-wrap p-4 rounded-lg shadow-xl gap-4">
        {ProjectData.map((ele, idx) => (
          <div key={idx} className="w-[18%] rounded-lg shadow-xl overflow-hidden flex flex-col items-center cursor-pointer justify-between">
            <img
              src={Intelliscan}
              className="w-full h-[150px] transform transition-all duration-300 hover:scale-105 hover:opacity-90"
              alt="Intelliscan Project"
            />
            <div className="p-2 text-2xl text-emerald-950 font-semibold">
                {ele.title}
            </div>
            <div className="flex flex-wrap w-full items-center justify-center mt-2">
              <ProjectTags tags={ele.tags} />
            </div>
            <div className="flex w-full p-2 mt-4 items-center justify-center gap-4 bg-emerald-800 hover:bg-emerald-600 transition-all ">
                <FaEye className="text-3xl text-white"/>
                <a href={`${ele.preview}`} className="text-white text-lg">
                    Preview</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
