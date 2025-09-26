export default function ButtonSecondary(props) {
  return (
    <button
      type={props.type}
      className={`btnSec bg-transparent lg:hover:bg-pink-500 lg:hover:shadow-lg lg:hover:shadow-red-600 transition-all duration-500 relative right-6 w-[${props.width}] h-9 rounded-xl px-3 drop-shadow-lg mx-8 border border-white lg:hover:border-none active:translate-y-[6px] lg:active:shadow-none font-mono text-white`} id={`${props.id}`}
    >
      {props.btnText}
    </button>
  );
}
