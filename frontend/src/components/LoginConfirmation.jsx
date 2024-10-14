// src/components/LoginConfirmation.js

import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import LADXLogo from "../assets/ladxLogo.png"; // Ensure the correct path to your logo
import ProfileImage from "../assets/profileImage.png"; // Replace with your profile image path
import SmallImage from "../assets/smallImage.png"; // Replace with your small image path
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import the check icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"; // Import the delivery car icon

import test from "../assets/test.jpg";
import forget from "../assets/forget.jpg";

const LoginConfirmation = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    navigate("/login"); // Navigate back to the login page
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      {/* Left Side: Images */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90vh",
          position: "absolute",
          top: 20,
          left: 20,
          marginBottom: 2,
        }}
      >
        <img src={test} alt="LADX Logo" style={{ width: "150px" }} />
        <Box
          sx={{
            width: { xs: "90%", md: "400px" },
            p: 4,
            position: "relative",
          }}
        >
          <img
            src={forget}
            alt="Profile"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              marginBottom: "16px",
              marginLeft: "-50px",
              marginTop: "-100px",
            }}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <DeliveryDiningIcon
            sx={{
              width: "64px",
              height: "64px",
              color: "white", // Set icon color to white
              backgroundColor: "#F66F1E", // Background color
              borderRadius: "50%",
              padding: "16px", // Add padding for circular background
            }}
          />
        </Box>
      </Box>

      {/* Login Confirmation Section */}
      <Box
        sx={{
          width: "400px",
          p: 4,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <CheckCircleIcon style={{ fontSize: 100, color: "#90EE90" }} />
        <Typography variant="h4" sx={{ mb: 2 }}>
          New Password
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#210947",
            color: "white",
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#1A0735",
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginConfirmation;
