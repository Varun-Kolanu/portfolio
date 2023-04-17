import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import Scroll from "./Scroll";
import DropdownScript from "./DropdownScript";
import Dropdown from "./components/Dropdown";
import Hamburger from "./components/Hamburger";
import MobileButton from "./components/MobileButtons";

function App() {
  useEffect(() => {
    Scroll();
    DropdownScript();
    MobileButton();
  });

  return (
    <>
      <Navbar />
      <Hamburger />
      <Dropdown />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
