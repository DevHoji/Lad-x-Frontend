import React from "react";
import { Box, List,ListItem,ListItemIcon,ListItemText, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LADXLogo from "../assets/ladxLogo.png"; // Replace with actual path
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";

const TravelerProfile = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Box sx={{ width: "250px", backgroundColor: "#FFF" }}>
        <List sx={{ padding: 0 }}>
          {["Home", "Delivery", "Message", "Profile"].map((text, index) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={
                index === 0
                  ? "/home"
                  : index === 1
                  ? "/delivery"
                  : index === 2
                  ? "/message"
                  : index === 3
                  ? "/profile"
                  : "#"
              }
              sx={{
                position: "relative",
                marginBottom: "15px",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#F6F6F6",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {index === 0 && <HomeIcon />}
                {index === 1 && <DeliveryDiningIcon />}
                {index === 2 && <MessageIcon />}
                {index === 3 && <PersonIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
            padding: "10px",
            position: "relative",
            boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={LADXLogo}
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
            Hi Traveler 👋
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

        {/* Traveler Profile Content */}
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            Traveler Profile
          </Typography>
          <Typography>
            {/* Add Traveler Profile Information */}
            Profile details and relevant information about the traveler.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TravelerProfile;
