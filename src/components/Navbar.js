import React from "react";
import logo from "../V.png";
import { Link } from "react-scroll";
import ContactMeBtn from "./ContactMeBtn";
export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 h-14 flex items-center w-[100vw] z-10 bg-[#0169ca] bg-opacity-80 "
    >
      <img
        src={logo}
        alt="V"
        className="h-12 absolute top-2 left-2 cursor-pointer"
      />
      <div
        id="navmenu"
        className="absolute lg:right-48 md:right-3 hidden md:block"
      >
        <ul className="flex items-center">
          <Link smooth={true} duration={900} to="home">
            <li
              id="homenav"
              className="px-8 text-orange-400 underline underline-offset-4 font-bold hover:underline hover:underline-offset-4 hover:text-orange-400 cursor-pointer transition-all duration-500"
            >
              HOME
            </li>
          </Link>
          <Link smooth={true} duration={900} to="about">
            <li
              id="aboutnav"
              className="px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-400 cursor-pointer transition-all duration-500"
            >
              ABOUT
            </li>
          </Link>
          <Link smooth={true} duration={900} to="skillPage">
            <li
              id="skillsnav"
              className="px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-400 cursor-pointer transition-all duration-500"
            >
              SKILLS
            </li>
          </Link>
          <Link smooth={true} duration={900} to="projects">
            <li
              id="projectsnav"
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
              style={{ display: "none" }}
              id="navbtn"
              text="[0px]"
              hidden="block"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}
