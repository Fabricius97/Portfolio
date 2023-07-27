import React from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import HeroBackground from "../../../src/assets/images/beautiful-milky-way-night-sky.jpg";

const StyledText = styled("h1")(() => ({
  background: "linear-gradient(270deg,#050a0d,#ffffff);",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const Hero = ({ scrollToProjects }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroBackground})`,
        minWidth: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          textAlign: "center",
          height: "100vh",
          flexDirection: "column",
          fontSize: { xs: "13px", sm: "25px", md: "30px" },
          padding: { xs: "0 30px", sm: "0 43px", md: "0 200px" },
          letterSpacing: "3px",
          "& h1": {
            fontFamily: "Josefin Sans",
          },
        }}
      >
        <Box>
          <p style={{ color: "#ffef0099", fontStyle: "italic" }}>
            WEBBUTVECKLARE
          </p>

          <StyledText>CHRISTOFFER FABRICIUS</StyledText>
          <Button
            onClick={scrollToProjects}
            variant="outlined"
            size="large"
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              borderColor: "#ffffff",
              "&:hover": {
                borderColor: "#ffffff",
              },
              letterSpacing: "3px",
            }}
          >
            PROJEKT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
