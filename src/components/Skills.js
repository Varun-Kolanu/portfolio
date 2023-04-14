import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div id="skillPage" className="flex justify-center">
      <div id="skillBox" className="w-[1000px] border-2 my-10">
        <h1 className="my-8 text-[2.5rem] relative left-9 font-mono">
        <span className="">My </span>
        <span className="text-orange-500">Skills</span>
        </h1>

        <div className="container flex flex-wrap justify-evenly">
        <div className="skillCard w-[200px] h-[200px] shadow-xl shadow-gray-500 mb-9 flex flex-col items-center justify-evenly bg-gradient-to-br from-blue-500 from-30% to-indigo-600 rounded-[24px]">
        <div className="skillLogo text-5xl">
            <div id="htmlCSs" className="flex"><AiFillHtml5 style={{color: "#e96228"}}/> &nbsp; <DiCss3 style={{color: "#36b7f0"}}/></div>
        </div>
        <div className="skillName text-white">
            Html + CSS
        </div>
    </div>          
          <SkillCard img={<SiTailwindcss  style={{color: "#36b7f0"}}/>} skill="Tailwind CSS" />
          <SkillCard img={<SiJavascript style={{color: "#efd81d"}}/>} skill="JavaScript" />
          <SkillCard img={<DiReact style={{color: "#00d5f7"}}/>} skill="React JS" />
          <SkillCard img={<DiNodejs style={{fontSize: "5rem", color:"#404137"}}/>} skill="Node JS" />
          <SkillCard img={<SiExpress />} skill="Express JS" />
          <SkillCard img={<DiMongodb style={{color: "#00e661"}}/>} skill="Mongo DB" />
          <SkillCard img={<FaPython style={{color: "#f7cc40"}}/>} skill="Python" />
        </div>
      </div>
    </div>
  );
}
