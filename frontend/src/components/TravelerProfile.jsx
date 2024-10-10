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
