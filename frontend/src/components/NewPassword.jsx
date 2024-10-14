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
        maxWidth: "1200px", // Limit width on larger screens
        margin: "20px auto", // Add margin to prevent disappearance of content
        padding: "20px", // Ensure padding on all sides
        position: "relative",
      }}
    >
      {/* Left Side: Logo, Profile Image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          top: 20,
          left: 20,
        }}
      >
        {/* Logo */}
        <img
          src={test}
          alt="LADX Logo"
          style={{ width: "150px", marginBottom: "20px" }}
        />

        {/* Profile Image */}
        <Box sx={{ mt: 7 }}>
          <img
            src={forget}
            alt="Profile"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }} // Decreased size further
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
          borderRadius: "10px",
          textAlign: "center",
          margin: "20px auto", // Margin for all sides
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          New Password
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          Try not to misplace it this time
        </Typography>

        {/* Password Input */}
        <Typography variant="body1" sx={{ mb: 1, textAlign: "left" }}>
          Password*
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            mb: 1,
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
        <Typography
          variant="body2"
          sx={{ mb: 2, color: "gray", textAlign: "left" }}
        >
          Use 6 or more letters with a mixture of numbers and letters
        </Typography>

        {/* Confirm Password Input */}
        <Typography variant="body1" sx={{ mb: 1, textAlign: "left" }}>
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

      {/* Delivery Car Icon at Bottom Left */}
      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          left: 20,
          width: "48px", // Adjusted size to be smaller
          height: "48px", // Adjusted size to be smaller
          backgroundColor: "#F66F1E",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DeliveryDiningIcon
          sx={{
            width: "24px", // Adjusted size for the icon
            height: "24px", // Adjusted size for the icon
            color: "white",
          }}
        />
      </Box>
    </Container>
  );
};

export default NewPassword;
