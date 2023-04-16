import React from "react";
import { Link } from "react-scroll";
import ContactMeBtn from "./ContactMeBtn";

export default function Dropdown() {
  return (
    <div
      id="dropdown"
      className="fixed right-0 top-0 w-0 h-0 bg-[#0044cc] bg-opacity-60 rounded-bl-[30px] z-10 transition-all duration-500 text-[0px]"
    >
      <ul className="flex flex-col items-center justify-evenly h-[80%] relative top-12">
        <Link smooth={true} duration={900} to="home">
          <li
            id="drophomenav"
            className="px-8 text-orange-400 underline underline-offset-4 font-bold hover:underline hover:underline-offset-4 hover:text-orange-400 cursor-pointer transition-all duration-500"
          >
            HOME
          </li>
        </Link>
        <Link smooth={true} duration={900} to="about">
          <li
            id="dropaboutnav"
            className="px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-400 cursor-pointer transition-all duration-500"
          >
            ABOUT
          </li>
        </Link>
        <Link smooth={true} duration={900} to="skillPage">
          <li
            id="dropskillsnav"
            className="px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-400 cursor-pointer transition-all duration-500"
          >
            SKILLS
          </li>
        </Link>
        <Link smooth={true} duration={900} to="projects">
          <li
            id="dropprojectsnav"
            className="px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-400 cursor-pointer transition-all duration-500"
          >
            MY PROJECTS
          </li>
        </Link>
        <div className="navbtnspace w-32 h-9">
          <ContactMeBtn
            type="button"
            height="0"
            btnText="Contact Me"
            width="0"
            url="contact"
            id="dropbtn"
            text="[0px]"
            hidden="hidden"
          />
        </div>
      </ul>
    </div>
  );
}
