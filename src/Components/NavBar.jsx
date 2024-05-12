import React, { useState } from "react";
import { FaHome, FaTimes } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { MdContactPage } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const NavBar = ({ handleNavClick, isExpanded }) => {
  return (
    <aside className={`flex shadow-xl flex-col items-center relative  transition-all delay-500 justify-between w-${isExpanded ? "[16%]" : "14"}`}> 
      <div className="flex flex-col items-center mt-10 p-4">
        {isExpanded ? (
          <>
            <div className="w-28 h-28 rounded-full shadow-xl cursor-pointer hover:bg-green-300 transition duration-300 items-center flex justify-center">
              <img
                src="https://avatars.githubusercontent.com/u/48222792?v=4"
                className="w-[90%] h-[90%] rounded-full "
                alt="Profile Picture"
              />
            </div>
            <p className="text-gray-700 font-semibold text-2xl mt-2">
              Rivansh Srivastava
            </p>
            <p className="font-mono text-sm text-gray-600">
              Full Stack Developer
            </p>
                
            <FaChevronCircleLeft className="text-emerald-600 cursor-pointer hover:text-emerald-300 text-2xl mt-4" onClick={handleNavClick}></FaChevronCircleLeft>
              
          </>
        ) : (
          <>
            <div className="w-14 h-14 rounded-full shadow-xl cursor-pointer hover:bg-green-300 transition duration-300 items-center flex justify-center">
              <img
                src="https://avatars.githubusercontent.com/u/48222792?v=4"
                className="w-[90%] h-[90%] rounded-full "
                alt="Profile Picture"
              />
              
            </div>
            <FaChevronCircleRight  className="text-emerald-600 cursor-pointer hover:text-emerald-300 text-2xl mt-10" onClick={handleNavClick}></FaChevronCircleRight>
          </>
        )}
      </div>
      <ul className="flex flex-col gap-6 text-3xl text-gray-600 w-full">
        <li
          className="flex gap-4 items-center justify-center hover:bg-emerald-950 hover:text-gray-100 hover:shadow-xl rounded-r-xl p-2 transition-all cursor-pointer"
        >
          {isExpanded ? (
            <>
              <FaHome />
              <span className="text-lg font-system">About</span>
            </>
          ) : (
            <FaHome className="text-emerald-600 text-2xl " />
          )}
        </li>
        <li  className="flex gap-4 items-center justify-center hover:bg-emerald-950 hover:text-gray-100  rounded-r-xl  hover:shadow-xl p-2 transition-all cursor-pointer">
          {isExpanded ? (
            <>
              <FaProjectDiagram />
              <span className="text-lg font-system">Project</span>
            </>
          ) : (
            <FaProjectDiagram className="text-emerald-600 text-2xl" />
          )}
        </li>
        <li  className="flex gap-4 items-center justify-center hover:bg-emerald-950 hover:text-gray-100  rounded-r-xl  hover:shadow-xl p-2 transition-all cursor-pointer">
          {isExpanded ? (
            <>
              <PiCertificateFill />
              <span className="text-lg font-system">Certificates</span>
            </>
          ) : (
            <PiCertificateFill className="text-emerald-600 text-2xl" />
          )}
        </li>
        <li className="flex gap-4 items-center justify-center hover:bg-emerald-950 hover:text-gray-100  rounded-r-xl  hover:shadow-xl p-2 transition-all cursor-pointer">
          {isExpanded ? (
            <>
              <MdContactPage />
              <span className="text-lg font-system">Contacts</span>
            </>
          ) : (
            <MdContactPage className="text-emerald-600 text-2xl" />
          )}
        </li>
      </ul>
      {
        isExpanded ? (
            <>
                <ul className="flex w-[90%] items-center justify-center gap-2 text-2xl text-gray-500 mb-10">
        <li className="hover:text-gray-900 cursor-pointer">
          <FaInstagram />
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <FaLinkedin />
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <FaTwitter />
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <FaGithub />
        </li>
      </ul>
            </>
        ) : 
        (
            <div className="h-10">
            </div>
        )
      }
    </aside>
  );
};

export default NavBar;
