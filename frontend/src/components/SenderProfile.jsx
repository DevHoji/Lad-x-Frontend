import React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TravelerLayout from "./TravelerLayOut";
import { useNavigate } from "react-router-dom";
import test from "../assets/Ola.jpg"; // Ensure the image path is correct

const SenderProfile = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/traveler-home"); // Navigates to the Traveler Home page
  };

  return (
    <TravelerLayout>
      {/* Container for the entire layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          width: "100%",
          marginTop: "20px", // Adjust margin-top to be below the navbar
        }}
      >
        {/* Header with back arrow */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <IconButton
            onClick={handleBackClick}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>

        {/* Profile image */}
        <Avatar
          src={test}
          alt="Profile Picture"
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            marginBottom: "15px",
          }}
        />

        {/* Name */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          Ola Araela
        </Typography>

        {/* Location */}
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ marginBottom: "5px" }}
        >
          Kigali, Rwanda
        </Typography>

        {/* Delivery info */}
        <Typography variant="body2" color="textSecondary">
          Delivered 60 items
        </Typography>
      </Box>
    </TravelerLayout>
  );
};

export default SenderProfile;
