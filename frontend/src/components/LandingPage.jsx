import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ArrowDropDown } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { Container, Grid, Hidden } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleSignInClicked = () => {
    navigate("/login"); // Navigate to the Home component
  };

  const handleSignUpClicked = () => {
    navigate("/sign-up"); // Navigate to the Home component
  };

  return (
    <div>
      {/* Navigation Bar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: "transparent" }}
      >
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            Logo
          </Typography>

          {/* Center Navigation Buttons */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Button
              sx={{
                color: "black",
                position: "relative",
                "&:hover::after": {
                  width: "100%",
                  transition: "width 0.3s ease-in-out",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "orange",
                  transition: "width 0.3s ease-in-out",
                },
              }}
            >
              Home
            </Button>

            <Button
              sx={{
                color: "black",
                position: "relative",
                "&:hover::after": {
                  width: "100%",
                  transition: "width 0.3s ease-in-out",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "orange",
                  transition: "width 0.3s ease-in-out",
                },
              }}
            >
              How it works
            </Button>

            <Button
              sx={{
                color: "black",
                position: "relative",
                "&:hover::after": {
                  width: "100%",
                  transition: "width 0.3s ease-in-out",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "orange",
                  transition: "width 0.3s ease-in-out",
                },
              }}
            >
              FAQs
            </Button>
          </Box>

          {/* Sign In Button */}
          <Button
            sx={{ color: "orange", backgroundColor: "transparent", ml: 2 }}
            endIcon={<ArrowDropDown />}
            onClick={handleSignInClicked}
          >
            Sign In
          </Button>

          {/* Sign Up Button */}
          <Button
            sx={{
              backgroundColor: "#210947",
              color: "white",
              ml: 2,
              px: 3,
              py: 2, // Increased vertical padding for greater height
              borderRadius: "10px 0 10px 0", // Curved right top and bottom left corners
              "&:hover": { backgroundColor: "#210947" },
              "&:focus": { outline: "2px solid orange" },
            }}
            onClick={handleSignUpClicked}
            endIcon={<ArrowDropDown />}
          >
            Sign Up
          </Button>

          {/* Menu for Sign In */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Main Text and Buttons */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              <span style={{ color: "orange" }}>Send</span>{" "}
              <span style={{ color: "purple" }}>
                items worldwide via trusted travelers
              </span>
            </Typography>
            <Typography variant="body1" sx={{ color: "gray", mb: 4 }}>
              A simple, secure way to get your items delivered fast.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                sx={{
                  backgroundColor: "#210947", // Button color
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "0 10px  0 10px ", // Curved left bottom and right top corners
                  "&:hover": {
                    backgroundColor: "#210947", // Keep hover color the same
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                Start sending
              </Button>
              <Button
                sx={{
                  color: "#210947", // Updated color
                  border: "1px solid #210947", // Updated border color
                  px: 4,
                  py: 1.5,
                  borderRadius: "0 10px  0 10px", // Curved left bottom and right top corners
                  "&:hover": {
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                Become a traveler
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Circle Images */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                backgroundImage: "url(https://via.placeholder.com/200)",
                backgroundSize: "cover",
                mr: -10,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                width: 250,
                height: 250,
                borderRadius: "50%",
                backgroundImage: "url(https://via.placeholder.com/250)",
                backgroundSize: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* How It Works Section */}
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: "#210947" }}
        >
          How It <span style={{ color: "orange" }}>Works</span>
        </Typography>

        {/* Flex Container for Images, Arrows, and Text */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4, // Reduced gap to fit larger arrows better
          }}
        >
          {/* First Image + Text */}
          <Box sx={{ textAlign: "center" }}>
            {/* First Image */}
            <Box
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                backgroundImage: "url(https://via.placeholder.com/150)",
                backgroundSize: "cover",
                mb: 2, // Spacing between image and heading
              }}
            />
            {/* Step 1 Heading */}
            <Typography
              variant="h6"
              sx={{ color: "#210947", fontWeight: "bold", mb: 1 }}
            >
              Step 1: Submit Your Delivery Request
            </Typography>
            {/* Step 1 Description */}
            <Typography variant="body1" sx={{ color: "black" }}>
              Describe items and choose the delivery location.
            </Typography>
          </Box>

          {/* Long Deep Orange Arrow */}
          <Box
            sx={{
              width: 120, // Increased width for a bigger arrow
              height: 8, // Increased height for a thicker arrow
              backgroundColor: "#FF4500", // Deep orange color
              alignSelf: "center", // Center the arrow vertically
            }}
          />

          {/* Second Image + Text */}
          <Box sx={{ textAlign: "center" }}>
            {/* Second Image */}
            <Box
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                backgroundImage: "url(https://via.placeholder.com/150)",
                backgroundSize: "cover",
                mb: 2,
              }}
            />
            {/* Step 2 Heading */}
            <Typography
              variant="h6"
              sx={{ color: "#210947", fontWeight: "bold", mb: 1 }}
            >
              Step 2: We Match You with a Traveler
            </Typography>
            {/* Step 2 Description */}
            <Typography variant="body1" sx={{ color: "black" }}>
              Our admin team connects you with verified travelers.
            </Typography>
          </Box>

          {/* Long Deep Orange Arrow */}
          <Box
            sx={{
              width: 120, // Increased width for a bigger arrow
              height: 8, // Increased height for a thicker arrow
              backgroundColor: "#FF4500", // Deep orange color
              alignSelf: "center", // Center the arrow vertically
            }}
          />

          {/* Third Image + Text */}
          <Box sx={{ textAlign: "center" }}>
            {/* Third Image */}
            <Box
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                backgroundImage: "url(https://via.placeholder.com/150)",
                backgroundSize: "cover",
                mb: 2,
              }}
            />
            {/* Step 3 Heading */}
            <Typography
              variant="h6"
              sx={{ color: "#210947", fontWeight: "bold", mb: 1 }}
            >
              Step 3: Track & Receive Your Items
            </Typography>
            {/* Step 3 Description */}
            <Typography variant="body1" sx={{ color: "black" }}>
              Monitor the delivery process, and get notified of its status.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* What We Offer Section */}
      <Container sx={{ mt: 10, textAlign: "left", position: "relative" }}>
        {/* Heading */}
        <Typography variant="h4" sx={{ fontWeight: "bold", ml: 2 }}>
          <span style={{ color: "#210947" }}>What We</span>{" "}
          <span style={{ color: "#F66F1E" }}>Offer</span>
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Left Side: Lists with Checks and Transparent World Image */}
          <Grid item xs={12} md={6}>
            {/* List with Check Icons */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, ml: 2 }}
            >
              {/* First List Item */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#2E2E2E", fontWeight: "bold" }} // Updated color
                >
                  ✔ Secure Deliveries
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "2E2E2E", fontWeight: "bold" }}
                >
                  - Verified travelers and encrypted payments.
                </Typography>
              </Box>

              {/* Second List Item */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#2E2E2E", fontWeight: "bold" }} // Updated color
                >
                  ✔ Transport Pricing
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "2E2E2E", fontWeight: "bold" }}
                >
                  - No hidden fees, clear quotes, and weight-based costs.
                </Typography>
              </Box>

              {/* Third List Item */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#2E2E2E", fontWeight: "bold" }} // Updated color
                >
                  ✔ Global Coverage
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "2E2E2E", fontWeight: "bold" }}
                >
                  - Connecting you with travelers worldwide.
                </Typography>
              </Box>
            </Box>

            {/* Transparent World Image (half-profile starting from the third list item) */}
            <Box
              sx={{
                position: "absolute",
                left: -50, // Moved slightly to the right
                bottom: 0, // Moved slightly down
                width: 150,
                height: 150,
                backgroundImage: "url(https://via.placeholder.com/150)", // Replace this with your transparent world image URL
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                opacity: 0.2, // Make it transparent
              }}
            />
          </Grid>

          {/* Right Side: Profile-like Container */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Profile-like Image (moved a little upward) */}
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                backgroundImage: "url(https://via.placeholder.com/200)", // Replace with the actual profile-like container image
                backgroundSize: "cover",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                position: "relative",
                top: -40, // Moved slightly upward
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          backgroundColor: "#210947",
          position: "relative",
          py: 6,
        }}
        maxWidth={false}
        disableGutters
      >
        {/* Top Left Diamond */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 150, // Reduced width
            height: 150, // Reduced height
            backgroundColor: "#076ABE",
            transform: "rotate(45deg)",
            zIndex: 0, // Diamond shape
            borderRadius: 10,
          }}
        />

        {/* Bottom Right Diamond */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 50, // Reduced width
            height: 50, // Reduced height
            backgroundColor: "#F66F1E",
            transform: "rotate(45deg)", // Diamond shape
          }}
        />

        {/* Center Text */}
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
          }}
        >
          Ready to Send Your Items or Earn while Traveling?
        </Typography>

        {/* Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Button
            sx={{
              backgroundColor: "#F66F1E",
              color: "white",
              px: 4,
              py: 2,
              borderRadius: 2,
              "&:hover": { backgroundColor: "#F66F1E", opacity: 0.9 },
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Responsive Images at the Bottom Middle */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            position: "relative",
            mt: 4,
          }}
        >
          <Grid item xs={6} sm={4} md={3}>
            <Box
              sx={{
                width: "80%",
                paddingTop: "80%", // This maintains the 1:1 aspect ratio
                backgroundImage: "url(https://via.placeholder.com/150)", // Replace with actual image URL
                backgroundSize: "cover",
                borderRadius: 2,
                position: "relative",
                zIndex: 1,
                mb: -20, // Half of it out of the container
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Box
              sx={{
                width: "80%",
                paddingTop: "80%", // This maintains the 1:1 aspect ratio
                backgroundImage: "url(https://via.placeholder.com/150)", // Replace with actual image URL
                backgroundSize: "cover",
                borderRadius: 2,
                position: "relative",
                zIndex: 1,
                mb: -20, // Half of it out of the container
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Box
              sx={{
                width: "80%",
                paddingTop: "80%", // This maintains the 1:1 aspect ratio
                backgroundImage: "url(https://via.placeholder.com/150)", // Replace with actual image URL
                backgroundSize: "cover",
                borderRadius: 2,
                position: "relative",
                zIndex: 1,
                mb: -20, // Half of it out of the container
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Container
        sx={{
          width: "100%",
          maxWidth: "none",
          backgroundColor: "#F1F1F1",
          mt: 8,
          py: 4,
          pt:10,  
        }}
        maxWidth={false}
        disableGutters
      >
        <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
          {/* Left Side: About LADX */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              About LADX
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#about-us"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#resources"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Resources & Policies
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#careers"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Careers
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#content-integrity"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Content Integrity
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#terms-of-use"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Terms of Use
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#privacy-cookies"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Privacy & Cookies Statement
                </a>
              </li>
            </ul>
          </Grid>

          {/* Middle: Explore */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Explore
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#write-a-review"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Write a Review
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#join-community"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Join Our Community
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  href="#help"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Help
                </a>
              </li>
            </ul>

            {/* Language Selector Buttons with a gap */}
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "gray",
                  mr: 1,
                  minWidth: "120px",
                  color: "black",
                }} // Adjusting button width and color
              >
                LGS NGN <span style={{ marginLeft: "0.5rem" }}>▼</span>
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: "gray", minWidth: "120px", color: "black" }} // Adjusting button width and color
              >
                Nigeria <span style={{ marginLeft: "0.5rem" }}>▼</span>
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Logo and Copyright */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <img
                src="path_to_logo.png"
                alt="LADX Logo"
                style={{ width: "100px" }}
              />{" "}
              {/* Replace with your logo path */}
              <Typography variant="body2" sx={{ color: "gray" }}>
                © 2023 LADX LLC. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <FacebookIcon
            sx={{ fontSize: "24px", margin: "0 10px", color: "#3b5998" }}
          />
          <InstagramIcon
            sx={{ fontSize: "24px", margin: "0 10px", color: "#e4405f" }}
          />
          <TwitterIcon
            sx={{ fontSize: "24px", margin: "0 10px", color: "#1da1f2" }}
          />
          <LinkedInIcon
            sx={{ fontSize: "24px", margin: "0 10px", color: "#0e76a8" }}
          />
          <YouTubeIcon
            sx={{ fontSize: "24px", margin: "0 10px", color: "#ff0000" }}
          />
        </Box>
      </Container>
    </div>
  );
}


export default LandingPage;