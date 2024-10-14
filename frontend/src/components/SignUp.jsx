// SignUp.js
import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import ladxLogo from "../assets/ladxLogo.png"; // Assuming images exist
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = () => {
  const navigate = useNavigate(); // For navigation
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);

 const validateFields = () => {
   let isValid = true;

const [fullNameError, setFullNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [countryError, setCountryError] = useState("");





   if (!fullName) {
     setFullNameError(true);
     isValid = false;
   } else {
     setFullNameError(false);
   }

   if (!email) {
     setEmailError(true);
     isValid = false;
   } else {
     setEmailError(false);
   }

   if (!country) {
     setCountryError(true);
     isValid = false;
   } else {
     setCountryError(false);
   }

   return isValid;
 };

 const handleSubmit = () => {
   // Clear previous error messages
   setFullNameError("");
   setEmailError("");
   setCountryError("");

   let valid = true; // Flag to track overall validity

   if (!fullName) {
     setFullNameError("Enter your full name please!");
     valid = false;
   }

   // Email validation regex
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!email) {
     setEmailError("Enter your email please!");
     valid = false;
   } else if (!emailRegex.test(email)) {
     setEmailError("Incorrect email format, please enter your email!");
     valid = false;
   }

   if (!country) {
     setCountryError("Enter your country please!");
     valid = false;
   }

   // Validate password and confirm password as before
   if (
     password.length < 6 ||
     !/[A-Za-z]/.test(password) ||
     !/\d/.test(password)
   ) {
     setError("Incorrect Password");
     valid = false;
   }
   if (password !== confirmPassword) {
     setError("Passwords don't match.");
     valid = false;
   }

   // If all validations pass, navigate to the new page
   if (valid) {
     navigate("/new-page"); // Navigate to the new page
   }
 };




      const [fullNameError, setFullNameError] = useState(false);
      const [emailError, setEmailError] = useState(false);
      const [countryError, setCountryError] = useState(false);





  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh", // Full viewport height
        width: "100%", // Full width
      }}
    >
      {/* Left Side Background */}
     

      {/* Right Side White Area */}
      <Box
        sx={{
          flex: 1, // Takes remaining width
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
          padding: "40px 20px 20px", // Padding for the white area
        }}
      >
        {/* Logo */}
        <img
          src={ladxLogo}
          alt="LADX Logo"
          style={{ width: "150px", marginBottom: "5px" }} // Adjust as needed
          sx={{
            flex: 1, // Takes remaining width
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Align items to the left
            padding: "40px 20px 20px", // Padding for the white area
          }}
        />

        {/* Heading Text */}
        <Typography
          variant="h5"
          sx={{
            color: "#210947",
            marginBottom: "30px", // Space below the heading
          }}
        >
          Create your employer account
        </Typography>

        {/* Form Section */}
        <Box sx={{ width: "100%", marginLeft: "20px" }}>
          {" "}
          {/* Adjusted margin */}
          {/* Full Name */}
          {/* Full Name */}
          <Typography>Full Name *</Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: 2,
              borderRadius: "20px", // Smooth shape
              maxWidth: "400px", // Limit the width
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Ensures the outline is also rounded
                alignItems: "center", // Center items horizontally
                justifyContent: "center", // Center items vertically
              },
            }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullNameError && (
            <Typography sx={{ color: "red", marginBottom: 2 }}>
              {fullNameError}
            </Typography>
          )}
          {/* Email */}
          {/* Email */}
          <Typography>Email *</Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: 2,
              borderRadius: "20px", // Smooth shape
              maxWidth: "400px", // Limit the width
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Ensures the outline is also rounded
                alignItems: "center", // Center items horizontally
                justifyContent: "center", // Center items vertically
              },
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <Typography sx={{ color: "red", marginBottom: 2 }}>
              {emailError}
            </Typography>
          )}
          {/* Country */}
          {/* Country */}
          <Typography>Country *</Typography>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              marginBottom: 2,
              borderRadius: "20px", // Smooth shape
              maxWidth: "400px", // Limit the width
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Ensures the outline is also rounded
                alignItems: "center", // Center items horizontally
                justifyContent: "center", // Center items vertically
              },
            }}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {countryError && (
            <Typography sx={{ color: "red", marginBottom: 2 }}>
              {countryError}
            </Typography>
          )}
          {/* Password & Confirm Password Section */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ width: "48%" }}>
              <Typography>Password *</Typography>
              <TextField
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                error={
                  password.length > 0 &&
                  (password.length < 6 ||
                    !/[A-Za-z]/.test(password) ||
                    !/\d/.test(password))
                }
                sx={{
                  marginBottom: 2,
                  borderRadius: "20px", // Smooth shape
                  maxWidth: "400px", // Limit the width
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Ensures the outline is also rounded
                  },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              {password.length > 0 &&
                password.length < 6 && ( // Show error only if there's input
                  <Typography sx={{ color: "red", marginBottom: 2 }}>
                    Incorrect Password
                  </Typography>
                )}
            </Box>

            <Box sx={{ width: "48%" }}>
              <Typography>Confirm Password *</Typography>
              <TextField
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                error={
                  confirmPassword.length > 0 && password !== confirmPassword
                } // Check if there's input before comparing
                sx={{
                  marginBottom: 2,
                  borderRadius: "20px", // Smooth shape
                  maxWidth: "400px", // Limit the width
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Ensures the outline is also rounded
                  },
                }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {confirmPassword.length > 0 &&
                password !== confirmPassword && ( // Show error only if there's input
                  <Typography sx={{ color: "red", marginBottom: 2 }}>
                    Passwords don't match.
                  </Typography>
                )}
            </Box>
          </Box>
          {/* Validation Message */}
          {error && (
            <Typography sx={{ color: "red", marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          <Typography sx={{ marginBottom: 2 }}>
            Use 6 or more letters with a mixture of numbers and letters.
          </Typography>
          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              backgroundColor: "#210947",
              marginTop: 3,
              borderRadius: "20px", // Smooth shape
              "&:hover": {
                backgroundColor: "#1A0735",
              },
            }}
            onClick={handleSubmit} // Trigger submission on button click
          >
            Confirm
          </Button>
          {/* Bottom Links Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2, // Space above the section
              
            }}
          >
            <Typography sx={{ color: "black" }}>Have an account?</Typography>
            <Typography
              sx={{
                color: "#F66F1E",
                marginLeft: 1,
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")} // Navigate to the login page
            >
              Sign in
            </Typography>
            <Box
              sx={{
                width: "2px",
                height: "53px",
                backgroundColor: "black",
                margin: "0 10px", // Space around the line
              }}
            />
            <Typography sx={{ color: "black" }}>
              Want to sign up as a traveler?
            </Typography>
            <Typography
              sx={{
                color: "#F66F1E",
                marginLeft: 1,
                cursor: "pointer",
              }}
              onClick={() => window.location.reload()} // Reload the page to sign up as a traveler
            >
              Sign up now
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
