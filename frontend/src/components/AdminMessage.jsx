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
import NotificationsIcon from "@mui/icons-material/Notifications"; // Bell Icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search"; 
import test from "../assets/test.jpg";
import joanna from "../assets/joanna.jpg";
import men from "../assets/men.jpg";
import susan from "../assets/susa.jpg";
import leila from "../assets/leila.jpg"; // Import image for Alex
import john from "../assets/john.jpg"; // Import image for Emily
import MessageIcon from "@mui/icons-material/Message";

const users = [
  {
    id: 1,
    name: "Admin",
    lastMessageTime: "4:12 PM",
    lastMessage: "The traveler is close to...",
    unreadMessages: 1,
    image: joanna,
  },
  {
    id: 2,
    name: "User1",
    lastMessageTime: "3:30 PM",
    lastMessage: "Looking forward to the delivery.",
    unreadMessages: 2,
    image: men,
  },
  {
    id: 3,
    name: "User2",
    lastMessageTime: "2:45 PM",
    lastMessage: "What time will it arrive?",
    unreadMessages: 0,
    image: susan,
  },
  {
    id: 4,
    name: "Alex",
    lastMessageTime: "1:30 PM",
    lastMessage: "I need an update on my order.",
    unreadMessages: 1,
    image: leila, // Image for Alex
  },
  {
    id: 5,
    name: "Emily",
    lastMessageTime: "12:15 PM",
    lastMessage: "Can you confirm the delivery date?",
    unreadMessages: 0,
    image: john, // Image for Emily
  },
];

const AdminMessage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("senders");
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [currentChatUser, setCurrentChatUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleUserClick = (user) => {
    setIsChatVisible(true);
    setCurrentChatUser(user);
  };

  const handleBackClick = () => {
    setIsChatVisible(false);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "User" }]);
      setInputValue("");
    }
  };

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
          padding: "20px",
          marginLeft: { xs: "100px", sm: "226px" },
          position: "relative",
          marginTop: "100px",
          height: "100vh",
          overflow: "auto",
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
              <Box
                sx={{
                  display: "flex",
                  height: "100vh",
                  paddingLeft: { xs: "15px", md: "60px" },
                  paddingRight: { xs: "15px", md: "60px" },
                  backgroundColor: "#FFFFFF",
                  boxSizing: "border-box",
                  paddingTop: { xs: "20px", md: "20px" },
                }}
              >
                {/* Left Side */}
                <Box
                  sx={{
                    display: isChatVisible ? "none" : "flex",
                    flexDirection: "column",
                    width: { xs: "100%", md: "50%" },
                    paddingRight: { xs: "10px", md: "20px" },
                    transition: "all 0.3s ease",
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
                  {users.map((user) => (
                    <Box
                      key={user.id}
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
                          padding: "12px",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "#F5F5F5",
                          },
                        }}
                        onClick={() => handleUserClick(user)}
                      >
                        <Avatar
                          alt={user.name}
                          src={user.image}
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
                            {user.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ fontSize: { xs: "14px", md: "16px" } }}
                          >
                            {user.lastMessageTime}
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
                          {user.lastMessage}
                        </Typography>
                        {user.unreadMessages > 0 && (
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
                            {user.unreadMessages}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Right Side (Chat Box) */}
                {isChatVisible && currentChatUser && (
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
                      borderRadius: "8px",
                    }}
                  >
                    {/* Header for Chat */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
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
                        Chat with {currentChatUser.name}
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
                          alt={currentChatUser.name}
                          src={currentChatUser.image}
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
                            borderRadius: "8px",
                            maxWidth: "70%",
                          }}
                        >
                          <Typography variant="body1">Hello!</Typography>
                        </Box>
                      </Box>

                      {messages.map((message, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            marginBottom: "16px",
                            justifyContent:
                              message.sender === "Admin"
                                ? "flex-start"
                                : "flex-end",
                          }}
                        >
                          {message.sender === "Admin" && (
                            <Avatar
                              alt="Admin"
                              src={currentChatUser.image}
                              sx={{
                                width: { xs: "40px", md: "50px" },
                                height: { xs: "40px", md: "50px" },
                                marginRight: "8px",
                              }}
                            />
                          )}
                          <Box
                            sx={{
                              backgroundColor:
                                message.sender === "Admin"
                                  ? "#E0E0E0"
                                  : "#4CAF50",
                              color:
                                message.sender === "Admin" ? "black" : "white",
                              padding: { xs: "8px 12px", md: "10px 16px" },
                              borderRadius: "8px",
                              maxWidth: "70%",
                            }}
                          >
                            <Typography variant="body1">
                              {message.text}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    {/* Input Section */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "16px",
                        padding: "10px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <InputBase
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        sx={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "4px",
                          backgroundColor: "#F5F5F5",
                        }}
                      />
                      <IconButton
                        onClick={handleSendMessage}
                        sx={{ color: "green" }}
                      >
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
                  paddingLeft: { xs: "15px", md: "60px" },
                  paddingRight: { xs: "15px", md: "60px" },
                  backgroundColor: "#FFFFFF", // Background color set to white
                  boxSizing: "border-box",
                  paddingTop: { xs: "20px", md: "20px" },
                }}
              >
                {/* Left Side: Specific Users */}
                <Box
                  sx={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: "#FFFFFF", // Background color removed (set to white)
                    borderRadius: "8px",
                    width: { xs: "100%", md: "50%" }, // Ensuring it matches the size
                    transition: "opacity 0.3s ease", // Smooth transition for visibility
                    opacity: isChatVisible ? 0 : 1, // Hide when chat is visible
                    display: isChatVisible ? "none" : "block", // Collapse when chat is visible
                  }}
                >
                  {/* User: Leila */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                      cursor: "pointer",
                      padding: "12px",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                    onClick={() =>
                      handleUserClick({ name: "Leila", image: leila })
                    }
                  >
                    <Avatar
                      alt="Leila"
                      src={leila}
                      sx={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                    />
                    <Box sx={{ flex: 1, marginTop: "40px" }}>
                      <Typography variant="body1">
                        Leila{" "}
                        <span
                          style={{
                            fontWeight: "normal",
                            marginLeft: "100px",
                          }}
                        >
                          4:00 PM
                        </span>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          marginLeft: "auto",
                        }}
                      >
                        <Typography variant="body2" sx={{ marginRight: "5px" }}>
                          The traveler is close to...
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: "green", // Changed background color to green
                            borderRadius: "12px",
                            padding: "4px 8px",
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          }}
                        >
                          3 {/* Example unread messages */}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* User: John */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "12px",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                    onClick={() =>
                      handleUserClick({ name: "John", image: john })
                    }
                  >
                    <Avatar
                      alt="John"
                      src={john}
                      sx={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                    />
                    <Box sx={{ flex: 1, marginTop: "40px" }}>
                      <Typography variant="body1">
                        John{" "}
                        <span
                          style={{ fontWeight: "normal", marginLeft: "100px" }}
                        >
                          5:30 AM
                        </span>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          marginLeft: "auto",
                        }}
                      >
                        <Typography variant="body2" sx={{ marginRight: "5px" }}>
                          The traveler is close to...
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: "green", // Changed background color to green
                            borderRadius: "12px",
                            padding: "4px 8px",
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          }}
                        >
                          1 {/* Example unread messages */}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Right Side: Chat Box */}
                {isChatVisible && currentChatUser && (
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
                      borderRadius: "8px",
                    }}
                  >
                    {/* Header for Chat */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <IconButton
                        onClick={handleBackClick}
                        sx={{ color: "black" }}
                      >
                        <ArrowBackIcon fontSize="large" />
                      </IconButton>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "18px", md: "20px" },
                        }}
                      >
                        Chat with {currentChatUser.name}
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
                          alt={currentChatUser.name}
                          src={currentChatUser.image}
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
                            borderRadius: "8px",
                            maxWidth: "70%",
                          }}
                        >
                          <Typography variant="body1">Hello!</Typography>
                        </Box>
                      </Box>

                      {messages.map((message, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            marginBottom: "16px",
                            justifyContent:
                              message.sender === "Admin"
                                ? "flex-start"
                                : "flex-end",
                          }}
                        >
                          {message.sender === "Admin" && (
                            <Avatar
                              alt="Admin"
                              src={currentChatUser.image}
                              sx={{
                                width: { xs: "40px", md: "50px" },
                                height: { xs: "40px", md: "50px" },
                                marginRight: "8px",
                              }}
                            />
                          )}
                          <Box
                            sx={{
                              backgroundColor:
                                message.sender === "Admin"
                                  ? "#E0E0E0"
                                  : "#4CAF50",
                              color:
                                message.sender === "Admin" ? "black" : "white",
                              padding: { xs: "8px 12px", md: "10px 16px" },
                              borderRadius: "8px",
                              maxWidth: "70%",
                            }}
                          >
                            <Typography variant="body1">
                              {message.text}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    {/* Input Section */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "16px",
                        padding: "10px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                      }}
                    >
                      <InputBase
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        sx={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "4px",
                          backgroundColor: "#F5F5F5",
                        }}
                      />
                      <IconButton
                        onClick={handleSendMessage}
                        sx={{ color: "green" }}
                      >
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
