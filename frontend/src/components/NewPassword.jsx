import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { useNavigate } from "react-router-dom";

import test from "../assets/test.jpg"; // Logo image
import forget from "../assets/forget.jpg"; // Profile image

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    navigate("/login-confirmation");
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
      {/* Left Side: Logo, Profile Image, and Icon */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90vh",
          position: "absolute",
          top: 20,
          left: 20,
          paddingLeft: { xs: "10px", md: "20px" }, // Adjust padding for mobile and larger screens
        }}
      >
        <img
          src={test}
          alt="LADX Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />

        {/* Profile Image */}
        <Box sx={{ mt: 5 }}>
          <img
            src={forget}
            alt="Profile"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </Box>

        {/* Car Icon */}
        <Box
          sx={{
            width: "64px",
            height: "64px",
            backgroundColor: "#F66F1E",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <DeliveryDiningIcon
            sx={{
              width: "32px",
              height: "32px",
              color: "white",
            }}
          />
        </Box>
      </Box>

      {/* New Password Section */}
      <Box
        sx={{
          width: { xs: "90%", sm: "400px" },
          p: 4,
          mx: "auto",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          New Password
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          Try not to misplace it this time
        </Typography>

        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={() => setShowPassword(!showPassword)}>
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
