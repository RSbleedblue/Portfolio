import React from "react";
import ProjectData from "../../utils/projects";
import ProjectTags from "./ProjectTags";
import { FaEye } from "react-icons/fa";

const Projects = ({ isExpanded }) => {
  return (
    <div className={`h-screen flex flex-col items-start gap-10 w-full transition-all p-6 ${isExpanded ? 'ml-[16%]' : 'ml-14'}`}>
      <div className="bg-white p-4 rounded-full">
        <label className="text-[80px] text-gray-700">Projects</label>
      </div>
      <div className="w-full flex flex-wrap rounded-lg shadow-xl gap-4 justify-center">
        {ProjectData.map((ele, idx) => (
          <div key={idx} className="w-[23%] rounded-lg shadow-xl hover:shadow-slate-500 transition-all overflow-hidden flex flex-col items-center cursor-pointer justify-between">
            <div className="w-full h-[150px] overflow-hidden">
              <img
                src={ele.imgUrl}
                className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105 hover:opacity-90"
                alt={`${ele.title} Project`}
              />
            </div>
            <div className="p-2 text-2xl text-emerald-900 font-semibold text-center">
              {ele.title}
            </div>
            <p className="text-[10px] p-2 text-justify h-20 mb-2">
              {ele.description}
            </p>
            <div className="flex flex-wrap w-full items-center justify-center mt-2 max-h-12 h-24 mb-4">
              <ProjectTags tags={ele.tags} />
            </div>
            <div className="flex w-full p-2 mt-4 items-center justify-center gap-4 bg-emerald-800 hover:bg-emerald-600 transition-all">
              <FaEye className="text-xl text-white"/>
              <a href={ele.preview} className="text-white text-lg" target="_blank" rel="noopener noreferrer">
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
