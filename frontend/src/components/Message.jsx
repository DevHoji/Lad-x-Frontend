import React, { useState } from "react";
import { Box, Typography, Avatar, IconButton, InputBase } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Back arrow icon
import SendIcon from "@mui/icons-material/Send"; // Send icon
import samImg from "../assets/sam.jpg";
import johnImg from "../assets/john.jpg";

const Message = () => {
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

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        paddingTop: { xs: "60px", md: "80px" },
        paddingLeft: { xs: "20px", md: "80px" },
        width: "100%",
        boxSizing: "border-box",
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
            Message
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
            height: "100%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            marginTop: "px",
            backgroundColor: "#FAFAFA",
            transition: "all 0.3s ease",
          }}
        >
          {/* Header for Chat */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between", // Space between for back arrow and title
              marginBottom: "16px",
              position: "relative",
            }}
          >
            {/* Back Arrow */}
            <IconButton onClick={handleBackClick} sx={{ color: "black" }}>
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
              marginTop: "40px",
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

            {/* Sample User's Own Messages */}
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

          {/* Message Input Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: { xs: "10px", md: "16px" },
              backgroundColor: "#ffffff",
              borderTop: "1px solid #E0E0E0",
              boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
              position: "relative",
              bottom: "0",
              width: "100%",
            }}
          >
            <InputBase
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              sx={{
                flex: 1,
                padding: "10px",
                border: "none",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <IconButton onClick={handleSendMessage} sx={{ color: "#007BFF" }}>
              <SendIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Message;
