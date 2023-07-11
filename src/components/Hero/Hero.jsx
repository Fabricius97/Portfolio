import React from "react";
import { Box } from "@mui/material";
import HeroBackground from "../../../public/159Z_2107.w026.n002.628B.p1.628.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroBackground})`,
        width: "100%",
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
          maxWidth: "40%",
          height: "70vh",
          flexDirection: "column",
          fontSize: "20px",
          border: "1px solid white",
          paddingLeft: "100px",
          letterSpacing: "3px",
        }}
      >
        <p>WEBBUTVECKLARE</p>
        {/* <h1
          style={{
            color: "var(--white)",
            fontSize: "4rem",
            fontWeight: "800",
            marginBottom: "20px",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          Christoffer Fabricius
        </h1> */}
      </Box>
    </Box>
  );
};

export default Hero;
