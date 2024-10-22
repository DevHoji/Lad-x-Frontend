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
                Item Tracking
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
                  borderRadius: "10px",
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
              {/* First Dot with Information */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px", // Increased margin below each dot
                }}
              >
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%", // Ensure it's circular
                    backgroundColor: "#5272F2",
                    marginRight: "10px",
                  }}
                />
                <Typography variant="body2" sx={{ marginRight: "5px" }}>
                  Delivery Order placed
                </Typography>
                <Typography variant="body2" sx={{ marginRight: "5px" }}>
                  07:15 PM, 5 SEPT 2024
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ marginBottom: "30px", color: "red" }}
              >
                Delivery Cancelled
              </Typography>

              {/* Second Dot with Information */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "30px", // Increased margin below each dot
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
                  Shipping
                </Typography>
                <Typography variant="body2" sx={{ marginRight: "15px" }}>
                  02:15 PM, SEPT 2024
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ marginBottom: "30px", color: "red" }}
              >
                Delivery Cancelled
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Sender: <span style={{ color: "red" }}>John Kith </span>
              </Typography>
            </Box>

            {/* Connecting Broken Lines */}
            {/* <Box
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
            </Box> */}
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
                Traveler Details
              </Typography>
              <Link
                // to="/change-address"
                style={{
                  color: "#5272F2",
                  marginLeft: "5px",
                  textDecoration: "none",
                }}
              >
                Edit
              </Link>
            </Box>

            {/* Address Box */}
            <Box
              sx={{
                width: { xs: "100%", md: "446px" }, // Responsive width
                height: "auto", // Adjust height based on content
                border: "1px solid #F66F1E",
                borderRadius: "10px",
                backgroundColor: "#F5F5F5",
                padding: "10px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "8px", // Adds space between text lines
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Flight Number:{" "}
                <span style={{ color: "#999999" }}>- A bag of Clothes</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Departure City: <span style={{ color: "#999999" }}>- </span>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Destination City:{" "}
                <span style={{ color: "#999999" }}>
                  - Shirts, Trousers and Leggings{" "}
                </span>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Departure Date: <span style={{ color: "#999999" }}>- $30</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Departure Date: <span style={{ color: "#999999" }}>- 20kg</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Arrival Time: <span style={{ color: "#999999" }}>- </span>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Boarding Time: <span style={{ color: "#999999" }}>- </span>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Aline Name: <span style={{ color: "#999999" }}>-</span>
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#210947", fontWeight: "bold" }}
              >
                Weight available for item:{" "}
                <span style={{ color: "#999999" }}>- </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </TravelerLayout>
  );
};

export default DeliveryCancelledT;
