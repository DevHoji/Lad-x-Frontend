// src/components/Message.js

import React, { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import samImg from "../assets/sam.jpg";
import johnImg from "../assets/john.jpg";

const Message = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(1);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleUserClick = () => {
    setIsChatVisible(!isChatVisible);
    if (!isChatVisible) {
      setUnreadMessages(0);
    }
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
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          paddingRight: { xs: "10px", md: "20px" },
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
            marginTop: "50px",
            backgroundColor: "#FAFAFA",
          }}
        >
          {/* Header for Chat */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
              position: "relative",
            }}
          >
            {/* Profile Image, Name, and Time */}
            <Box
              sx={{
                position: "absolute",
                top: "-60px",
                left: "20px",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Avatar
                  alt="Admin"
                  src={johnImg} // Update with the correct image path
                  sx={{
                    width: { xs: "50px", md: "60px" },
                    height: { xs: "50px", md: "60px" },
                    marginRight: "8px",
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "18px", md: "20px" },
                    }}
                  >
                    Admin
                  </Typography>
                  <Typography
                    variant="body2"
                    color="blue"
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    Online
                  </Typography>
                </Box>
              </Box>

              {/* Long Horizontal Line Below Admin Profile */}
              <Box
                sx={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#2E2E2E",
                  marginTop: "8px",
                }}
              />
            </Box>

            {/* Left Horizontal Line */}
            <Box
              sx={{
                flex: 1,
                height: "2px",
                backgroundColor: "#2E2E2E",
                marginRight: "8px",
                marginTop: "200px", // Adjust margin to reduce separation
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "200px",
                fontSize: { xs: "18px", md: "20px" },
              }}
            >
              Today
            </Typography>
            {/* Right Horizontal Line */}
            <Box
              sx={{
                flex: 1,
                height: "2px",
                backgroundColor: "#2E2E2E",
                marginLeft: "8px",
                marginTop: "200px", // Adjust margin to reduce separation
              }}
            />
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
              {/* Profile Image for User */}
              <Avatar
                alt="User"
                src={johnImg} // Update with the correct image path
                sx={{
                  width: { xs: "40px", md: "50px" },
                  height: { xs: "40px", md: "50px" },
                  marginRight: "8px",
                }}
              />
              <Box
                sx={{
                  backgroundColor: "#FFFFFF", // User message background
                  borderRadius: "8px",
                  padding: "8px",
                  maxWidth: "60%",
                }}
              >
                <Typography variant="body2">
                  Hello, how can I assist you?
                </Typography>
              </Box>
            </Box>

            {/* Admin's Response (Right Side) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              {/* Text message box */}
              <Box
                sx={{
                  backgroundColor: "#F66F1E", // Admin message background
                  borderRadius: "8px",
                  padding: "8px",
                  maxWidth: "60%",
                }}
              >
                <Typography variant="body2" color="#FFFFFF">
                  I'm here to help with your delivery.
                </Typography>
              </Box>

              {/* Profile image box */}
              <Avatar
                alt="Admin"
                src="/path/to/profile.jpg" // Update with the correct image path
                sx={{
                  width: { xs: "40px", md: "50px" },
                  height: { xs: "40px", md: "50px" },
                  backgroundColor: "#FFFFFF", // White background for the avatar
                  borderRadius: "50%", // Ensure the avatar remains circular
                  marginLeft: "8px", // Space between the text box and the avatar
                }}
              />
            </Box>

            {/* Additional Messages as needed */}
          </Box>

          {/* Input Field for Message Sending */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              borderTop: "1px solid #E0E0E0",
              marginTop: "auto",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #E0E0E0",
                marginRight: "10px",
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: "10px 15px",
                backgroundColor: "#F66F1E",
                border: "none",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Message;
