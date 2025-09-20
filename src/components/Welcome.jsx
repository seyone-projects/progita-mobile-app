import React from "react";
import { Link } from "react-router-dom";
import Onboard from "../assets/onboard-img.jpg";

const Welcome = () => {
  return (
    <div className="welcome-new-container">
      {/* Background Image */}
      <img src={Onboard} alt="Onboard" className="welcome-background" />

      {/* Top Section - Progress Line & Skip Button */}
      <div className="welcome-header">
        <div className="progress-line">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
        <button className="welcome-skip-btn">Skip</button>
      </div>

      {/* Bottom Content with Gradient Background */}
      <div className="welcome-content">
        <div className="content-wrapper">
          <h1>Book Sacred Rituals with Ease</h1>
          <p>
            Choose from a variety of pujas, select your priest, and schedule at
            your convenience.
          </p>
          <Link to="/login" className="welcome-start-btn">Get started now!</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
