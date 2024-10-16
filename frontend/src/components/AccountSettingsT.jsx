import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TravelerLayout from "./TravelerLayOut"; // Import TravelerLayout

const AccountSettingsT = () => {
  const navigate = useNavigate();

  return (
    <TravelerLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          padding: { xs: "20px", md: "40px" },
          backgroundColor: "white",
        }}
      >
        {/* Back Arrow and Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/profile-t")} // Navigate to profile-t on click
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#F5F5F5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#E5E5E5",
              },
            }}
          >
            <ArrowBackIcon />
          </Box>
          <Typography variant="h6" sx={{ marginLeft: "10px" }}>
            Account Settings
          </Typography>
        </Box>

        {/* Horizontal Line */}
        <hr
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#4D4D4D",
            border: "none",
            margin: "20px 0",
          }}
        />

        {/* Account Settings Title */}
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Account Settings
        </Typography>

        {/* Subtext */}
        <Typography
          variant="body1"
          sx={{ color: "lightgray", marginBottom: "30px" }} // Increased bottom margin
        >
          Account information, reset password or account deactivation.
        </Typography>

        {/* Change Your Password Section */}
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Change your password
        </Typography>

        {/* Subtext for Change Password */}
        <Typography
          variant="body2"
          sx={{ color: "lightgray", marginBottom: "20px" }}
        >
          Change password at any time.
        </Typography>

        {/* Additional spacing at the bottom for visual balance */}
        <Box sx={{ marginTop: "auto", paddingBottom: "20px" }} />
      </Box>
    </TravelerLayout>
  );
};

export default AccountSettingsT;
