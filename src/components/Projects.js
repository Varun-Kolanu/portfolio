import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsJson from "../assets/Projects.json";
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
          {
            ProjectsJson.map((project, index) => (
              <ProjectCard
                id={project.title}
                btnId={`${project.title}Sec`}
                img={project.site_url}
                desc={project.title}
                secondary={project.github_url}
                primaryUrl={project.site_url}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
