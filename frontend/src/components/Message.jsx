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

import test from "../assets/test.jpg";  // Replace with your logo
import homepp from "../assets/homepp.jpg"; 
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
      

      {/* Main Section (Sidebar, Messages, and Chat) */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          height: "100vh",
          paddingTop: "50px", // Adjust based on your header height
        }}
      >
       
        {/* Messages */}
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
          sx={{
            flexGrow: 2,
            display: "flex",
            flexDirection: "column",
            p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          }}
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
              maxHeight: { xs: "300px", sm: "400px", md: "500px" }, // Max height for responsiveness
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
                  height: "auto", // Allow dynamic height
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                  wordWrap: "break-word", // Wrap long messages
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
                  height: "auto", // Allow dynamic height
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                  wordWrap: "break-word", // Wrap long messages
                }}
              >
                You: I'm good, thanks!
              </Typography>
            </Box>

            {/* Repeat similar structure for more messages */}
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
                  height: "auto", // Allow dynamic height
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                  wordWrap: "break-word", // Wrap long messages
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
                  height: "auto", // Allow dynamic height
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                  padding: "10px",
                  maxWidth: "70%",
                  wordWrap: "break-word", // Wrap long messages
                }}
              >
                You: I'm good, thanks!
              </Typography>
            </Box>

            {/* Add other messages here... */}
          </Box>

          {/* Separator */}
          <Box sx={{ borderTop: "1px solid #ddd", mb: 2 }} />

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
              sx={{
                mr: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px", // Rounded input field
                },
              }}
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
