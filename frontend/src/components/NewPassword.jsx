// src/components/NewPassword.js

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  InputAdornment,
} from "@mui/material";
import LADXLogo from "../assets/ladxLogo.png"; // Ensure the correct path to your logo
import ProfileImage from "../assets/profileImage.png"; // Replace with your profile image path
import SmallImage from "../assets/smallImage.png"; // Replace with your small image path
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import icons for visibility toggle
import { useNavigate } from "react-router-dom"; // Import useNavigate

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Navigate to the Login Confirmation page after successful password submission
    navigate("/login-confirmation"); // Change this to your actual next page route
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
        }}
      >
        <img src={LADXLogo} alt="LADX Logo" style={{ width: "150px" }} />
        <Box sx={{ mt: 5 }}>
          <img
            src={ProfileImage}
            alt="Profile"
            style={{ width: "100px", height: "100px" }}
          />
        </Box>
        <Box>
          <img
            src={SmallImage}
            alt="Small Icon"
            style={{ width: "64px", height: "64px" }}
          />
        </Box>
      </Box>

      {/* New Password Section */}
      <Box
        sx={{
          width: "400px",
          p: 4,
          mx: "auto",
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          New Password
        </Typography>
        <Typography align="center" sx={{ mb: 4 }}>
          Try not to misplace it this time
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          Password*
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 2,
            borderRadius: "30px", // Smoothly curved input
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px", // Smoothly curved input
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="body1" sx={{ mb: 1 }}>
          Confirm Password*
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            mb: 2,
            borderRadius: "30px", // Smoothly curved input
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px", // Smoothly curved input
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          }}
        />

        {error && <Typography color="error">{error}</Typography>}

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
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default NewPassword;












