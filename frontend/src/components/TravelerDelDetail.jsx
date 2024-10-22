import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Badge,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TextsmsIcon from "@mui/icons-material/Textsms"; // Text Message Icon
import NotificationsIcon from "@mui/icons-material/Notifications"; // Bell Icon
import homepp from "../assets/homepp.jpg";
import gadgets from "../assets/gadgets.jpg";
import sam from "../assets/sam.jpg";
import john from "../assets/john.jpg";
import shoepp from "../assets/shoepp.jpg";
import handpp from "../assets/handpp.jpg";
import van from "../assets/Van.jpg";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import susa from "../assets/susa.jpg";
import men from "../assets/men.jpg";
import af from "../assets/af.jpg";
const TravelerDelDetail = () => {
  const [selectedTab, setSelectedTab] = useState("senders");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };
  //   const handleClick = () => {
  //     navigate("/Traveler-M"); // Navigate to Traveler-M URL
  //   };

  // Click handler for Match button with event propagation stopped
  const handleMatchClick = () => {
    // event.stopPropagation(); // Stop the event from triggering parent click behavior
    navigate("/Traveler-M"); // Navigate to Sender-M
  };
//   const handleMatchTClick = () => {
//     navigate("/Traveler-M"); // Navigate to Traveler-M
//   };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
      {/* Sidebar with logo */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Logo at the top */}
        <Box
          component="img"
          src={"/path-to-logo.png"} // Update with your logo path
          alt="Ladx Logo"
          sx={{
            width: "150px",
            height: "auto",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        />

        {/* Sidebar below the logo with curved top */}
        <Box
          sx={{
            backgroundColor: "#210947",
            width: { xs: "80px", sm: "226px" }, // Responsive width
            height: "100%",
            borderTopRightRadius: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          {/* List of navigation items */}
          <List sx={{ color: "#D3D3D3" }}>
            {/* Home */}
            <ListItem
              button
              onClick={() => handleNavigation("/user")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Orders */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-l")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Users */}
            <ListItem
              button
              onClick={() => handleNavigation("/user")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="Users"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Message */}
            <ListItem
              button
              onClick={() => handleNavigation("/admin-m")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <TextsmsIcon /> {/* Updated to Text Message Icon */}
              </ListItemIcon>
              <ListItemText
                primary="Message"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>

            {/* Settings */}
            <ListItem
              button
              onClick={() => handleNavigation("/settings")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>
          </List>

          {/* Logout near the bottom */}
          <List sx={{ color: "#D3D3D3" }}>
            <ListItem
              button
              onClick={() => handleNavigation("/logout")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <ListItemIcon
                sx={{ minWidth: { xs: "unset", sm: "40px" }, color: "#D3D3D3" }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ display: { xs: "none", sm: "block" } }}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* User Info Box */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "380px",
          height: "99px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center content horizontally
          padding: "10px",
        }}
      >
        {/* Bell Icon with Green Dot */}
        <Badge
          color="success"
          variant="dot"
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            marginRight: "2px", // Reduced space between bell and name
          }}
        >
          <Box
            sx={{
              backgroundColor: "#210947",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NotificationsIcon sx={{ color: "#FFFFFF" }} />
          </Box>
        </Badge>

        {/* Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Sam Adeniyi
          {/* Admin text below the name */}
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginTop: "2px" }} // Reduced margin above Admin text
          >
            Admin
          </Typography>
        </Typography>

        {/* Small person icon to the right of the name */}
        <Box
          sx={{
            backgroundColor: "#210947",
            borderRadius: "4px",
            width: "24px",
            height: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2px", // Reduced space between name and person icon
          }}
        >
          <PersonIcon sx={{ color: "#FFFFFF", fontSize: "16px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "100px",
          position: "relative",
          padding: isMobile ? "10px" : "20px", // Reduce padding for mobile
        }}
      >
        {/* Header */}
        <Typography
          variant={isMobile ? "h6" : "h5"} // Change header size based on screen size
          sx={{ marginBottom: "10px" }} // Reduce margin for mobile
        >
          Delivery Orders
        </Typography>

        {/* Tab Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Stack tabs vertically on mobile
            alignItems: isMobile ? "flex-start" : "center", // Align to start on mobile
            marginBottom: "10px", // Add space below the tabs
          }}
        >
          {/* Senders Tab */}
          <Box
            onClick={() => handleTabChange("senders")}
            sx={{
              cursor: "pointer",
              padding: "10px",
              borderBottom:
                selectedTab === "senders" ? "3px solid #F66F1E" : "none", // Active line
              display: "inline-block",
              marginRight: isMobile ? "0" : "20px", // No right margin on mobile
              marginBottom: isMobile ? "10px" : "0", // Margin below tab on mobile
            }}
          >
            Senders
          </Box>

          {/* Travelers Tab */}
          <Box
            onClick={() => handleTabChange("travelers")}
            sx={{
              cursor: "pointer",
              padding: "10px",
              borderBottom:
                selectedTab === "travelers" ? "3px solid #F66F1E" : "none", // Active line
              display: "inline-block",
            }}
          >
            Travelers
          </Box>
        </Box>

        {/* Divider Line */}
        <Box
          sx={{
            height: "2px",
            backgroundColor: "#E5E5E5",
            margin: "10px 0", // Add space above and below the line
          }}
        />

        {/* Tab Content */}
        {selectedTab === "senders" ? (
          <Box sx={{ padding: "10px" }}>
            {/* Back Arrow Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              {/* Back Arrow */}
              <Link to="/admin-l" style={{ textDecoration: "none" }}>
                <IconButton
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "50%",
                    padding: "10px", // Adjust padding for size
                    "&:hover": {
                      backgroundColor: "#E0E0E0", // Change background on hover
                    },
                  }}
                >
                  <ArrowBack sx={{ color: "#000" }} />{" "}
                  {/* Set the icon color to black */}
                </IconButton>
              </Link>

              {/* Go Back Title */}
              <Typography variant="h6" sx={{ marginLeft: "10px" }}>
                Go Back
              </Typography>
            </Box>

            {/* Single Delivery Box Section */}
            {/* <Link to="/Tdev-d" style={{ textDecoration: "none" }}> */}
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#FFF",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                flexDirection: "row",
                "&:hover": {
                  cursor: "pointer", // Change cursor on hover
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional: add hover effect
                },
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                  height: "auto", // Adjust height for small screens
                },
              }}
            >
              {/* Profile Image */}
              <Box
                component="img"
                src={men} // Replace with the actual path
                alt="Profile"
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginBottom: { xs: "10px", sm: "0" },
                }}
              />

              {/* Text Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "25px",
                  "@media (max-width: 600px)": {
                    textAlign: "center", // Center text on small screens
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  Susan Sandra
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    iPhone XR
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ display: "inline", color: "black" }}
                  >
                    <span style={{ color: "#28A745", marginRight: "5px" }}>
                      •
                    </span>
                    HP Laptop
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ display: "inline", color: "black" }}
                  >
                    <span style={{ color: "#28A745", marginRight: "5px" }}>
                      •
                    </span>
                    Hand Fan
                  </Typography>
                </Box>

                {/* Small Profile Image and Details */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    "@media (max-width: 600px)": {
                      justifyContent: "center", // Center profile details on small screens
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "25px", color: "black" }}
                  >
                    Gadgets
                  </Typography>
                  <Box
                    component="img"
                    src={van} // Replace with the actual path
                    alt="Delivery Car"
                    sx={{
                      width: "15px",
                      height: "15px",
                      margin: "0 5px",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "black" }}>
                    From Nigeria - To Kigali, Rwanda
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "5px", color: "black" }}
                >
                  Delivery ID: 345YH3456
                </Typography>
              </Box>

              {/* Match Button */}
              <Button
                variant="contained"
                onClick={handleMatchClick} // Separate click handler for the button
                sx={{
                  backgroundColor: "#210947",
                  color: "#FFF",
                  borderRadius: "5px",
                  padding: { xs: "8px 10px", sm: "10px 20px" },
                  flexShrink: 0,
                  "@media (max-width: 600px)": {
                    width: "100%", // Make the button take full width on small screens
                    marginTop: "10px",
                  },
                  "&:hover": {
                    backgroundColor: "#3E2B69",
                  },
                }}
              >
                Match
              </Button>
            </Box>
            {/* </Link> */}
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
                Shipping Details
              </Typography>
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
        ) : (
          <Box sx={{ padding: "10px" }}>
            <Box
              sx={{ padding: "10px", display: "flex", alignItems: "center" }}
            >
              {/* Back Arrow */}
              <Link to="/admin-l" style={{ textDecoration: "none" }}>
                <IconButton
                  sx={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "50%",
                    padding: "10px", // Adjust padding for size
                    "&:hover": {
                      backgroundColor: "#E0E0E0", // Change background on hover
                    },
                  }}
                >
                  <ArrowBack sx={{ color: "#000" }} />{" "}
                  {/* Set the icon color to black */}
                </IconButton>
              </Link>

              {/* Sender Details Title */}
              <Typography
                variant={isMobile ? "subtitle1" : "h6"}
                sx={{ marginLeft: "10px" }}
              >
                Go Back
              </Typography>
            </Box>
            {/* Single Delivery Box Section */}
            {/* <Link to="/dev-d" style={{ textDecoration: "none" }}> */}
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#FFF",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                flexDirection: "row",
                "&:hover": {
                  cursor: "pointer", // Change cursor on hover
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional: add hover effect
                },
                "@media (max-width: 600px)": {
                  flexDirection: "column",
                  height: "auto", // Adjust height for small screens
                },
              }}
            >
              {/* Profile Image */}
              <Box
                component="img"
                src={gadgets} // Replace with the actual path
                alt="Profile"
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  marginBottom: { xs: "10px", sm: "0" },
                }}
              />

              {/* Text Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: "25px",
                  "@media (max-width: 600px)": {
                    textAlign: "center", // Center text on small screens
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  Susan Sandra
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    iPhone XR
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ display: "inline", color: "black" }}
                  >
                    <span style={{ color: "#28A745", marginRight: "5px" }}>
                      •
                    </span>
                    HP Laptop
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ display: "inline", color: "black" }}
                  >
                    <span style={{ color: "#28A745", marginRight: "5px" }}>
                      •
                    </span>
                    Hand Fan
                  </Typography>
                </Box>

                {/* Small Profile Image and Details */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                    "@media (max-width: 600px)": {
                      justifyContent: "center", // Center profile details on small screens
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "25px", color: "black" }}
                  >
                    Gadgets
                  </Typography>
                  <Box
                    component="img"
                    src={van} // Replace with the actual path
                    alt="Delivery Car"
                    sx={{
                      width: "15px",
                      height: "15px",
                      margin: "0 5px",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "black" }}>
                    From Nigeria - To Kigali, Rwanda
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ marginTop: "5px", color: "black" }}
                >
                  Delivery ID: 345YH3456
                </Typography>
              </Box>

              {/* Match Button */}
              <Button
                variant="contained"
                onClick={handleMatchTClick} // Separate click handler for the button
                sx={{
                  backgroundColor: "#210947",
                  color: "#FFF",
                  borderRadius: "5px",
                  padding: { xs: "8px 10px", sm: "10px 20px" },
                  flexShrink: 0,
                  "@media (max-width: 600px)": {
                    width: "100%", // Make the button take full width on small screens
                    marginTop: "10px",
                  },
                  "&:hover": {
                    backgroundColor: "#3E2B69",
                  },
                }}
              >
                Match
              </Button>
            </Box>
            {/* </Link> */}
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
                Shipping Details
              </Typography>
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
            {/* Your traveler details content goes here */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TravelerDelDetail;
