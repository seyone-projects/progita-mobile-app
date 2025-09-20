import React, { useState } from "react";
import Content from '../assets/content.png';
import Purohitha from '../assets/purohitha-img.png';
import { Link } from "react-router-dom";
import { otpValidation } from "./validation/validate";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setErrors({}); // Reset errors on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const otpString = otp.join("");

    if (otpString.length === 0) {
      setErrors({ otp: "Please enter your OTP." });
      return;
    } 
    if (otpString.length < 6) {
      setErrors({ otp: "Invalid OTP: Please try again." });
      return;
    } 
    if (!otpValidation(otpString)) {
      setErrors({ otp: "Invalid OTP: Please try again." });
      return;
    }

    alert("Login successfully!");
    navigate("/home");
  };

  return (
    <div className="login-new-container">
      {/* Back Arrow */}
      <Link to="/login" className="back-arrow">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>

      {/* Top Background Section */}
      <div className="login-header">
        <img src={Content} alt="content-logo" className="login-new-logo" />
        <div className="login-overlay">
          <p><img src={Purohitha} alt="content-logo" className="purohitha-new-img" /></p>
          <h1 className="login-new-title">Verify OTP</h1>
          <p className="login-new-subtitle">Please enter the OTP sent to +917531265321</p>
        </div>
      </div>

      {/* OTP Input Section */}
      <div className='otp-container py-4'>
        <h2 className="otp-heading">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className='otp-inputs mt-4'>
            {otp.map((digit, index) => (
              <input
                key={index}
                className={`otp-box ${errors.otp ? "error-border" : ""}`} // Apply red border on error
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          {errors.otp && <small className="text-danger">{errors.otp}</small>}

          {/* Resend OTP */}
          <p className="otp-timer">Resend OTP</p>

          {/* OTP Submit Button */}
          <div className="otp-button-container">
            <button type="submit" className="otp-submit-btn">Get OTP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
