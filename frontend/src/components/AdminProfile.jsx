import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
  InputAdornment,
  IconButton,
  InputBase,
  Typography,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("senders");
  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  // Edit button click handler
  const handleEditClick = () => {
    // Handle edit button click logic here
    console.log("Edit Profile Clicked");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
      {/* Sidebar with logo */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Logo at the top */}
        <Box
          component="img"
          src="/path-to-logo.png"
          alt="Ladx Logo"
          sx={{
            width: "150px",
            height: "auto",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        />

        {/* Sidebar below the logo */}
        <Box
          sx={{
            backgroundColor: "#210947",
            width: { xs: "80px", sm: "226px" },
            height: "100%",
            borderTopRightRadius: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          {/* List of navigation items */}
          <List sx={{ color: "#D3D3D3" }}>
            <ListItem
              button
              onClick={() => handleNavigation("/admin")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            <ListItem
              button
              onClick={() => handleNavigation("/admin-l")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            <ListItem
              button
              onClick={() => handleNavigation("/user")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Users"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            <ListItem
              button
              onClick={() => handleNavigation("/admin-m")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <TextsmsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Message"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            <ListItem
              button
              onClick={() => handleNavigation("/settings")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>
          </List>

          {/* Logout near the bottom */}
          <List sx={{ color: "#D3D3D3" }}>
            <ListItem
              button
              onClick={() => handleNavigation("/admin")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Main content section */}
      <Box
        sx={{
          flexGrow: 1,
          padding: { xs: "10px", sm: "20px" },
          marginTop: "100px", // Push the main content down a bit
        }}
      >
        {/* Profile Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            //  boxShadow: 1,
            padding: "20px",
          }}
        >
          {/* Profile Image */}
          <Avatar
            src="/path-to-profile-image.jpg" // Update with actual profile image path
            alt="Profile Image"
            sx={{
              width: "290px",
              height: "220px",
              borderRadius: "4px",
              marginBottom: { xs: "20px", sm: "0" },
            }}
          />

          {/* Name and Admin Section */}
          <Box
            sx={{
              marginLeft: { sm: "20px" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography variant="h5">Benson Kemeron</Typography>
            <Typography variant="body2" sx={{ color: "red", marginTop: "5px" }}>
              Admin
            </Typography>
          </Box>

          {/* Edit Button */}
          <Button
            variant="contained"
            onClick={handleEditClick}
            sx={{
              backgroundColor: "white",
              color: "#2E2E2E",
              borderRadius: "50px",
              padding: "15px",
              paddingX: 2,
              marginLeft: { sm: "auto" }, // Align button to the right on large screens
              marginTop: { xs: "20px", sm: "0" },
            }}
          >
            Edit Profile
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            padding: "20px",
            position: "relative",
            marginTop: "85px", // Increased marginTop to move the content down
          }}
        >
          <Typography>
            Users
            {/* Add user management content here */}
          </Typography>

          {/* Tab Section */}
          <Box>
            {/* Senders Tab */}
            <Box
              onClick={() => handleTabChange("senders")}
              sx={{
                cursor: "pointer",
                padding: "10px",
                borderBottom:
                  selectedTab === "senders" ? "3px solid #F66F1E" : "none", // Active line
                display: "inline-block",
                marginRight: "20px",
              }}
            >
             Active Log
            </Box>

            {/* Travelers Tab */}
            <Box
              onClick={() => handleTabChange("travelers")}
              sx={{
                cursor: "pointer",
                padding: "10px",
                borderBottom:
                  selectedTab === "travelers" ? "3px solid #F66F1E" : "none", // Active line
                display: "inline-block",
              }}
            >
            Settings
            </Box>
          </Box>

          {/* Divider Line */}
          <Box
            sx={{
              height: "2px",
              backgroundColor: "#E5E5E5",
              margin: "10px 0", // Add some space above and below the line
            }}
          />

          {/* Tab Content */}
          {selectedTab === "senders" ? (
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h6">Sender Details</Typography>
              {/* Your sender details content goes here */}
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h6">Traveler Details</Typography>
              {/* Your traveler details content goes here */}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminProfile;
