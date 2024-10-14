import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Dialog,
  Avatar,
  Divider,
  TextField,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

import test from "../assets/homepp.jpg";

const Profile = ({setContent}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("California");
  const [fullName, setFullName] = useState("Ken Bonolo");

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  const handleUpdateProfile = () => {
    // Logic to update the profile with new information
    console.log("Updated Profile Info:", {
      fullName,
      country,
      state,
    });
    // Update the displayed profile info
    setProfileInfo({ fullName, country, state });
    handleClose();
  };

  const [profileInfo, setProfileInfo] = useState({
    fullName: "Ken Bonolo",
    country: "USA",
    state: "California",
  });

  const countries = ["USA", "Canada", "UK", "Australia"];
  const states = ["California", "Texas", "Florida", "New York"];

  

 
  const handleAccountSettingsClick = () => {
    setContent("AccountSettings"); // Set content to AccountSettings on click
    
  };
  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        marginTop: { xs: 10, md: 14 },
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
              onClick={handleEditClick} // Open dialog on click
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
          </Box>

          <Box sx={{ marginLeft: 3 }}>
            <Typography variant="h6">{profileInfo.fullName}</Typography>
            <Typography variant="body2" color="textSecondary">
              {profileInfo.state}, {profileInfo.country}
            </Typography>
          </Box>
        </Box>
        {/* Edit Profile Button (Aligned to the right) */}
        <Button
          variant="contained"
          onClick={handleEditClick}
          sx={{
            backgroundColor: "white", // Changed background color
            color: "#2E2E2E",
            borderRadius: "50px",
            padding: "15px",
            paddingX: 2,
            "&:hover": {
              // backgroundColor: "#370D70", // Darker shade for hover
            },
          }}
        >
          Edit Profile
        </Button>
      </Box>

      <Divider
        sx={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          height: "1px",
          marginTop: 4,
          marginY: 3,
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: 4,
          marginBottom: 4,
        }}
        onClick={handleAccountSettingsClick} // Set the click handler here
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
                sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, color: "black" }}
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
  );
};

export default Profile;
