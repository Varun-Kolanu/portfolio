import React from 'react'

export default function SkillCard(props) {
  return (
    <div className="skillCard w-[200px] h-[200px] shadow-xl shadow-gray-500 mb-9 flex flex-col items-center justify-evenly bg-gradient-to-br from-blue-500 from-30% to-indigo-600 rounded-[24px] hover:scale-105 transition-all duration-500">
        <div className="skillLogo text-5xl">
            {props.img}
        </div>
        <div className="skillName text-lg text-white">
            {props.skill}
        </div>
    </div>
  )
}
