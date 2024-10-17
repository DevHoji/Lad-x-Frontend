import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormLayOut from "./FormLayOut"; // Import the FormLayOut component
import LADXLogo from "../images/TLOGO.jpeg";

const PassT = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(Array(6).fill("")); // Array for 6 input fields
  const [timer, setTimer] = useState(60); // 60 seconds countdown
  const [isExpired, setIsExpired] = useState(false); // Flag for code expiration

  useEffect(() => {
    if (timer > 0 && !isExpired) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsExpired(true);
    }
  }, [timer, isExpired]);

  const handleBack = () => {
    navigate("/signup-t"); // Navigate to SignUpT page
  };

  const handleCodeChange = (index, value) => {
    // Update the specific index in the code array
    const newCode = [...code];
    newCode[index] = value.slice(0, 1); // Ensure only one character is input
    setCode(newCode);
  };

  const handleSubmit = () => {
    // Navigate to UserOption page on button click
    navigate("/user-o");
  };

  return (
    <FormLayOut>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // Align content to the top
          padding: "20px 20px", // Adjust the padding to move content up
          height: "100vh", // Full viewport height
          backgroundColor: "white",
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
            display: "flex", // Use flexbox for alignment
            alignItems: "center", // Center vertically
            justifyContent: "flex-start", // Align to the left
            marginBottom: "20px", // Optional margin at the bottom
          }}
        >
          <Button
            onClick={handleBack}
            sx={{
              backgroundColor: "#F66F1E",
              color: "white",
              borderRadius: "50%", // Make it circular
              padding: "10px", // Adjust padding for a more circular look
              width: "60px", // Fixed width
              height: "60px", // Fixed height
              display: "flex", // Use flexbox to center the content
              alignItems: "center", // Center vertically
              justifyContent: "center", // Center horizontally
              "&:hover": {
                backgroundColor: "#D55A1C",
              },
            }}
          >
            &#8592; {/* Unicode for left arrow */}
          </Button>
        </Box>

        <Divider sx={{ width: "100%", margin: "20px 0" }} />

        {/* Email Check Text */}
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Please check your email
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          Check the code sent to your email and type below
        </Typography>

        {/* Input for Code */}
        <Box sx={{ display: "flex", gap: 1, marginBottom: "20px" }}>
          {code.map((digit, index) => (
            <TextField
              key={index}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              variant="outlined"
              sx={{
                width: "50px",
                height: "50px",
                borderRadius: "25px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                },
                "& input": {
                  textAlign: "center",
                  fontSize: "1.5rem",
                },
                ...(isExpired && {
                  "& .MuiOutlinedInput-root": {
                    borderColor: "red", // Red border when expired
                  },
                }),
              }}
              inputProps={{ maxLength: 1 }} // Limit input to 1 character
            />
          ))}
        </Box>

        {/* Timer Message */}
        <Typography
          variant="body2"
          sx={{
            color: isExpired ? "red" : "black",
            marginBottom: "20px",
          }}
        >
          {isExpired
            ? "Incorrect!"
            : `You can generate a new code in 00:${String(timer).padStart(
                2,
                "0"
              )}`}
        </Typography>

        {/* Submit Button */}
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#210947",
            borderRadius: "30px",
            padding: "10px 20px",
            width: "362px", // Set width to 462px
            height: "61px", // Set height to 61px
            "&:hover": {
              backgroundColor: "#1A0735",
            },
          }}
        >
          Confirm
        </Button>
      </Box>
    </FormLayOut>
  );
};

export default PassT;
