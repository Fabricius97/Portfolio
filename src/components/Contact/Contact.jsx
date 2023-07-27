import { Box } from "@mui/material";
import React from "react";
import ContactForm from "./ContactForm";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

const Contact = ({ contactRef }) => {
  return (
    <Box
      ref={contactRef}
      id="contact"
      sx={{
        padding: {
          xs: "50px 43px",
          md: "50px 200px",
          lg: "50px 200px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: { xs: "column", md: "column", lg: "row" },
        gap: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          minWidth: "50%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <h1>KONTAKT</h1>
          <Box
            sx={{
              letterSpacing: "1px",
              fontStyle: "italic",
              fontWeight: "300",
              lineHeight: "1.2",
              width: "75%",
            }}
          >
            <p>Har du fler frågor eller bara vill prata vidare?</p>

            <p>
              Kontakta mig via kontaktformuläret eller skicka ett meddelande på
              Linkedin!
            </p>
          </Box>
        </Box>
      </Box>
      <ThemeProvider theme={theme}>
        <ContactForm />
      </ThemeProvider>
    </Box>
  );
};

export default Contact;
