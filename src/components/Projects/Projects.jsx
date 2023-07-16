import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { projects } from "./../../projects";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = ({ setRef }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box
      ref={setRef}
      id="project"
      sx={{
        width: "100%",
        padding: {
          xs: "50px 43px",
          md: "50px 200px",
          lg: "50px 200px",
        },
        boxSizing: "border-box",
        display: "flex",
        alignItems: { xs: "center", sm: "center", md: "start" },
        flexDirection: "column",
      }}
    >
      <h1>PROJEKT</h1>
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={8} md={12} lg={6} key={index}>
            <Box
              data-aos="zoom-in"
              sx={{
                minHeight: "200px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.75)",
                letterSpacing: "1px",
                fontStyle: "italic",
                fontWeight: "300",
                lineHeight: "1.2",
                boxSizing: "border-box",
                alignItems: "center",
                gap: "10px",
                borderRadius: "10px",
                backgroundColor: "#050a0d50",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffef0099", textDecoration: "none" }}
                  >
                    Code |
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffef0099", textDecoration: "none" }}
                  >
                    Live
                  </a>
                </Box>
              </Box>
              <Box>
                <img
                  src={project.img}
                  alt={project.name}
                  width={"200px"}
                  style={{ borderRadius: "5px" }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
