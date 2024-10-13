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
import test from "../assets/test.jpg"; 
import sam from "../assets/sam.jpg"; // Replace with the actual path to your logo
import HomeIcon from "@mui/icons-material/Home"; // Replace with the desired Home icon
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"; // Replace with the desired Delivery icon
import MessageIcon from "@mui/icons-material/Message"; // Replace with the desired Message icon
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person"; // Replace with the desired Profile icon
import NotificationsIcon from "@mui/icons-material/Notifications"; // Fat bell icon
import { Add as AddIcon } from "@mui/icons-material"; // Plus sign icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Down arrow icon
import SearchIcon from "@mui/icons-material/Search"; // Add this line to import SearchIcon
import Checkbox from "@mui/material/Checkbox"; // Add this line to import Checkbox
import { Link, useNavigate } from "react-router-dom"; // Ensure only one 'Link' import is here
import InputBase from "@mui/material/InputBase"; // Add this line to import InputBase
import useMediaQuery from "@mui/material/useMediaQuery";
import homepp from "../assets/homepp.jpg";
import leilaImg from '../assets/leila.jpg';
import samImg from '../assets/sam.jpg';
import johnImg from '../assets/john.jpg';

// Rest of your Home component code
const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
 const navigate =useNavigate();
//  const handleRequestClick = () => {
//    navigate("/delivery");
//  };
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  const handleLogout = () => {
    navigate("/login"); // Navigate back to the login page
  };
  const isMobile = useMediaQuery("(max-width:600px)"); // Adjust the breakpoint as needed
const handleRequest = () => {
  navigate("/request")
}
 
  return (
    <Box sx={{ display: "flex" }}>
      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#F5F5F5",
          padding: "20px",
          marginTop: "60px",
        }}
      >
        {/* Boxes Section */}
        {/* Parent Container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // Allow boxes to wrap in smaller screens
            justifyContent: "center",
            marginTop: "20px",
            gap: "20px", // Space between boxes
            padding: { xs: "0 10px", sm: "0 20px" }, // Add padding to avoid touching edges on mobile
            overflow: "hidden", // Prevent horizontal scroll
          }}
        >
          <Box
            sx={{
              flex: "1 1 100%", // Full width on small screens
              maxWidth: {
                xs: "100%",
                sm: "calc(50% - 20px)",
                md: "calc(33.33% - 20px)",
              }, // Limit on larger screens
              height: "180px", // Increased height for cards
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              textAlign: "center",
              textDecoration: "none",
              color: "inherit",
            }}
            onClick={handleRequest}
          >
            <AddIcon sx={{ color: "#F66F1E", fontSize: "30px" }} />
            <Typography
              sx={{
                color: "#210947",
                fontSize: { xs: "14px", md: "16px" },
                marginTop: "10px",
              }}
            >
              Request Delivery
            </Typography>
          </Box>

          <Box
            sx={{
              flex: "1 1 100%",
              maxWidth: {
                xs: "100%",
                sm: "calc(50% - 20px)",
                md: "calc(33.33% - 20px)",
              },
              height: "180px", // Increased height for cards
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#F66F1E",
                fontWeight: "bold",
                fontSize: { xs: "14px", md: "16px" },
                textAlign: "center",
              }}
            >
              Traveler
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={sam}
                alt="Profile"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
              <Typography
                sx={{
                  color: "#210947",
                  fontSize: { xs: "12px", md: "14px" },
                  textAlign: "start",
                }}
              >
                Sam Kethin
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#210947",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
                textAlign: "center",
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
              <Typography
                sx={{ color: "blue", fontSize: { xs: "12px", md: "14px" } }}
              >
                On the Way!
              </Typography>
              <Typography
                sx={{ color: "green", fontSize: { xs: "12px", md: "14px" } }}
              >
                5 Hours Away
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: "1 1 100%",
              maxWidth: {
                xs: "100%",
                sm: "calc(50% - 20px)",
                md: "calc(33.33% - 20px)",
              },
              height: "180px", // Increased height for cards
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                alignSelf: "flex-start",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#F66F1E",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Monthly
              </Typography>
              <ArrowDropDownIcon
                sx={{
                  color: "#F66F1E",
                  fontSize: { xs: "18px", md: "20px" },
                  marginLeft: "5px",
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#210947",
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              34
            </Typography>

            <Typography
              sx={{
                color: "#210947",
                fontSize: { xs: "12px", md: "14px" },
                marginTop: "5px",
              }}
            >
              Total Amount of Package <br /> Delivered
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "20px",
            },
            marginLeft: {
              xs: "10px",
              sm: "15px",
              md: "20px",
            },
            marginTop: {
              xs: "30px",
              sm: "40px",
              md: "50px",
            },
            marginBottom: "20px",
          }}
        >
          Deliveries
        </Typography>

        {/* White Container */}
        <Box
          sx={{
            backgroundColor: "white",
            padding: {
              xs: "10px",
              sm: "15px",
              md: "20px",
            },
            borderRadius: "10px",
            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
            marginTop: "20px",
            width: "100%",
            height: {
              xs: "auto",
              sm: "auto",
              md: "100vh",
            },
            position: "relative",
            overflow: "auto",
          }}
        >
          {/* Header Row for Items, Traveler, Status */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between", // Added space-between to evenly space items
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              padding: {
                xs: "5px",
                sm: "8px",
                md: "10px",
              },
              marginBottom: "20px",
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "12px", md: "16px" } }}
            >
              Items to be Delivered
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "12px", md: "16px" } }}
            >
              Traveler
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: "12px", md: "16px" } }}
            >
              Status
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "22.5px",
              width: "100%",
              maxWidth: { md: "450px" },
              height: "45px",
              padding: "0 10px",
              marginBottom: "20px",
            }}
          >
            <SearchIcon sx={{ color: "#F66F1E" }} />
            <InputBase
              placeholder="Search"
              sx={{ marginLeft: "10px", flex: 1 }}
            />
          </Box>

          {/* Item List */}
          <Box sx={{ marginBottom: "20px" }}>
            {["Hand Bags", "Gadgets", "Food Items", "Hand Bags"].map(
              (item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex", // Use flexbox for alignment
                    justifyContent: "space-between", // Space between elements
                    alignItems: "center",
                    marginBottom: "10px",
                    borderBottom: index < 3 ? "1px solid #E0E0E0" : "none",
                    paddingBottom: "10px",
                    paddingX: { xs: "10px", sm: "0" },
                  }}
                >
                  {/* Item Name and Checkbox */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox size="small" />
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>

                  {/* Traveler Information */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={[johnImg, leilaImg, samImg, johnImg][index]}
                      alt="profile"
                      sx={{
                        width: 25,
                        height: 25,
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      {
                        [
                          "Sam Kethin",
                          "John Durelo",
                          "Leila Adebayo",
                          "Sam Kethin",
                        ][index]
                      }
                    </Typography>
                  </Box>

                  {/* Status Information */}
                  <Box
                    sx={{
                      borderRadius: "4px",
                      padding: "5px 10px",
                      textAlign: "end",
                      color:
                        index === 1 ? "red" : index === 2 ? "green" : "blue",
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    {["In Process", "Failed", "Delivered", "In Process"][index]}
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
  
};


export default Home;
