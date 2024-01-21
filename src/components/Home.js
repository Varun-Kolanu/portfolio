import React from "react";
import introImg from "../introImg.png";
import ContactMeBtn from "./ContactMeBtn.js";
import ButtonSecondary from "./ButtonSecondary.js";

export default function Home() {
  return (
    <div
      id="home"
      className="pt-20 sm:h-[130vh] md:h-[100vh] relative flex md:flex-row sm:flex-col sm:items-center md:items-start justify-center bg-[#0169ca]"
    >
      <div
        id="home"
        className="w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] md:h-[92vh] md:grid md:grid-flow-row md:self-end md:grid-cols-2 flex flex-col-reverse sm:h-[130vh] md:justify-items-center sm:items-center sm:justify-center"
      >
        <div
          id="intro"
          className="hide sm:pt-10  relative lg:bottom-12 text-white sm:w-[500px]  lg:w-[520px] md:w-[400px] ml-4 mb-10"
        >
          <div id="hi" className="text-[1.2rem] sm:text-[1.5rem]">
            Hi There! 👋
          </div>
          <div id="name" className="text-[2.8rem] sm:text-[3.5rem] font-mono">
            Myself <span className="text-orange-400">Varun</span>{" "}
          </div>
          <div id="description" className="font-mono md:text-sm text-[15px]">
            I'm a Deve-love-per, transforming ideas into high-quality and
            functional Web Projects, on time and in budget
          </div>

          <div id="button" className="flex justify-center mt-4">
            <ContactMeBtn
              type="button"
              id="homebtn"
              btnText="Contact Me"
              width="100%"
              url="contact"
              height="9"
              text="[16px]"
              hidden="block"
            />
            <a href="/Documents/Resume.docx" download="Resume_Varun_Kolanu.docx">
              <ButtonSecondary id="cv" type="button" btnText="Download CV" width="50%" />
            </a>
          </div>
        </div>
        <div
          id="introImgDiv"
          className="sm:w-[70%] md:w-[90%] lg:w-[100%] md:left-3 hide flex items-center justify-center relative"
        >
          <img
            src={introImg}
            alt="Developer"
            id="introImg"
            className="w-[120%]"
          />
        </div>
      </div>
    </div>
  );
}
