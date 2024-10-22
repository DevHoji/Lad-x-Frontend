import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  useTheme,
  IconButton,
  Button,
  TextField,
  Typography,
  InputBase,
  useMediaQuery,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TextsmsIcon from "@mui/icons-material/Textsms"; // Text Message Icon
import homepp from "../assets/homepp.jpg";
import gadgets from "../assets/gadgets.jpg";
import sam from "../assets/sam.jpg";
import john from "../assets/john.jpg";
import shoepp from "../assets/shoepp.jpg";
import handpp from "../assets/handpp.jpg";
import van from "../assets/Van.jpg"; 
import { ArrowBack } from "@mui/icons-material"; // Arrow back icon
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Bell Icon
import susa from "../assets/susa.jpg";
import men from "../assets/men.jpg";
import af from "../assets/af.jpg";
import test from "../assets/test.jpg";
const SenderMatch = () => {
  const navigate = useNavigate(); // Hook for navigation
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Navigation handler
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#F5F5F5" }}>
      {/* Sidebar with logo */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Logo at the top */}
        <Box
          component="img"
          src={test} // Update with your logo path
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

      {/* Main content section with original styles */}
      <Box sx={{ padding: "10px", marginLeft: "80px", flexGrow: 1 }}>
        {/* Back Arrow and Request Delivery text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "120px",
          }}
        >
          {" "}
          {/* Adjusted marginTop */}
          <IconButton
            onClick={() => handleNavigation("/admin-l")}
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            <ArrowBack sx={{ color: "#F66F1E" }} />
          </IconButton>
          <Typography variant="h6" sx={{ marginLeft: "8px" }}>
            Match
            <span style={{ color: "#F66F1E", marginLeft: "10px" }}>
              Susan Sandra
            </span>
          </Typography>
        </Box>

        {/* Additional content goes here */}
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
            src={susa} // Replace with the actual path
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
                <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
                HP Laptop
              </Typography>

              <Typography
                variant="body2"
                sx={{ display: "inline", color: "black" }}
              >
                <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
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
          {/* <Button
            variant="contained"
            // onClick={handleMatchClick} // Separate click handler for the button
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
          </Button> */}
        </Box>
        <Typography
          variant="h6"
          sx={{ marginLeft: "8px", marginTop: "50px", marginBottom: "10px" }}
        >
          Traveler in Sync
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              width: "450px", // Set width to 450 pixels
              height: "45px", // Set height to 45 pixels
              backgroundColor: "white",
              borderRadius: "10px", // Smoothly curved shape
              marginRight: "10px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", // Ensure border radius is applied to the input
              },
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "inherit", marginRight: "8px" }} />
              ),
            }}
          />
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
            marginTop: "40px",
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
                <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
                HP Laptop
              </Typography>

              <Typography
                variant="body2"
                sx={{ display: "inline", color: "black" }}
              >
                <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
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
            // onClick={handleMatchClick} // Separate click handler for the button
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
            Match With Susan
          </Button>
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
            marginTop: "70px",
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
            src={af} // Replace with the actual path
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
                <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
                HP Laptop
              </Typography>

              <Typography
                variant="body2"
                sx={{ display: "inline", color: "black" }}
              >
                <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
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
            // onClick={handleMatchClick} // Separate click handler for the button
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
            Match With Susan
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SenderMatch;
