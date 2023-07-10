import React, { useState } from "react";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box
      sx={{
        height: "80px",
        backgroundColor: "darkslateblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: { xs: "0 43px", md: "0 100px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          color: "#ffffff",
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
          <Box className="navbar__about">OM MIG</Box>
          <Box className="navbar__contact">KONTAKT</Box>
        </Box>
        <Box className="navbar__name" sx={{ letterSpacing: "3px" }}>
          CHRISTOFFER FABRICIUS
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
          sx={{ display: { xs: "flex", md: "none" }, fontSize: "35px" }}
          onClick={toggleMenu}
        />
      </Box>
      <Menu menuOpen={menuOpen} menuClose={toggleMenu} />
    </Box>
  );
};

export default Navbar;
