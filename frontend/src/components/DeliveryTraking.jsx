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
import test from "../assets/test.jpg";  // Adjust path if necessary
import homepp from "../assets/homepp.jpg"; 
//import MessageIcon from "@mui/icons-material/Message";

const DeliveryTracking = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        <img
          src={test}
          alt="Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <Typography
          variant="body1"
          sx={{
            marginLeft: "20px",
            marginRight: "auto",
            fontWeight: "normal",
            fontSize: { xs: "16px", md: "inherit" }, // Responsive font size
          }}
        >
          Hi Joshua 👋
        </Typography>
        <IconButton sx={{ position: "relative", marginLeft: "10px" }}>
          <NotificationsIcon />
          <Box
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "green",
            }}
          />
        </IconButton>
        <IconButton sx={{ borderRadius: "50%", marginLeft: "10px" }}>
          <img
            src={homepp}
            alt="Profile"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </IconButton>
      </Box>

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
        <Box
          sx={{
            width: { xs: "100%", md: "250px" },
            backgroundColor: "#FFF",
            flexShrink: 0,
            paddingTop: "10px", // Add padding for the top spacing
            boxShadow: "2px 0 5px rgba(0,0,0,0.2)", // Shadow on the sidebar
          }}
        >
          <List sx={{ padding: 0 }}>
            {["Home", "Delivery", "Message", "Profile"].map((text, index) => (
              <ListItem
                button
                key={text}
                component={Link}
                to={
                  index === 0
                    ? "/home"
                    : index === 1
                    ? "/delivery"
                    : index === 2
                    ? "/message"
                    : "/profile"
                }
                onClick={() => handleListItemClick(index)}
                sx={{
                  position: "relative",
                  marginBottom: "15px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#F6F6F6",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: selectedIndex === index ? "4px" : "0px",
                    height: "100%",
                    backgroundColor: "#F66F1E",
                    transition: "width 0.3s",
                  }}
                />
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <DeliveryDiningIcon />}
                  {index === 2 && <MessageIcon />}
                  {index === 3 && <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem
              button
              key="Logout"
              component={Link}
              to="/logout"
              onClick={() => handleListItemClick(4)}
              sx={{
                position: "relative",
                marginBottom: "15px",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#F6F6F6",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: selectedIndex === 4 ? "4px" : "0px",
                  height: "100%",
                  backgroundColor: "#F66F1E",
                  transition: "width 0.3s",
                }}
              />
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ color: "red" }} />
            </ListItem>
          </List>
        </Box>

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
            sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
          >
            <Box
              onClick={() => navigate("/delivery")}
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
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              component={Link}
              to="/message"
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#210947",
                color: "white",
                borderRadius: "5px",
                padding: "10px 15px",
                height: "47px",
                width: "180px",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#2c0e6d", // Change color on hover for better UX
                },
              }}
            >
              <MessageIcon sx={{ marginRight: "10px" }} />
              <Typography variant="body2">Message Traveler</Typography>
            </Box>
          </Box>

          {/* Delivery Tracking Information */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "20px",
              marginLeft: { xs: "10px", md: "20px" }, // Responsive margin
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
              {/* Third Dot */}
              <Box
                sx={{
                  width: "12px",
                  height: "12px", // Make it a circle
                  borderRadius: "50%", // Ensure it's circular
                  backgroundColor: "#5272F2",
                  marginBottom: "30px", // Increased margin
                }}
              />
              <Typography variant="body2" sx={{ marginRight: "5px" }}>
                Delivery Order placed
              </Typography>
              <Typography variant="body2" sx={{ marginRight: "5px" }}>
                07:15 PM, 5 SEPT 2024
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ marginBottom: "30px" }}>
              Your Delivery order has been accepted
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
              <Typography variant="body2" sx={{ marginRight: "5px" }}>
                02:15 PM, SEPT 2024
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ marginBottom: "30px" }}>
              Your item is on its way
            </Typography>

            {/* Courier Information */}
            <Typography
              variant="body2"
              sx={{ color: "red", marginBottom: "20px" }}
            >
              Courier: John Kith
            </Typography>

            {/* Third Dot with Information */}
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
                Estimated Delivery
              </Typography>
              <Typography variant="body2">In 5 Hours</Typography>
            </Box>
            <Typography variant="body2" sx={{ marginBottom: "30px" }}>
              Your item will be delivered
            </Typography>

            {/* Connecting Broken Lines */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-10px", // Adjust to position the line
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
                width: "446px",
                height: "80px",
                border: "1px solid #F66F1E",
                backgroundColor: "#FBFBFB",
                padding: "10px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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
  );
};

export default DeliveryTracking;
