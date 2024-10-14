import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import LADXLogo from "../assets/ladxLogo.png"; // Replace with actual path
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import NavSidebar from "./NavSidebar";
import test from "../assets/test.jpg"; 
const TravelerProfile = () => {
  const handleLogout = () => {
  navigate("/login"); // Navigate back to the login page
};
  return (
    <Box sx={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", sm: "250px" }, // Full width on small screens, fixed width on larger screens
          backgroundColor: "#FFF",
          height: "100vh", // Full height of the screen
          position: "relative", // Change to relative to avoid covering other content
          top: 0, // Align at the top
          left: 0, // Align to the left
          overflowY: "auto", // Allow vertical scrolling if content overflows
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Optional shadow for aesthetics
          zIndex: 2, // Ensure sidebar stays above the main content
          display: { xs: "block", sm: "block" }, // Ensure it displays in mobile view
          padding: { xs: "10px", sm: "0" }, // Adjust padding for smaller screens
          height: { xs: "auto", sm: "100vh" }, // Allow auto height on smaller screens
          margin: { xs: "10px", sm: "0" }, // Add margin for smaller screens
        }}
      >
        {/* List Section */}
        <List sx={{ padding: 2 }}>
          {["Home", "Delivery", "Message", "Profile"].map((text, index) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={
                index === 0
                  ? "/home" // Home page
                  : index === 1
                  ? "/delivery" // Delivery page
                  : index === 2
                  ? "/message" // Message page
                  : index === 3
                  ? "/profile" // Profile page
                  : "#"
              }
              onClick={() => handleListItemClick(index)}
              sx={{
                position: "relative",
                marginBottom: "15px",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#F6F6F6",
                },
              }}
            >
              {/* Vertical Line Indicator */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                 
                  height: "100%",
                  backgroundColor: "#F66F1E",
                  transition: "width 0.3s",
                }}
              />

              <ListItemIcon sx={{ minWidth: "40px" }}>
                {index === 0 && <HomeIcon />} {/* Home icon */}
                {index === 1 && <DeliveryDiningIcon />} {/* Delivery icon */}
                {index === 2 && <MessageIcon />} {/* Message icon */}
                {index === 3 && <PersonIcon />} {/* Profile icon */}
              </ListItemIcon>

              <ListItemText
                primary={text}
                sx={{
                  color: index === 3 ? "inherit" : "inherit",
                  fontWeight: "normal",
                }}
              />
            </ListItem>
          ))}

          {/* Logout List Item */}
          <ListItem
            button
            key="Logout"
            component={Link}
            to="/logout" // Adjust if logout logic is different
            onClick={() => handleListItemClick(4)}
            sx={{
              position: "relative",
              marginBottom: "15px",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#F6F6F6",
              },
            }}
          >
            {/* Vertical Line Indicator for Logout */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                
                height: "100%",
                backgroundColor: "#F66F1E",
                transition: "width 0.3s",
              }}
            />

            <ListItemIcon sx={{ minWidth: "40px" }}>
              <LogoutIcon /> {/* Logout icon */}
            </ListItemIcon>

            <ListItemText
              primary="Logout"
              sx={{
                color: "red", // Red text for Logout
                fontWeight: "normal",
              }}
            />
          </ListItem>
        </List>
      </Box>

      {/* Right Section */}
      <Box sx={{ flex: 1, backgroundColor: "#F5F5F5", padding: "20px" }}>
      {/* Navbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: { xs: "8px", sm: "10px" }, // Adjust padding for mobile
            boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
            zIndex: 1000,
            position: "fixed", // Fixed navbar
            top: 0, // Align at the top
            left: { xs: "0", sm: "250px" }, // Adjust based on sidebar width
            right: 0,
            width: "100%",
            boxSizing: "border-box",
            flexWrap: { xs: "wrap", sm: "nowrap" }, // Wrap items on small screens
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
              marginLeft: "20px",
              marginRight: "auto",
              fontWeight: "normal",
              fontSize: { xs: "16px", md: "inherit" }, // Responsive font size
              textAlign: { xs: "center", sm: "left" }, // Center text on mobile
            }}
          >
            Hi Joshua 👋
          </Typography>
          <IconButton sx={{ position: "relative", marginLeft: "10px" }}>
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
          <IconButton sx={{ borderRadius: "50%", marginLeft: "10px" }}>
            <img
              src="../assets/profilePic.png"
              alt="Profile"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </IconButton>
        </Box>

        {/* Profile Information Section */}
        <Box sx={{ display: "flex", alignItems: "center", padding: "20px" }}>
          <img
            src="../assets/profileImage.png" // Replace with the actual path to the profile image
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginRight: "20px",
            }}
          />
          <Box sx={{ color: "#0C2B5C" }}>
            <Typography variant="h6">John Kith</Typography>
            <Typography variant="body2">Kigali, Rwanda</Typography>
            <Typography variant="body2">Delivered 60 Items</Typography>
          </Box>
        </Box>
        {/* Message Button below Navbar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "20px",
            marginTop: "-100px",
            paddingRight: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/message"
            sx={{
              width: "150px",
              height: "40px",
              borderRadius: " 10px ",
            }}
            // startIcon={<MessageIcon fontSize="small" />}
          >
            Message
          </Button>
        </Box>

        {/* Rating Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {/* Rating Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {/* Stars */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Filled Stars */}
              {[...Array(3)].map((_, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#F66F1E",
                    fontSize: "24px",
                    marginRight: "2px",
                  }}
                >
                  ★
                </Typography>
              ))}
              {/* Empty Stars */}
              {[...Array(2)].map((_, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#E0E0E0",
                    fontSize: "24px",
                    marginRight: "2px",
                  }}
                >
                  ★
                </Typography>
              ))}
            </Box>

            {/* Reviews Text */}
            <Box
              sx={{
                marginTop: "5px",
                marginLeft: "15px",
                textAlign: "left",
                color: "#0C2B5C",
              }}
            >
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                Reviews (96)
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", fontSize: "12px", marginTop: "2px" }}
              >
                Add Review
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Horizontal Line */}
        <Box
          sx={{
            width: "900px",
            height: "2px",
            backgroundColor: "#E0E0E0",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></Box>

        {/* Review Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "#0C2B5C",
          }}
        >
          {/* Reviews Text */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Reviews
          </Typography>

          {/* Date */}
          <Typography
            variant="body2"
            sx={{ color: "#A0A0A0", marginTop: "5px", marginBottom: "10px" }}
          >
            March 19, 2023
          </Typography>

          {/* Review Content */}
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", maxWidth: "900px", lineHeight: "1.5" }}
          >
            As a sender, John is very proactive and gentle when travelling with
            items. He gives updates at the right time!!
          </Typography>
        </Box>

        {/* Reviewer Section */}
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          {/* Small Profile Image */}
          <img
            src="../assets/kenBonoloProfile.png" // Replace with actual path to the profile image
            alt="Reviewer"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />

          {/* Reviewer Info */}
          <Box sx={{ color: "#0C2B5C" }}>
            {/* Name */}
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Ken Bonolo
            </Typography>

            {/* Date */}
            <Typography
              variant="body2"
              sx={{ color: "#A0A0A0", marginTop: "5px", marginBottom: "15px" }}
            >
              March 19, 2023
            </Typography>

            {/* Review Content */}
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                marginTop: "10px",
                maxWidth: "900px",
                lineHeight: "1.5",
              }}
            >
              As a sender, John is very proactive and gentle when travelling
              with items. He gives updates at the right time!!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TravelerProfile;
