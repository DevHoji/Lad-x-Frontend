import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import LADXLogo from "../assets/ladxLogo.png";
import ProfileImage from "../assets/profileImage.png";
import SmallImage from "../assets/smallImage.png";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const previousEmail = "user@example.com"; // Simulated email for validation

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format regex
    if (!emailFormat.test(e.target.value) || e.target.value !== previousEmail) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleConfirm = () => {
    if (!error) {
      navigate("/confirm-account"); // Redirect to ConfirmAccount page
    }
  };

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        p: 0,
      }}
    >
      <Grid container>
        {/* Left Side: Images */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
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
        </Grid>

        {/* Form Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "400px" },
              p: 4,
              mx: "auto",
            }}
          >
            <Typography variant="h4" align="left" sx={{ ml: 2, mb: 4 }}>
              Forgot Password
            </Typography>

            <Box mb={3}>
              <Typography>Email *</Typography>
              <TextField
                fullWidth
                value={email}
                onChange={handleEmailChange}
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                    "& fieldset": {
                      borderColor: error ? "red" : undefined,
                    },
                  },
                }}
              />
              {error && (
                <Typography variant="caption" sx={{ color: "red", mb: 1 }}>
                  Wrong email
                </Typography>
              )}
            </Box>

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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForgotPassword;
