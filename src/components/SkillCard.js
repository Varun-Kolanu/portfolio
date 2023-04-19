import React from "react";

export default function SkillCard(props) {
  return (
    <div
      className="skillCard w-[150px] h-[150px] my-5 mx-1 sm:w-[220px] sm:h-[220px] shadow-xl shadow-gray-500 sm:mx-3 sm:my-5 flex flex-col items-center justify-evenly bg-gradient-to-br from-blue-500 from-30% to-indigo-600 rounded-[24px] hover:scale-105 hide"
      id={props.id}
    >
      <div className="skillLogo text-4xl sm:text-5xl flex">{props.img}</div>
      <div className="skillName sm:text-lg text-white">{props.skill}</div>
    </div>
  );
}
