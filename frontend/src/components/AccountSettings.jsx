import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import test from "../assets/test.jpg"; // Adjust path if necessary
import homepp from "../assets/homepp.jpg";

const AccountSettings = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
    

      {/* Left Sidebar and Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexGrow: 1,
          backgroundColor: "white", // Set main content background to white
        }}
      >
        {/* Left Sidebar */}

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "white",
            padding: { xs: "10px", md: "20px" }, // Responsive padding
            overflowY: "auto",
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)", // Inner shadow for main content
          }}
        >
          {/* Back Arrow and Title */}
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "20px",marginTop:"100px", }}
          >
            <Box
              onClick={() => navigate("/profile")}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#F5F5F5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#E5E5E5",
                },
              }}
            >
              <ArrowBackIcon />
            </Box>
            <Typography variant="h6" sx={{ marginLeft: "10px" }}>
              Account Settings
            </Typography>
          </Box>

          {/* Horizontal Line */}
          <hr
            style={{
              width: "100%", // Make the line full width on small screens
              height: "1px",
              backgroundColor: "#4D4D4D",
              border: "none",
              margin: "20px 0",
            }}
          />

          {/* Account Settings Text */}
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            Account Settings
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            sx={{ color: "lightgray", marginBottom: "20px" }}
          >
            Account information, reset password or account deactivation.
          </Typography>

          {/* Change Your Password Text */}
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Change your password
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body2"
            sx={{ color: "lightgray", marginBottom: "20px" }}
          >
            Change password at any time.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountSettings;
