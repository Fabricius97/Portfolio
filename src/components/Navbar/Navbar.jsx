import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";

const Navbar = ({ scrollToAbout, scrollToContact, scrollToProjects }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "fixed",
        backgroundColor: isScrolled ? "#101C25" : "transparent",
        transition: "background-color 0.3s",
        zIndex: 1000,
        padding: { xs: "0 30px", sm: "0 43px", md: "0 200px", lg: "0 200px" },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          color: "#ffffff",
          boxSizing: "border-box",
        }}
      >
        <Box
          className="navbar__cta"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "20px",
            letterSpacing: "3px",
          }}
        >
          <Button
            variant="text"
            size="large"
            onClick={scrollToAbout}
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "3px",
              paddingLeft: "0px",
            }}
          >
            OM MIG
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={scrollToContact}
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            KONTAKT
          </Button>
        </Box>
        <Box className="navbar__name" sx={{ letterSpacing: "3px" }}>
          CF
        </Box>
        <Box
          className="navbar__links"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "20px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <a
            href="https://www.linkedin.com/in/christoffer-fabricius-06baab228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{ textDecoration: "none", color: "white", fontSize: "35px" }}
            />
          </a>
          <a
            href="https://github.com/Fabricius97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={{ textDecoration: "none", color: "white", fontSize: "35px" }}
            />
          </a>
        </Box>
        <MenuIcon
          sx={{
            display: { xs: "flex", md: "none" },
            fontSize: "35px",
          }}
          onClick={toggleMenu}
        />
      </Box>
      <Menu
        menuOpen={menuOpen}
        menuClose={toggleMenu}
        scrollToContact={scrollToContact}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
      />
    </Box>
  );
};

export default Navbar;
