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
import Request from "./components/Request";
import Delivery from "./components/Delivery";
import PaymentSuccessful from "./components/PaymentSuccessful";
import TravelerHome from "./components/TravlerHome";
//import TravelerProfile from "./components/TravelerProfile";
import DeliveryCancelled from './components/DeliveryCancelled'; // Adjust the path if needed
import DeliveryOrder from "./components/DeliveryOrder";
import ProfileT from "./components/ProfileT";
import MessageT from "./components/MessageT";
import TravelerRequest from "./components/TravelerReques";
import NavSidebar from "./components/NavSidebar";
import AccountSettingT from "./components/AccountSettingsT";
import DeliveryCancelledT from "./components/DeliveryCancelledT";
import DeliveryTrackingT from "./components/DeliveryTrakingT";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/request" element={<Request />} />
        <Route path="/traveler-request" element={<TravelerRequest />} />
        <Route path="/account-settings" element={<AccountSettingT />} />
        <Route path="/delivery-tracking" element={<DeliveryTrackingT/>} />
        <Route path="/delivery-cancelled" element={<DeliveryCancelledT/>} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/main" element={<Delivery />} />
        <Route path="/deliverycancelled" element={<DeliveryCancelled />} />
        <Route
          path="/payment-successful"
          element={<PaymentSuccessful />}
        />{" "}
        {/* Add this line */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<NavSidebar />} />
        <Route path="/traveler-home" element={<TravelerHome />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-account" element={<ConfirmAccount />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/login-confirmation" element={<LoginConfirmation />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/delivery-order" element={<DeliveryOrder />} />
        <Route path="/message-t" element={<MessageT />} />
        <Route path="/profile-t" element={<ProfileT />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
