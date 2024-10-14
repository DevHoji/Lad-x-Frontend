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
import { useNavigate } from "react-router-dom";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"; // Import a white delivery car icon
import test from "../assets/test.jpg";
import forget from "../assets/forget.jpg";
//import vector1 from "../assets/vector 1.jpg";
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

  const handleBackToLogin = () => {
    navigate("/login"); // Redirect to Login page
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
        flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
        p: 2, // Padding for margin around the content
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
          marginBottom: 2, // Add bottom margin
        }}
      >
        <img src={test} alt="LADX Logo" style={{ width: "150px" }} />
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
     
      <Container
        sx={{
          height: "100vh",
          width: "100vw",
          position: "relative",
          p: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "center" }, // Center the form section
          marginLeft: { xs: 0, md: "100px" }, // Add left margin on medium screens
        }}
      >
        <Grid container>
          {/* Form Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center the form section
              marginLeft: { xs: 0, md: "0" }, // Reset margin on small screens
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", md: "400px" }, // Adjust width for small screens
                p: 4,
                position: "relative", // Allow positioning of text below the confirm button
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
                }} // Reduced size
              />
              <Typography variant="h4" align="center" sx={{ mb: 1 }}>
                Forgot Password
              </Typography>
              <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                Enter the email used to register your account
              </Typography>

              <Box mb={3}>
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

              <Typography
                align="center"
                sx={{
                  mt: 2,
                  cursor: "pointer",
                  color: "#000", // Normal text color
                }}
                onClick={handleBackToLogin} // Navigate back to login page
              >
                Back to Login
              </Typography>
            </Box>
          </Grid>
        </Grid>
        ;
      </Container>
    </Container>
  );
};

export default ForgotPassword;
