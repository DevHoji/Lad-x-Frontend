import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import ladxLogo from "../assets/ladxLogo.png"; // Assuming images exist
import profileImage from "../assets/profileImage.png"; // Assuming images exist
import smallIcon from "../assets/smallIcon.png"; // Assuming images exist
import { useNavigate } from "react-router-dom";
import test from "../assets/test.jpg";
import forget from "../assets/forget.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [previousPassword] = useState("correctPassword123"); // Simulated correct password

      
  const [emailError, setEmailError] = useState(false); // State for email error tracking
  const [emailErrorMessage, setEmailErrorMessage] = useState(""); // Error message for email
  const [registeredEmail] = useState("user@example.com"); // Simulated registered email

  // Function to validate email format
  const isValidEmailFormat = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format regex
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(false); // Reset email error when input changes
    setEmailErrorMessage(""); // Clear error message on typing

    // Validate email format
    if (!isValidEmailFormat(value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      return; // Stop further checks if email format is invalid
    }

    // Check if the entered email matches the registered email
    if (value !== registeredEmail) {
      setEmailError(true); // Set email error to true if emails do not match
      setEmailErrorMessage("This email is not registered.");
    }
  };


 



  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/home"); // Navigate to the Home component
  };


  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Check if the entered password matches the stored password
    if (value !== previousPassword) {
      setError(true); // Set error to true if passwords do not match
    } else {
      setError(false); // Reset error if passwords match
    }
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
      {/* Left side: Logo, Profile Image, and Bottom Icon */}
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
        {/* Logo */}
        <img src={test} alt="LADX Logo" style={{ width: "150px" }} />

        {/* Profile Image */}
        <Box sx={{ mt: 5 }}>
          <img
            src={forget}
            alt="Profile"
            style={{ width: "100px", height: "100px", marginLeft: "20px" }}
          />
        </Box>

        {/* Bottom Image */}
        <Box>
          <img
            src={smallIcon}
            alt="Small Icon"
            style={{ width: "64px", height: "64px", marginLeft: "20px" }}
          />
        </Box>
      </Box>

      {/* Form Section - Centered */}
      <Box
        sx={{
          width: "400px",
          p: 4,
          mx: "auto", // Horizontal centering
        }}
      >
        {/* Welcome Text */}
        <Typography variant="h4" align="left" sx={{ ml: 2, mb: 4 }}>
          Welcome!
        </Typography>

        {/* Email // JSX for the email input field*/}
        <Box mb={3}>
          <Typography>Email *</Typography>
          <TextField
            fullWidth
            value={email}
            onChange={handleEmailChange} // Updated to handle email changes
            variant="outlined"
            sx={{
              borderRadius: "30px", // More rounded like the Confirm button
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px", // Makes input field smoothly curved
                "& fieldset": {
                  borderColor: emailError ? "red" : undefined, // Change border color if there's an email error
                },
              },
            }}
          />
          {emailError && (
            <Typography variant="caption" sx={{ color: "red", mb: 1 }}>
              {emailErrorMessage}
            </Typography>
          )}
        </Box>
        {/* Password */}
        <Box
          mb={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Password *</Typography>
          <Typography
            sx={{ color: "#F66F1E", cursor: "pointer" }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password
          </Typography>
        </Box>

        <TextField
          fullWidth
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Error Message */}
        {error && (
          <Typography variant="caption" sx={{ color: "red", mb: 1 }}>
            Wrong password
          </Typography>
        )}

        {/* Keep me logged in */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "#F66F1E", "&.Mui-checked": { color: "#F66F1E" } }}
              />
            }
            label="Keep me logged in"
          />
        </Box>

        {/* Confirm Button */}
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
        onClick={handleConfirmClick} // Attach the click handler
      >
        Confirm
      </Button>

        {/* Horizontal Lines with Text "Or login with" */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Divider sx={{ width: "40%" }} />
          <Typography sx={{ mx: 2 }}>Or login with</Typography>
          <Divider sx={{ width: "40%" }} />
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
          <Box
            component="a"
            href="https://www.google.com"
            target="_blank"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "50px",
              height: "50px",
            }}
          >
            <GoogleIcon />
          </Box>
          <Box
            component="a"
            href="https://www.apple.com"
            target="_blank"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "50px",
              height: "50px",
            }}
          >
            <AppleIcon />
          </Box>
          <Box
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "50px",
              height: "50px",
            }}
          >
            <FacebookIcon />
          </Box>
        </Box>

        {/* Sign Up and Sign In as Traveler Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Typography>
            Don't have an account?{" "}
            <Typography
              component="span"
              sx={{ color: "#F66F1E", cursor: "pointer" }}
              onClick={() => navigate("/sign-up")} // Navigate to the login page
            >
              Sign up now
            </Typography>
          </Typography>

          {/* Vertical Line */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: 2,
              height: "75px",
              width: "2px",
              backgroundColor: "#ccc",
            }}
          />

          <Typography>
            Want to sign in as a traveler?{" "}
            <Typography
              component="span"
              sx={{ color: "#F66F1E", cursor: "pointer" }}
              onClick={() => navigate("/traveler-signin")} // Update this path as needed
            >
              Sign in now
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
