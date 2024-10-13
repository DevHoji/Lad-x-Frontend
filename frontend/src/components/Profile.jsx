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
            borderRadius: "20px", // Smoother border radius
            width: { xs: "90%", sm: "800px", md: "700px" }, // Increased size and responsive
            padding: 3, // Increased padding for a more spacious feel
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            position: "relative",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            margin: { xs: "10px", sm: "auto", md: "20px auto" }, // Centered with margins on larger screens
            maxWidth: "90vw", // Prevent it from going 100% of the screen
            right: { md: "10%", lg: "15%" }, // Shift popup slightly to the right on larger screens
          }}
        >
          {/* Profile Image with Delete Icon */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 3, // Increased spacing
            }}
          >
            <Avatar
              src={test}
              alt="Profile Picture"
              sx={{
                width: 80, // Slightly larger
                height: 80, // Slightly larger
                borderRadius: "50%",
                border: "2px solid #F66F1E", // Optional border for emphasis
              }}
            />
            <IconButton
              onClick={() => console.log("Delete Profile Photo")}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "#F5F5F5",
                borderRadius: "50%",
                width: 35,
                height: 35,
              }}
            >
              <DeleteIcon sx={{ color: "black" }} />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                Update Photo
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                Make sure the photo is below 2MB.
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "#F5F5F5",
              borderRadius: "50%",
              width: 35,
              height: 35,
            }}
          >
            <CancelIcon sx={{ color: "black" }} />
          </IconButton>

          {/* Full Name Input Field */}
          <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
            Full Name *
          </Typography>
          <TextField
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            sx={{
              width: "100%", // Full width with margin
              maxWidth: "384px", // Ensure max width
              borderRadius: "20px", // Smoothly curved shape
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Ensure rounded corners on input
              },
            }}
          />

          {/* Country and State Input Fields with Flexbox */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              width: "100%",
              marginBottom: 2,
            }}
          >
            {/* Country Input Field */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2">Country *</Typography>
              <TextField
                select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                variant="outlined"
                sx={{
                  width: "100%",
                  maxWidth: "173px",
                  borderRadius: "20px", // Smoothly curved shape
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Ensure rounded corners on input
                  },
                }}
              >
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            {/* State Input Field */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2">State *</Typography>
              <TextField
                select
                value={state}
                onChange={(e) => setState(e.target.value)}
                variant="outlined"
                sx={{
                  width: "100%",
                  maxWidth: "173px",
                  borderRadius: "20px", // Smoothly curved shape
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px", // Ensure rounded corners on input
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
          </Box>

          {/* Update Button */}
          <Button
            variant="contained"
            onClick={handleUpdateProfile}
            sx={{
              marginTop: 3,
              width: "100%",
              maxWidth: "220px",
              height: "59px",
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
