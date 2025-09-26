export default function Hamburger() {
  return (
    <div
      id="hamburger"
      className="w-[40px] h-[50px] md:hidden fixed right-2 top-1 z-20 "
    >
      <div
        id="top"
        className="h-[5px] bg-white mb-1 mt-2 transition-all duration-500 origin-left"
      ></div>
      <div
        id="middle"
        className="h-[5px] w-[40px] bg-white my-1 transition-all duration-500"
      ></div>
      <div
        id="bottom"
        className="h-[5px] bg-white my-1 transition-all duration-500 origin-left"
      ></div>
    </div>
  );
}
