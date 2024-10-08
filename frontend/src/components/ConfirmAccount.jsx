// src/components/ConfirmAccount.js

import React, { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import LADXLogo from "../assets/ladxLogo.png"; // Ensure the correct path to your logo
import ProfileImage from "../assets/profileImage.png"; // Replace with your profile image path
import SmallImage from "../assets/smallImage.png"; // Replace with your small image path
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ConfirmAccount = () => {
  const [code, setCode] = useState(Array(6).fill("")); // State for the verification code
  const [timeLeft, setTimeLeft] = useState(60); // Countdown timer state
  const [isTimeUp, setIsTimeUp] = useState(false); // State to check if time is up
  const inputRefs = useRef([]); // Refs to hold references to the input fields
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setIsTimeUp(true); // Time is up
    }
  }, [timeLeft]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Allow only one character
    setCode(newCode);

    // Automatically focus on the next input if it's filled
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleConfirm = () => {
    // Always navigate to the new password page for now
    navigate("/new-password"); // Change to your New Password page route
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

      {/* Confirm Account Section */}
      <Box
        sx={{
          width: "400px",
          p: 4,
          mx: "auto",
        }}
      >
        {/* Center the headings */}
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Confirm Account
        </Typography>
        <Typography align="center" sx={{ mb: 4 }}>
          Enter the verification code sent to you
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          {code.map((digit, index) => (
            <TextField
              key={index}
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              sx={{
                width: "50px",
                borderRadius: "25px", // Smoothly curved shape for egg-like oval
                backgroundColor: "white", // Optional: white background for better visibility
                // Customize border style if needed
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#210947", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#1A0735", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A0735", // Border color on focus
                  },
                },
              }}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              inputRef={(ref) => (inputRefs.current[index] = ref)} // Store reference
            />
          ))}
        </Box>

        {/* Error Message for wrong code or timeout */}
        {isTimeUp && (
          <Typography color="red" sx={{ mb: 2 }}>
            Wrong code.
          </Typography>
        )}

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
          onClick={handleConfirm}
          // Confirm button is always enabled
        >
          Confirm
        </Button>

        {/* Countdown Timer */}
        <Typography align="center" sx={{ mt: 2 }}>
          {isTimeUp
            ? "Code is timed out. "
            : `You can generate a new code in 00:${
                timeLeft < 10 ? `0${timeLeft}` : timeLeft
              }`}
          {isTimeUp && <span style={{ color: "blue" }}> Resend OTP</span>}
        </Typography>
      </Box>
    </Container>
  );
};

export default ConfirmAccount;
