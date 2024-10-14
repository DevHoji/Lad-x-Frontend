import React, { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import LADXLogo from "../assets/ladxLogo.png";
import ProfileImage from "../assets/profileImage.png";
import SmallImage from "../assets/smallImage.png";
import { useNavigate } from "react-router-dom";

const ConfirmAccount = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setIsTimeUp(true);
    }
  }, [timeLeft]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value.slice(0, 1);
    setCode(newCode);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleConfirm = () => {
    navigate("/new-password");
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        width: "100vw",
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      {/* Left Side: Images */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90vh",
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
          width: { xs: "100%", sm: "90%", md: "400px" },
          p: { xs: 2, sm: 3, md: 4 },
          mx: "auto",
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Confirm Account
        </Typography>
        <Typography align="center" sx={{ mb: 4 }}>
          Enter the verification code sent to you
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            px: { xs: 1, sm: 2 },
          }}
        >
          {code.map((digit, index) => (
            <TextField
              key={index}
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              sx={{
                width: { xs: "45px", sm: "55px", md: "65px" }, // Wider width
                height: { xs: "65px", sm: "75px", md: "85px" }, // Taller height for egg shape
                borderRadius: "50px", // Smoothly curved shape for egg-like oval
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#210947",
                  },
                  "&:hover fieldset": {
                    borderColor: "#1A0735",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1A0735",
                  },
                },
              }}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              inputRef={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </Box>

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
