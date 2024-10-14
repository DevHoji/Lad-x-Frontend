// Verification.js
import React from "react";
import { Box, Typography } from "@mui/material";
import ladxLogo from "../assets/ladxLogo.png"; // Assuming images exist
import test from "../assets/test.jpg"; 
const Verification = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh", // Full viewport height
        width: "100%", // Full width
      }}
    >
      {/* Left Side Background */}
      <Box
        sx={{
          width: "572px", // Fixed width for background
          backgroundColor: "#210947",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Align items to the left
          paddingTop: "20px", // Space from the top
        }}
      >
        {/* Placeholder for small image (201x201) */}
        <Box
          sx={{
            width: "201px",
            height: "201px",
            backgroundColor: "gray", // Placeholder color
            marginLeft: "20px", // Space from the left side
            marginTop: "20px", // Space from the top
          }}
        ></Box>

        {/* Placeholder for larger image (797x874) */}
        <Box
          sx={{
            width: "797px",
            height: "874px",
            backgroundColor: "lightgray", // Placeholder color
            marginLeft: "-100px", // Move it left to enter the white area
            marginTop: "20px", // Space between images
          }}
        ></Box>
      </Box>

      {/* Right Side White Area */}
      <Box
        sx={{
          flex: 1, // Takes remaining width
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
          padding: "40px 20px 20px", // Padding for the white area
        }}
      >
        {/* Logo */}
        <img
          src={test}
          alt="LADX Logo"
          style={{ width: "150px", marginBottom: "5px" }} // Adjust as needed
        />

        {/* Heading Text */}
        <Typography
          variant="h5"
          sx={{
            color: "#210947",
            marginBottom: "30px", // Space below the heading
          }}
        >
          Account Verification
        </Typography>

        {/* Verification Message */}
        <Typography sx={{ marginBottom: 2, textAlign: "center" }}>
          Please check your email for a verification link. Click the link to
          verify your account.
        </Typography>

        {/* Back to Sign Up Link */}
        <Typography
          sx={{
            color: "#F66F1E",
            cursor: "pointer",
            marginTop: 3,
          }}
          onClick={() => window.history.back()} // Navigate back to the previous page
        >
          Back to Sign Up
        </Typography>
      </Box>
    </Box>
  );
};

export default Verification;
