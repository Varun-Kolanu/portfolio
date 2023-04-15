import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useEffect } from 'react';
import Scroll from "./components/Scroll"

function App() {
  
  useEffect(() =>
  {
    Scroll();
  })
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
