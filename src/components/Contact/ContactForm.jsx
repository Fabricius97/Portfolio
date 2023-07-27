import React, { useState } from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { css } from "@emotion/react";
import { PulseLoader } from "react-spinners";
import emailjs from "emailjs-com";
import theme from "../../theme";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      linkedin: linkedin,
      message: message,
    };

    // Visar snurrande ikon när mailet skickas
    setIsSending(true);

    // Skicka formulärdatan till Email.js
    emailjs
      .send(
        "service_o5wlz5d",
        "template_t1k9qv8",
        formData,
        "VHzF_zupc9FTK1NnQ"
      )
      .then(
        (result) => {
          console.log("E-post skickad!");
          setIsSending(false);
          setIsSent(true);
          setIsError(false);

          // Återställ formulärfälten efter att mailet har skickats
          setEmail("");
          setLinkedin("");
          setMessage("");
        },
        (error) => {
          console.log("Något gick fel vid skicka e-post: ", error.text);
          setIsSending(false);
          setIsSent(false);
          setIsError(true);
        }
      );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        minWidth: "50%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#050a0d50",
        boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.75)",
        minHeight: "200px",
        padding: "10px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" }, // Set the input text color to white
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="LinkedIn-profil (valfritt)"
            variant="outlined"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" }, // Set the input text color to white
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Meddelande"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" }, // Set the input text color to white
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {isSending ? (
            // Visa snurrande ikon medan mailet skickas
            <PulseLoader css={spinnerStyle} color={"#ffffff"} loading={true} />
          ) : isSent ? (
            // Visa bekräftelse när mailet skickas
            <p style={{ color: "white" }}>E-post skickad!</p>
          ) : isError ? (
            // Visa felmeddelande om något gick fel vid skickandet
            <p style={{ color: "white" }}>
              Något gick fel. Försök igen senare.
            </p>
          ) : (
            // Visa skicka-knappen om inget är skickat eller något gick fel
            <Button
              type="submit"
              variant="text"
              endIcon={<SendIcon />}
              style={{
                fontWeight: "bold",
                display: "flex",
              }}
            >
              Skicka
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

// Stilmall för snurrande ikon
const spinnerStyle = css`
  display: block;
  margin: 0 auto;
`;

export default ContactForm;
