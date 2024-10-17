import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import FormLayOut from "./FormLayOut";
import { useNavigate } from "react-router-dom";
import LADXLogo from "../images/TLOGO.jpeg";
const Result = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/traveler-home"); // Navigate to traveler-home URL
  };

  return (
    <FormLayOut>
     
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          overflowY: "auto",
        }}
      >
         <Box
        component="img"
        src={LADXLogo}
        alt="LADX Logo"
        sx={{
          width: "120px", // Adjust the width of the logo
          marginBottom: "20px", // Add some space between logo and arrow
        }}
      />
        <Typography variant="h4" sx={{ color: "green", marginBottom: "20px" }}>
          Received!
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "30px", fontSize: "18px" }}
        >
          You'll get an email when you've been verified or not with next steps.
        </Typography>
        <IconButton
          onClick={handleIconClick}
          sx={{
            backgroundColor: "yellow",
            borderRadius: "50%",
            padding: "20px",
            "&:hover": {
              backgroundColor: "#FFD700", // Darker yellow on hover
            },
          }}
        >
          <CheckIcon sx={{ fontSize: "50px", color: "black" }} />
        </IconButton>
      </Box>
    </FormLayOut>
  );
};

export default Result;
