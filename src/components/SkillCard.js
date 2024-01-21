import React from "react";

export default function SkillCard(props) {
  return (
    <div
      className="skillCard w-40 h-40 my-3 mx-1 shadow-xl shadow-gray-500 sm:mx-3 sm:my-5 flex flex-col items-center justify-evenly bg-gradient-to-br from-blue-500 from-30% to-indigo-600 rounded-[24px] hover:scale-105 hide"
      id={props.id}
    >
      <div className="skillLogo flex">{props.img}</div>
      <div className="skillName text-md text-white">{props.skill}</div>
    </div>
  );
}
