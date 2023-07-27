import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { Box, Slide, CircularProgress } from "@mui/material";
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

  const [loading, setLoading] = useState(true);

  // Simulate loading content
  useEffect(() => {
    // Perform asynchronous tasks (e.g., fetching data) here
    // For demonstration purposes, we'll use setTimeout to simulate a delay
    const loadingDelay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => {
      clearTimeout(loadingDelay);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        // Display the loader while loading is true
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
