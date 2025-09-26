import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { useEffect } from "react";
import Scroll from "./lib/Scroll.js";
import DropdownScript from "./lib/DropdownScript.js";
import Dropdown from "./components/Dropdown.jsx";
import Hamburger from "./components/Hamburger.jsx";
import MobileButton from "./components/MobileButtons.jsx";

function App() {
  useEffect(() => {
    Scroll();
    DropdownScript();
    MobileButton();
  }, []);

  return (
    <>
      <Navbar />
      <Hamburger />
      // <Dropdown />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
