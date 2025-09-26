import { AiFillGithub } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function About() {
  return (
    <div id="about" className="flex justify-center bg-[#0088ff] relative ">
      <div
        id="aboutBox"
        className="hide mt-10 w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] relative flex flex-col mb-10 ml-4"
      >
        <h1 className="my-5 text-5xl font-mono">
          <span className="text-white">About </span>
          <span className="text-[#fb923c]">Me</span>
        </h1>
        <p
          id="aboutDescription"
          className=" leading-loose text-white lg:text-[1.1rem] md:text-[1rem] lg:w-[800px] md:w-[600px] sm:w-[500px]"
        >
          Hi, I'm Varun Kolanu, a 4th-year CSE student at IIT (BHU) Varanasi. You can usually find me geeking out
          over various software development technologies or overthinking existential questions. My areas of interests include web and app dev, compilers, open-source contributions.&nbsp;
          If you enjoy my work and want to support me, you can
          <a
            href="https://www.buymeacoffee.com/varun.kolanu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: '60px', width: '217px' }}
            />
          </a>
        </p>
        <div
          id="profileLinks"
          className="relative flex justify-evenly my-6 w-[300px] text-2xl text-white"
        >
          <a
            href="https://github.com/Varun-Kolanu"
            target="blank"
            className="hover:scale-125 transition-all duration-200 ease-out"
          >
            {" "}
            <AiFillGithub />{" "}
          </a>
          <a
            href="https://codeforces.com/profile/Varun_Kolanu"
            target="blank"
            className="hover:scale-125 transition-all duration-200 ease-out"
          >
            {" "}
            <SiCodeforces />{" "}
          </a>
          <a
            href="https://www.codechef.com/users/kolanuvarun"
            target="blank"
            className="hover:scale-125 transition-all duration-200 ease-out"
          >
            {" "}
            <SiCodechef />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
