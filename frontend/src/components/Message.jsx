import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import LADXLogo from "../assets/ladxLogo.png"; // Replace with your logo
import ProfileImage from "../assets/profileImage.png"; // Replace with your profile image

const Message = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Navigate back to the login page
  };

  const messages = [
    {
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      time: "12:30 PM",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      lastMessage: "See you tomorrow!",
      time: "11:15 AM",
      profilePic: "https://via.placeholder.com/50",
    },
    // Add more messages here
  ];

  return (
    <div>
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          bgcolor: "white",
          zIndex: 10,
          boxShadow: "0 4px 10px rgba(1,1,1,0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={LADXLogo} alt="Logo" style={{ width: "50px" }} />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Hi Joshua! 👋
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <img
            src={ProfileImage}
            alt="Profile"
            style={{ width: "50px", borderRadius: "50%" }}
          />
        </Box>
      </Box>

      {/* Main Section (Sidebar, Messages, and Chat) */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          height: "90vh",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: "20%",
            bgcolor: "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: 4,
            position: "relative",
            borderRight: "1px solid #ddd",
          }}
        >
          <Box>
            <Button
              startIcon={<HomeIcon />}
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 2 }}
            >
              Home
            </Button>
            <Button
              startIcon={<LocalShippingIcon />}
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 2 }}
            >
              Delivery
            </Button>
            <Button
              startIcon={<MessageIcon />}
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 2 }}
            >
              Message
            </Button>
            <Button
              startIcon={<PersonIcon />}
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 2 }}
            >
              Profile
            </Button>
            <Button
              startIcon={<LogoutIcon />}
              fullWidth
              sx={{ justifyContent: "flex-start", mb: 2 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>

        {/* Messages*/}
        <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
          {/* Messages List */}
          <Box
            sx={{
              flexGrow: 1,
              p: 4,
              bgcolor: "#f9f9f9",
              borderRight: "1px solid #ddd",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              Messages
            </Typography>
            <TextField
              placeholder="Search..."
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 4 }}
            />

            <Box sx={{ overflowY: "auto" }}>
              {messages.map((message, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 3,
                    padding: "10px 0",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <img
                    src={message.profilePic}
                    alt={message.name}
                    style={{
                      width: "50px",
                      borderRadius: "50%",
                      marginRight: "15px",
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1">{message.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {message.lastMessage}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="textSecondary">
                    {message.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/*Chat */}
        </Box>
        {/* Chat Board */}
        <Box
          sx={{ flexGrow: 2, display: "flex", flexDirection: "column", p: 4 }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Chat with John Doe
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              p: 2,
              borderRadius: "8px",
              boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.1)",
              mb: 4,
            }}
          >
            {/* Message from John Doe */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                mb: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  bgcolor: "#e5e5e5",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                }}
              >
                John Doe: Hey, how are you?
              </Typography>
            </Box>

            {/* Message from You */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  bgcolor: "#e5e5e5",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                }}
              >
                You: I'm good, thanks!
              </Typography>
            </Box>

            {/* Message from John Doe */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                mb: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  bgcolor: "#e5e5e5",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                }}
              >
                John Doe: Hey, how are you?
              </Typography>
            </Box>

            {/* Message from You */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  bgcolor: "#e5e5e5",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                }}
              >
                You: I'm good, thanks!
              </Typography>
            </Box>

            {/* Message from John Doe */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                mb: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  bgcolor: "#e5e5e5",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                }}
              >
                John Doe: Hey, how are you?
              </Typography>
            </Box>

            {/* Message from You */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  bgcolor: "#e5e5e5",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                }}
              >
                You: I'm good, thanks!
              </Typography>
            </Box>
          </Box>

          {/* Separator */}
          <Box sx={{ borderTop: "1px solid #ddd", mb: 2 }}></Box>

          {/* Message Input Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #ddd",
              pt: 2,
            }}
          >
            <IconButton sx={{ mr: 2 }}>
              <AddCircleIcon />
            </IconButton>
            <TextField
              placeholder="Type a message..."
              fullWidth
              variant="outlined"
              sx={{ mr: 2 }}
            />
            <IconButton color="primary">
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Message;
