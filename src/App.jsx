import "./App.css";
import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  const scrollToContact = () => {
    const appHeight = document.body.scrollHeight;

    window.scrollTo({
      top: appHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToProjects={scrollToProjects}
      />
      <Hero scrollToProjects={scrollToProjects} />
      <Skills />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
