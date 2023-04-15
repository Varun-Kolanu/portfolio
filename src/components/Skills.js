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
      <div id="skillBox" className="w-[1000px] my-10">
        <h1 className="my-8 text-[2.5rem] relative left-9 font-mono">
          <span>My </span>
          <span className="text-orange-500">Skills</span>
        </h1>

        <div className="container flex flex-wrap justify-evenly">
          <SkillCard
            img={
            <><AiFillHtml5 style={{ color: "#e96228" }} />
            <DiCss3 style={{ color: "#36b7f0" , transitionDelay: "200ms"}} id="html" />
            </>}
            skill="Html + CSS"
          />
          <SkillCard
            img={<SiTailwindcss style={{ color: "#36b7f0" , transitionDelay: "400ms"}} />}
            skill="Tailwind CSS" id="tail"
          />
          <SkillCard
            img={<SiJavascript style={{ color: "#efd81d" , transitionDelay: "600ms" }} />}
            skill="JavaScript" id="js"
          />
          <SkillCard
            img={<DiReact style={{ color: "#00d5f7" , transitionDelay: "800ms" }} />}
            skill="React JS" id="react"
          />
          <SkillCard
            img={<DiNodejs style={{ fontSize: "5rem", color: "#404137" , transitionDelay: "1000ms"}} />}
            skill="Node JS" id="node"
          />
          <SkillCard img={<SiExpress />} style={{ transitionDelay: "1200ms"}}  skill="Express JS" />
          <SkillCard
            img={<DiMongodb style={{ color: "#00e661" , transitionDelay: "1400ms" }} />}
            skill="Mongo DB" id="mongo"
          />
          <SkillCard
            img={<FaPython style={{ color: "#f7cc40" , transitionDelay: "1600ms"}} />}
            skill="Python" id="py"
          />
        </div>
      </div>
      </div>
  );
}
