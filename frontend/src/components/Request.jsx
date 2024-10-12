import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import test from "../assets/test.jpg"; // Ensure the correct path to your logo image
import active from "../assets/active.jpg";
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
          ←
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
          <label style={styles.label}>
            Name of each item(s) (e.g., HP Laptop, iPhone XR...)
          </label>
          <input type="text" style={styles.inputField} />

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
                <br />
                Choose file
              </span>
            </div>
            <input type="file" style={styles.fileInput} />
          </div>
          <div style={styles.fileFormatText}>
            XLS TXT, PNG, JPEG, GIF
            <button style={styles.connectButton} onClick={togglePopup}>
              Connect with a Traveler
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <img
              src={active}
              alt="Two animations"
              style={{ width: "200px", height: "auto", marginBottom: "20px" }}
            />
            <h2 style={styles.popupTitle}>Successful!</h2>
            <h4 style={styles.popupTitle}>
              You will get notification when you have <br />
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
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
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
  },
  inputBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: "1",
    maxWidth: "300px",
    minWidth: "250px", // Ensures the input blocks adjust on small screens
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
  },
  fileInputContainer: {
    backgroundColor: "#F9FBFE",
    border: "2px dashed #2E61B4",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  fileInputText: {
    marginBottom: "40px",
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
  },
  connectButton: {
    backgroundColor: "#210947",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "20px",
    height: "40px",
    marginTop: "20px",
    cursor: "pointer",
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
  },
  popupTitle: {
    marginBottom: "20px",
  },
  closePopupButton: {
    backgroundColor: "#210947",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    padding: "15px 60px",
    cursor: "pointer",
  },
  // Media query for small screens
  "@media (max-width: 768px)": {
    fileUploadSection: {
      order: 1, // Move to the last position on small screens
      width: "100%", // Ensure full width for small screens
    },
  },
};

export default Request;
