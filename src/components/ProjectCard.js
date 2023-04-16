import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

export default function ProjectCard(props) {
  return (
    <div
      id={props.id}
      className="projectCard lg:w-[370px] md:w-[500px] sm:w-[380px] bg-gradient-to-br from-blue-400 from-30% to-blue-600 my-4 sm:m-5 flex flex-col items-center rounded-3xl hide"
    >
      <iframe
        src={props.img}
        title="Iframe"
        className="md:w-[480px] lg:w-[350px] sm:w-[380px] h-[400px] rounded-3xl relative top-2"
      ></iframe>
      <p className="text-center text-white mt-5 text-lg">{props.desc}</p>
      <div className="projectBtns flex my-5">
        <a href={props.primaryUrl} target="blank">
          <ButtonPrimary type="button" btnText={props.text} width="100%" />
        </a>
        <a href={props.secondary} target="blank">
          <ButtonSecondary type="button" btnText="Github Repo" width="100%" />
        </a>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  display: "visible",
  text: "Open Website",
};