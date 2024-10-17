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
import test from "../assets/olapp.jpg";
import TravelerLayout from "./TravelerLayOut";
import { useNavigate } from "react-router-dom"; // Use useNavigate
import DeleteIcon from "@mui/icons-material/Delete";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import johnImg from "../assets/new.jpg";

const ProfileT = () => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("Rwanda");
  const [state, setState] = useState("Kigali");
  const [fullName, setFullName] = useState("Ola Araela");
  const [rating, setRating] = useState(0);
  const [activeTab, setActiveTab] = useState("Reviews");

  const navigate = useNavigate(); // Correctly set up useNavigate

  const handleEditClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateProfile = () => {
    console.log("Updated Profile Info:", {
      fullName,
      country,
      state,
    });
    setProfileInfo({ fullName, country, state });
    handleClose();
  };

  const [profileInfo, setProfileInfo] = useState({
    fullName: "Ola Araela",
    country: "Kigali",
    state: "Rwanda",
  });

  const countries = ["USA", "Canada", "UK", "Australia", "Rwanda"];
  const states = ["California", "Texas", "Florida", "New York", "Kigali"];

  const handleAccoTClick = () => {
    navigate("/account-settings");
  };

  return (
    <TravelerLayout>
      <Box
        sx={{
          padding: { xs: 2, md: 4 },
          marginTop: { xs: 4, md: 6 }, // Reduce marginTop to bring content closer to the top
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
                onClick={handleEditClick}
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
          <Button
            variant="contained"
            onClick={handleEditClick}
            sx={{
              backgroundColor: "white",
              color: "#2E2E2E",
              borderRadius: "50px",
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
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
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
              <Typography variant="body1" sx={{ marginTop: 1 }}>
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
              width: { xs: "90%", sm: "80%", md: "600px", lg: "600px" },
              padding: { xs: 2, sm: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              margin: "auto",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={test}
                alt="Profile Picture"
                sx={{ width: 100, height: 100, marginBottom: 2 }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  backgroundColor: "white",
                  border: "2px solid #F66F1E",
                }}
              >
                <DeleteIcon sx={{ color: "#F66F1E" }} />
              </IconButton>
            </Box>
            <TextField
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Country"
              select
              variant="outlined"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            >
              {countries.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="State"
              select
              variant="outlined"
              value={state}
              onChange={(e) => setState(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            >
              {states.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button
              onClick={handleUpdateProfile}
              variant="contained"
              sx={{
                backgroundColor: "#F66F1E",
                color: "white",
                borderRadius: "50px",
                padding: "10px 40px",
              }}
            >
              Update Profile
            </Button>
          </Box>
        </Dialog>
      </Box>
    </TravelerLayout>
  );
};

export default ProfileT;
