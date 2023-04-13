import React from 'react'
import introImg from "../introImg.png"
import Button from './Button'
export default function Home() {
  return (
    <div className="h-[100vh] relative flex justify-center">
        <div id="home" className='w-[1000px] h-[92vh] self-end grid grid-flow-row grid-cols-2'>
            <div id="intro" className='pt-44 text-white'>
                <div id="hi" className='text-[1.5rem]'>Hi There! 👋</div>
                <div id="name" className='text-[3.5rem] font-mono'>Myself <span className='text-red-950'>Varun</span> </div>
                <div id="description" className='font-mono'>
                    I'm a Deve-love-per, transforming ideas into high-quality and functional Web Projects on time and budget
                </div>
                <div id="button" className='flex justify-center mt-4'>
                    <Button btnText="Contact"/>
                </div>
            </div>
            <div id="introImgDiv" className='flex items-center justify-center'>
                <img src={introImg} alt="Developer" id="introImg" className='rounded-[30%]'/>
            </div>
        </div>
    </div>
  )
}
