import React from "react";
import { Box, Typography } from "@mui/material";
import plane from "../assets/las.jpg";
const FormLayOut = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFFFFF", // White background for the page
      }}
    >
      {/* Left side with #210947 background color, taking the full height */}
      <Box
        sx={{
          width: { xs: "300px", sm: "360px" }, // Responsive width
          height: "100vh", // Full page height
          backgroundColor: "#210947",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* Text inside the box */}
        <Typography
          variant="h5"
          sx={{
            color: "#FFFFFF",
            marginTop: "200px",
            fontSize: { xs: "1.3rem", sm: "1.5rem" },
            fontWeight: "bold",
          }}
        >
          Create Account
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#FFFFFF",
            marginTop: "10px",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          Earn on the Go - Easily Deliver Items!
        </Typography>

        {/* Half circle at the bottom right */}
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: { xs: "150px", sm: "200px" }, // Responsive width for the half circle
            height: { xs: "75px", sm: "100px" }, // Responsive height for the half circle
            backgroundColor: "#F66F1E",
            borderRadius: "100px 100px 0 0", // Creates the half-circle
          }}
        />
      </Box>

      {/* LADX logo in the top left corner of the white part */}

      {/* Small image in the top right corner of the white part */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: { xs: "10px", sm: "20px" },
        }}
      >
        <img
          src={plane} // Update with the correct path for the small image
          alt="Small Image"
          style={{ width: "201px", height: "201px" }}
        />
      </Box>

      {/* Render the children components passed to this page */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1, // Ensures this content is above the background
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FormLayOut;
