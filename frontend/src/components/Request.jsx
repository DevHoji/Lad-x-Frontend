import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import test from "../assets/test.jpg"; // Ensure the correct path to your logo image
import active from "../assets/active.jpg";
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
import CloseIcon from "@mui/icons-material/Close"; // Importing Close icon

const Request = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBackClick = () => {
    navigate("/home"); // Navigates to the Home page
  };

  const handleProceedClick = () => {
    navigate(""); // Navigate to PaymentSuccessful page
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
      {/* Logo at the top-left corner */}
      <img
        src={test}
        alt="Logo"
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
          Request Delivery
        </Typography>
      </Box>

      {/* Input fields container with labels */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* Item(s) to be delivered */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Item(s) to be delivered (e.g., Gadgets, Clothes...)
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "8px", // Smoothly curved corners
            }}
          />
          {/* Address sending from */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Address sending from
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "8px", // Smoothly curved corners
            }}
          />
          {/* Name of Receiver */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Name of Receiver
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "8px", // Smoothly curved corners
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Name of each item(s) */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Name of each item(s) (e.g., HP Laptop, iPhone XR...)
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "8px", // Smoothly curved corners
            }}
          />
          {/* Address delivering to */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Address delivering to
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "10px", // Smoothly curved corners
            }}
          />
          {/* Phone Number of Receiver */}
          <Typography variant="body1" sx={{ marginBottom: "5px" }}>
            Phone Number of Receiver
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: "20px",
              backgroundColor: "#F4F4F4",
              borderRadius: "8px", // Smoothly curved corners
            }}
          />
        </Grid>
      </Grid>

      {/* Image Upload, Weight, and Price section */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box sx={{ flex: 1, marginRight: "20px" }}>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Image(s) of item(s)
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
                //onClick={togglePopup}
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

        {/* Flexbox for Weight and Price */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Weight of Item(s) */}
          <Grid container spacing={2} sx={{ flex: 1 }}>
            {/* Weight of Item(s) */}
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                  Weight of the Item(s)
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    backgroundColor: "#F4F4F4",
                    height: "60px",
                  }}
                />
              </Box>
            </Grid>

            {/* Price */}
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
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Button
        onClick={togglePopup}
        sx={{
          backgroundColor: "#210947",
          color: "#FFFFFF",
          borderRadius: "20px",
          padding: "20px",
          height: "60px",
          width: "fit-content",
          marginTop: "30px",
        }}
      >
        Connect with a Traveler
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
              padding: "50px",
              borderRadius: "10px",
              textAlign: "center",
              width: "80%",
              maxWidth: "500px",
              position: "relative",
            }}
          >
            <IconButton
              onClick={togglePopup}
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={active}
              alt="Two animations"
              style={{ width: "200px", height: "auto", marginBottom: "20px" }}
            />
            <Typography variant="h6" sx={{ marginBottom: "20px" }}>
              Successful!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              You will get a notification when you have <br />
              been matched with a Traveler.
            </Typography>
            <Button
              onClick={handleProceedClick}
              sx={{
                backgroundColor: "#F66F1E",
                color: "#FFFFFF",
                borderRadius: "20px",
                height: "40px",
                marginTop: "20px",
                padding: "10px 20px",
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

export default Request;
