import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import { NavLink } from 'react-router-dom';
import EditProfile from '../Edit-profile/EditProfile';
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-container-header">
        <button className="profile-back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h2 className="profile-title">Profile</h2>
      </div>

      {/* Profile Section */}
      <div className="profile-info">
        <div className="profile-pic">
          <i className="fa-solid fa-user"></i>
          <div className="edit-icon" onClick={() => setProfileOpen(true)}>
            <i className="fa-solid fa-pencil-alt"></i>
          </div>
        </div>
        <h3 className="profile-name">Shriram</h3>
        <p className="profile-number">78938892739</p>
      </div>

      {/* Profile Options */}
      <div className="profile-options">
        <Link to="/booking" className="profile-option">
          <i className="fa-solid fa-clock-rotate-left"></i> My Booking
        </Link>
        <Link to="/manageAddress" className="profile-option">
          <i className="fa-solid fa-map-marker-alt"></i> Manage Address
        </Link>
        <Link to="/settings" className="profile-option">
          <i className="fa-solid fa-cog"></i> Settings
        </Link>
        <Link to="/support" className="profile-option">
          <i className="fa-solid fa-question-circle"></i> Support/FAQ
        </Link>
      </div>

      {/* Edit Profile Modal */}
      <EditProfile
        isOpen={isProfileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </div>
  );
};

export default Profile;
