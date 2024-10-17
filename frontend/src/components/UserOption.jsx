import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormLayOut from "./FormLayOut";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import back arrow icon
import PersonIcon from "@mui/icons-material/Person"; // Import user icon
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Import delivery car icon
import LADXLogo from "../images/TLOGO.jpeg";// Import your LADX logo

const UserOption = () => {
  const navigate = useNavigate();

  return (
    <FormLayOut>
      <Box display="flex">
        {/* Sidebar - FormLayOut Component */}

        {/* Main Content Area */}
        <Box
          sx={{
            flex: 1,
            marginLeft: "300px",
            marginBottom: "600px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Align items to the start (left)
          }}
        >
          {/* LADX Logo */}
          <Box
            component="img"
            src={LADXLogo}
            alt="LADX Logo"
            sx={{
              width: "120px", // Adjust the width of the logo
              marginBottom: "20px", // Add some space between logo and arrow
            }}
          />

          {/* Back Arrow */}
          <Box
            sx={{
              backgroundColor: "#F66F1E",
              borderRadius: "50%", // Keep it circular
              width: "50px", // Set a fixed width
              height: "50px", // Set a fixed height equal to width
              display: "flex", // Use flex to center the icon
              alignItems: "center", // Center icon vertically
              justifyContent: "center", // Center icon horizontally
              cursor: "pointer",
              marginBottom: "20px",
            }}
            onClick={() => navigate("/pass-t")} // Navigate to pass-t URL
          >
            <ArrowBackIcon sx={{ color: "white" }} />
          </Box>

          {/* Horizontal Divider */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
              marginBottom: "50px",
            }}
          />

          {/* Main Content */}
          <Typography variant="h6" align="center" sx={{ marginBottom: "40px" }}>
            Are you a Sender or a Traveler?
          </Typography>

          {/* Icon Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            {/* User Icon */}
            <Box
              sx={{
                backgroundColor: "#EBF3FA",
                borderRadius: "50%",
                marginBottom: "40px",
                padding: "20px",
                marginRight: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
              onClick={() => navigate("/home")} // Navigate to home URL
            >
              <PersonIcon sx={{ fontSize: "40px", color: "#210947" }} />
              <Typography>Sender</Typography>
            </Box>

            {/* Delivery Car Icon */}
            <Box
              sx={{
                backgroundColor: "#EBF3FA",
                borderRadius: "50%",
                marginBottom: "40px",
                padding: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
              onClick={() => navigate("/traveler-home")} // Navigate to traveler-home URL
            >
              <LocalShippingIcon sx={{ fontSize: "40px", color: "#210947" }} />
              <Typography>Traveler</Typography>
            </Box>
          </Box>

          {/* Confirm Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#210947",
              width: "100%",
              borderRadius: "20px", // Smooth shape
              "&:hover": {
                backgroundColor: "#1A0735",
              },
            }}
            onClick={() => navigate("/User-v")} // Navigate to User-v URL
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </FormLayOut>
  );
};

export default UserOption;
