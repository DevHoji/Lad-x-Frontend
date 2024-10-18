import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Avatar,
  Divider,
  Box,Typography,
  Button,
  Popover,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import test from "../assets/olapp.jpg";
import profilePic from "../images/Profilebox2.jpeg";
import Home from "./Home";
import SwitchRightIcon from "@mui/icons-material/SwitchRight"; 
// Sample notification data
const notificationsData = [
  {
    id: 1,
    name: "John Doe",
    deliveryStatus: "Order Shipped",
    time: "2 hours ago",
    profileImg: profilePic,
  },
  {
    id: 2,
    name: "Jane Smith",
    deliveryStatus: "Order Delivered",
    time: "1 hour ago",
    profileImg: test,
  },
];

const TravelerLayout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Handle button click
  const handleHomeButtonClick = () => {
    navigate("/home");
  };

  // Handle notification icon click
  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle popover close
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleproClick = () => {
    navigate("/sender-p"); // Navigates to the Traveler Home page
  };

const handleGoToSenderView = () => {
  navigate("/home"); // Navigate to traveler-home
};
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "white",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Toolbar>
          <Avatar sx={{ margin: "auto" }} src="/logo.png" alt="LADX Logo" />
        </Toolbar>
        <Divider />
        <List>
          <ListItem
            button
            component={NavLink}
            to="/traveler-home"
            activeStyle={{ backgroundColor: "blue", color: "white" }}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "transparent",
              color: isActive ? "white" : "inherit",
            })}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/delivery-order"
            activeStyle={{ backgroundColor: "blue", color: "white" }}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "transparent",
              color: isActive ? "white" : "inherit",
            })}
          >
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Delivery Order" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/message-t"
            activeStyle={{ backgroundColor: "blue", color: "white" }}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "transparent",
              color: isActive ? "white" : "inherit",
            })}
          >
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/profile-t"
            activeStyle={{ backgroundColor: "blue", color: "white" }}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "blue" : "transparent",
              color: isActive ? "white" : "inherit",
            })}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: "red" }} />
          </ListItem>
          {/* New Button for Sender View */}
          <ListItem
            button
            onClick={handleGoToSenderView}
            sx={{
              marginBottom: "15px",
              borderRadius: "20px",
              cursor: "pointer",
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
                // backgroundColor: "#F66F1E",
                transition: "width 0.3s",
              }}
            />
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <SwitchRightIcon /> {/* Use the switch icon */}
            </ListItemIcon>

            <Typography sx={{ fontWeight: "normal" }}>
              GO TO SENDER VIEW
            </Typography>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Section */}
      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "white", padding: 3, mt: 8 }}
      >
        {/* Navbar */}
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#FFF",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1, fontWeight: "bold", color: "#000" }}>
              Welcome OLA!
            </Box>
            {/* Descriptive button to navigate to home view */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleHomeButtonClick}
              sx={{
                marginLeft: 2,
                backgroundColor: "#F66F1E", // Amazing background color
                borderRadius: "20px", // Rounded shape
                "&:hover": {
                  backgroundColor: "#FF5722", // Darker color on hover
                },
              }}
            >
              Go to Sender View
            </Button>
            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
              onClick={handleNotificationClick}
            >
              <Badge badgeContent={notificationsData.length} color="error">
                <NotificationsIcon sx={{ color: "black" }} />
              </Badge>
            </IconButton>

            <IconButton sx={{ ml: 2 }}>
              <Avatar alt="Profile Image" src={test} />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Notification Popover */}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box sx={{ p: 2, maxWidth: 300 }}>
            <List>
              {notificationsData.map((notification) => (
                <ListItem key={notification.id}>
                  <ListItemIcon>
                    <Avatar src={notification.profileImg} />
                  </ListItemIcon>
                  <ListItemText
                    primary={notification.name}
                    secondary={`${notification.deliveryStatus} - ${notification.time}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Popover>

        {/* Content Goes Here */}
        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default TravelerLayout;
