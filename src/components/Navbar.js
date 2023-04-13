import React from 'react'
import logo from "../V.png"
export default function Navbar() {
  return (
        <nav id="navbar" className='fixed h-14 flex items-center w-full z-10'>
            <img src={logo} alt="V" className='h-12 absolute top-2 left-2 cursor-pointer'/>
            <div id="navmenu" className='absolute right-60'>
                <ul className='flex'>
                    <li className='px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-500 cursor-pointer transition-all duration-500'>HOME</li>
                    <li className='px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-500 cursor-pointer transition-all duration-500'>ABOUT</li>
                    <li className='px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-500 cursor-pointer transition-all duration-500'>SKILLS</li>
                    <li className='px-8 text-white font-bold hover:underline hover:underline-offset-4 hover:text-orange-500 cursor-pointer transition-all duration-500'>MY PROJECTS</li>
                </ul>
            </div>
        </nav>
  )
}
