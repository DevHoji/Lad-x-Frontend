import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MessageIcon from "@mui/icons-material/Message";

const DeliveryCancelled = ({ setContent }) => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  const handleMessageClick = () => {
    setContent("Message");
  };
  const handleBackArrow = () => {
    setContent("Delivery");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: { xs: "100px", md: "50px" },
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "white",
          padding: { xs: "10px", md: "20px" },
          overflowY: "auto",
        //  boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        {/* Back Arrow and Title */}
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
        >
          <Box
            onClick={handleBackArrow}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#F5F5F5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
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
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Box
            onClick={handleMessageClick}
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#210947",
              color: "white",
              borderRadius: "5px",
              padding: { xs: "8px 10px", md: "10px 15px" },
              height: { xs: "40px", md: "47px" },
              width: { xs: "130px", md: "180px" },
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#2c0e6d",
              },
            }}
          >
            <MessageIcon sx={{ marginRight: "8px" }} />
            <Typography variant="body2">Message Traveler</Typography>
          </Box>
        </Box>

        {/* Delivery Tracking Information */}
        <Box sx={{ marginLeft: { xs: "5px", md: "20px" } }}>
          {/* Status Messages */}
          {[
            { label: "Delivery Order placed", time: "07:15 PM, 5 SEPT 2024" },
            { label: "Shipping", time: "02:15 PM, SEPT 2024" },
            { label: "Estimated Delivery", time: "In 5 Hours" },
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
                {item.label}
              </Typography>
              <Typography variant="body2" sx={{ marginLeft: "5px" }}>
                {item.time}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "red", marginLeft: "10px" }}
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

          {/* Shipping Address Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Shipping Address
            </Typography>
            <Link
              to="/change-address"
              style={{
                color: "#5272F2",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
              Change Address
            </Link>
          </Box>

          {/* Address Box */}
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "446px" },
              height: "80px",
              border: "1px solid #F66F1E",
              backgroundColor: "#FBFBFB",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <Typography variant="body2">
              4517 Washington Ave. Manchester, Kentucky 39495
            </Typography>
            <Typography variant="body2">Contact: +92 248 4637 4388</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryCancelled;
