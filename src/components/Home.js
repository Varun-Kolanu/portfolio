import React from "react";
import introImg from "../introImg.png";
import ContactMeBtn from "./ContactMeBtn.js";

export default function Home() {
  return (
    <div
      id="home"
      className="h-[100vh] relative flex justify-center bg-[#0169ca]"
    >
      <div
        id="home"
        className="w-[1000px] h-[92vh] self-end grid grid-flow-row grid-cols-2"
      >
        <div id="intro" className="hide pt-44 text-white w-[520px]">
          <div id="hi" className="text-[1.5rem]">
            Hi There! 👋
          </div>
          <div id="name" className="text-[3.5rem] font-mono">
            Myself <span className="text-orange-400">Varun</span>{" "}
          </div>
          <div id="description" className="font-mono">
            I'm a Deve-love-per, transforming ideas into high-quality and
            functional Web Projects, on time and in budget
          </div>
          
            <div id="button" className="flex justify-center mt-4">
            <ContactMeBtn type="button" id="homebtn" btnText="Contact Me" width="100%" url="contact" height="9" text="[16px]"/>
            </div>
          
        </div>
        <div
          id="introImgDiv"
          className=" w-[70%] hide flex items-center justify-center relative left-6"
        >
          <img
            src={introImg}
            alt="Developer"
            id="introImg"
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
}
