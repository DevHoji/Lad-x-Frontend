import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LADXLogo from "../assets/ladxLogo.png"; // Replace with the actual path to your logo
import HomeIcon from "@mui/icons-material/Home"; // Replace with the desired Home icon
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"; // Replace with the desired Delivery icon
import MessageIcon from "@mui/icons-material/Message"; // Replace with the desired Message icon
import PersonIcon from "@mui/icons-material/Person"; // Replace with the desired Profile icon
import NotificationsIcon from "@mui/icons-material/Notifications"; // Fat bell icon
import { Add as AddIcon } from "@mui/icons-material"; // Plus sign icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Down arrow icon
import SearchIcon from "@mui/icons-material/Search"; // Add this line to import SearchIcon
import InputBase from "@mui/material/InputBase"; // Add this line to import InputBase
import Checkbox from "@mui/material/Checkbox"; // Add this line to import Checkbox
import { Link } from "react-router-dom"; // Ensure only one 'Link' import is here

// Rest of your Home component code
const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Box sx={{ width: "250px", backgroundColor: "#FFF" }}>
        {/* List Section */}
        <List sx={{ padding: 0 }}>
          {["Home", "Delivery", "Message", "Profile"].map((text, index) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={
                index === 0
                  ? "/home" // Home page
                  : index === 1
                  ? "/delivery" // Delivery page
                  : index === 2
                  ? "/message" // Message page
                  : index === 3
                  ? "/profile" // Profile page
                  : "#"
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
              {/* Vertical Line Indicator */}
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
      {/* Right Section */}
      <Box sx={{ flex: 1, backgroundColor: "#F5F5F5", padding: "20px" }}>
        {/* Navbar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px",
            position: "relative",
            boxShadow: "0 1px 5px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={LADXLogo}
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <Typography
            variant="body1"
            sx={{
              marginLeft: "100px",
              marginRight: "auto",
              fontWeight: "normal",
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
              src="../assets/profilePic.png"
              alt="Profile"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />{" "}
            {/* Add your profile picture path */}
          </IconButton>
        </Box>

        {/* Boxes Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start", // Align boxes to the left
            marginTop: "20px",
            gap: "20px", // Space between boxes
            marginLeft: "20px", // Left margin
            marginRight: "auto", // Ensure boxes stay on the left with space on the right
            maxWidth: "60%", // Limit the width of the box container
            flexWrap: "wrap", // Ensure responsiveness on smaller screens
          }}
        >
          {/* First Box - Request Delivery */}
          <Box
            component={Link} // Use Link to make this box clickable
            to="/request" // Link to Request page
            sx={{
              width: {
                xs: "100%", // Full width on small screens
                sm: "calc(33.33% - 20px)", // 1/3 width on larger screens
                md: "calc(33.33% - 20px)",
              },
              flex: "1 1 calc(33.33% - 20px)", // Flex layout for responsiveness
              height: "150px", // Adjust height
              backgroundColor: "white", // Same background color
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px", // Same border radius
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)", // Same box shadow
              textAlign: "center",
              textDecoration: "none", // Remove underline for Link
              color: "inherit", // Inherit text color
            }}
          >
            <AddIcon sx={{ color: "#F66F1E", fontSize: "30px" }} />
            <Typography
              sx={{ color: "#210947", fontSize: "14px", marginTop: "10px" }}
            >
              Request Delivery
            </Typography>
          </Box>

          {/* Second Box - Traveler */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "calc(33.33% - 20px)",
                md: "calc(33.33% - 20px)",
                textAlign: "center",
              },
              flex: "1 1 calc(33.33% - 20px)",
              height: "150px", // Adjusted height
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              padding: "1px",
            }}
          >
            <Typography
              sx={{
                color: "#F66F1E",
                fontWeight: "bold",
                fontSize: "14px",
                // marginLeft: "100px",

                marginTop: "30px",
              }}
            >
              Traveler
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginLeft: "60px",
              }}
            >
              <img
                src="../assets/profilePic.png"
                alt="Profile"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{ color: "#210947", fontSize: "10px", textAlign: "center" }}
              >
                Sam Kethin
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#210947",
                fontSize: "12px",
                marginLeft: "",
                color: "#210947",
              }}
            >
              Hand Bags
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ color: "blue", fontSize: "15px" }}>
                On the Way!
              </Typography>
              <Typography sx={{ color: "green", fontSize: "15px" }}>
                5 Hours Away
              </Typography>
            </Box>
          </Box>

          {/* Third Box - Monthly */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "calc(33.33% - 20px)",
                md: "calc(33.33% - 20px)",
              },
              flex: "1 1 calc(33.33% - 20px)",
              height: "150px", // Adjusted height
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "#F66F1E", fontSize: "14px" }}>
              Monthly <ArrowDropDownIcon />
            </Typography>
            <Typography
              sx={{ color: "#210947", fontSize: "20px", fontWeight: "bold" }}
            >
              34
            </Typography>
            <Typography sx={{ color: "#210947", fontSize: "12px" }}>
              Total Amount of Package <br /> Delivered
            </Typography>
          </Box>
        </Box>
        {/* Deliveries Text */}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            marginLeft: "20px",
            marginTop: "50px",
            marginBottom: "20px", // Space below the Deliveries text
          }}
        >
          Deliveries
        </Typography>
        {/* White Container */}
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
            marginTop: "20px",
            width: "1167px", // Set width
            height: "466px", // Set height
            position: "relative", // Position relative to add the drag line
            overflow: "auto", // Enable scrolling for the white container
          }}
        >
          {/* Headings with curved background */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
              Items to be Delivered
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
              Traveler
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
              Status
            </Typography>
          </Box>

          {/* Search Input Field */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "22.5px", // Smoothly curved shape
              width: "450px", // Width
              height: "45px", // Height
              padding: "0 10px", // Padding inside
              marginBottom: "20px", // Space below the input
            }}
          >
            <SearchIcon sx={{ color: "#F66F1E" }} /> {/* Search icon */}
            <InputBase
              placeholder="Search"
              sx={{ marginLeft: "10px", flex: 1 }}
            />
          </Box>

          {/* Items to be Delivered List */}
          <Box sx={{ marginBottom: "20px" }}>
            {["Hand Bags", "Gadgets", "Food Items", "Hand Bags"].map(
              (item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox size="small" />
                    <Typography sx={{ marginLeft: "10px" }}>{item}</Typography>
                  </Box>
                  <Typography>
                    {
                      [
                        "Sam Kethin",
                        "John Durelo",
                        "Leila Adebayo",
                        "Sam Kethin",
                      ][index]
                    }
                  </Typography>{" "}
                  {/* Traveler's Name */}
                  <Typography
                    sx={{
                      color:
                        index === 1 ? "red" : index === 2 ? "green" : "blue", // Color based on status
                    }}
                  >
                    {["In Process", "Failed", "Delivered", "In Process"][index]}{" "}
                    {/* Status */}
                  </Typography>
                </Box>
              )
            )}
          </Box>

          {/* Drag Line */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: "0",
              width: "8px",
              height: "170px",
              backgroundColor: "#C7C9D9",
              borderRadius: "4px", // Smoothly curved shape
              marginTop: "20px", // Margin from the top of the white container
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
