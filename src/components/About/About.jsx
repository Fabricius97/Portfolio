import { Box } from "@mui/material";
import React from "react";

const About = ({ setRef }) => {
  return (
    <Box
      ref={setRef}
      id="about"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        About
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Social Proof
      </Box>
    </Box>
  );
};

export default About;
