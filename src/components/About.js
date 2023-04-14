import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {SiCodeforces} from "react-icons/si"
import {SiCodechef} from "react-icons/si"
export default function About() {
  return (
    <div className='flex justify-center bg-[#0169cf] relative '>
        <div id="about" className='mt-10 w-[1000px] relative flex flex-col mb-10'>
          <h1 className='my-5 text-5xl font-mono'>
            <span className='text-white'>About </span><span className='text-[#fb923c]'>Me</span>
            </h1>
            <p id="aboutDescription" className='leading-loose text-white text-[1.1rem]'>
                Hi! Myself Varun Kolanu, CSE 1st year, from IIT (BHU) Varanasi. 
                <br />
                I like to learn new technologies, languages and cool stuff. I love to develop new things which help individuals practically. I have done some real-time projects.
                I also love doing Competitive Programming.
                <br />
                <span className='font-bold text-[#fb923c]'>Birth Place: </span>Hyderabad, India. <br />
                <span className='font-bold text-[#fb923c]'>Born: </span>6th Sep 2004 <br />
                <span className='font-bold text-[#fb923c]'>Hobbies: </span>Reading books, Playing chess, Sketching.
                <br /> Very excited to work with you! 😀 
            </p>
            <div id="profileLinks" className='relative right-6 flex justify-evenly my-6 w-[300px] text-2xl text-white'>
            <a href="https://github.com/Varun-Kolanu" target='blank'> <AiFillGithub /> </a>
            <a href="https://www.linkedin.com/in/varun-kolanu-3b10ba144/" target='blank'> <BsLinkedin/> </a>
            <a href="https://www.facebook.com/kolanu.varun" target='blank'> <BsFacebook/> </a>
            <a href="https://www.instagram.com/varun_kolanu/" target='blank'> <BsInstagram/> </a>
            <a href="https://codeforces.com/profile/Varun_Kolanu" target='blank'> <SiCodeforces/> </a>
            <a href="https://www.codechef.com/users/kolanuvarun" target='blank'> <SiCodechef/> </a>
            </div>
            
        </div>
    </div>
  )
}
