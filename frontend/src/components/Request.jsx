import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import test from "../assets/test.jpg"; // Ensure the correct path to your logo image
import active from "../assets/active.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close"; // Importing Close icon
import { padding } from "@mui/system";

const Request = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBackClick = () => {
    navigate("/home"); // Navigates to the Home page
  };

  const handleProceedClick = () => {
    navigate("/payment-successful"); // Navigate to PaymentSuccessful page
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div style={styles.container}>
      {/* Logo at the top-left corner */}
      <img src={test} alt="Logo" style={styles.logo} />

      {/* Header with back arrow and title */}
      <div style={styles.header}>
        {/* Back arrow */}
        <div style={styles.backArrow} onClick={handleBackClick}>
          <ArrowBackIcon />
        </div>
        <h1 style={styles.title}>Request Delivery</h1>
      </div>

      {/* Input fields container with labels */}
      <div style={styles.inputContainer}>
        {/* First set of input fields */}
        <div style={styles.inputBlock}>
          <label style={styles.label}>
            Item(s) to be delivered (e.g., Gadgets, Clothes...)
          </label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>
            Name of each item(s) (e.g., HP Laptop, iPhone XR...)
          </label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>Name of Receiver</label>
          <input type="text" style={styles.inputField} />
        </div>

        {/* Second set of input fields */}
        <div style={styles.inputBlock}>
          <label style={styles.label}>Address delivering to</label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>Phone Number of Receiver</label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>Weight of Item(s)</label>
          <input type="text" style={styles.inputField} />
        </div>

        {/* Image Upload and "Connect with Traveler" section */}
        <div style={styles.fileUploadSection}>
          <label style={styles.label}>Image(s) of item(s)</label>
          <div style={styles.fileInputContainer}>
            <div style={styles.fileInputText}>
              Drag and drop files here <br /> or{" "}
              <span style={styles.chooseFileButton} onClick={togglePopup}>
                Choose file
              </span>
            </div>
            <input type="file" style={styles.fileInput} />
          </div>
          <div style={styles.fileFormatText}>XLS, TXT, PNG, JPEG, GIF</div>
        </div>
      </div>
      <button style={styles.connectButton} onClick={togglePopup}>
        Connect with a Traveler
      </button>
      {/* Popup */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <CloseIcon style={styles.closeIcon} onClick={togglePopup} />{" "}
            {/* Close icon */}
            <img
              src={active}
              alt="Two animations"
              style={{ width: "200px", height: "auto", marginBottom: "20px" }}
            />
            <h2 style={styles.popupTitle}>Successful!</h2>
            <h4 style={styles.popupTitle}>
              You will get a notification when you have <br />
              been matched with a Traveler.
            </h4>
            <button
              style={styles.closePopupButton}
              onClick={handleProceedClick}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    height: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto", // Allows scrolling if content exceeds viewport height
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    width: "100%",
    justifyContent: "flex-start", // Aligns items to the left
  },
  backArrow: {
    width: "50px",
    height: "50px",
    backgroundColor: "#F5F5F5",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "20px",
    marginRight: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap", // Makes the form wrap on smaller screens
    gap: "20px",
    marginTop: "40px",
    width: "100%",
  },
  inputBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: "1 1 calc(50% - 20px)", // Adjust width based on available space
    minWidth: "250px", // Ensures the input blocks adjust on small screens
    maxWidth: "300px", // Prevents blocks from becoming too wide
  },
  label: {
    fontSize: "16px",
    display: "block",
  },
  inputField: {
    width: "100%", // Make the input take full width of its container
    height: "40px",
    backgroundColor: "#F4F4F4",
    border: "none",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "10px",
    outline: "none",
  },
  fileUploadSection: {
    order: 0, // Default order for larger screens
    width: "100%",
  },
  fileInputContainer: {
    backgroundColor: "#F9FBFE",
    border: "2px dashed #2E61B4",
    width:"300px",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  fileInputText: {
    marginBottom: "20px", // Reduced bottom margin for compactness
  },
  chooseFileButton: {
    color: "white",
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "2px",
    cursor: "pointer",
  },
  fileInput: {
    display: "none",
  },
  fileFormatText: {
    marginTop: "5px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "10px", // Added gap for margin between formats
  },
  fileFormatMargin: {
    marginLeft: "10px", // Adds margin between formats
  },
  connectButton: {
    backgroundColor: "#210947",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "20px",
    padding:"20px",
    height: "60px",
    marginTop: "20px",
    cursor: "pointer",
    width: "fit-content", // Ensure button width is based on content
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: "#FFFFFF",
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center",
    width: "80%",
    maxWidth: "500px", // Limits popup width on larger screens
    position: "relative", // Allows positioning of the close icon
  },
  popupTitle: {
    marginBottom: "20px",
  },
  closeIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
  closePopupButton: {
    backgroundColor: "#F66F1E",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "20px",
    height: "40px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Request;
