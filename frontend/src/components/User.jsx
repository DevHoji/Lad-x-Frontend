import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Badge,
  InputAdornment,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Bell Icon
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import test from "../assets/test.jpg";
import mes from "../assets/mes.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";

const User = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("senders");
  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };
    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    };
  const handleNavigate = () => {
    navigate("/Admin-M"); // Navigate to Admin-M when clicked
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

      <Box
        sx={{
          flexGrow: 1,
          marginLeft: { xs: "100px", sm: "226px" },
          padding: "20px",
          position: "relative",
          marginTop: "110px",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Typography>Users</Typography>

        {/* Tab Section */}
        <Box>
          {/* Senders Tab */}
          <Box
            onClick={() => handleTabChange("senders")}
            sx={{
              cursor: "pointer",
              padding: "10px",
              borderBottom:
                selectedTab === "senders" ? "3px solid #F66F1E" : "none",
              display: "inline-block",
              marginRight: "20px",
            }}
          >
            Senders
          </Box>

          {/* Travelers Tab */}
          <Box
            onClick={() => handleTabChange("travelers")}
            sx={{
              cursor: "pointer",
              padding: "10px",
              borderBottom:
                selectedTab === "travelers" ? "3px solid #F66F1E" : "none",
              display: "inline-block",
            }}
          >
            Travelers
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
        <Box sx={{ padding: "10px" }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "100%", // Full width search box
              maxWidth: "400px", // Adjust as per your design
              marginBottom: "20px", // Add spacing below the search box if needed
            }}
          />
          {selectedTab === "senders" ? (
            <Box sx={{ padding: "10px" }}>
              <Box
                onClick={() => navigate("/Admin-p")} // Navigate to Admin-p when the white box is clicked
                sx={{
                  width: "100%",
                  maxWidth: "900px", // Decrease the size of the white box
                  height: { xs: "auto", sm: "180px" }, // Adjust height for responsiveness
                  backgroundColor: "#FFF",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
                  "&:hover": {
                    cursor: "pointer", // Change cursor on hover
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
                  },
                }}
              >
                {/* Profile Image */}
                <Box
                  component="img"
                  src={mes} // Replace with actual path
                  alt="Profile"
                  sx={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
                  }}
                />

                {/* Text Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
                    textAlign: { xs: "center", sm: "left" }, // Center text on small screens
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    Jonathan Smith
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      gap: "5px",
                      flexWrap: { xs: "wrap", sm: "nowrap" },
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                      Rwanda, Kigali
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                      <span
                        style={{
                          color: "red",
                          marginRight: "15px",
                          marginLeft: "15px",
                        }}
                      >
                        •
                      </span>
                      50 Items Sent
                    </Typography>
                  </Box>
                </Box>

                {/* Message and Menu Icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    "@media (max-width: 600px)": {
                      width: "100%", // Make the button take full width on small screens
                      marginTop: "10px",
                      justifyContent: "center", // Center on small screens
                    },
                  }}
                >
                  {/* Message Button */}
                  <Box
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents the box click from triggering
                      navigate("/Admin-m"); // Navigate to Admin-m when the message button is clicked
                    }}
                    sx={{
                      backgroundColor: "#210947",
                      color: "#FFF",
                      padding: { xs: "8px 10px", sm: "10px 20px" },
                      borderRadius: "5px",
                      "&:hover": {
                        backgroundColor: "#3E2B69",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Message
                    </Typography>
                  </Box>

                  {/* Ellipsis Menu Icon */}
                  <MoreVertIcon
                    sx={{
                      color: "black",
                      marginLeft: "10px", // Add some space between Message and the icon
                      cursor: "pointer",
                      "&:hover": {
                        color: "#F66F1E", // Optional hover effect
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ padding: "10px" }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "900px", // Decrease the size of the white box
                    height: { xs: "auto", sm: "180px" }, // Adjust height for responsiveness
                    backgroundColor: "#FFF",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
                    "&:hover": {
                      cursor: "pointer", // Change cursor on hover
                      boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
                    },
                  }}
                >
                  {/* Profile Image */}
                  <Box
                    component="img"
                    src={mes} // Replace with actual path
                    alt="Profile"
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
                    }}
                  />

                  {/* Text Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
                      textAlign: { xs: "center", sm: "left" }, // Center text on small screens
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      Jonathan Smith
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        gap: "5px",
                        flexWrap: { xs: "wrap", sm: "nowrap" },
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        Rwanda, Kigali
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        <span
                          style={{
                            color: "red",
                            marginRight: "15px",
                            marginLeft: "15px",
                          }}
                        >
                          •
                        </span>
                        50 Items Sent
                      </Typography>
                    </Box>
                  </Box>

                  {/* Message and Menu Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      "@media (max-width: 600px)": {
                        width: "100%", // Make the button take full width on small screens
                        marginTop: "10px",
                        justifyContent: "center", // Center on small screens
                      },
                    }}
                  >
                    {/* Message Button */}
                    <Box
                      onClick={handleNavigate} // Navigate to Admin-M when clicked
                      sx={{
                        backgroundColor: "#210947",
                        color: "#FFF",
                        padding: { xs: "8px 10px", sm: "10px 20px" },
                        borderRadius: "5px",
                        "&:hover": {
                          backgroundColor: "#3E2B69",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Message
                      </Typography>
                    </Box>

                    {/* Ellipsis Menu Icon */}
                    <MoreVertIcon
                      sx={{
                        color: "black",
                        marginLeft: "10px", // Add some space between Message and the icon
                        cursor: "pointer",
                        "&:hover": {
                          color: "#F66F1E", // Optional hover effect
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ padding: "10px" }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "900px", // Decrease the size of the white box
                    height: { xs: "auto", sm: "180px" }, // Adjust height for responsiveness
                    backgroundColor: "#FFF",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
                    "&:hover": {
                      cursor: "pointer", // Change cursor on hover
                      boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
                    },
                  }}
                >
                  {/* Profile Image */}
                  <Box
                    component="img"
                    src={mes} // Replace with actual path
                    alt="Profile"
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
                    }}
                  />

                  {/* Text Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
                      textAlign: { xs: "center", sm: "left" }, // Center text on small screens
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      Jonathan Smith
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        gap: "5px",
                        flexWrap: { xs: "wrap", sm: "nowrap" },
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        Rwanda, Kigali
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        <span
                          style={{
                            color: "red",
                            marginRight: "15px",
                            marginLeft: "15px",
                          }}
                        >
                          •
                        </span>
                        50 Items Sent
                      </Typography>
                    </Box>
                  </Box>

                  {/* Message and Menu Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      "@media (max-width: 600px)": {
                        width: "100%", // Make the button take full width on small screens
                        marginTop: "10px",
                        justifyContent: "center", // Center on small screens
                      },
                    }}
                  >
                    {/* Message Button */}
                    <Box
                      onClick={handleNavigate} // Navigate to Admin-M when clicked
                      sx={{
                        backgroundColor: "#210947",
                        color: "#FFF",
                        padding: { xs: "8px 10px", sm: "10px 20px" },
                        borderRadius: "5px",
                        "&:hover": {
                          backgroundColor: "#3E2B69",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Message
                      </Typography>
                    </Box>

                    {/* Ellipsis Menu Icon */}
                    <MoreVertIcon
                      sx={{
                        color: "black",
                        marginLeft: "10px", // Add some space between Message and the icon
                        cursor: "pointer",
                        "&:hover": {
                          color: "#F66F1E", // Optional hover effect
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <Box sx={{ padding: "10px" }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "900px", // Decrease the size of the white box
                    height: { xs: "auto", sm: "180px" }, // Adjust height for responsiveness
                    backgroundColor: "#FFF",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
                    "&:hover": {
                      cursor: "pointer", // Change cursor on hover
                      boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
                    },
                  }}
                >
                  {/* Profile Image */}
                  <Box
                    component="img"
                    src={mes} // Replace with actual path
                    alt="Profile"
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
                    }}
                  />

                  {/* Text Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
                      textAlign: { xs: "center", sm: "left" }, // Center text on small screens
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      Jonathan Smith
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        gap: "5px",
                        flexWrap: { xs: "wrap", sm: "nowrap" },
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        Rwanda, Kigali
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        <span
                          style={{
                            color: "red",
                            marginRight: "15px",
                            marginLeft: "15px",
                          }}
                        >
                          •
                        </span>
                        50 Items Sent
                      </Typography>
                    </Box>
                  </Box>

                  {/* Message and Menu Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      "@media (max-width: 600px)": {
                        width: "100%", // Make the button take full width on small screens
                        marginTop: "10px",
                        justifyContent: "center", // Center on small screens
                      },
                    }}
                  >
                    {/* Message Button */}
                    <Box
                      onClick={handleNavigate} // Navigate to Admin-M when clicked
                      sx={{
                        backgroundColor: "#210947",
                        color: "#FFF",
                        padding: { xs: "8px 10px", sm: "10px 20px" },
                        borderRadius: "5px",
                        "&:hover": {
                          backgroundColor: "#3E2B69",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Message
                      </Typography>
                    </Box>

                    {/* Ellipsis Menu Icon */}
                    <MoreVertIcon
                      sx={{
                        color: "black",
                        marginLeft: "10px", // Add some space between Message and the icon
                        cursor: "pointer",
                        "&:hover": {
                          color: "#F66F1E", // Optional hover effect
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ padding: "10px" }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "900px", // Decrease the size of the white box
                    height: { xs: "auto", sm: "180px" }, // Adjust height for responsiveness
                    backgroundColor: "#FFF",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
                    "&:hover": {
                      cursor: "pointer", // Change cursor on hover
                      boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
                    },
                  }}
                >
                  {/* Profile Image */}
                  <Box
                    component="img"
                    src={mes} // Replace with actual path
                    alt="Profile"
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
                    }}
                  />

                  {/* Text Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
                      textAlign: { xs: "center", sm: "left" }, // Center text on small screens
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      Jonathan Smith
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        gap: "5px",
                        flexWrap: { xs: "wrap", sm: "nowrap" },
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        Rwanda, Kigali
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        <span
                          style={{
                            color: "red",
                            marginRight: "15px",
                            marginLeft: "15px",
                          }}
                        >
                          •
                        </span>
                        50 Items Sent
                      </Typography>
                    </Box>
                  </Box>

                  {/* Message and Menu Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      "@media (max-width: 600px)": {
                        width: "100%", // Make the button take full width on small screens
                        marginTop: "10px",
                        justifyContent: "center", // Center on small screens
                      },
                    }}
                  >
                    {/* Message Button */}
                    <Box
                      onClick={handleNavigate} // Navigate to Admin-M when clicked
                      sx={{
                        backgroundColor: "#210947",
                        color: "#FFF",
                        padding: { xs: "8px 10px", sm: "10px 20px" },
                        borderRadius: "5px",
                        "&:hover": {
                          backgroundColor: "#3E2B69",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Message
                      </Typography>
                    </Box>

                    {/* Ellipsis Menu Icon */}
                    <MoreVertIcon
                      sx={{
                        color: "black",
                        marginLeft: "10px", // Add some space between Message and the icon
                        cursor: "pointer",
                        "&:hover": {
                          color: "#F66F1E", // Optional hover effect
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ padding: "10px" }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "900px", // Decrease the size of the white box
                    height: { xs: "auto", sm: "180px" }, // Adjust height for responsiveness
                    backgroundColor: "#FFF",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
                    "&:hover": {
                      cursor: "pointer", // Change cursor on hover
                      boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
                    },
                  }}
                >
                  {/* Profile Image */}
                  <Box
                    component="img"
                    src={mes} // Replace with actual path
                    alt="Profile"
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
                    }}
                  />

                  {/* Text Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
                      textAlign: { xs: "center", sm: "left" }, // Center text on small screens
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      Jonathan Smith
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        gap: "5px",
                        flexWrap: { xs: "wrap", sm: "nowrap" },
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        Rwanda, Kigali
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#F66F1E" }}>
                        <span
                          style={{
                            color: "red",
                            marginRight: "15px",
                            marginLeft: "15px",
                          }}
                        >
                          •
                        </span>
                        50 Items Sent
                      </Typography>
                    </Box>
                  </Box>

                  {/* Message and Menu Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                      "@media (max-width: 600px)": {
                        width: "100%", // Make the button take full width on small screens
                        marginTop: "10px",
                        justifyContent: "center", // Center on small screens
                      },
                    }}
                  >
                    {/* Message Button */}
                    <Box
                      onClick={handleNavigate} // Navigate to Admin-M when clicked
                      sx={{
                        backgroundColor: "#210947",
                        color: "#FFF",
                        padding: { xs: "8px 10px", sm: "10px 20px" },
                        borderRadius: "5px",
                        "&:hover": {
                          backgroundColor: "#3E2B69",
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Message
                      </Typography>
                    </Box>

                    {/* Ellipsis Menu Icon */}
                    <MoreVertIcon
                      sx={{
                        color: "black",
                        marginLeft: "10px", // Add some space between Message and the icon
                        cursor: "pointer",
                        "&:hover": {
                          color: "#F66F1E", // Optional hover effect
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              {/* Your traveler details content goes here */}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default User;
