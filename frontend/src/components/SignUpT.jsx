import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import ladxLogo from "../assets/ladxLogo.png"; // Assuming images exist
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FormLayOut from "./FormLayOut";
import LADXLogo from "../images/TLOGO.jpeg";
const SignUpT = () => {
//   const navigate = useNavigate(); // For navigation
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [country, setCountry] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleClickShowPassword = () => setShowPassword(!showPassword);

//   const validateFields = () => {
//     let isValid = true;

//     if (!fullName) {
//       isValid = false;
//     }

//     if (!email) {
//       isValid = false;
//     }

//     if (!country) {
//       isValid = false;
//     }

//     return isValid;
//   };

// //   const handleSubmit = () => {
// //     // Clear previous error messages
// //     setError("");

//     let valid = true; // Flag to track overall validity

//     if (!fullName) {
//       setError("Enter your full name please!");
//       valid = false;
//     }

//     // Email validation regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email) {
//       setError("Enter your email please!");
//       valid = false;
//     } else if (!emailRegex.test(email)) {
//       setError("Incorrect email format, please enter your email!");
//       valid = false;
//     }

//     if (!country) {
//       setError("Enter your country please!");
//       valid = false;
//     }

//     // Validate password and confirm password
//     if (
//       password.length < 6 ||
//       !/[A-Za-z]/.test(password) ||
//       !/\d/.test(password)
//     ) {
//       setError("Incorrect Password");
//       valid = false;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords don't match.");
//       valid = false;
//     }

//     // If all validations pass, navigate to the new page
//     if (valid) {
//       navigate("/pass-t"); // Navigate to the new page
//     }
//   };
 const navigate = useNavigate();
   const handleSubmit = () => {
     // Navigate to UserOption page on button click
     navigate("/pass-t");
   };

  return (
    <FormLayOut>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* FormLayOut as Sidebar */}

        {/* Right Side White Area for Sign Up Form */}
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
          <Box
            component="img"
            src={LADXLogo}
            alt="LADX Logo"
            sx={{
              width: "120px", // Adjust the width of the logo
              marginBottom: "20px", // Add some space between logo and arrow
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
            Create your traveler account
          </Typography>

          {/* Form Section */}
          <Box sx={{ width: "100%", marginLeft: "20px" }}>
            {/* Full Name */}
            <Typography>Full Name *</Typography>
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: 2,
                // borderRadius: "30px", // Smooth shape
                maxWidth: "400px", // Limit the width
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px", // Ensures the outline is also rounded
                },
              }}
              //   value={fullName}
              //   onChange={(e) => setFullName(e.target.value)}
            />

            {/* Email */}
            <Typography>Email *</Typography>
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: 2,
                //borderRadius: "30px", // Smooth shape
                maxWidth: "400px", // Limit the width
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px", // Ensures the outline is also rounded
                },
              }}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />

            {/* Country */}
            <Typography>Country *</Typography>
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: 2,
                // borderRadius: "20px", // Smooth shape
                maxWidth: "400px", // Limit the width
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px", // Ensures the outline is also rounded
                },
              }}
              //   value={country}
              //   onChange={(e) => setCountry(e.target.value)}
            />

            {/* Password & Confirm Password Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ width: "48%" }}>
                <Typography>Password *</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: 4,
                    marginTop: 4,

                    borderRadius: "20px", // Smooth shape background:"F5F5F5",
                    maxWidth: "400px", // Limit the width
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px", // Ensures the outline is also rounded
                    },
                  }}
                />
              </Box>

              <Box sx={{ width: "48%" }}>
                <Typography>Confirm Password *</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: 4,
                    marginTop: 4,

                    borderRadius: "20px", // Smooth shape background:"F5F5F5",
                    maxWidth: "400px", // Limit the width
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px", // Ensures the outline is also rounded
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Validation Message */}

            <Typography sx={{ marginBottom: 2 }}>
              Use 6 or more letters with a mixture of numbers and letters.
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

            {/* Bottom Links Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 2, // Space above the section
                marginLeft: 2, // Added left margin for spacing
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
            </Box>
          </Box>
        </Box>
      </Box>
    </FormLayOut>
  );
};

export default SignUpT;
