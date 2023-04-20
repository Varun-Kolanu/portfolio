import React from "react";
import ProjectCard from "./ProjectCard";
import SnakeGame from "../SnakeGameImg.jpg";
import ButtonPrimary from "./ButtonPrimary";

export default function Projects() {
  return (
    <div id="projects" className="flex justify-center bg-[#0088ff]">
      <div
        id="projectBox"
        className="w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] p-10"
      >
        <h1 className="my-5 text-4xl sm:text-5xl font-mono relative sm:left-14 inline-block">
          <span className="text-white">My </span>
          <span className="text-[#fb923c]">Projects</span>
        </h1>
        <div
          id="projectCardContainer"
          className="grid lg:grid-cols-2 grid-cols-1 justify-items-center "
        >
          <ProjectCard
            id="tourism"
            btnId="tourismSec"
            img="https://varun-kolanu.github.io/Tourism-Website/tourism.html"
            desc="TraWorld - Tourism Website"
            secondary="https://github.com/Varun-Kolanu/Tourism-Website"
            primaryUrl="https://varun-kolanu.github.io/Tourism-Website/tourism.html"
          />
          <ProjectCard
            id="textutils"
            btnId="textUtilsSec"
            img="https://varun-kolanu.github.io/TextUtilsBuild/"
            desc="TextUtils - Text Utilities Website"
            secondary="https://github.com/Varun-Kolanu/TextUtils"
            primaryUrl="https://varun-kolanu.github.io/TextUtils/"
          />
          <ProjectCard
            id="smartlearn"
            btnId="smartLearnSec"
            img="https://varun-kolanu.github.io/Tuitions/Tuitions.html"
            desc="SmartLearn - Tuitions Website"
            secondary="https://github.com/Varun-Kolanu/Tuitions"
            primaryUrl="https://varun-kolanu.github.io/Tuitions/Tuitions.html"
          />

          <div
            id="snake"
            className="projectCard w-[300px] lg:w-[370px] md:w-[500px] sm:w-[400px] m-5 flex flex-col items-center rounded-3xl bg-gradient-to-br from-blue-400 from-30% to-blue-600 hide"
          >
            <img
              src={SnakeGame}
              alt="Snake"
              className="md:w-[480px] lg:w-[350px]  h-[400px] sm:w-[380px] rounded-3xl relative top-2"
            ></img>
            <p className="text-center text-white mt-5 text-lg">
              Snake Game in Python
            </p>
            <div className="projectBtns flex my-5">
              <a
                href="https://github.com/Varun-Kolanu/Snake_Game"
                target="blank"
              >
                <ButtonPrimary
                  type="button"
                  btnText="Github Repo"
                  width="80%"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
