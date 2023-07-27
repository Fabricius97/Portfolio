import { Box } from "@mui/material";
import React from "react";
import { socialProof } from "../../socialProof.js";

const About = ({ aboutRef }) => {
  return (
    <Box
      ref={aboutRef}
      id="about"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        padding: { xs: "50px 43px", md: "50px 200px", lg: "50px 200px" },
        boxSizing: "border-box",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <h1>OM MIG</h1>
        <p
          style={{
            padding: "10px",
            letterSpacing: "1px",
            fontStyle: "italic",
            fontWeight: "300",
            lineHeight: "1.3",
          }}
        >
          Mitt namn är Christoffer och jag är en webbutvecklare med starka
          kunskaper inom React, JavaScript, CSS, HTML och MERN-stacken. Jag är
          övertygad om att jag kan bidra med värdefulla insikter och energi till
          ert team. Som en passionerad problemlösare med en öppen och kreativ
          inställning har jag funnit en stark passion för felsökning och
          nyfikenhet. Tidigare har jag arbetat med fiber och kabel-TV där jag
          utvecklade en skarp analytisk förmåga och en önskan att förstå roten
          till problemet för att hitta hållbara lösningar. Jag trivs med att
          arbeta i en dynamisk miljö där jag kan tillämpa mina färdigheter för
          att skapa innovativa och användarvänliga lösningar. Utöver min
          tekniska expertis är jag också en lagspelare som tror på betydelsen av
          samarbete och öppen kommunikation. Jag är övertygad om att genom att
          arbeta tillsammans kan vi skapa starka och hållbara webbapplikationer
          som tillgodoser både företagets och användarnas behov. Min
          flexibilitet och anpassningsförmåga gör att jag kan trivas i en
          snabbrörlig arbetsmiljö och hantera nya utmaningar på ett effektivt
          sätt.
        </p>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {socialProof.map((proof, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#050a0d50",
              padding: "10px",
              boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.75)",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <img
                src={proof.url}
                alt={proof.name}
                style={{
                  height: "50px",
                  minWidth: "50px",
                  borderRadius: "50px",
                }}
              />
              <h4>
                {proof.name}
                {proof.work}
              </h4>
            </Box>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "300",
                display: "flex",
                lineHeight: "1.2",
              }}
            >
              {proof.quote}
            </p>
            <a
              href={proof.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#ffef0099",
              }}
            >
              Kolla in {proof.name.split(" ")[0]}s profil i Linkedin!
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
