import React from 'react'
import {Link} from "react-scroll"

export default function Button(props) {
  return (
    <Link to={`${props.url}`} smooth={true} duration={1000} >
    <button type={props.type} id={props.id} className={`btn bg-orange-400 hover:bg-pink-500 hover:shadow-lg hover:shadow-red-600 transition-all duration-500 relative right-6 w-[${props.width}] h-${props.height} rounded-xl p-0 shadow-lg shadow-orange-600 active:translate-y-[6px] active:shadow-none font-semibold mx-6 font-mono text-white text-${props.text}`}><span>{props.btnText}</span></button>
    </Link>
  )
}
