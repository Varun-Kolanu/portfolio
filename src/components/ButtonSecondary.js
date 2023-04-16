import React from "react";

export default function ButtonSecondary(props) {
  return (
    <button
      type={props.type}
      className={` btn bg-transparent hover:bg-pink-500 hover:shadow-lg hover:shadow-red-600 transition-all duration-500 relative right-6 w-[${props.width}] h-9 rounded-xl p-0 drop-shadow-lg mx-6  border border-white hover:border-none active:translate-y-[6px] active:shadow-none font-mono text-white `}
    >
      {props.btnText}
    </button>
  );
}
