import React from "react";
import { Box, Button, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Menu = ({
  menuOpen,
  menuClose,
  scrollToAbout,
  scrollToContact,
  scrollToProjects,
}) => {
  return (
    <Slide direction="left" in={menuOpen} mountOnEnter unmountOnExit>
      <Box
        id="Menu"
        sx={{
          width: "100%",
          height: "100%",
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
            gap: "30px",
            color: "#ffffff",
          }}
        >
          <Button
            variant="text"
            size="large"
            onClick={() => {
              menuClose();
              scrollToAbout();
            }}
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "30px",
              padding: 0,
            }}
          >
            OM MIG
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => {
              menuClose();
              scrollToProjects();
            }}
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "30px",
              padding: 0,
            }}
          >
            PROJEKT
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => {
              menuClose();
              scrollToContact();
            }}
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "30px",
              padding: 0,
            }}
          >
            KONTAKT
          </Button>
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
