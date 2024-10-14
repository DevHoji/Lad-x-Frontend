import React from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,Button,
} from "@mui/material";
import test from "../assets/test.jpg";  // Adjust the path to your logo if necessary
import homepp from "../assets/homepp.jpg"; 
import gadgets from "../assets/gadgets.jpg"; 
import sam from "../assets/sam.jpg"; 
import john from "../assets/john.jpg";
import shoepp from "../assets/shoepp.jpg";  
import handpp from "../assets/handpp.jpg"; 
import van from "../assets/Van.jpg"; 
import HomeIcon from "@mui/icons-material/Home";

import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom"; // Add this import for navigation
import LogoutIcon from "@mui/icons-material/Logout";

const Delivery = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1); // Set default to "Delivery"

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
 const navigate = useNavigate();
  const handleDeliveryClick = () => {
    
    navigate("/delivery-tracking");
  }
  
  const handleLogout = () => {
    navigate("/login"); // Navigate back to the login page
  };
const handleStatusClick = (status) => {
  setSelectedStatus(status);
};
const handleDeliveryCClick = () => {
  navigate("/deliverycancelled");
};
  

  const [selectedStatus, setSelectedStatus] = React.useState("Processing"); // Default selection

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Right Section (Content) */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          marginLeft: { xs: "0", sm: "" }, // Adjust for sidebar width on larger screens
          position: "relative",
        }}
      >
        {/* Main Content Section */}
        <Box
          sx={{
            marginTop: "64px", // Account for fixed navbar height
            padding: { xs: "10px", sm: "20px" }, // Responsive padding
            height: "calc(100vh - 64px)", // Full height minus navbar
            overflowY: "auto", // Scrollable content if needed
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for the main content
            backgroundColor: "#FFF",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#333", // Dark text color
              fontWeight: "bold",
              marginBottom: { xs: "10px", sm: "20px" }, // Responsive margin below the "Deliveries" text
              textAlign: { xs: "center", sm: "left" }, // Center text on mobile, left-align on larger screens
              fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive font size
            }}
          >
            Deliveries
          </Typography>

          {/* Add your content here */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: { xs: "10px", sm: "20px" }, // Responsive margin at the bottom
            }}
          >
            {/* Status Texts */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: { xs: "100%", sm: "700px" }, // Full width on small screens, limited on larger
                padding: { xs: "0 10px", sm: "0" }, // Responsive padding
              }}
            >
              {["Processing", "Delivered", "Cancelled"].map((status) => (
                <Typography
                  key={status}
                  onClick={() => handleStatusClick(status)}
                  sx={{
                    cursor: "pointer",
                    color: selectedStatus === status ? "#F66F1E" : "inherit", // Change color when selected
                    fontWeight: "bold",
                    transition: "color 0.3s ease",
                    paddingBottom: "5px",
                    flex: 1, // Allow equal space for each status
                    textAlign: "center", // Center the text
                    fontSize: { xs: "14px", sm: "inherit" }, // Responsive font size
                  }}
                >
                  {status}
                </Typography>
              ))}
            </Box>

            {/* Dynamic Line */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "700px" }, // Responsive width
                height: "2px",
                backgroundColor: "#E5E5E5",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-2px", // Adjust to ensure it stays under the text
                  left:
                    selectedStatus === "Processing"
                      ? "0"
                      : selectedStatus === "Delivered"
                      ? "calc(50% - 43.5px)"
                      : "calc(100% - 87px)",
                  width: "87px",
                  height: "3px",
                  backgroundColor: "#F66F1E", // Line color changes when status is clicked
                  transition: "left 0.3s ease",
                }}
              />
            </Box>
          </Box>

          {/* Status boxes container */}
          <Box sx={{ marginTop: "20px" }}>
            {selectedStatus === "Processing" && (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                {[...Array(3)].map((_, index) => (
                  <Box
                    key={index}
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
                        width: "100%",marginLeft:"25px",
                        "@media (max-width: 600px)": {
                          textAlign: "center", // Center text on small screens
                        },
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Gadgets
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Typography variant="body2">iPhone XR</Typography>

                        <Typography variant="body2" sx={{ display: "inline" }}>
                          <span
                            style={{ color: "#28A745", marginRight: "5px" }}
                          >
                            •
                          </span>
                          HP Laptop
                        </Typography>

                        <Typography variant="body2" sx={{ display: "inline" }}>
                          <span
                            style={{ color: "#28A745", marginRight: "5px" }}
                          >
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
                        <Box
                          component="img"
                          src={sam} // Replace with the actual path
                          alt="Small Profile"
                          sx={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        />
                        <Typography variant="body2" sx={{ marginRight: "5px" }}>
                          John Kith
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
                        <Typography variant="body2">
                          To Kigali, Rwanda
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ marginTop: "5px" }}>
                        Delivery ID: 345YH3456
                      </Typography>
                    </Box>

                    {/* View Button */}
                    <Button
                      variant="contained"
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
                      onClick={handleDeliveryClick}
                    >
                      View
                    </Button>
                  </Box>
                ))}
              </Box>
            )}

            {selectedStatus === "Delivered" && (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                {[...Array(3)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      height: "180px",
                      backgroundColor: "#FFF",
                      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px",
                      flexDirection: "row",
                      "@media (max-width: 600px)": {
                        flexDirection: "column",
                        height: "auto",
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
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Gadgets
                      </Typography>
                      <Box
                        sx={{ display: "flex", gap: "10px", marginTop: "5px" }}
                      >
                        <Typography variant="body2">
                          Samsung Galaxy S20
                        </Typography>
                        <Typography variant="body2" sx={{ display: "inline" }}>
                          <span
                            style={{ color: "#28A745", marginRight: "5px" }}
                          >
                            •
                          </span>
                          MacBook Pro
                        </Typography>
                        <Typography variant="body2" sx={{ display: "inline" }}>
                          <span
                            style={{ color: "#28A745", marginRight: "5px" }}
                          >
                            •
                          </span>
                          Portable Charger
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
                        <Box
                          component="img"
                          src={sam} // Replace with the actual path
                          alt="Small Profile"
                          sx={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        />
                        <Typography variant="body2" sx={{ marginRight: "5px" }}>
                          Jane Doe
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
                        <Typography variant="body2">
                          To Nairobi, Kenya
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "5px",
                        }}
                      >
                        <Typography variant="body2">
                          Delivery ID: 456YH7890
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "blue",
                            marginLeft: "10px",
                            marginRight: "10px",
                          }}
                        >
                          Delivered
                        </Typography>

                        <Typography variant="body2">on 25/09/2024</Typography>
                      </Box>
                    </Box>

                    {/* View Button */}
                    <Button
                      variant="contained"
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
                      onClick={handleDeliveryClick}
                    >
                      View
                    </Button>
                  </Box>
                ))}
              </Box>
            )}

            {selectedStatus === "Cancelled" && (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                {[...Array(3)].map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      height: "120px",
                      backgroundColor: "#FFF",
                      boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px",
                      flexDirection: "row",
                      "@media (max-width: 600px)": {
                        flexDirection: "column",
                        height: "auto",
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
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Gadgets
                      </Typography>
                      <Box
                        sx={{ display: "flex", gap: "15px", marginTop: "5px" }}
                      >
                        <Typography variant="body2">Google Pixel 5</Typography>
                        <Typography variant="body2" sx={{ display: "inline" }}>
                          <span
                            style={{ color: "#DC3545", marginRight: "5px" }}
                          >
                            •
                          </span>
                          Dell XPS 13
                        </Typography>
                        <Typography variant="body2" sx={{ display: "inline" }}>
                          <span
                            style={{ color: "#DC3545", marginRight: "5px" }}
                          >
                            •
                          </span>
                          AirPods Pro
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
                        <Box
                          component="img"
                          src={sam} // Replace with the actual path
                          alt="Small Profile"
                          sx={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        />
                        <Typography variant="body2" sx={{ marginRight: "5px" }}>
                          Tom Jones
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
                        <Typography variant="body2">To Accra, Ghana</Typography>
                      </Box>
                      {/* Delivery ID Section */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "5px",
                          gap: "10px", // Small gap between elements
                        }}
                      >
                        <Typography variant="body2">
                          Delivery ID: 789YH1234
                        </Typography>

                        <Typography variant="body2" sx={{ color: "#DC3545" }}>
                          {" "}
                          {/* Red color for Cancelled */}
                          Cancelled
                        </Typography>

                        <Typography variant="body2">on 25/09/2024</Typography>
                      </Box>
                    </Box>

                    {/* View Button */}
                    <Button
                      variant="contained"
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
                      onClick={handleDeliveryCClick}
                    >
                      View
                    </Button>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
