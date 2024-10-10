import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";


import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AccountSettings = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "20px", backgroundColor: "white", height: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Box
          onClick={() => navigate("/profile")} // Navigate back to Profile page
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer", // Indicate it's clickable
          }}
        >
          <ArrowBackIcon />
        </Box>
        <Typography variant="h6" sx={{ marginLeft: "10px" }}>
          Account Settings
        </Typography>
      </Box>

      {/* Horizontal line */}
      <hr
        style={{
          width: "960px",
          height: "2px",
          backgroundColor: "#4D4D4D",
          border: "none",
          margin: "20px 0",
        }}
      />

      {/* Account settings text */}
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Account Settings
      </Typography>

      {/* Light-colored text */}
      <Typography
        variant="body1"
        sx={{ color: "lightgray", marginBottom: "20px" }}
      >
        Account information, reset password or account deactivation.
      </Typography>

      {/* Change your password text */}
      <Typography variant="h6" sx={{ marginBottom: "10px" }}>
        Change your password
      </Typography>

      {/* Light-colored subtext */}
      <Typography
        variant="body2"
        sx={{ color: "lightgray", marginBottom: "20px" }}
      >
        Change password at any time.
      </Typography>
    </Box>
  );
};

export default AccountSettings;
