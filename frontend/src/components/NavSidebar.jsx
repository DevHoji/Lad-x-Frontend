import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import {
  Home as HomeIcon,
  DeliveryDining as DeliveryDiningIcon,
  Message as MessageIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LADXLogo from "../images/TLOGO.jpeg";
import profilePic from "../images/Profilebox2.jpeg";
import test from "../assets/test.jpg"; 
// Import your components here
import Home from './Home'; // adjust the path based on your file structure
import Delivery from './Delivery'; // adjust the path based on your file structure
import Message from './Message'; // adjust the path based on your file structure
import Profile from "./Profile";
import AccountSettings from "./AccountSettings";
import TravelerProfile from "./TravelerProfile";

// Sample notification data
const notifications = [
  {
    id: 1,
    name: "John Doe",
    message: "Your delivery has been shipped!",
    time: "2 mins ago",
    avatar: "", // Add profile image URLs here or use placeholders
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "You received a new message.",
    time: "10 mins ago",
    avatar: "",
  },
  {
    id: 3,
    name: "Mike Johnson",
    message: "Profile updated successfully.",
    time: "1 hour ago",
    avatar: "",
  },
  // ... other notifications
];

const NavSidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [content, setContent] = useState("Home");
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for the notifications dropdown

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleListItemClick = (index, text) => {
    setSelectedIndex(index);
    setContent(text);
  };

  const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the dropdown menu
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null); // Close the dropdown menu
  };

  return (
    <Box>
      {/* Navbar at the top */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
          zIndex: 10,
          position: "fixed", // Keep navbar fixed
          width: "100%", // Ensure it spans full width
          top: 0, // Position at the top
        }}
      >
        <img
          src={test}
          alt="Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <Typography
          variant="body1"
          sx={{
            marginLeft: "100px",
            marginRight: "auto",
            fontWeight: "normal",
          }}
        >
          Hi Joshua 👋
        </Typography>
        <IconButton
          sx={{ position: "relative", marginLeft: "10px" }}
          onClick={handleNotificationsClick}
        >
          <NotificationsIcon />
          <Box
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "green",
            }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleNotificationsClose}
          PaperProps={{
            style: {
              maxHeight: 300, // Set a max height for the dropdown
              width: "300px",
            },
          }}
        >
          {notifications.map((notification) => (
            <MenuItem key={notification.id} onClick={handleNotificationsClose}>
              <ListItemIcon>
                <Avatar src={notification.avatar || profilePic} alt="Profile" />
              </ListItemIcon>
              <Box
                sx={{ display: "flex", flexDirection: "column", marginLeft: 2 }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {notification.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {notification.message}
                </Typography>
                <Typography variant="caption" sx={{ color: "gray" }}>
                  {notification.time}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>

        <IconButton sx={{ borderRadius: "50%", marginLeft: "10px" }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Sidebar under the Navbar */}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              width: isMobile ? "60px" : "250px",
              backgroundColor: "#FFF",
              paddingTop: "15px",
              position: "fixed",
              top: "60px", // Adjust to position below the fixed navbar
              height: "calc(100vh - 60px)", // Adjust height to take full viewport height minus the navbar
              marginTop: "10px", // Optional: Add margin-top to separate from navbar
            }}
          >
            <List sx={{ padding: 0 }}>
              {["Home", "Delivery", "Message", "Profile"].map((text, index) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => handleListItemClick(index, text)}
                  sx={{
                    position: "relative",
                    marginBottom: "15px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedIndex === index ? "#F6F6F6" : "transparent", // Change background color when selected
                    "&:hover": { backgroundColor: "#F6F6F6" }, // Keep hover effect for other items
                  }}
                >
                  {/* Orange Line Indicator */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: selectedIndex === index ? "4px" : "0px",
                      height: "100%",
                      backgroundColor: "#F66F1E",
                      transition: "width 0.3s",
                    }}
                  />
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    {index === 0 && <HomeIcon />}
                    {index === 1 && <DeliveryDiningIcon />}
                    {index === 2 && <MessageIcon />}
                    {index === 3 && <PersonIcon />}
                  </ListItemIcon>
                  {!isMobile && (
                    <Typography sx={{ fontWeight: "normal" }}>
                      {text}
                    </Typography>
                  )}
                </ListItem>
              ))}

              {/* Logout */}
              <ListItem
                button
                key="Logout"
                onClick={() => handleListItemClick(4, "Home")}
                sx={{
                  position: "relative",
                  marginBottom: "15px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedIndex === 4 ? "#F6F6F6" : "transparent", // Change background color when selected
                  "&:hover": { backgroundColor: "#F6F6F6" }, // Keep hover effect for Logout
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: selectedIndex === 4 ? "4px" : "0px",
                    height: "100%",
                    backgroundColor: "#F66F1E",
                    transition: "width 0.3s",
                  }}
                />
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <LogoutIcon />
                </ListItemIcon>
                {!isMobile && (
                  <Typography sx={{ color: "red", fontWeight: "normal" }}>
                    Logout
                  </Typography>
                )}
              </ListItem>
            </List>
          </Box>

          {/* Main Content Area */}
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: isMobile ? "60px" : "250px",
            }}
          >
            {/* Render components based on the selected content */}
            {content === "Home" && <Home />}
            {content === "Delivery" && <Delivery />}
            {content === "Message" && <Message />}
            {content === "TravlerProfile" && <TravelerProfile />}
            {content === "Profile" && <Profile setContent={setContent} />}
            {content === "AccountSettings" && <AccountSettings />}

            {/* Add any additional components if necessary */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavSidebar;
