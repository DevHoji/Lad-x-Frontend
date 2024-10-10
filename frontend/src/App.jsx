// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/Forgotpassword";
import ConfirmAccount from "./components/ConfirmAccount";
import NewPassword from "./components/NewPassword";
import LoginConfirmation from "./components/LoginConfirmation";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Message from "./components/Message";
import AccountSettings from "./components/AccountSettings";
import Request from "./components/Request";
import Delivery from "./components/Delivery";
import Profile from "./components/Profile";
import PaymentSuccessful from "./components/PaymentSuccessful"
import TravelerProfile from "./components/TravelerProfile";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/request" element={<Request />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/travelerprofile" element={<TravelerProfile/>}/>
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route
          path="/payment-successful"
          element={<PaymentSuccessful />}
        />{" "}
        {/* Add this line */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-account" element={<ConfirmAccount />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/login-confirmation" element={<LoginConfirmation />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
