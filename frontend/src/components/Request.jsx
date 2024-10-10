import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LADxlogo.png"; // Ensure the correct path to your logo image

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
      <img src={logo} alt="Logo" style={styles.logo} />

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
        {/* First set of input fields (left side) */}
        <div style={styles.inputBlock}>
          <label style={styles.label}>
            Item(s) to be delivered (eg. Gadgets, Cloths...)
          </label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>
            Name of each item(s) (eg. HP Laptop, iPhone XR...)
          </label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>Name of Receiver</label>
          <input type="text" style={styles.inputField} />

          {/* New label and input field for image upload */}
          <label style={styles.label}>Image(s) of item(s)</label>
          <div style={styles.fileInputContainer}>
            <div style={styles.fileInputText}>
              Drag and drop files here or{" "}
              <span style={styles.chooseFileButton} onClick={togglePopup}>
                Choose file
              </span>
            </div>
            <input type="file" style={styles.fileInput} />
          </div>
          <div style={styles.fileFormatText}>XLS TXT, PNG, JPEG, GIF</div>
        </div>

        {/* Second set of input fields (right side) */}
        <div style={styles.inputBlock}>
          <label style={styles.label}>
            Name of each item(s) (eg. HP Laptop, iPhone XR...)
          </label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>Address delivering to</label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>Phone Number of Receiver</label>
          <input type="text" style={styles.inputField} />

          <label style={styles.label}>Weight of Item(s)</label>
          <input type="text" style={styles.inputField} />

          {/* New button to connect with a traveler */}
          <button style={styles.connectButton} onClick={togglePopup}>
            Connect with a Traveler
          </button>
        </div>
      </div>

      {/* Popup for connecting with a traveler */}
      {showPopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <h2 style={styles.popupTitle}>Successful!</h2>
            <h4 style={styles.popupTitle}>You will get notification when you have <br />been matched with an Travel </h4>
            {/* Your popup content goes here */}
            <button style={styles.closePopupButton} onClick={togglePopup}>
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
    marginTop: "30px",
  },
  inputBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: "1",
    maxWidth: "300px",
  },
  label: {
    fontSize: "16px",
    display: "block",
  },
  inputField: {
    width: "222px",
    height: "40px",
    backgroundColor: "#F4F4F4",
    border: "none",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "10px",
    outline: "none",
  },
  fileInputContainer: {
    backgroundColor: "#F9FBFE",
    border: "2px dashed #2E61B4",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  fileInputText: {
    marginBottom: "10px",
  },
  chooseFileButton: {
    color: "#2E61B4",
    cursor: "pointer",
    textDecoration: "underline",
  },
  fileInput: {
    display: "none", // Hide the default file input
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
    padding: "200px",
    borderRadius: "10px",
    //width: "100",
   // height:"560", // Cover half of the page
    textAlign: "center",
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
};

export default Request;
