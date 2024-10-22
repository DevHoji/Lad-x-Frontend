import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Badge,
  Avatar,
  InputAdornment,
  IconButton,InputBase,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TextsmsIcon from "@mui/icons-material/Textsms"; // Text Message Icon
import NotificationsIcon from "@mui/icons-material/Notifications"; // Bell Icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search"; 
import samImg from "../assets/sam.jpg";
import johnImg from "../assets/john.jpg";

const AdminMessage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("senders");
   const [isChatVisible, setIsChatVisible] = useState(false);
   const [unreadMessages, setUnreadMessages] = useState(1);
   const [messages, setMessages] = useState([]);
   const [inputValue, setInputValue] = useState("");

   const handleUserClick = () => {
     setIsChatVisible(true);
     setUnreadMessages(0);
   };

   const handleBackClick = () => {
     setIsChatVisible(false); // Return to the left side
   };

   const handleSendMessage = () => {
     if (inputValue.trim()) {
       setMessages([...messages, { text: inputValue, sender: "User" }]);
       setInputValue("");
     }
   };
  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
      {/* Sidebar with logo */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Logo at the top */}
        <Box
          component="img"
          src="/path-to-logo.png" // Update with your logo path
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
            width: { xs: "80px", sm: "226px" }, // Responsive width
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
              onClick={() => handleNavigation("/user")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Orders */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-l")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Users */}
            <ListItem
              button
              onClick={() => handleNavigation("/user")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Users"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Message */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-m")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <TextsmsIcon /> {/* Updated to Text Message Icon */}
              </ListItemIcon>
              <ListItemText
                primary="Message"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Settings */}
            <ListItem
              button
              onClick={() => handleNavigation("/settings")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>
          </List>

          {/* Logout near the bottom */}
          <List sx={{ color: "#D3D3D3" }}>
            <ListItem
              button
              onClick={() => handleNavigation("/admin")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Main content section */}

      {/* User Info Box */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "380px",
          height: "99px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center content horizontally
          padding: "10px",
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
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Sam Adeniyi
          {/* Admin text below the name */}
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "2px" }} // Reduced margin above Admin text
          >
            Admin
          </Typography>
        </Typography>

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
          padding: "20px",
          position: "relative",
          marginTop: "100px",
        }}
      >
        <Typography>
          Message
          {/* Add user management content  here */}
        </Typography>
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
            Senders
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
          {/* Tab Content */}
          {selectedTab === "senders" ? (
            <Box sx={{ padding: "10px" }}>
              {/* Left Side */}
              <Box
                sx={{
                  display: isChatVisible ? "none" : "flex", // Hide left side when chat is visible
                  flexDirection: "column",
                  width: { xs: "100%", md: "50%" },
                  paddingRight: { xs: "10px", md: "20px" },
                  transition: "all 0.3s ease", // Smooth transition when collapsing
                }}
              >
                {/* Message Text Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: { xs: "10px", md: "20px" },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      fontSize: { xs: "24px", md: "32px" },
                    }}
                  >
                    Messages
                  </Typography>
                </Box>

                {/* Profile and Message Details Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: { xs: "10px 0", md: "20px 0" },
                    alignItems: "flex-start",
                  }}
                >
                  {/* Profile Image, Name, and Time */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "16px",
                      cursor: "pointer",
                      padding: "12px", // Add padding for touch targets
                      borderRadius: "8px", // Slight rounding for a modern look
                      "&:hover": {
                        backgroundColor: "#F5F5F5", // Light background on hover
                      },
                    }}
                    onClick={handleUserClick}
                  >
                    <Avatar
                      alt="Admin"
                      src={samImg}
                      sx={{
                        width: { xs: "50px", md: "60px" },
                        height: { xs: "50px", md: "60px" },
                        marginRight: "16px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          marginRight: "16px",
                          fontSize: { xs: "18px", md: "20px" },
                        }}
                      >
                        Admin
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontSize: { xs: "14px", md: "16px" } }}
                      >
                        4:12 PM
                      </Typography>
                    </Box>
                  </Box>

                  {/* Subtext and Notification Badge */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        marginRight: "8px",
                      }}
                    >
                      The traveler is close to...
                    </Typography>
                    {unreadMessages > 0 && (
                      <Box
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: "50%",
                          width: { xs: "20px", md: "24px" },
                          height: { xs: "20px", md: "24px" },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                      >
                        {unreadMessages}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  height: "100vh",
                  paddingLeft: { xs: "15px", md: "60px" }, // Adjusted padding for responsiveness
                  paddingRight: { xs: "15px", md: "60px" },
                  backgroundColor: "#FFFFFF", // Set background color to white
                  boxSizing: "border-box",
                  paddingTop: { xs: "20px", md: "20px" }, // Adjusted padding to reduce gap
                }}
              >
                {/* Left Side */}
                <Box
                  sx={{
                    display: isChatVisible ? "none" : "flex", // Hide left side when chat is visible
                    flexDirection: "column",
                    width: { xs: "100%", md: "50%" },
                    paddingRight: { xs: "10px", md: "20px" },
                    transition: "all 0.3s ease", // Smooth transition when collapsing
                  }}
                >
                  {/* Message Text Section */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: { xs: "10px", md: "20px" },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: { xs: "24px", md: "32px" },
                      }}
                    >
                      Messages
                    </Typography>
                  </Box>
                  {/* Left Side */}
                  <Box
                    sx={{
                      display: isChatVisible ? "none" : "flex", // Hide left side when chat is visible
                      flexDirection: "column",
                      width: { xs: "100%", md: "50%" },
                      paddingRight: { xs: "10px", md: "20px" },
                      transition: "all 0.3s ease", // Smooth transition when collapsing
                    }}
                  >
                    {/* Message Text Section */}
                    {/* <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: { xs: "10px", md: "20px" },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "left",
                          fontSize: { xs: "24px", md: "32px" },
                        }}
                      >
                        Messages
                      </Typography>
                    </Box> */}

                    {/* Profile and Message Details Section */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: { xs: "10px 0", md: "20px 0" },
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Profile Image, Name, and Time */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "16px",
                          cursor: "pointer",
                          padding: "12px", // Add padding for touch targets
                          borderRadius: "8px", // Slight rounding for a modern look
                          "&:hover": {
                            backgroundColor: "#F5F5F5", // Light background on hover
                          },
                        }}
                        onClick={handleUserClick}
                      >
                        <Avatar
                          alt="Admin"
                          src={samImg}
                          sx={{
                            width: { xs: "50px", md: "60px" },
                            height: { xs: "50px", md: "60px" },
                            marginRight: "16px",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              marginRight: "16px",
                              fontSize: { xs: "18px", md: "20px" },
                            }}
                          >
                            Admin
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ fontSize: { xs: "14px", md: "16px" } }}
                          >
                            4:12 PM
                          </Typography>
                        </Box>
                      </Box>

                      {/* Subtext and Notification Badge */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: { xs: "14px", md: "16px" },
                            marginRight: "8px",
                          }}
                        >
                          The traveler is close to...
                        </Typography>
                        {unreadMessages > 0 && (
                          <Box
                            sx={{
                              backgroundColor: "green",
                              color: "white",
                              borderRadius: "50%",
                              width: { xs: "20px", md: "24px" },
                              height: { xs: "20px", md: "24px" },
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: { xs: "12px", md: "14px" },
                            }}
                          >
                            {unreadMessages}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  {/* Profile and Message Details Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: { xs: "10px 0", md: "20px 0" },
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Profile Image, Name, and Time */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "16px",
                        cursor: "pointer",
                        padding: "12px", // Add padding for touch targets
                        borderRadius: "8px", // Slight rounding for a modern look
                        "&:hover": {
                          backgroundColor: "#F5F5F5", // Light background on hover
                        },
                      }}
                      onClick={handleUserClick}
                    >
                      <Avatar
                        alt="Admin"
                        src={samImg}
                        sx={{
                          width: { xs: "50px", md: "60px" },
                          height: { xs: "50px", md: "60px" },
                          marginRight: "16px",
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            marginRight: "16px",
                            fontSize: { xs: "18px", md: "20px" },
                          }}
                        >
                          Admin
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ fontSize: { xs: "14px", md: "16px" } }}
                        >
                          4:12 PM
                        </Typography>
                      </Box>
                    </Box>

                    {/* Subtext and Notification Badge */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          marginRight: "8px",
                        }}
                      >
                        The traveler is close to...
                      </Typography>
                      {unreadMessages > 0 && (
                        <Box
                          sx={{
                            backgroundColor: "green",
                            color: "white",
                            borderRadius: "50%",
                            width: { xs: "20px", md: "24px" },
                            height: { xs: "20px", md: "24px" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: { xs: "12px", md: "14px" },
                          }}
                        >
                          {unreadMessages}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>

                {/* Right Side (Chat Box) */}
                {isChatVisible && (
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: "80%",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                      backgroundColor: "#FAFAFA",
                      transition: "all 0.3s ease",
                      borderRadius: "8px", // Rounded corners for chat box
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                    }}
                  >
                    {/* Header for Chat */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", // Space between for back arrow and title
                        marginBottom: "16px",
                      }}
                    >
                      {/* Back Arrow */}
                      <IconButton
                        onClick={handleBackClick}
                        sx={{ color: "black" }}
                      >
                        <ArrowBackIcon fontSize="large" />
                      </IconButton>

                      {/* Chat Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "18px", md: "20px" },
                        }}
                      >
                        Chat with Admin
                      </Typography>
                    </Box>

                    {/* Chat Messages Section */}
                    <Box
                      sx={{
                        flex: 1,
                        overflowY: "auto",
                        paddingBottom: "20px",
                        "&::-webkit-scrollbar": {
                          width: "8px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#888",
                          borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                          background: "#555",
                        },
                      }}
                    >
                      {/* Sample Messages */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "16px",
                        }}
                      >
                        <Avatar
                          alt="User"
                          src={johnImg}
                          sx={{
                            width: { xs: "40px", md: "50px" },
                            height: { xs: "40px", md: "50px" },
                            marginRight: "8px",
                          }}
                        />
                        <Box
                          sx={{
                            backgroundColor: "#E0E0E0",
                            padding: { xs: "8px 12px", md: "10px 16px" },
                            borderRadius: "20px",
                            maxWidth: "80%",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontSize: { xs: "14px", md: "16px" } }}
                          >
                            The traveler is close to reaching their destination.
                          </Typography>
                        </Box>
                      </Box>

                      {/* User's Own Messages */}
                      {messages.map((message, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginBottom: "16px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "#007BFF",
                              color: "white",
                              padding: { xs: "8px 12px", md: "10px 16px" },
                              borderRadius: "20px",
                              maxWidth: "80%",
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{ fontSize: { xs: "14px", md: "16px" } }}
                            >
                              {message.text}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    {/* Input Area */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "16px",
                      }}
                    >
                      <InputBase
                        sx={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "20px",
                          backgroundColor: "#F5F5F5",
                          marginRight: "8px",
                        }}
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <IconButton onClick={handleSendMessage}>
                        <SendIcon />
                      </IconButton>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          ) : (
            <Box sx={{ padding: "10px" }}>
              <Box
                sx={{
                  display: "flex",
                  height: "100vh",
                  paddingLeft: { xs: "15px", md: "60px" }, // Adjusted padding for responsiveness
                  paddingRight: { xs: "15px", md: "60px" },
                  backgroundColor: "#FFFFFF", // Set background color to white
                  boxSizing: "border-box",
                  paddingTop: { xs: "20px", md: "20px" }, // Adjusted padding to reduce gap
                }}
              >
                {/* Left Side */}
                <Box
                  sx={{
                    display: isChatVisible ? "none" : "flex", // Hide left side when chat is visible
                    flexDirection: "column",
                    width: { xs: "100%", md: "50%" },
                    paddingRight: { xs: "10px", md: "20px" },
                    transition: "all 0.3s ease", // Smooth transition when collapsing
                  }}
                >
                  {/* Message Text Section */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: { xs: "10px", md: "20px" },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: { xs: "24px", md: "32px" },
                      }}
                    >
                      Messages
                    </Typography>
                  </Box>

                  {/* Profile and Message Details Section */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: { xs: "10px 0", md: "20px 0" },
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Profile Image, Name, and Time */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "16px",
                        cursor: "pointer",
                        padding: "12px", // Add padding for touch targets
                        borderRadius: "8px", // Slight rounding for a modern look
                        "&:hover": {
                          backgroundColor: "#F5F5F5", // Light background on hover
                        },
                      }}
                      onClick={handleUserClick}
                    >
                      <Avatar
                        alt="Admin"
                        src={samImg}
                        sx={{
                          width: { xs: "50px", md: "60px" },
                          height: { xs: "50px", md: "60px" },
                          marginRight: "16px",
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            marginRight: "16px",
                            fontSize: { xs: "18px", md: "20px" },
                          }}
                        >
                          Admin
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          sx={{ fontSize: { xs: "14px", md: "16px" } }}
                        >
                          4:12 PM
                        </Typography>
                      </Box>
                    </Box>

                    {/* Subtext and Notification Badge */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          marginRight: "8px",
                        }}
                      >
                        The traveler is close to...
                      </Typography>
                      {unreadMessages > 0 && (
                        <Box
                          sx={{
                            backgroundColor: "green",
                            color: "white",
                            borderRadius: "50%",
                            width: { xs: "20px", md: "24px" },
                            height: { xs: "20px", md: "24px" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: { xs: "12px", md: "14px" },
                          }}
                        >
                          {unreadMessages}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>

                {/* Right Side (Chat Box) */}
                {isChatVisible && (
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: "80%",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                      backgroundColor: "#FAFAFA",
                      transition: "all 0.3s ease",
                      borderRadius: "8px", // Rounded corners for chat box
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                    }}
                  >
                    {/* Header for Chat */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", // Space between for back arrow and title
                        marginBottom: "16px",
                      }}
                    >
                      {/* Back Arrow */}
                      <IconButton
                        onClick={handleBackClick}
                        sx={{ color: "black" }}
                      >
                        <ArrowBackIcon fontSize="large" />
                      </IconButton>

                      {/* Chat Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "18px", md: "20px" },
                        }}
                      >
                        Chat with Admin
                      </Typography>
                    </Box>

                    {/* Chat Messages Section */}
                    <Box
                      sx={{
                        flex: 1,
                        overflowY: "auto",
                        paddingBottom: "20px",
                        "&::-webkit-scrollbar": {
                          width: "8px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#888",
                          borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                          background: "#555",
                        },
                      }}
                    >
                      {/* Sample Messages */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "16px",
                        }}
                      >
                        <Avatar
                          alt="User"
                          src={johnImg}
                          sx={{
                            width: { xs: "40px", md: "50px" },
                            height: { xs: "40px", md: "50px" },
                            marginRight: "8px",
                          }}
                        />
                        <Box
                          sx={{
                            backgroundColor: "#E0E0E0",
                            padding: { xs: "8px 12px", md: "10px 16px" },
                            borderRadius: "20px",
                            maxWidth: "80%",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontSize: { xs: "14px", md: "16px" } }}
                          >
                            The traveler is close to reaching their destination.
                          </Typography>
                        </Box>
                      </Box>

                      {/* User's Own Messages */}
                      {messages.map((message, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginBottom: "16px",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "#007BFF",
                              color: "white",
                              padding: { xs: "8px 12px", md: "10px 16px" },
                              borderRadius: "20px",
                              maxWidth: "80%",
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{ fontSize: { xs: "14px", md: "16px" } }}
                            >
                              {message.text}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    {/* Input Area */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "16px",
                      }}
                    >
                      <InputBase
                        sx={{
                          flex: 1,
                          padding: "10px",
                          borderRadius: "20px",
                          backgroundColor: "#F5F5F5",
                          marginRight: "8px",
                        }}
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <IconButton onClick={handleSendMessage}>
                        <SendIcon />
                      </IconButton>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminMessage;
