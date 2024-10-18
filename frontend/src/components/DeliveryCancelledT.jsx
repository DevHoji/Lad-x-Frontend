// src/components/DeliveryCancelledT.jsx

import React from "react";
import TravelerLayout from "./TravelerLayOut";
import { useNavigate, Link } from "react-router-dom";
import { Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MessageIcon from "@mui/icons-material/Message";

const DeliveryCancelledT = () => {
  const navigate = useNavigate();

  const handleMessageClick = () => {
    navigate("/message-t"); // Navigate to the message-t URL
  };

  return (
    <TravelerLayout>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexGrow: 1,
            backgroundColor: "white",
            padding: { xs: "10px", md: "20px" }, // Responsive padding
          }}
        >
          {/* Main Content */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "white",
              padding: { xs: "10px", md: "20px" },
              overflowY: "auto",
              borderRadius: "8px",
             // boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Back Arrow and Title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Box
                onClick={() => navigate("/delivery-order")}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ArrowBackIcon />
              </Box>
              <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                Delivery
              </Typography>
            </Box>
            {/* Message Traveler Button */}
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#210947",
                  color: "white",
                  borderRadius: "5px",
                  padding: "10px 15px",
                  height: "47px",
                  width: { xs: "150px", md: "180px" },
                  "&:hover": {
                    backgroundColor: "#2c0e6d",
                  },
                }}
                onClick={handleMessageClick}
              >
                <MessageIcon sx={{ marginRight: "5px" }} />
                <Typography variant="body2">Message Traveler</Typography>
              </Button>
            </Box>
            {/* Delivery Tracking Information */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "20px",
                marginLeft: { xs: "10px", md: "20px" },
              }}
            >
              {/* Dot Information */}
              {[
                {
                  text: "Delivery Order placed",
                  time: "07:15 PM, 5 SEPT 2024",
                },
                { text: "Shipping", time: "02:15 PM, SEPT 2024" },
                { text: "Estimated Delivery", time: "In 5 Hours" },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "30px",
                  }}
                >
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#5272F2",
                      marginRight: "10px",
                    }}
                  />
                  <Typography variant="body2" sx={{ marginRight: "5px" }}>
                    {item.text}
                  </Typography>
                  <Typography variant="body2" sx={{ marginRight: "5px" }}>
                    {item.time}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: "5px", color: "red" }}
                  >
                    Delivery Cancelled
                  </Typography>
                </Box>
              ))}

              {/* Courier Information */}
              <Typography
                variant="body2"
                sx={{ color: "red", marginBottom: "20px" }}
              >
                Courier: John Kith
              </Typography>

              {/* Connecting Broken Lines */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-10px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#5272F2", marginRight: "5px" }}
                >
                  •
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#5272F2", marginRight: "5px" }}
                >
                  •
                </Typography>
                <Typography variant="body2" sx={{ color: "#5272F2" }}>
                  •
                </Typography>
              </Box>

              {/* Shipping Address Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                  Shipping Address
                </Typography>
                <Link
                  to="/change-address"
                  style={{
                    color: "#5272F2",
                    marginLeft: "5px",
                    textDecoration: "none",
                  }}
                >
                  Change Address
                </Link>
              </Box>

              {/* Address Box */}
              <Box
                sx={{
                  border: "1px solid #F66F1E",
                  backgroundColor: "#FBFBFB",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="body2">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Typography>
                <Typography variant="body2">
                  Contact: +92 248 4637 4388
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </TravelerLayout>
  );
};

export default DeliveryCancelledT;
