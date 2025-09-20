import React from "react";
import "./Booked.css";
import { Link } from 'react-router-dom';

function Booked() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className=" success-content w-75">
        <div className="text-center">
            <div className="check-icon">
            <i class="fas fa-check-circle"></i>
            </div>
        <h2>Your Puja is Successfully Booked</h2>
        <p>May divine blessings bring peace and prosperity to your home</p>
      </div>
        </div>
      <div className="fixed-bottom text-center">
        <Link to="/home"  className="btn footer-btn">Back to home</Link>
      </div>
    </div>
  );
}

export default Booked;
