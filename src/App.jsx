import "./App.css";
import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

function App() {
  const ref = useRef(null);
  const clickToScroll = () =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <Navbar clickToScroll={clickToScroll} />
      <Hero />
      <Skills />
      <About setRef={ref} />
    </div>
  );
}

export default App;
