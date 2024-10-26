import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Dialog,
  Avatar,
  TextField,
  Rating,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import test from "../assets/NN.jpg";
import TravelerLayout from "./TravelerLayOut";
import { useNavigate } from "react-router-dom"; // Use useNavigate
import DeleteIcon from "@mui/icons-material/Delete";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import johnImg from "../assets/new.jpg";
import axios from "axios"; // Import Axios
const ProfileT = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("Rwanda");
  const [state, setState] = useState("Kigali");
  const [fullName, setFullName] = useState("Ola Araela");
  const [rating, setRating] = useState(0);
  const [activeTab, setActiveTab] = useState("Reviews");

  const navigate = useNavigate();

  const [profileInfo, setProfileInfo] = useState({
    fullName: "Ola Araela",
    country: "Rwanda",
    state: "Kigali",
  });

  const [profilePhoto, setProfilePhoto] = useState(null); // State to hold the selected profile photo

  const countries = ["USA", "Canada", "UK", "Australia", "Rwanda"];
  const states = ["California", "Texas", "Florida", "New York", "Kigali"];

  // Handle opening and closing of the edit profile dialog
  const handleEditClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle updating the profile information
  const handleUpdateProfile = async () => {
    try {
      // Send PUT request to update profile info
      const response = await axios.put(
        "https://ladx-backend-h9fg.onrender.com/api/v1/users/6706531330437af5872e9c16/profile",
        {
          fullname: fullName,
          country,
          state,
        }
      );
      console.log("Profile updated:", response.data);

      // Update profile info in state
      setProfileInfo({ fullName, country, state });
      handleClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Handle updating the profile photo
  const handleUpdateProfilePhoto = async () => {
    if (!profilePhoto) {
      console.error("No profile photo selected");
      return;
    }

    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto);

    try {
      // Send PUT request to update profile photo
      const response = await axios.put(
        "https://ladx-backend-h9fg.onrender.com/api/v1/users/6706531330437af5872e9c16/profilePhoto",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Profile photo updated:", response.data);
    } catch (error) {
      console.error("Error updating profile photo:", error);
    }
  };

  // Handle selecting a profile photo
  const handlePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  const handleAccoTClick = () => {
    navigate("/account-settings");
  };

  return (
    <TravelerLayout>
      <Box
        sx={{
          padding: { xs: 2, md: 4 },
          marginTop: { xs: 2, md: 4 }, // Reduce marginTop to bring content closer to the top
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={test}
                alt="Profile Picture"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                }}
              />

              <IconButton
                onClick={() => document.getElementById("fileInput").click()} // Trigger file input on click
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "#F5F5F5",
                  borderRadius: "50%",
                  boxShadow: 2,
                  width: 30,
                  height: 30,
                  zIndex: 1,
                }}
              >
                <EditIcon sx={{ color: "black", fontSize: 20 }} />
              </IconButton>

              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }} // Hide the input field
                accept="image/*"
                onChange={handlePhotoChange} // Trigger photo change handler
              />
            </Box>

            <Box sx={{ marginLeft: 3 }}>
              <Typography variant="h6">{profileInfo.fullName}</Typography>
              <Typography variant="body2" color="textSecondary">
                {profileInfo.state}, {profileInfo.country}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={handleEditClick}
            sx={{
              backgroundColor: "white",
              color: "#2E2E2E",
              borderRadius: "35px",
              padding: "15px",
              paddingX: 2,
            }}
          >
            Edit Profile
          </Button>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Reviews (96)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Typography
            variant="body1"
            onClick={() => setActiveTab("Reviews")}
            sx={{
              cursor: "pointer",
              padding: 1,
              borderBottom:
                activeTab === "Reviews" ? "2px solid #F66F1E" : "none",
              color: activeTab === "Reviews" ? "#F66F1E" : "black",
            }}
          >
            Reviews
          </Typography>
          <Typography
            variant="body1"
            onClick={() => {
              setActiveTab("Settings");
            }}
            sx={{
              cursor: "pointer",
              padding: 1,
              borderBottom:
                activeTab === "Settings" ? "2px solid #F66F1E" : "none",
              color: activeTab === "Settings" ? "#F66F1E" : "black",
            }}
          >
            Settings
          </Typography>
        </Box>
        {/* Review Content */}
        {activeTab === "Reviews" && (
          <Box sx={{ marginTop: 2 }}>
            {/* First Review Date */}
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginTop: 2 }}
            >
              March 19, 2023
            </Typography>

            {/* Review Text */}
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              As a sender, John is very proactive and gentle when traveling with
              items. He gives updates at the right time!!
            </Typography>

            {/* Reviewer Info */}
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 5 }}>
              <Avatar
                alt="Ken Bonolo"
                src={johnImg} // Replace with actual image path
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ marginLeft: 2 }}>
                <Typography variant="body1">Ken Bonolo</Typography>
                <Typography variant="body2" color="textSecondary">
                  March 19, 2023
                </Typography>
              </Box>
            </Box>
            <Box>
              {" "}
              <Typography variant="body1" sx={{ marginTop: 3 }}>
                As a sender, John is very proactive and gentle when traveling
                with items. He gives updates at the right time!!
              </Typography>
            </Box>
          </Box>
        )}

        {activeTab === "Settings" && (
          <>
            {/* Account Settings Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 4,
                marginBottom: 4,
              }}
              onClick={handleAccoTClick}
            >
              <PersonOutlineIcon
                sx={{
                  fontSize: 30,
                  color: "black",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "50%",
                  padding: 0.5,
                }}
              />
              <Box sx={{ marginLeft: 3 }}>
                <Typography variant="body1">Account settings</Typography>
                <Typography variant="body2" color="textSecondary">
                  Account information, reset password or account deactivation.
                </Typography>
              </Box>
            </Box>

            {/* Switch Account Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 4,
                marginBottom: 4,
              }}
            >
              <SwapHorizIcon
                sx={{
                  fontSize: 30,
                  color: "black",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "50%",
                  padding: 0.5,
                }}
              />
              <Box sx={{ marginLeft: 3 }}>
                <Typography variant="body1">Switch Account</Typography>
                <Typography variant="body2" color="textSecondary">
                  Switch to Sender account.
                </Typography>
              </Box>
            </Box>

            {/* Language Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 4,
                marginBottom: 4,
              }}
            >
              <LanguageIcon
                sx={{
                  fontSize: 30,
                  color: "black",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "50%",
                  padding: 0.5,
                }}
              />
              <Box sx={{ marginLeft: 3 }}>
                <Typography variant="body1">Language</Typography>
                <Typography variant="body2" color="textSecondary">
                  English, UK
                </Typography>
              </Box>
            </Box>

            {/* Help & Support Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <HelpOutlineIcon
                sx={{
                  fontSize: 30,
                  color: "black",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "50%",
                  padding: 0.5,
                }}
              />
              <Box sx={{ marginLeft: 3 }}>
                <Typography variant="body1">Help & Support</Typography>
                <Typography variant="body2" color="textSecondary">
                  Get help from our team or report any complaints.
                </Typography>
              </Box>
            </Box>
          </>
        )}
        {/* Profile Update Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <Box
            sx={{
              borderRadius: "20px",
              width: { xs: "90%", sm: "80%", md: "600px", lg: "600px" }, // Ensures consistent width for larger screens
              padding: { xs: 2, sm: 3, md: 4 }, // Different padding based on screen size
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              margin: {
                xs: "10px",
                sm: "auto",
                md: "20px auto",
                lg: "40px auto",
              }, // Adjust margin for responsiveness
            }}
          >
            {/* Header Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: { xs: 1, sm: 2 }, // Responsive margin-bottom
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Responsive font size
                }}
              >
                Update Profile
              </Typography>
              <IconButton
                onClick={handleClose}
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "50%",
                  width: { xs: 25, sm: 30 }, // Responsive icon button size
                  height: { xs: 25, sm: 30 },
                }}
              >
                <CancelIcon
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    color: "black",
                  }}
                />
              </IconButton>
            </Box>

            {/* Profile Image Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: { xs: 2, sm: 3 }, // Adjust bottom margin
                position: "relative",
              }}
            >
              <Avatar
                src={test}
                alt="Profile Picture"
                sx={{
                  width: { xs: 70, sm: 80 }, // Responsive avatar size
                  height: { xs: 70, sm: 80 },
                  borderRadius: "50%",
                  border: "2px solid #F66F1E",
                  position: "relative",
                }}
              />
              <IconButton
                onClick={() => console.log("Delete Profile Photo")}
                sx={{
                  position: "absolute",
                  top: "18%",
                  right: "%", // Adjusted right position for better centering
                  borderRadius: "50%",
                  width: { xs: 25, sm: 30 },
                  height: { xs: 25, sm: 30 },
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <DeleteIcon
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    color: "#F66F1E",
                  }}
                />
              </IconButton>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  fontSize: { xs: "0.7rem", sm: "0.8rem" }, // Responsive font size
                  textAlign: "center",
                }}
              >
                Make sure the photo is below 2MB.
              </Typography>
            </Box>

            {/* Full Name Input Field */}
            <TextField
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              sx={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "20px",
                marginBottom: { xs: 1, sm: 2 }, // Responsive margin bottom
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />

            {/* Country and State Input Fields */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 1,
                width: "100%",
                marginBottom: { xs: 1, sm: 2 }, // Responsive margin bottom
              }}
            >
              {/* Country Input Field */}
              <TextField
                select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                variant="outlined"
                sx={{
                  flexGrow: 1,
                  borderRadius: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>

              {/* State Input Field */}
              <TextField
                select
                value={state}
                onChange={(e) => setState(e.target.value)}
                variant="outlined"
                sx={{
                  flexGrow: 1,
                  borderRadius: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                }}
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* Update Button */}
            <Button
              variant="contained"
              onClick={handleUpdateProfile}
              sx={{
                marginTop: 2,
                width: "100%",
                maxWidth: "180px",
                height: "50px",
                borderRadius: "20px",
                backgroundColor: "#210947",
                "&:hover": {
                  backgroundColor: "#0c0e0e",
                },
              }}
            >
              Update
            </Button>
          </Box>
        </Dialog>
      </Box>
    </TravelerLayout>
  );
};

export default ProfileT;
