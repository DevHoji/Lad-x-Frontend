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

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", margin: 0, padding: 0 }}>
      {/* Left Section */}
      <Box sx={{ width: "245px", backgroundColor: "white", padding: "20px" }}>
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
              sx={{
                position: "relative",
                marginBottom: "15px", // Wide margin between items
                borderRadius: "20px", // Smooth curve shape
                "&:hover": {
                  backgroundColor: "#F6F6F6", // Background on hover
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
            maxWidth: "80%", // Limit the width of the box container
            flexWrap: "wrap", // Ensure responsiveness on smaller screens
          }}
        >
          {/* First Box - Request Delivery */}
          <Box
            sx={{
              width: {
                xs: "100%", // Full width on small screens
                sm: "calc(33.33% - 20px)", // 1/3 width on larger screens
                md: "calc(33.33% - 20px)",
              },
              flex: "1 1 calc(33.33% - 20px)", // Flex layout for responsiveness
              height: "150px", // Adjust height
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
            component="a"
            href="https://example.com/request-delivery" // Replace with actual link
          >
            <AddIcon sx={{ color: "#F66F1E", fontSize: "30px" }} />{" "}
            {/* Adjusted icon size */}
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
              },
              flex: "1 1 calc(33.33% - 20px)",
              height: "150px", // Adjusted height
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              padding: "10px",
            }}
          >
            <Typography
              sx={{ color: "#F66F1E", fontWeight: "bold", fontSize: "14px" }}
            >
              Traveler
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="../assets/profilePic.png"
                alt="Profile"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
              <Typography sx={{ color: "#210947", fontSize: "12px" }}>
                Sam Kethin
              </Typography>
            </Box>
            <Typography sx={{ color: "#210947", fontSize: "12px" }}>
              Hand Bags
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <Typography sx={{ color: "blue", fontSize: "10px" }}>
                On the Way!
              </Typography>
              <Typography sx={{ color: "green", fontSize: "10px" }}>
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

        {/* Deliveries Section */}
        <Typography
          sx={{
            marginTop: "40px", // Large margin from the boxes
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Deliveries
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            width: "1167px", // Set width to 1167px
            height: "466px", // Set height to 466px
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
            marginTop: "10px", // Margin top for the container
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
              marginBottom: "20px", // Space below headings
              width: "90%", // Use 90% of the white box width
              margin: "0 auto", // Center the heading box
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
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              width: "450px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              marginBottom: "20px", // Space below the search input
            }}
          >
            <SearchIcon sx={{ color: "#A0A0A0" }} /> {/* Search Icon */}
            <InputBase
              placeholder="Search"
              sx={{
                flex: 1,
                marginLeft: "10px",
                "& .MuiInputBase-input": {
                  padding: "0", // Remove default padding
                  height: "100%",
                  borderRadius: "10px",
                  backgroundColor: "transparent", // Transparent input background
                },
              }}
            />
          </Box>

          {/* Checkbox Lists */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            {["Hand Bags", "Gadgets", "Food Items", "Hand Bags"].map(
              (text, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px", // Space between lists
                  }}
                >
                  <Checkbox size="small" />
                  <Typography>{text}</Typography>
                </Box>
              )
            )}
            {/* Horizontal Line Below Each List */}
            <Box
              sx={{
                width: "1039px",
                height: "0.8px",
                backgroundColor: "#F5F5F5",
                margin: "10px 0",
              }}
            />
          </Box>

          {/* Add additional elements inside this container as needed */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
