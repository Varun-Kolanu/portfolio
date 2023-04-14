import React from "react";
import Button from "./Button";
import {RiWhatsappFill} from "react-icons/ri"
import {CgMail} from "react-icons/cg"

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex h-[600px] justify-center bg-gradient-to-br from-blue-500 from-20% to-blue-800"
    >
      <div id="contactBox" className="w-[1000px]">
        <h1 className="my-5 text-5xl font-mono">
          <span className="text-white">Contact </span>
          <span className="text-[#fb923c]">Me</span>
        </h1>
        <div id="contactContainer" className="grid grid-flow-row grid-cols-2">
            <form action="backend.js" className="flex flex-col relative top-5 text-white">
              <input type="text" id="name" placeholder="Your Name" className="bg-transparent my-6 border-b-2 border-b-white focus:outline-none"/>
              <input type="tel" id="phone" placeholder="Mobile No." className="bg-transparent my-6 border-b-2 border-b-white focus:outline-none"/>
              <input type="email" id="email" placeholder="Email Id" className="bg-transparent  my-6 border-b-2 border-b-white focus:outline-none"/>
              <textarea name="message" id="message" rows="3" cols="10" placeholder="Message..." className="bg-transparent my-10 border-b-2 border-b-white focus:outline-none" ></textarea>
              <div className="btns flex justify-evenly">
              <Button type="submit" btnText="Submit"/>
              <Button type="reset" btnText="Reset"/>
              </div>
            </form>
            <div id="rightContact" className="pl-52">
              <div id="mailSend" className="rounded-lg drop-shadow-lg bg-gradient-to-br from-blue-500 from-30% to-indigo-600 flex flex-col justify-evenly items-center my-5 h-[150px]">
                <CgMail className="text-4xl text-red-800"/>
                <span className="text-gray-300 font-bold">Gmail: </span><span className="text-gray-300"> kolanuvarun739@gmail.com</span>
                <a href="mailto:kolanuvarun739@gmail.com" target="blank" className="text-blue-900 underline font-bold">Send Mail</a>
              </div>
              <div id="wtspSend" className="rounded-lg drop-shadow-lg bg-gradient-to-br from-blue-500 from-30% to-indigo-600 flex flex-col justify-evenly items-center my-5 h-[150px]">
                <RiWhatsappFill className="text-2xl text-[#50cc5d]"/>
                <span className="text-gray-300 font-bold">Whatsapp: </span><span className="text-gray-300"> +91-9603138312</span>
                <a href="https://api.whatsapp.com/send?phone=9603138312" target="blank" className="text-blue-900 underline font-bold">Send Message</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
