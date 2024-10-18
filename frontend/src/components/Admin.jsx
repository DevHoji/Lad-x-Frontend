import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Delivery car icon
import PersonIcon from "@mui/icons-material/Person"; // User icon
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Logout icon
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Admin = () => {
  // Placeholder click handlers (for navigation later)
  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}...`);
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
          src="/path-to-logo.png" // Update with your logo path
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
            width: "226px",
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
              onClick={() => handleNavigation("Home")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
              }}
            >
              <ListItemIcon>
                <HomeIcon sx={{ color: "#D3D3D3" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            {/* Orders */}
            <ListItem
              button
              onClick={() => handleNavigation("Orders")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
              }}
            >
              <ListItemIcon>
                <LocalShippingIcon sx={{ color: "#D3D3D3" }} />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>

            {/* Users */}
            <ListItem
              button
              onClick={() => handleNavigation("Users")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
              }}
            >
              <ListItemIcon>
                <PersonIcon sx={{ color: "#D3D3D3" }} />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>

            {/* Settings */}
            <ListItem
              button
              onClick={() => handleNavigation("Settings")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
              }}
            >
              <ListItemIcon>
                <SettingsIcon sx={{ color: "#D3D3D3" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>

          {/* Logout near the bottom */}
          <List sx={{ color: "#D3D3D3" }}>
            <ListItem
              button
              onClick={() => handleNavigation("Logout")}
              sx={{
                "&:hover": { color: "#FFF" },
                "&:active": { color: "#F66F1E" },
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon sx={{ color: "#D3D3D3" }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Space between sidebar and right content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
        }}
      >
        {/* Three equal boxes in a responsive grid */}
        <Grid container spacing={2} sx={{ flexGrow: 0 }}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  height: "100%",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Content for each box */}
                <h3>Box {index + 1}</h3>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Search bar with search icon on the left */}
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              flexGrow: 1,
              backgroundColor: "white",
              borderRadius: "8px",
              marginRight: "10px",
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: "inherit", marginRight: "8px" }} />
              ),
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              color: "#F66F1E",
              padding: "10px 15px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Today{" "}
            <KeyboardArrowDownIcon
              sx={{ marginLeft: "4px", color: "#F66F1E" }}
            />
          </Box>
        </Box>

        {/* Large box below search */}
        <Box
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Update Delivery Status</h2>
          <p>This area will contain more content in the future.</p>
        </Box>
      </Box>

      {/* Main content box on the far right */}
      <Box
        sx={{
          backgroundColor: "#FFF",
          width: "400px", // Adjust the width as needed
          height: "100vh", // Ensure it goes to the bottom of the page
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        {/* Content inside the white box */}
        <h1>Main Content</h1>
        <p>This is the main content area on the right side of the page.</p>
      </Box>
    </Box>
  );
};

export default Admin;
