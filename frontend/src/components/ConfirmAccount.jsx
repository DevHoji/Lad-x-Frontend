import React, { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"; // Import a white delivery car icon
import test from "../assets/test.jpg";
import forget from "../assets/forget.jpg";

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90vh",
          position: "absolute",
          top: 20,
          left: 20,
          marginBottom: 2,
        }}
      >
        <img src={test} alt="LADX Logo" style={{ width: "150px" }} />
        <Box
          sx={{
            width: { xs: "90%", md: "400px" },
            p: 4,
            position: "relative",
          }}
        >
          <img
            src={forget}
            alt="Profile"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              marginBottom: "16px",
              marginLeft: "-50px",
              marginTop: "50px",
            }}
          />
        </Box>

        {/* Confirm Account Section */}
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            position: "relative",
            p: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", md: "400px" },
              p: { xs: 2, sm: 3, md: 4 },
              mx: "auto",
              boxShadow: 0, // Adding shadow for depth
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
                    flex: 1,
                    mx: 0.5,
                    width: "87px", // Set the width to 87px
                    height: "61px", // Set the height to 61px
                    borderRadius: "50px", // Keep the border radius for oval shape
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
                ? "Code is timed out."
                : `You can generate a new code in 00:${
                    timeLeft < 10 ? `0${timeLeft}` : timeLeft
                  }`}
              {isTimeUp && <span style={{ color: "blue" }}> Resend OTP</span>}
            </Typography>
          </Box>
        </Container>
        <Box sx={{ mt: 2 }}>
          <DeliveryDiningIcon
            sx={{
              width: "64px",
              height: "64px",
              color: "white", // Set icon color to white
              backgroundColor: "#F66F1E", // Background color
              borderRadius: "50%",
              padding: "16px", // Add padding for circular background
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ConfirmAccount;
