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
import test from "../assets/test.jpg";  // Adjust path if needed
import homepp from "../assets/homepp.jpg"; 
import Edit from "../assets/Edit.jpg"; 
import User from "../assets/User.jpg"; 
import Wikis from "../assets/Wikis.jpg"; 
import Help from "../assets/Help.jpg"; 
import HomeIcon from "@mui/icons-material/Home";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Profile = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(3); // Set default to "Profile"
  const [open, setOpen] = React.useState(false); // Add this line for modal state

  // Function to open the modal
  const handleOpen = () => setOpen(true);
  // Function to close the modal
  const handleClose = () => setOpen(false);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);

    
  };
   const navigate = useNavigate();

  //  const handleConfirmClick = () => {
  //    navigate("/home"); // Navigate to the Home component
  //  };

const handleLogout = () => {
  navigate("/login"); // Navigate back to the login page
};
  return (
    <Box sx={{ display: "flex", height: "100vh", paddingTop:"60px" }}>
      {/*{/* Left Sidebar */}
     
      {/* Right Section (Content) */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        
        {/* Main Content with White Background */}

        {/* Profile Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px", // Adjust margin as needed
            paddingLeft: "20px", // Ensure it's aligned with the rest of the content
            position: "relative", // Add this line
          }}
        >
          {/* Pen Icon */}
          <Box
            sx={{
              position: "absolute", // Position it relative to the profile image
              top: "10px", // Adjust as needed for vertical positioning
              right: "10px", // Adjust as needed for horizontal positioning
              width: "22.69px",
              height: "22.69px",
              backgroundColor: "#F5F5F5",
              borderRadius: "50%", // To make it circular
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1, // Ensures it's above other elements
            }}
          >
            <img
              src={Edit} // Update with the correct path for the pen icon or use a placeholder
              alt="Edit"
              style={{
                width: "50%", // Adjust icon size if needed
                height: "50%",
              }}
            />
          </Box>

          <img
            src={homepp}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              marginRight: "10px", // Adjust margin to make it closer to the name
            }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                color: "#0C2B5C",
                fontWeight: "bold",
                width: "172px",
                height: "44px",
              }}
            >
              Ken Bobolo
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#0C2B5C", // Changed to light gray
                width: "168px",
                height: "33px",
              }}
            >
              California, USA
            </Typography>
          </Box>

          {/* Button for Pop-Up */}
          <Box
            sx={{
              marginLeft: "auto", // Pushes button to the right corner
              marginRight: "20px", // Add some right margin if needed
            }}
          >
            <Button
              sx={{
                width: "190px",
                height: "70px",
                backgroundColor: "white",
                borderRadius: "10px",
                border: "2px solid #2E2E2E",
                color: "black",
                "&:hover": {
                  backgroundColor: "#F5F5F5", // Optional hover effect
                },
              }}
              onClick={handleOpen} // Open modal on button click
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        {/* Horizontal Line */}
        <Box
          sx={{
            width: "900px",
            height: "1px",
            backgroundColor: "#4D4D4D",
            marginLeft: "70px",
            marginTop: "20px", // Add some margin if needed
          }}
        />

        {/* Personal Information Section */}
        <Box sx={{ marginLeft: "70px", marginBottom: "", marginTop: "20px" }}>
          {/* Account Settings */}
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
          >
            {/* Account Settings */}
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
              onClick={() => {
                console.log("Navigating to Account Settings");
                navigate("/accountsettings");
              }}
              // Navigate to Account Settings
            >
              <img
                src={User}// Placeholder for person icon
                alt="Account Settings"
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "50%", // To make it circular
                }}
              />
              <Box sx={{ marginLeft: "10px" }}>
                <Typography>Account Settings</Typography>
                <Typography sx={{ color: "lightgray" }}>
                  Account information, reset password or account deactivation
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Language Section */}
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
          >
            <img
              src={Wikis} // Update with the correct path for the world icon
              alt="Language Icon"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: "10px", // Adjust margin as needed
              }}
            />
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#0C2B5C" }}>
                Language
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#A0A0A0" }}>
                English, UK
              </Typography>
            </Box>
          </Box>

          {/* Help & Support Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Help} // Update with the correct path for the question mark icon
              alt="Help Icon"
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "white",
                borderRadius: "50%",
                marginRight: "10px", // Adjust margin as needed
              }}
            />
            <Box>
              <Typography sx={{ fontSize: "16px", color: "#0C2B5C" }}>
                Help & Support
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#A0A0A0" }}>
                Get help from our team or report any complaints
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Pop-Up Modal */}
        {open && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                width: "80%",
                height: "80%",
                padding: "20px",
                overflowY: "auto",
                borderRadius: "20px", // Smoothly curved shape
                position: "relative", // For positioning the close button
              }}
            >
              {/* Close Button (X Icon) */}
              <Box
                onClick={() => setOpen(false)} // Close modal on click
                sx={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%", // Circular shape
                  cursor: "pointer", // Change cursor on hover
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  x
                </Typography>
              </Box>
              {/* Upload Profile Photo Heading */}
              <Typography
                variant="h5"
                sx={{
                  marginTop: "20px",
                  marginLeft: "20px",
                  fontWeight: "normal",
                }}
              >
                Upload Profile Photo
              </Typography>

              {/* Profile Image and Update Photo Text */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px", // Add some space above
                  marginLeft: "20px", // Align with the Upload Photo text
                }}
              >
                <img
                  src="path_to_your_image.jpg" // Replace with the actual image path
                  alt="Profile"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "10px",
                  }} // 120x120 image with rounded corners
                />
                <Typography
                  variant="h6"
                  sx={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "#210947",
                  }} // Adjust text styling
                >
                  Update Photo
                </Typography>
              </Box>

              {/* Make Sure Text */}
              <Typography
                variant="body2"
                sx={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  marginBottom: "20px",
                  color: "#757575",
                }} // Add bottom margin for space
              >
                Make sure the photo is below 2MB
              </Typography>

              {/* Form Section */}
              <Box
                sx={{
                  marginTop: "20px", // Space above the form
                  marginLeft: "20px", // Align with the previous text
                }}
              >
                {/* Full Name Label and Input */}
                <Typography
                  variant="body1"
                  sx={{ marginBottom: "5px", fontWeight: "normal" }}
                >
                  Full Name*
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      width: "300px", // Adjusted width
                      height: "40px", // Adjusted height
                      borderRadius: "20px", // Smoothly shaped curve
                      border: "1px solid #E5E5E5",
                      padding: "10px 40px 10px 10px", // Right padding for the down arrow
                    }}
                    // Add value={profileName} onChange={handleProfileNameChange} if needed
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "20px",
                      height: "20px",
                      color: "#757575",
                    }}
                  >
                    {/* Down arrow icon here */}▼
                  </Box>
                </Box>

                {/* Country Label and Input */}
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "5px",
                    fontWeight: "normal",
                  }}
                >
                  Country*
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      width: "300px", // Adjusted width
                      height: "40px", // Adjusted height
                      borderRadius: "20px", // Smoothly shaped curve
                      border: "1px solid #E5E5E5",
                      padding: "10px 40px 10px 10px", // Right padding for the down arrow
                    }}
                    // Add value={profileCountry} onChange={handleProfileCountryChange} if needed
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "20px",
                      height: "20px",
                      color: "#757575",
                    }}
                  >
                    {/* Down arrow icon here */}▼
                  </Box>
                </Box>

                {/* State Label and Input */}
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "20px",
                    marginBottom: "5px",
                    fontWeight: "normal",
                  }}
                >
                  State*
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      width: "300px", // Adjusted width
                      height: "40px", // Adjusted height
                      borderRadius: "20px", // Smoothly shaped curve
                      border: "1px solid #E5E5E5",
                      padding: "10px 40px 10px 10px", // Right padding for the down arrow
                    }}
                    // Add value={profileState} onChange={handleProfileStateChange} if needed
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "20px",
                      height: "20px",
                      color: "#757575",
                    }}
                  >
                    {/* Down arrow icon here */}▼
                  </Box>
                </Box>
              </Box>

              {/* Update Button */}
              <Box
                sx={{
                  width: "253px",
                  height: "59px",
                  backgroundColor: "#210947",
                  color: "white",
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  position: "absolute", // Use absolute positioning
                  bottom: "20px", // Position from the bottom
                  left: "50%", // Center horizontally
                  transform: "translateX(-50%)", // Adjust to center
                  cursor: "pointer", // Change cursor on hover
                }}
                onClick={() => {
                  // Add your update functionality here
                  console.log("Update clicked");
                }}
              >
                <Typography variant="h6">Update</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
