import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormLayOut from "./FormLayOut";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import test from "../assets/test.jpg"; // Ensure the correct path to your logo image
import active from "../assets/active.jpg"; // Ensure the correct path to your active image
import LADXLogo from "../images/TLOGO.jpeg";
const UserV = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/user-o"); // Navigate to user-o URL
  };
  const handleVerifyClick = () => {
    navigate("/result"); // Navigate to result URL
  };
  return (
    <FormLayOut>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          height: "100vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header with back arrow and title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Change to column layout
            alignItems: "flex-start", // Align items to the left
            marginBottom: "30px",
            width: "100%",
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
          {/* Header with back arrow */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              onClick={handleBackClick}
              sx={{
                color: "white",
                backgroundColor: "#F66F1E",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                marginRight: "20px",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>
  
          {/* Horizontal Divider */}
          <Box
            sx={{
              width: "100%",
              height: "2px", // Adjust thickness as needed
              backgroundColor: "#E0E0E0", // Divider color
              marginTop: "10px", // Space between text and divider
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ marginBottom: "25px" }} variant="h5">
            Verify as a Traveler
          </Typography>
        </Box>
        {/* Input fields container with labels */}
        <Box sx={{ width: "100%", marginLeft: "20px" }}>
          {/* Full Name */}
          <Typography>Residential Address *</Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: 4,
              marginTop: 4,

              borderRadius: "20px", // Smooth shape background:"F5F5F5",
              maxWidth: "400px", // Limit the width
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Ensures the outline is also rounded
              },
            }}
          />

          {/* Email */}
          <Typography>Place of work / Address *</Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: 4,
              marginTop: 4,
              borderRadius: "20px", // Smooth shape
              maxWidth: "400px", // Limit the width
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Ensures the outline is also rounded
              },
            }}
          />
        </Box>

        {/* Image Upload section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1, marginRight: "20px" }}>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              Upload National ID*
            </Typography>
            <Paper
              sx={{
                backgroundColor: "#F9FBFE",
                border: "2px dashed #2E61B4",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
                height: "150px", // Adjust height to make it smaller
              }}
            >
              <Typography>
                Drag and drop files here <br /> or{" "}
                <Button
                  sx={{
                    textTransform: "none",
                    color: "white",
                    backgroundColor: "black",
                    padding: "5px 10px",
                    borderRadius: "10px",
                  }}
                >
                  Choose file
                </Button>
              </Typography>
            </Paper>
            <Typography sx={{ marginTop: "5px", fontSize: "14px" }}>
              Supported file types: XLS, TXT, PNG, JPEG, GIF
            </Typography>
          </Box>
        </Box>

        <Button
          onClick={handleVerifyClick} // Add click event for navigation
          sx={{
            backgroundColor: "#210947",
            color: "#FFFFFF",
            borderRadius: "30px", // Smoothly curved
            padding: "0", // Remove padding to set exact height
            height: "61px", // Set exact height
            width: "462px", // Set exact width
            marginTop: "30px",
            fontSize: "16px", // Increased font size
            display: "flex", // To center the text
            alignItems: "center", // Center vertically
            justifyContent: "center", // Center horizontally
          }}
        >
          Verify
        </Button>
      </Box>
    </FormLayOut>
  );
};

export default UserV;
