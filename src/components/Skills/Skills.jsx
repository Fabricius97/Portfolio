import { Box, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faSquareJs,
  faNodeJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const skillsList = [
  { skillName: "React", icon: faReact },
  { skillName: "Javascript", icon: faSquareJs },
  { skillName: "CSS", icon: faCss3Alt },
  { skillName: "HTML", icon: faHtml5 },
  { skillName: "Node.js", icon: faNodeJs },
  { skillName: "git", icon: faGit },
  // Lägg till fler färdigheter här
];

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          padding: { xs: "30px", sm: "0 43px", md: "0 100px" },
          height: "auto",
        }}
      >
        <Grid container justifyContent="center" spacing={2}>
          {skillsList.map((skill, index) => (
            <Grid item key={index}>
              <div
                data-aos="fade-left"
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "20px",
                  backgroundColor: "#050a0d50",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "10px",
                  transition:
                    "opacity 0.5s ease-in-out, transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "0.7";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <FontAwesomeIcon icon={skill.icon} size="3x" />
                <div>{skill.skillName}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
