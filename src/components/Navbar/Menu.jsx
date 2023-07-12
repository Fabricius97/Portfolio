import React from "react";
import { Box, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Menu = ({ menuOpen, menuClose }) => {
  return (
    <Slide direction="left" in={menuOpen} mountOnEnter unmountOnExit>
      <Box
        id="Menu"
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#101C25",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          justifyContent: "center",
          fontSize: "30px",
          letterSpacing: "3px",
        }}
      >
        <CloseIcon
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: 40,
            color: "#ffffff",
            cursor: "pointer",
          }}
          onClick={menuClose}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "80px",
            gap: "50px",
            color: "#ffffff",
          }}
        >
          <Box className="navbar__about">OM MIG</Box>
          <Box className="navbar__contact">KONTAKT</Box>
          <Box className="navbar__contact">PROJEKT</Box>
          <a
            href="https://www.linkedin.com/in/christoffer-fabricius-06baab228/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            LinkedIn
            <LinkedInIcon sx={{ fontSize: "27px" }} />
          </a>
          <a
            href="https://github.com/Fabricius97"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            GitHub
            <GitHubIcon sx={{ fontSize: "27px" }} />
          </a>
        </Box>
      </Box>
    </Slide>
  );
};

export default Menu;
