import React from "react";
import TravelerLayout from "./TravelerLayOut";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/traveler-home"); // Navigates to the Traveler Home page
  };

  return (
    <TravelerLayout>
      <Box
        sx={{
          padding: { xs: "10px", sm: "20px" }, // Responsive padding for smaller screens
          width: "100%",
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Adjust font size for smaller screens
            marginBottom: { xs: "20px", sm: "30px" },
          }}
        >
          Wallet
        </Typography>

        {/* Header with back arrow and sub-title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginBottom: { xs: "20px", sm: "30px" }, // Responsive spacing
          }}
        >
          <IconButton
            onClick={handleBackClick}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "50%",
              width: { xs: "40px", sm: "50px" }, // Responsive icon size
              height: { xs: "40px", sm: "50px" },
              marginRight: "20px",
            }}
          >
            <ArrowBackIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Adjust font size for smaller screens
            }}
          >
            Withdraw Wallet
          </Typography>
        </Box>
      </Box>
    </TravelerLayout>
  );
};

export default Wallet;
