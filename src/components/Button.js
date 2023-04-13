import React from 'react'

export default function Button(props) {
  return (
    <button className='btn bg-orange-400 hover:bg-pink-500 hover:shadow-lg hover:shadow-red-600 transition-all duration-700 relative right-6 w-[20%] h-9 rounded-xl p-0 shadow-lg shadow-orange-600  active:translate-y-[6px] active:shadow-none'>{props.btnText}</button>
  )
}
