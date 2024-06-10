import React from "react";
import SkillCard from "./SkillCard";
import SkillJson from "../assets/Skills.json";

export default function Skills() {
  return (
    <div id="skillPage" className="flex justify-center">
      <div
        id="skillBox"
        className=" my-5 w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] sm:my-10"
      >
        <h1 className=" mb-3 sm:my-8 text-[2.5rem] relative left-9 font-mono inline-block">
          <span>My </span>
          <span className="text-orange-500">Skills</span>
        </h1>

        <div className="skillContainer grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4  justify-items-center">
          {SkillJson.map((sk, index) => (
            <SkillCard
              img={
                <img src={`/Images/${sk}.svg`} className="w-12 h-12" alt={sk} />
              }
              skill={sk}
              id={sk}
              key={sk}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
