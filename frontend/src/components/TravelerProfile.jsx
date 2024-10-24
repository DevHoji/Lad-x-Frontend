import React, { Link, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  IconButton,
  useMediaQuery,
  Button,
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
import profilePic from "../images/Profilebox2.jpeg";
import test from "../assets/test.jpg";
import SwitchRightIcon from "@mui/icons-material/SwitchRight"; 
import { useNavigate } from "react-router-dom";

const notifications = [
  // Sample notification data
  {
    id: 1,
    name: "John Doe",
    message: "Your delivery has been shipped!",
    time: "2 mins ago",
    avatar: "",
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
];

const TravelerProfile = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [content, setContent] = useState("Home");
  const [anchorEl, setAnchorEl] = useState(null);

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleListItemClick = (index, text) => {
    setSelectedIndex(index);
    setContent(text);
  };

  const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleGoToSenderView = () => {
    navigate("/traveler-home"); // Navigate to traveler-home
  };
  const handleHomeButtonSClick = () => {
    navigate("/traveler-home");
    // alert("Switch to be Sender!"); // Change the alert message
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
          zIndex: 10,
          position: "fixed",
          width: "100%",
          top: 0,
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
        {/* Go to Sender View Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoToSenderView}
          sx={{
            backgroundColor: "#F66F1E",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#FF5722",
            },
          }}
        >
          Go to TRAVELER View
        </Button>
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
              maxHeight: 300,
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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              width: isMobile ? "60px" : "250px",
              backgroundColor: "#FFF",
              paddingTop: "15px",
              position: "fixed",
              top: "80px",
              height: "calc(100vh - 60px)",
              marginTop: "10px",
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
                      selectedIndex === index ? "#F6F6F6" : "transparent",
                    "&:hover": { backgroundColor: "#F6F6F6" },
                  }}
                >
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
                    selectedIndex === 4 ? "#F6F6F6" : "transparent",
                  "&:hover": { backgroundColor: "#F6F6F6" },
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

              {/* New Button for Sender View */}
              <ListItem
                button
                key="GoToTravelerView"
                onClick={handleGoToSenderView}
                sx={{
                  position: "relative",
                  marginBottom: "15px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedIndex === 4 ? "#F6F6F6" : "transparent",
                  "&:hover": { backgroundColor: "#F6F6F6" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "4px",
                    height: "100%",
                    transition: "width 0.3s",
                  }}
                />
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <SwitchRightIcon /> {/* Use the switch icon */}
                </ListItemIcon>
                {!isMobile && (
                  <Typography sx={{ fontWeight: "normal" }}>
                    GO TO TRAVELER VIEW
                  </Typography>
                )}
              </ListItem>
            </List>
          </Box>

          {/* Right Section */}
          <Box sx={{ flex: 1, backgroundColor: "#F5F5F5", padding: "20px" }}>
            {/* Profile Information Section */}
            <Box
              sx={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
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
                sx={{
                  color: "#A0A0A0",
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
              >
                March 19, 2023
              </Typography>

              {/* Review Content */}
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", maxWidth: "900px", lineHeight: "1.5" }}
              >
                As a sender, John is very proactive and gentle when travelling
                with items. He gives updates at the right time!!
              </Typography>
            </Box>

            {/* Reviewer Section */}
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
            >
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
                  sx={{
                    color: "#A0A0A0",
                    marginTop: "5px",
                    marginBottom: "15px",
                  }}
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
      </Box>
    </Box>
  );
};

export default TravelerProfile;
