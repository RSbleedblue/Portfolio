import React from "react";

const ProjectTags = ({ tags }) => {
  return (
    <div className="rounded-lg flex gap-2 flex-wrap  items-center justify-center">
      {tags.map((tag, index) => (
        <span key={index} className="text-[10px] font-medium text-gray-100 rounded-full bg-emerald-800 p-2 hover:bg-emerald-600">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
