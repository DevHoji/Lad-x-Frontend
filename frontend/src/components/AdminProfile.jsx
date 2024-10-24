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
  Divider,
  Typography,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LanguageIcon from "@mui/icons-material/Language";
import test from "../assets/test.jpg";
import samImg from "../assets/sam.jpg";
import joanna from "../assets/joanna.jpg";
import gg from "../assets/gg.jpg"
import image from "../assets/image.jpg";
import MessageIcon from "@mui/icons-material/Message";

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
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed", // Make the sidebar fixed
          top: 0,
          left: 0,
          height: "100vh", // Full height to avoid scrolling
          zIndex: 1000, // Ensures it's above other content
        }}
      >
        {/* Logo at the top */}
        <Box
          component="img"
          src={test} // Update with your logo path
          alt="Ladx Logo"
          sx={{
            width: "150px",
            height: "auto",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        />

        {/* Sidebar below the logo with curved top */}
        <Box
          sx={{
            backgroundColor: "#210947",
            width: { xs: "80px", sm: "226px" }, // Width changes based on screen size
            height: "100%", // Full height
            borderTopRightRadius: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          {/* List of navigation items */}
          <List sx={{ color: "#D3D3D3" }}>
            {/* Home */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin")} // Navigate to admin
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Orders */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-l")} // Navigate to admin-l
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Users */}
            <ListItem
              button
              onClick={() => handleNavigation("/user")} // Navigate to user
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Users"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Message */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-m")} // Navigate to admin-m
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <MessageIcon />{" "}
                {/* Change this icon to your preferred text message icon */}
              </ListItemIcon>
              <ListItemText
                primary="Messages"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>

            {/* Settings */}
            <ListItem
              button
              onClick={() => handleNavigation("/settings")} // Navigate to settings
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>
          </List>

          {/* Logout near the bottom */}
          <List sx={{ color: "#D3D3D3" }}>
            <ListItem
              button
              onClick={() => handleNavigation("/admin")} // Logout to admin page
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" }, // Center icon on small screens
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ display: { xs: "none", sm: "block" } }} // Hide text on small screens
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* User Info Box */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: { xs: "200px", sm: "280px" }, // Fixed width for small screens and up
          height: "99px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Keep space between items
          padding: "10px",
          boxSizing: "border-box", // Include padding in box size
        }}
      >
        {/* Bell Icon with Green Dot */}
        <Badge
          color="success"
          variant="dot"
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            marginRight: "2px", // Reduced space between bell and name
          }}
        >
          <Box
            sx={{
              backgroundColor: "#210947",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NotificationsIcon sx={{ color: "#FFFFFF" }} />
          </Box>
        </Badge>

        {/* Name */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center items in the column
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Sam Adeniyi
          </Typography>
          {/* Admin text below the name */}
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: "2px",
              fontSize: { xs: "0.7rem", sm: "0.8rem" },
            }} // Adjusted font size for small screens
          >
            Admin
          </Typography>
        </Box>

        {/* Small person icon to the right of the name */}
        <Box
          sx={{
            backgroundColor: "#210947",
            borderRadius: "4px",
            width: "24px",
            height: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2px", // Reduced space between name and person icon
          }}
        >
          <PersonIcon sx={{ color: "#FFFFFF", fontSize: "16px" }} />
        </Box>
      </Box>

      {/* Main content section */}
      <Box
        sx={{
          marginLeft: { xs: "120px", sm: "226px" },
          flexGrow: 1,
          padding: "20px",
          marginTop: "100px", // Push the main content down a bit
          height: "100vh",
          overflow: "auto",
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
            src={image} // Update with actual profile image path
            alt="Profile Image"
            sx={{
              width: "290px",
              height: "220px",
              borderRadius: "10px",
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
              margin: "10px 0",
              position: "relative", // Add some space above and below the line
            }}
          />

          {/* Tab Content */}
          {selectedTab === "senders" ? (
            <Box sx={{ padding: "10px" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", padding: "10px" }}
              >
                <ErrorOutlineIcon
                  sx={{
                    color: "#FFF",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "5px",
                    fontSize: "24px",
                    marginRight: "10px",
                  }}
                />
                <Typography variant="body1" sx={{ color: "#333" }}>
                  Matches made after 24 hours cannot be Unmatched
                </Typography>
              </Box>
              <Box
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow effect
                  borderRadius: "8px", // Optional: add border-radius for a smoother look
                  padding: "20px", // Optional: add padding for inner spacing
                  backgroundColor: "white", // Optional: set background color for contrast
                }}
              >
                {/* Top Section with Time Left */}
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", marginBottom: "10px" }}
                >
                  3 hours left
                </Typography>

                {/* From and To Section */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                    "@media (max-width: 600px)": {
                      flexDirection: "column", // Stack vertically on small screens
                      alignItems: "center",
                    },
                  }}
                >
                  {/* Left Side (Sender) */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: { xs: "10px", md: "0px" },
                    }}
                  >
                    <Avatar src={samImg} sx={{ width: 30, height: 30 }} />{" "}
                    {/* Reduced size */}
                    <Typography
                      variant="body2"
                      sx={{ color: "#FF0000", marginTop: "5px" }}
                    >
                      Sender
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black", textAlign: "center" }}
                    >
                      From
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "red", textAlign: "center" }}
                    >
                      Canada
                    </Typography>
                  </Box>
                  {/* Center Dashed Line and Circle */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      marginBottom: { xs: "10px", md: "0px" },
                    }}
                  >
                    {/* Left Side Dashed Line */}
                    <Divider
                      orientation="horizontal"
                      sx={{
                        width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust the length of the line for larger screens
                        borderColor: "black",
                        borderStyle: "dashed",
                        transition: "width 0.3s ease-in-out", // Smooth transition
                      }}
                    />
                    {/* Circle in the Middle */}
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#F66F1E",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <img
                        src={gg} // Replace with your image path
                        alt="Description" // Provide an alt description for accessibility
                        style={{
                          width: "100%", // Set to 100% to fill the box
                          height: "100%", // Set to 100% to fill the box
                          borderRadius: "50%", // Ensure the image is circular
                        }}
                      />
                    </Box>
                    {/* Right Side Dashed Line */}
                    <Divider
                      orientation="horizontal"
                      sx={{
                        width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust for different screen sizes
                        borderColor: "black",
                        borderStyle: "dashed",
                        transition: "width 0.3s ease-in-out", // Smooth transition
                      }}
                    />
                  </Box>

                  {/* Right Side (Traveler and Unmatch Button) */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: { xs: "column", md: "row" }, // Flex in row on larger screens, stack on mobile
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar src={joanna} sx={{ width: 30, height: 30 }} />{" "}
                    {/* Reduced size */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        marginLeft: { md: "10px" }, // Adds space between Avatar and text on larger screens
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#FF0000", marginTop: "5px" }}
                      >
                        Traveler
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "black",
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        To
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "red",
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        Kenya
                      </Typography>
                    </Box>
                    {/* Unmatch Button and Matched Info */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        marginLeft: { xs: "0px", md: "20px" }, // Ensure button and text are next to profile image on larger screens
                        marginTop: { xs: "10px", md: "0px" }, // Adjust for mobile view
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#A9A9A9",
                          marginTop: "10px",
                          textAlign: "center",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                      >
                        Matched 3hrs ago
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#210947",
                          color: "#FFF",
                          marginTop: "5px",
                          padding: { xs: "4px 8px", md: "6px 12px" },
                          borderRadius: "8px",
                          textTransform: "none",
                          fontSize: { xs: "12px", md: "14px" },
                          "&:hover": {
                            backgroundColor: "#18073b",
                          },
                        }}
                      >
                        Unmatch
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "center", marginTop: "10px" }}
                >
                  Item(s): iPhone 12, Hand Fan, Dell Laptop
                </Typography>
              </Box>

              <Box
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow effect
                  borderRadius: "8px", // Optional: add border-radius for a smoother marginTop:"",look
                  marginTop: "10px",
                  padding: "20px", // Optional: add padding for inner spacing
                  backgroundColor: "white", // Optional: set background color for contrast
                }}
              >
                {/* Top Section with Time Left */}
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", marginBottom: "10px" }}
                >
                  3 hours left
                </Typography>

                {/* From and To Section */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                    "@media (max-width: 600px)": {
                      flexDirection: "column", // Stack vertically on small screens
                      alignItems: "center",
                    },
                  }}
                >
                  {/* Left Side (Sender) */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: { xs: "10px", md: "0px" },
                    }}
                  >
                    <Avatar src={samImg} sx={{ width: 30, height: 30 }} />{" "}
                    {/* Reduced size */}
                    <Typography
                      variant="body2"
                      sx={{ color: "#FF0000", marginTop: "5px" }}
                    >
                      Sender
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black", textAlign: "center" }}
                    >
                      From
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "red", textAlign: "center" }}
                    >
                      Canada
                    </Typography>
                  </Box>
                  {/* Center Dashed Line and Circle */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      marginBottom: { xs: "10px", md: "0px" },
                    }}
                  >
                    {/* Left Side Dashed Line */}
                    <Divider
                      orientation="horizontal"
                      sx={{
                        width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust the length of the line for larger screens
                        borderColor: "black",
                        borderStyle: "dashed",
                        transition: "width 0.3s ease-in-out", // Smooth transition
                      }}
                    />
                    {/* Circle in the Middle */}
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#F66F1E",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <img
                        src={gg} // Replace with your image path
                        alt="Description" // Provide an alt description for accessibility
                        style={{
                          width: "100%", // Set to 100% to fill the box
                          height: "100%", // Set to 100% to fill the box
                          borderRadius: "50%", // Ensure the image is circular
                        }}
                      />
                    </Box>
                    {/* Right Side Dashed Line */}
                    <Divider
                      orientation="horizontal"
                      sx={{
                        width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust for different screen sizes
                        borderColor: "black",
                        borderStyle: "dashed",
                        transition: "width 0.3s ease-in-out", // Smooth transition
                      }}
                    />
                  </Box>

                  {/* Right Side (Traveler and Unmatch Button) */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: { xs: "column", md: "row" }, // Flex in row on larger screens, stack on mobile
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar src={joanna} sx={{ width: 30, height: 30 }} />{" "}
                    {/* Reduced size */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        marginLeft: { md: "10px" }, // Adds space between Avatar and text on larger screens
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#FF0000", marginTop: "5px" }}
                      >
                        Traveler
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "black",
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        To
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "red",
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        Kenya
                      </Typography>
                    </Box>
                    {/* Unmatch Button and Matched Info */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        marginLeft: { xs: "0px", md: "20px" }, // Ensure button and text are next to profile image on larger screens
                        marginTop: { xs: "10px", md: "0px" }, // Adjust for mobile view
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#A9A9A9",
                          marginTop: "10px",
                          textAlign: "center",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                      >
                        Matched 3hrs ago
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#210947",
                          color: "#FFF",
                          marginTop: "5px",
                          padding: { xs: "4px 8px", md: "6px 12px" },
                          borderRadius: "8px",
                          textTransform: "none",
                          fontSize: { xs: "12px", md: "14px" },
                          "&:hover": {
                            backgroundColor: "#18073b",
                          },
                        }}
                      >
                        Unmatch
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "center", marginTop: "10px" }}
                >
                  Item(s): iPhone 12, Hand Fan, Dell Laptop
                </Typography>
              </Box>

              <Box
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow effect
                  borderRadius: "8px", // Optional: add border-radius for a smoother marginTop:"",look
                  marginTop: "10px",
                  padding: "20px", // Optional: add padding for inner spacing
                  backgroundColor: "white", // Optional: set background color for contrast
                }}
              >
                {/* Top Section with Time Left */}
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", marginBottom: "10px" }}
                >
                  3 hours left
                </Typography>

                {/* From and To Section */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                    "@media (max-width: 600px)": {
                      flexDirection: "column", // Stack vertically on small screens
                      alignItems: "center",
                    },
                  }}
                >
                  {/* Left Side (Sender) */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginBottom: { xs: "10px", md: "0px" },
                    }}
                  >
                    <Avatar src={samImg} sx={{ width: 30, height: 30 }} />{" "}
                    {/* Reduced size */}
                    <Typography
                      variant="body2"
                      sx={{ color: "#FF0000", marginTop: "5px" }}
                    >
                      Sender
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "black", textAlign: "center" }}
                    >
                      From
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "red", textAlign: "center" }}
                    >
                      Canada
                    </Typography>
                  </Box>
                  {/* Center Dashed Line and Circle */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      marginBottom: { xs: "10px", md: "0px" },
                    }}
                  >
                    {/* Left Side Dashed Line */}
                    <Divider
                      orientation="horizontal"
                      sx={{
                        width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust the length of the line for larger screens
                        borderColor: "black",
                        borderStyle: "dashed",
                        transition: "width 0.3s ease-in-out", // Smooth transition
                      }}
                    />
                    {/* Circle in the Middle */}
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#F66F1E",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <img
                        src={gg} // Replace with your image path
                        alt="Description" // Provide an alt description for accessibility
                        style={{
                          width: "100%", // Set to 100% to fill the box
                          height: "100%", // Set to 100% to fill the box
                          borderRadius: "50%", // Ensure the image is circular
                        }}
                      />
                    </Box>
                    {/* Right Side Dashed Line */}
                    <Divider
                      orientation="horizontal"
                      sx={{
                        width: { xs: "50px", md: "150px", lg: "250px" }, // Adjust for different screen sizes
                        borderColor: "black",
                        borderStyle: "dashed",
                        transition: "width 0.3s ease-in-out", // Smooth transition
                      }}
                    />
                  </Box>

                  {/* Right Side (Traveler and Unmatch Button) */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: { xs: "column", md: "row" }, // Flex in row on larger screens, stack on mobile
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar src={joanna} sx={{ width: 30, height: 30 }} />{" "}
                    {/* Reduced size */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        marginLeft: { md: "10px" }, // Adds space between Avatar and text on larger screens
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#FF0000", marginTop: "5px" }}
                      >
                        Traveler
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "black",
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        To
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "red",
                          textAlign: { xs: "center", md: "left" },
                        }}
                      >
                        Kenya
                      </Typography>
                    </Box>
                    {/* Unmatch Button and Matched Info */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        marginLeft: { xs: "0px", md: "20px" }, // Ensure button and text are next to profile image on larger screens
                        marginTop: { xs: "10px", md: "0px" }, // Adjust for mobile view
                      }}
                    >
                     

                      {/* Unmatch Button and Matched Info */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: { xs: "center", md: "flex-start" },
                          marginLeft: { xs: "0px", md: "20px" },
                          marginTop: { xs: "10px", md: "0px" },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#A9A9A9",
                            marginTop: "10px",
                            textAlign: "center",
                            fontSize: { xs: "12px", md: "14px" },
                          }}
                        >
                          Matched 3hrs ago
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#D3D3D3",
                            color: "#FFF",
                            marginTop: "5px",
                            padding: { xs: "4px 8px", md: "6px 12px" },
                            borderRadius: "8px",
                            textTransform: "none",
                            fontSize: { xs: "12px", md: "14px" },
                            "&:hover": {
                              backgroundColor: "#B0B0B0",
                            },
                          }}
                        >
                          Unmatch
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "center", marginTop: "10px" }}
                >
                  Item(s): iPhone 12, Hand Fan, Dell Laptop
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 4,
                  marginBottom: 4,
                }}
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
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminProfile;
