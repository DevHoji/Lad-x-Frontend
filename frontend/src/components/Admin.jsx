import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Button,
  Grid,
  Divider, // Import Divider
  InputBase,
  Avatar,
  Checkbox,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Delivery car icon
import PersonIcon from "@mui/icons-material/Person"; // User icon
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Logout icon
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Import the bell icon
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import homepp from "../assets/homepp.jpg";
import joanna from "../assets/joanna.jpg"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MessageIcon from "@mui/icons-material/Message";
import test from "../assets/test.jpg";
import leilaImg from "../assets/leila.jpg";
import samImg from "../assets/sam.jpg";
import johnImg from "../assets/john.jpg";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path); // Use path for navigation
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#F5F5F5" }}>
      {/* Sidebar with logo */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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

      {/* Space between sidebar and right content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
        }}
      >
        {/* Three equal boxes in a responsive grid */}
        <Grid container spacing={2} sx={{ flexGrow: 0 }}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  width: { xs: "100%", sm: "205px" }, // Responsive width
                  height: { xs: "190px", sm: "190px" }, // Responsive height
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column", // Align content vertically in the center
                }}
              >
                {index === 0 && (
                  <>
                    {/* Content for first box */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {/* Overlapping profile images */}
                      <Box
                        sx={{
                          display: "flex",
                          position: "relative",
                          marginRight: "10px",
                        }}
                      >
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 0,
                          }}
                        />
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 15,
                          }}
                        />
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 30,
                          }}
                        />
                      </Box>
                      {/* Text next to images */}
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "12px", marginLeft: "50px" }}
                      >
                        Amount of Travelers
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ color: "#F66F1E", marginTop: "10px" }}
                    >
                      101
                    </Typography>
                  </>
                )}

                {index === 1 && (
                  <>
                    {/* Content for second box */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {/* Overlapping profile images */}
                      <Box
                        sx={{
                          display: "flex",
                          position: "relative",
                          marginRight: "10px",
                        }}
                      >
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 0,
                          }}
                        />
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 15,
                          }}
                        />
                        <Box
                          component="img"
                          src={homepp}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "2px solid white",
                            position: "absolute",
                            left: 30,
                          }}
                        />
                      </Box>
                      {/* Text next to images */}
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "12px", marginLeft: "50px" }}
                      >
                        Amount of Senders
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ color: "#F66F1E", marginTop: "10px" }}
                    >
                      226
                    </Typography>
                  </>
                )}

                {index === 2 && (
                  <>
                    {/* Content for third box */}
                    <Box
                      sx={{
                        alignSelf: "flex-start",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#F66F1E",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        Monthly
                      </Typography>
                      <ArrowDropDownIcon
                        sx={{
                          color: "#F66F1E",
                          fontSize: { xs: "18px", md: "20px" },
                          marginLeft: "5px",
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        color: "#210947",
                        fontSize: { xs: "24px", md: "28px" },
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      74
                    </Typography>

                    <Typography
                      sx={{
                        color: "#210947",
                        fontSize: { xs: "12px", md: "14px" },
                        marginTop: "5px",
                        textAlign: "center",
                      }}
                    >
                      Total Amount of Package <br /> Delivered/Sender
                    </Typography>
                  </>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Search bar with search icon on the left */}
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              flexGrow: 1,
              backgroundColor: "white",
              borderRadius: "8px",
              marginRight: "10px",
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "inherit", marginRight: "8px" }} />
              ),
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              color: "#F66F1E",
              padding: "10px 15px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Today{" "}
            <KeyboardArrowDownIcon
              sx={{ marginLeft: "4px", color: "#F66F1E" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Update Delivery Status</h2>

          {/* White Container */}
          <Box
            sx={{
              backgroundColor: "white",
              padding: {
                xs: "10px",
                sm: "15px",
                md: "20px",
              },
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              marginTop: "20px",
              width: "100%",
              height: {
                xs: "auto",
                sm: "auto",
                md: "100vh",
              },
              position: "relative",
              overflow: "auto",
            }}
          >
            {/* Header Row for Items, Traveler, Status */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
                padding: {
                  xs: "5px",
                  sm: "8px",
                  md: "10px",
                },
                marginBottom: "20px",
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                Items to be Delivered
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                Traveler
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "12px", md: "16px" },
                }}
              >
                Status
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                borderRadius: "22.5px",
                width: "100%",
                maxWidth: { md: "450px" },
                height: "45px",
                padding: "0 10px",
                marginBottom: "20px",
              }}
            >
              <SearchIcon sx={{ color: "#F66F1E" }} />
              <InputBase
                placeholder="Search"
                sx={{ marginLeft: "10px", flex: 1 }}
              />
            </Box>

            {/* Item List */}
            <Box sx={{ marginBottom: "20px" }}>
              {["Hand Bags", "Gadgets", "Food Items", "Hand Bags"].map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      borderBottom: index < 3 ? "1px solid #E0E0E0" : "none",
                      paddingBottom: "10px",
                      paddingX: { xs: "10px", sm: "0" },
                    }}
                  >
                    {/* Item Name and Checkbox */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox size="small" />
                      <Typography
                        sx={{
                          marginLeft: "10px",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>

                    {/* Traveler Information */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        component="img"
                        src={[johnImg, leilaImg, samImg, johnImg][index]}
                        alt="profile"
                        sx={{
                          width: 25,
                          height: 25,
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                        {
                          [
                            "Sam Kethin",
                            "John Durelo",
                            "Leila Adebayo",
                            "Sam Kethin",
                          ][index]
                        }
                      </Typography>
                    </Box>

                    {/* Status Information */}
                    <Box
                      sx={{
                        borderRadius: "4px",
                        padding: "5px 10px",
                        textAlign: "end",
                        color:
                          index === 1 ? "red" : index === 2 ? "green" : "blue",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                    >
                      {
                        ["In Process", "Failed", "Delivered", "In Process"][
                          index
                        ]
                      }
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main content box on the far right */}
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          width: "400px", // Adjust the width as needed
          height: "100vh", // Ensure it goes to the bottom of the page
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          justifyContent: "flex-start", // Align items to the top
        }}
      >
        {/* Responsive layout for all icons and text */}
        <Grid
          container
          direction="column" // Stack elements in a column by default
          alignItems="center"
          sx={{ width: "100%", marginTop: "20px" }} // Full width
        >
          {/* Bell Icon with Black Background and Green Dot */}
          <Grid item>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  padding: "10px", // Padding around the icon
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NotificationsIcon sx={{ color: "white" }} />
              </Box>
              {/* Green Dot */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "10px", // Adjust size of dot
                  height: "10px",
                  backgroundColor: "#009951", // Green color
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>

          {/* Name */}
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Sam Adeniyi
            </Typography>
          </Grid>

          {/* Role */}
          <Grid item>
            <Typography
              variant="body2"
              sx={{ color: "#009951", textAlign: "center" }}
            >
              Admin
            </Typography>
          </Grid>

          {/* Person Icon with Square Background */}
          <Grid item>
            <Box
              sx={{
                backgroundColor: "black",
                width: "65px", // Keep it square
                height: "65px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15px",
                borderRadius: "0", // Ensure it remains a square
              }}
            >
              <PersonIcon sx={{ color: "white", fontSize: "40px" }} />
            </Box>
          </Grid>
        </Grid>

        {/* Horizontal Divider */}
        <Divider
          sx={{
            width: "384px",
            height: "2px",
            backgroundColor: "#F5F5F5",
            marginTop: "20px",
          }}
        />

        {/* Delivery In Process Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Space between the heading and the circle
            width: "100%", // Full width for alignment
            marginTop: "20px", // Space above the heading
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center", flex: 1 }}>
            Delivery In Process
          </Typography>
          {/* Circle with Number */}
          <Box
            sx={{
              backgroundColor: "#F66F1E",
              borderRadius: "50%",
              width: "40px", // Circle size
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px", // Space between heading and circle
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              23
            </Typography>
          </Box>
        </Box>
        {/* New Box Below the Heading */}
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%", // Keep it within the container
            height: "auto", // Allow auto height to fit content
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            marginTop: "20px", // Space above the new box
            display: "flex",
            flexDirection: "column",
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
            }}
          >
            {/* Left Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Profile Image */}
              <Avatar src={samImg} sx={{ width: 40, height: 40 }} />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography>

              {/* From Section */}
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

            {/* Center Circle and Horizontal Lines */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute", // Positioning the circle in the center
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography variant="body2" sx={{ color: "white" }}>
                  25
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "black", marginLeft: "5px", marginTop: "5px" }}
              >
                &gt;
              </Typography>
            </Box>

            {/* Right Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar src={joanna} sx={{ width: 40, height: 40 }} />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Traveler
              </Typography>

              {/* To Section */}
              <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                To
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Kenya
              </Typography>
            </Box>
          </Box>

          {/* Item(s) Section */}
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box>
        {/* New Box Below the Heading */}
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%", // Keep it within the container
            height: "auto", // Allow auto height to fit content
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            marginTop: "20px", // Space above the new box
            display: "flex",
            flexDirection: "column",
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
            }}
          >
            {/* Left Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Profile Image */}
              <Avatar src={samImg} sx={{ width: 40, height: 40 }} />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography>

              {/* From Section */}
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

            {/* Center Circle and Horizontal Lines */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute", // Positioning the circle in the center
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography variant="body2" sx={{ color: "white" }}>
                  25
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "black", marginLeft: "5px", marginTop: "5px" }}
              >
                &gt;
              </Typography>
            </Box>

            {/* Right Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar src={joanna} sx={{ width: 40, height: 40 }} />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Traveler
              </Typography>

              {/* To Section */}
              <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                To
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Kenya
              </Typography>
            </Box>
          </Box>

          {/* Item(s) Section */}
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box>
        {/* New Box Below the Heading */}
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%", // Keep it within the container
            height: "auto", // Allow auto height to fit content
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            marginTop: "20px", // Space above the new box
            display: "flex",
            flexDirection: "column",
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
            }}
          >
            {/* Left Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Profile Image */}
              <Avatar src={samImg} sx={{ width: 40, height: 40 }} />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography>

              {/* From Section */}
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

            {/* Center Circle and Horizontal Lines */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute", // Positioning the circle in the center
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography variant="body2" sx={{ color: "white" }}>
                  25
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "black", marginLeft: "5px", marginTop: "5px" }}
              >
                &gt;
              </Typography>
            </Box>

            {/* Right Side */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar src={joanna} sx={{ width: 40, height: 40 }} />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Traveler
              </Typography>

              {/* To Section */}
              <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                To
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Kenya
              </Typography>
            </Box>
          </Box>

          {/* Item(s) Section */}
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box>

        {/* New Box Below the Heading
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%", // Keep it within the container
            height: "auto", // Allow auto height to fit content
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            marginTop: "20px", // Space above the new box
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top Section with Time Left */}
        {/* <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            3 hours left
          </Typography>

          {/* From and To Section */}
        {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >  */}
        {/* Left Side */}
        {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            > */}
        {/* Profile Image */}
        {/* <Avatar
                src="/path/to/profile/image.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography> */}

        {/* From Section */}
        {/* <Typography
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
            </Box> */}

        {/* Center Circle and Horizontal Lines */}
        {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute", // Positioning the circle in the center
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography variant="body2" sx={{ color: "white" }}>
                  25
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "black", marginLeft: "5px", marginTop: "5px" }}
              >
                &gt;
              </Typography>
            </Box> */}

        {/* Right Side */}
        {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src="/path/to/other/profile/image.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Traveler
              </Typography>

              {/* To Section */}
        {/* <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                To
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Kenya
              </Typography>
            </Box>
          </Box> */}

        {/* Item(s) Section */}
        {/* <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box> */}
        {/* New Box Below the Heading */}
        {/* <Box
          sx={{
            backgroundColor: "white",
            width: "100%", // Keep it within the container
            height: "auto", // Allow auto height to fit content
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            marginTop: "20px", // Space above the new box
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top Section with Time Left */}
        {/* <Typography
            variant="body1"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            3 hours left
          </Typography>

          {/* From and To Section */}
        {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
          >  */}
        {/* Left Side */}
        {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            > */}
        {/* Profile Image */}
        {/* <Avatar
                src="/path/to/profile/image.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Sender
              </Typography> */}

        {/* From Section */}
        {/* <Typography
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
            </Box> */}

        {/* Center Circle and Horizontal Lines */}
        {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#F66F1E",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute", // Positioning the circle in the center
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography variant="body2" sx={{ color: "white" }}>
                  25
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  width: "70px",
                  borderColor: "black",
                  borderStyle: "dashed",
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "black", marginLeft: "5px", marginTop: "5px" }}
              >
                &gt;
              </Typography>
            </Box> */}

        {/* Right Side */}
        {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src="/path/to/other/profile/image.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#FF0000", marginTop: "5px" }}
              >
                Traveler
              </Typography> */}

        {/* To Section */}
        {/* <Typography
                variant="body2"
                sx={{ color: "black", textAlign: "center" }}
              >
                To
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "center" }}
              >
                Kenya
              </Typography>
            </Box>
          </Box> */}

        {/* Item(s) Section */}
        {/* <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "10px" }}
          >
            Item(s): iPhone 12, Hand Fan, Dell Laptop
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Admin;
