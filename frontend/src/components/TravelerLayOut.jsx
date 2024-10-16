import React from "react";
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
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";

const TravelerLayout = ({ children }) => {
  const notifications = [
    { id: 1, name: "John Doe", deliveryStatus: "Order Shipped" },
    { id: 2, name: "Jane Smith", deliveryStatus: "Order Delivered" },
  ];

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
            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
              onClick={() => {
                alert(JSON.stringify(notifications, null, 2)); // Placeholder for real notification popup
              }}
            >
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ ml: 2 }}>
              <Avatar alt="Profile Image" src="/profile.jpg" />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Content Goes Here */}
        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default TravelerLayout;
