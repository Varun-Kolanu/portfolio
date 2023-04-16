import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { RiWhatsappFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex sm:h-[650px] justify-center bg-gradient-to-br from-blue-500 from-20% to-blue-800"
    >
      <div
        id="contactBox"
        className=" hide w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] mx-2 sm:ml-4"
      >
        <h1 className="my-10 text-5xl font-mono">
          <span className="text-white">Contact </span>
          <span className="text-[#fb923c]">Me</span>
        </h1>
        <div
          id="contactContainer"
          className="grid grid-flow-row grid-cols-1 sm:grid-cols-2"
        >
          <form
            action="backend.js"
            className="flex flex-col relative top-5 text-white"
          >
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="bg-transparent my-6 border-b-2 border-b-white focus:outline-none placeholder-cyan-200 font-mono"
            />
            <input
              type="tel"
              id="phone"
              placeholder="Mobile No."
              className="font-mono bg-transparent my-6 border-b-2 border-b-white focus:outline-none placeholder-cyan-200"
            />
            <input
              type="email"
              id="email"
              placeholder="Email Id"
              className="font-mono bg-transparent  my-6 border-b-2 border-b-white focus:outline-none placeholder-cyan-200"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              cols="10"
              placeholder="Message..."
              className="font-mono bg-transparent my-10 border-b-2 border-b-white focus:outline-none placeholder-cyan-200"
            ></textarea>
            <div className="btns flex justify-center">
              <ButtonPrimary type="submit" btnText="Submit" width="100%" />
              <ButtonSecondary type="reset" btnText="Reset" width="100%" />
            </div>
          </form>

          <div
            id="rightContact"
            className="mt-12 sm:mt-0 flex flex-col items-center"
          >
            <div
              id="mailSend"
              className="rounded-lg drop-shadow-lg bg-gradient-to-br from-blue-500 from-30% to-indigo-600 flex flex-col justify-evenly items-center my-5 h-[150px] w-[250px] hover:scale-105 transition-all duration-500"
            >
              <CgMail className="text-4xl text-red-800" />
              <span className="text-gray-300 font-bold">Gmail: </span>
              <span className="text-gray-300"> kolanuvarun739@gmail.com</span>
              <a
                href="mailto:kolanuvarun739@gmail.com"
                target="blank"
                className="text-white font-bold underline underline-offset-2"
              >
                Send Mail
              </a>
            </div>

            <div
              id="wtspSend"
              className="rounded-lg drop-shadow-lg bg-gradient-to-br from-blue-500 from-30% to-indigo-600 flex flex-col justify-evenly items-center my-5 h-[150px] w-[250px] hover:scale-105 transition-all duration-500"
            >
              <RiWhatsappFill className="text-2xl text-[#50cc5d]" />
              <span className="text-gray-300 font-bold">Whatsapp: </span>
              <span className="text-gray-300"> +91-9603138312</span>
              <a
                href="https://api.whatsapp.com/send?phone=9603138312"
                target="blank"
                className="text-white font-bold underline underline-offset-2"
              >
                Send Message
              </a>
            </div>

            <div
              id="contactLinks"
              className="relative right-6 flex justify-evenly my-10 w-[300px] text-2xl text-white"
            >
              <a
                href="https://www.linkedin.com/in/varun-kolanu-3b10ba144/"
                target="blank"
              >
                {" "}
                <BsLinkedin />{" "}
              </a>
              <a href="https://www.facebook.com/kolanu.varun" target="blank">
                {" "}
                <BsFacebook />{" "}
              </a>
              <a href="https://www.instagram.com/varun_kolanu/" target="blank">
                {" "}
                <BsInstagram />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
