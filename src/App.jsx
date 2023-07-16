import "./App.css";
import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  const ref = useRef(null);
  const clickToScroll = () =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <Navbar clickToScroll={clickToScroll} />
      <Hero clickToScroll={clickToScroll} />
      <Skills />
      <About setRef={ref} />
      <Projects setRef={ref} />
    </div>
  );
}

export default App;
