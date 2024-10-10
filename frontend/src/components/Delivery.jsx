import React from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LADXLogo from "../assets/ladxLogo.png"; // Adjust the path to your logo if necessary
import HomeIcon from "@mui/icons-material/Home";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom"; // Add this import for navigation

const Delivery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1); // Set default to "Delivery"

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Left Section (Sidebar) */}
      <Box
        sx={{
          width: "245px",
          backgroundColor: "white",
          padding: "20px",
          boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)", // Added shadow effect to the left sidebar
          zIndex: 1, // Ensure sidebar stays above the main content
        }}
      >
        {/* Logo */}
        <img
          src={LADXLogo}
          alt="LADX Logo"
          style={{ width: "100%", marginBottom: "20px" }}
        />

        {/* List Section */}
        <List sx={{ padding: 0 }}>
          {["Home", "Delivery", "Message", "Profile"].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => handleListItemClick(index)}
              component={Link}
              to={
                index === 0
                  ? "/"
                  : index === 1
                  ? "/delivery"
                  : index === 2
                  ? "/message" // Add route for Message page
                  : index === 3
                  ? "/profile" // Add route for Profile page
                  : "#"
              }
              sx={{
                position: "relative",
                marginBottom: "15px",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#F6F6F6",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {index === 0 && <HomeIcon />} {/* Home icon */}
                {index === 1 && <DeliveryDiningIcon />} {/* Delivery icon */}
                {index === 2 && <MessageIcon />} {/* Message icon */}
                {index === 3 && <PersonIcon />} {/* Profile icon */}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: index === 3 ? "red" : "inherit",
                  fontWeight: "normal",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Section (Content) */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            position: "relative",
            boxShadow: "0 1px 5px rgba(0,0,0,0.2)", // Shadow for the navbar
            zIndex: 2, // Keep navbar above the content
          }}
        >
          <img
            src={LADXLogo}
            alt="LADX Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <Typography
            variant="body1"
            sx={{ marginLeft: "auto", fontWeight: "normal" }}
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
              src="../assets/profilePic.png"
              alt="Profile"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </IconButton>
        </Box>

        {/* Main Content with White Background */}
        <Box
          sx={{
            flex: 1, // This will make it cover the remaining space
            padding: "20px",
            backgroundColor: "white", // White background for the content area
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)", // Add shadow to separate from background
            borderRadius: "8px", // Optional, to add rounded corners
            overflow: "auto", // Optional: allows scrolling if content exceeds the height
          }}
        >
          <Typography variant="h4" gutterBottom>
            Deliveries
          </Typography>

          {/* Flex container for the three lists */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // Distribute space evenly between items
              marginTop: "50px", // Margin above the lists

              marginRight: "10px", // Small margin on the right side
            }}
          >
            {["Processing", "Delivered", "Cancelled"].map((status, index) => (
              <Box
                key={status}
                sx={{
                  flex: 1, // Make each item take equal space
                  textAlign: "center", // Center the text
                  padding: "10px",
                  borderRadius: "5px",
                  "&:hover": {
                    color: "#F66F1E", // Change text color on hover
                  },
                  cursor: "pointer", // Change cursor to pointer on hover
                }}
                onClick={() => handleListItemClick(index)} // Handle list item click
              >
                {status}
              </Box>
            ))}
          </Box>

          {/* Long line below the three texts */}
          <Box
            sx={{
              height: "3px", // Height of the line
              width: "900px", // Width of the line
              backgroundColor: "#E5E5E5", // Color of the line
              margin: "10px auto", // Center the line with some margin
              position: "relative", // Positioning context for the indicator line
            }}
          >
            {/* Indicator line that appears when a list is clicked */}
            {selectedIndex !== -1 && ( // Only show the indicator if an index is selected
              <Box
                sx={{
                  height: "5px", // Height of the indicator line
                  width: "191px", // Width of the indicator line
                  backgroundColor: "#F66F1E", // Color of the indicator line
                  position: "absolute",
                  left: `${selectedIndex * 300 + 20}px`, // Adjust position based on selected index
                  
                  transition: "left 0.3s ease", // Smooth transition for the indicator
                }}
              />
            )}
          </Box>
        </Box>
        {/* Conditional rendering for Processing details */}
        {selectedIndex === 0 && ( // Check if Processing is selected
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              alignItems: "center",
              marginTop: "0px", // Space above the containers
            }}
          >
            {/* Create three equal containers */}
            {[1, 2, 3].map((_, containerIndex) => (
              <Box
                key={containerIndex}
                sx={{
                  width: "1110px",
                  height: "215px",
                  backgroundColor: "white", // Changed background color to white
                  borderRadius: "15px",
                  border: "1px solid #E5E5E5", // Added smooth border with #E5E5E5 color
                  marginTop: "10px",
                  marginBottom: "20px", // Space between containers
                  display: "flex",
                  padding: "20px", // Inner padding
                }}
              >
                {/* Left Side: Profile Image */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "90px",
                    marginRight: "20px",
                  }}
                >
                  <img
                    src="../assets/profilePic.png" // Path to big profile image
                    alt="Profile"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%", // Circular profile image
                    }}
                  />
                </Box>

                {/* Right Side: Package Name and Item Details */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                      marginTop: "50px",
                      alignSelf: "flex-start",
                    }}
                  >
                    Gadgets
                  </Typography>

                  {/* Item List in flex style */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography variant="body2" sx={{ marginRight: "10px" }}>
                      iPhone XR
                    </Typography>
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                        margin: "0 5px",
                      }}
                    />
                    <Typography variant="body2" sx={{ marginRight: "10px" }}>
                      HP Laptop
                    </Typography>
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                        margin: "0 5px",
                      }}
                    />
                    <Typography variant="body2">Hand Fan</Typography>
                  </Box>

                  {/* Small profile image and delivery info in flex style */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="../assets/profilePicSmall.png" // Path to small profile image
                      alt="Small Profile"
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%", // Circular profile image
                        marginRight: "10px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography variant="body2" sx={{ marginRight: "10px" }}>
                        John Kith
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="../assets/redDeliveryCare.png" // Path to delivery care image
                          alt="Delivery Care"
                          style={{
                            width: "16px",
                            height: "16px",
                            margin: "0 5px",
                          }}
                        />
                        <Typography variant="body2">
                          To Kigali, Rwanda
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ color: "gray" }}>
                        Delivery ID: 345YH3456
                      </Typography>{" "}
                      {/* Light text for Delivery ID */}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Delivery;
