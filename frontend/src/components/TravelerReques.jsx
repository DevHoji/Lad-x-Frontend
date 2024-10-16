import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import test from "../assets/test.jpg";// Ensure the correct path to your logo image
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const TravelerRequest = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBackClick = () => {
    navigate("/traveler-home"); // Navigates to the Traveler Home page
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
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
      {/* LADX Logo above the back arrow */}
      <img
        src={test}
        alt="LADX Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      {/* Header with back arrow and title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
          width: "100%",
        }}
      >
        <IconButton
          onClick={handleBackClick}
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            marginRight: "20px",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" fontWeight="bold">
          Travel Details
        </Typography>
      </Box>
      {/* Input fields container with labels */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* Departure */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Departure
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "20px", // Smoothly curved shape
            }}
          />

          {/* Arrival Country */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Arrival Country
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "20px", // Smoothly curved shape
            }}
          />

          {/* Arrival Time */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Arrival Time
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "20px", // Smoothly curved shape
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Arrival Address */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Arrival Address
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "20px", // Smoothly curved shape
            }}
          />

          {/* Arrival Date */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Arrival Date
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "20px", // Smoothly curved shape
            }}
          />

          {/* Weight available for item */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Weight available for item
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "20px", // Smoothly curved shape
            }}
          />
        </Grid>
      </Grid>
      {/* Flexbox for Price */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                Price
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#F4F4F4",
                  height: "60px",
                  borderRadius: "20px", // Smoothly curved shape
                }}
                InputProps={{
                  // Adding $ icon
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Button
        onClick={togglePopup}
        sx={{
          backgroundColor: "#210947",
          color: "#FFFFFF",
          borderRadius: "10px",
          padding: "20px",
          height: "60px",
          width: "322px", // Fixed width
          marginTop: "30px",
          textAlign: "center",
          "@media (max-width: 600px)": {
            // Responsive size for smaller screens
            width: "100%",
          },
        }}
      >
        Upload
      </Button>
      {showPopup && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "40px",
              borderRadius: "16px",
              textAlign: "center",
              width: "80%",
              maxWidth: "450px",
              position: "relative",
            }}
          >
            {/* Close Icon */}
            <IconButton
              onClick={togglePopup}
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <CloseIcon />
            </IconButton>

            {/* Check Icon */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <CheckCircleIcon
                sx={{
                  fontSize: "60px",
                  color: "#FFFFFF",
                  backgroundColor: "#D2691E", // Chocolate color
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </Box>

            {/* Submitted Text */}
            <Typography
              variant="h5"
              sx={{
                color: "#210947",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Submitted!
            </Typography>

            {/* Info Text */}
            <Typography
              variant="body1"
              sx={{ marginBottom: "20px", color: "#333" }}
            >
              Your travel detail is in process, you'll get a notification if it
              has been approved.
            </Typography>

            {/* Proceed Button */}
            <Button
              onClick={togglePopup}
              sx={{
                backgroundColor: "#210947",
                color: "#FFFFFF",
                borderRadius: "30px",
                height: "50px",
                width: "150px",
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#160736",
                },
              }}
            >
              Proceed
            </Button>
          </Paper>
        </Box>
      )}
    
    </Box>
  );
};

export default TravelerRequest;
