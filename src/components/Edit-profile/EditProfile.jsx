import React, { useState } from "react";
import "./editprofile.css";
import { nameValidation, mobileValidation } from "../validation/validate";
import { useNavigate } from "react-router-dom";

const EditProfilePage = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setFullName(e.target.value);
    setErrors({ ...errors, fullName: "" });
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    setErrors({ ...errors, mobile: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    if (!fullName) {
      setErrors({ fullName: "Please enter your name." });
      return; // Stop further validation
    } else if (!nameValidation(fullName)) {
      setErrors({ fullName: "Name must be at least 2 characters long." });
      return; // Stop further validation
    }
    if (!mobile.trim()) {
      setErrors({ mobile: "Note : Please enter your mobile number." });
      return; // Stop further validation
    } else if (!mobileValidation(mobile)) {
      setErrors({ mobile: "Note : Please enter a valid phone no." });
      return; // Stop further validation
    }

    // If all fields are valid
    alert("Profile Updated Succesffully!");
    navigate("/profile");
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="editprofile-modal-container">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h6 className="modal-title">Edit profile</h6>
              <button className="btn ms-auto" onClick={onClose}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <label className="input-label">Name</label>
                <input
                  type="text"
                  className="input-field"
                  value={fullName}
                  placeholder="Enter your full name"
                  onChange={handleNameChange}
                />
                {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                <label className="input-label">Phone number</label>
                <input
                  type="text"
                  className="input-field"
                  value={mobile}
                  onChange={handleMobileChange}
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                {/* Footer */}
                <div className="modal-footer">
                  <button className="update-btn">Update profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="modal-backdrop show"></div>
    </>
  );
};

export default EditProfilePage;
