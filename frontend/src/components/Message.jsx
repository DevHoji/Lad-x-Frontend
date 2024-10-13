import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon
import SendIcon from "@mui/icons-material/Send"; // Import the Send icon

const MessagePage = () => {
  const [showMessages, setShowMessages] = useState(false); // State to manage visibility of the right side box
  const [message, setMessage] = useState(""); // State to manage the message input
  const [messages, setMessages] = useState([
    // Initial messages
    { text: "Hey!", time: "3:23 PM" },
    { text: "I'm close to Kigali", time: "3:25 PM" },
    { text: "Where exactly are you now?", time: "3:23 PM" },
  ]);
  const [notificationCount, setNotificationCount] = useState(2); // Notification count
  const isMobile = useMediaQuery("(max-width:600px)"); // Check if the screen size is mobile

  const toggleMessages = () => {
    if (!showMessages) {
      setShowMessages(true); // Show messages
      setNotificationCount(0); // Hide notification count when messages are shown
    } else {
      setShowMessages(false); // Hide messages if already shown
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: message,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setMessage(""); // Clear the message after sending
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
        backgroundColor: "white",
        margin: "20px", // Margin around the content
      }}
    >
      {/* Left Side Section */}
      <Box
        sx={{
          width: isMobile ? "100%" : showMessages ? "30%" : "100%", // Full width when right side is collapsed
          backgroundColor: "white",
          borderRadius: "8px",
          padding: { xs: "10px", sm: "20px" }, // Responsive padding
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", // Optional shadow for better visual separation
          marginBottom: isMobile ? "20px" : "0", // Margin bottom for mobile view
          marginTop: "70px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: showMessages ? "flex-start" : "center", // Align content center when right side is collapsed
          alignItems: "center", // Center items when right side is hidden
          transition: "width 0.3s ease", // Smooth transition when width changes
        }}
        onClick={toggleMessages} // Toggle right side messages on click
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: { xs: "10px", sm: "20px" }, // Adjust spacing for smaller screens
            justifyContent: showMessages ? "flex-start" : "center", // Center content when right side is hidden
            width: "100%",
          }}
        >
          <Avatar
            alt="Admin"
            src="/path-to-your-image.jpg" // Add the correct path to your image
            sx={{
              width: { xs: 50, sm: 60 },
              height: { xs: 50, sm: 60 },
              marginRight: showMessages ? "10px" : "0px",
            }} // Responsive Avatar size and adjust margin when collapsed
          />
          {showMessages && (
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }} // Responsive font size
              >
                Admin
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }} // Responsive text size
              >
                The traveler is close to...
              </Typography>
            </Box>
          )}
        </Box>

        {/* Time and Notification Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: showMessages ? "flex-end" : "center", // Align right when messages are shown, center when collapsed
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: showMessages ? "space-between" : "center", // Center when right section is hidden
              width: { xs: "100%", sm: "auto" }, // Full width on small screens
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.85rem", sm: "1rem" },
                textAlign: "center",
              }} // Responsive time font size
            >
              4:12 PM
            </Typography>

            {!showMessages &&
              notificationCount > 0 && ( // Only show notification if count > 0 and right side is not visible
                <Box
                  sx={{
                    width: { xs: "20px", sm: "24px" }, // Responsive notification size
                    height: { xs: "20px", sm: "24px" },
                    backgroundColor: "green",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: "0.75rem", sm: "1rem" }, // Responsive text inside notification
                    marginLeft: showMessages ? "5px" : "0", // Margin when right section is visible
                    marginTop: showMessages ? "0" : "10px", // Margin top when centered
                  }}
                >
                  {notificationCount}
                </Box>
              )}
          </Box>
        </Box>
      </Box>

      {/* Right Side Content - Toggle visibility */}
      {showMessages && (
        <Box
          sx={{
            width: isMobile ? "100%" : "70%", // Full width for mobile and 70% for larger screens
            padding: { xs: "10px", sm: "20px" }, // Responsive padding
            backgroundColor: "#FAFAFA", // Background for the right side content
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", // Optional shadow for better visual separation
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            position: "relative", // To position the message input at the bottom
            marginBottom: "20px",
            marginTop: { xs: "20px", sm: "70px" }, // Responsive margin
          }}
        >
          {/* Profile Image for Right Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Avatar
              alt="Admin"
              src="/path-to-your-image.jpg" // Add the correct path to your image
              sx={{
                width: { xs: 40, sm: 55 }, // Responsive Avatar size
                height: { xs: 40, sm: 55 },
                marginRight: "10px",
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: "0px",
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Admin
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "blue",
                  marginBottom: "0px",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Online
              </Typography>
            </Box>
          </Box>

          {/* Horizontal line below the profile image */}
          <Box
            sx={{ borderBottom: "2px solid #FAFAFA", width: "100%", mb: 2 }}
          />

          {/* "Today" text with two horizontal lines */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Box
              sx={{
                borderBottom: "4px solid white",
                width: { xs: "120px", sm: "318px" }, // Responsive line width
                mr: 1,
              }}
            />
            <Typography
              variant="body1"
              sx={{ mx: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              Today
            </Typography>
            <Box
              sx={{
                borderBottom: "4px solid white",
                width: { xs: "120px", sm: "318px" }, // Responsive line width
                ml: 1,
              }}
            />
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto", // Allow scrolling if messages exceed the height
              maxHeight: "calc(100vh - 250px)", // Adjust height to leave space for input field
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "white",
                  width: "100%", // Responsive width
                  maxWidth: "504px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  marginBottom: "10px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", // Optional shadow for messages
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                >
                  {msg.text}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "0.7rem", sm: "0.9rem" } }}
                >
                  {msg.time}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Message Input Field */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "12px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              bottom: { xs: "10px", sm: "20px" }, // Responsive bottom positioning
              left: 0,
              right: 0,
              height: "95px",
            }}
          >
            <IconButton sx={{ color: "black" }}>
              <AddIcon />
            </IconButton>
            <TextField
              variant="outlined"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                flexGrow: 1,
                bgcolor: "#636363",
                borderRadius: "12px",
                marginLeft: "10px",
                input: {
                  color: "white", // Change text color
                },
              }}
            />
            <IconButton
              onClick={handleSendMessage}
              sx={{ color: "blue" }} // Changed send icon to blue
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MessagePage;
