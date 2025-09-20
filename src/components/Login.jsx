import React, { useState } from "react";
import Content from '../assets/content.png';
import Purohitha from '../assets/purohitha-img.png';
import { useNavigate } from "react-router-dom";
import { mobileValidation } from "./validation/validate";

const Login = () => {

  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setErrors({ ...errors, mobile: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});
    // Validate Mobile
    if (!mobile.trim()) {
      setErrors({ mobile: "Note : Please enter your mobile number." });
      return; // Stop further validation
    } else if (!mobileValidation(mobile)) {
      setErrors({ mobile: "Note : Please enter a valid phone no." });
      return; // Stop further validation
    }

    // If all fields are valid
    alert("Otp Send successfully!");
    navigate("/otp");
  };

  return (
    <div className="login-new-container">
      {/* Top Background Section with Overlay Text */}
      <div className="login-header">
        <img src={Content} alt="content-logo" className="login-new-logo" />
        <div className="login-overlay">
          <p><img src={Purohitha} alt="content-logo" className="purohitha-new-img" /></p>
          <h1 className="login-new-title">Login</h1>
          <p className="login-new-subtitle">Seamless puja booking, rituals, and blessings.</p>
        </div>
      </div>

      {/* Mobile Input Form */}
      <div className="login-new-form">
        <form onSubmit={handleSubmit}>
          <label className="form-label">Phone no</label>
          <input
            className="login-form-control"
            type="number"
            name="mobile"
            placeholder="91+ Enter phone number"
            value={mobile}
            onChange={handleMobileChange}
          />
          {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
          <div className="otp-button-container">
            <button
              className={`login-otp-btn ${mobile.trim().length > 0 ? "active" : ""}`}
              disabled={mobile.trim().length === 0}
            >
              Get OTP
            </button>
          </div>
        </form>
      </div>

      {/* OTP Button Fixed at Bottom */}

    </div>
  );
};

export default Login;
