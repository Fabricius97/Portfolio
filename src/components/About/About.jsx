import { Box, Link } from "@mui/material";
import React from "react";
import { socialProof } from "../../socialProof.js";

const About = ({ setRef }) => {
  return (
    <Box
      ref={setRef}
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        padding: { xs: "0 43px", md: "0 200px", lg: "0 200px" },
        boxSizing: "border-box",
        gap: "40px",
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique
        reiciendis enim quas accusamus necessitatibus laborum, aliquam sunt
        molestiae magni aspernatur nostrum eum dignissimos, aliquid vitae fugit
        beatae ab debitis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rerum similique reiciendis enim quas accusamus necessitatibus
        laborum, aliquam sunt molestiae magni aspernatur nostrum eum
        dignissimos, aliquid vitae fugit beatae ab debitis. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Rerum similique reiciendis enim
        quas accusamus necessitatibus laborum, aliquam sunt molestiae magni
        aspernatur nostrum eum dignissimos, aliquid vitae fugit beatae ab
        debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        similique reiciendis enim quas accusamus necessitatibus laborum, aliquam
        sunt molestiae magni aspernatur nostrum eum dignissimos, aliquid vitae
        fugit beatae ab debitis.
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#050a0d50",
              padding: "10px",
              boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.75)",
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
                color: "inherit",
              }}
            >
              Linkedin
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
