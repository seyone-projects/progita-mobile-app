import React, { useState } from "react";
import AddressCart from "../AddressCart/AddressCart";
import "./addaddress.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addressValidation, pincodeValidation, landmarkValidation } from "../validation/validate";

const AddAddress = ({ isOpen, onClose }) => {
  // Move useState above the conditional return
    /*const [location, setLocation] = useState("");*/
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [state, setState] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();  
    const handleAddress = (e) => {
      setAddress(e.target.value);
      setErrors({ ...errors, address: "" });
  };

  const handleLandmark = (e) => {
      setLandmark(e.target.value);
      setErrors({ ...errors, landmark: "" });
  };
  const handlePincode = (e) => {
      setPincode(e.target.value);
      setErrors({ ...errors, pincode: "" });
  }; 
  const handleHouseNo = (e) => {
    setHouseNo(e.target.value);
    setErrors({ ...errors, houseNo: "" });
};
  const handleCity = (e) => {
      setCity(e.target.value);
      setErrors({ ...errors, city: "" });
  };
  const handleState = (e) => {
      setState(e.target.value);
      setErrors({ ...errors, state: "" });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      // Validate Pincode
      if (!pincode) {
        setErrors({ pincode: "Please enter pincode." });
        return; // Stop further validation
    } else if (!pincodeValidation(pincode)) {
        setErrors({ pincode: "Please enter a valid 6-digit number." });
        return; // Stop further validation
    }
    // Validate city
    if (!city) {
      setErrors({ city: "Please enter city." });
      return; // Stop further validation
  } else if (!landmarkValidation(pincode)) {
      setErrors({ city: "Please enter a atleast 3 characters." });
      return; // Stop further validation
  }
    // Validate state
    if (!state) {
      setErrors({ state: "Please enter state." });
      return; // Stop further validation
  } else if (!landmarkValidation(state)) {
      setErrors({ state: "Please enter a atleast 3 characters." });
      return; // Stop further validation
  }
  if (!houseNo) {
    setErrors({ houseNo: "Please enter state." });
    return; // Stop further validation
} else if (!landmarkValidation(houseNo)) {
    setErrors({ houseNo: "Please enter a atleast 3 characters." });
    return; // Stop further validation
}
      // Validate address1
      if (!address) {
          setErrors({ address: "Please enter your address1." });
          return; // Stop further validation
      } else if (!addressValidation(address)) {
          setErrors({ address: "Please enter at least 10 characters)" });
          return; // Stop further validation
      }
      // Validate landmark
      if (!landmark) {
          setErrors({ landmark: "Please enter landmark." });
          return; // Stop further validation
      } else if (!landmarkValidation(landmark)) {
          setErrors({ landmark: "Please enter a atleast 3 characters." });
          return; // Stop further validation
      }
      // If all fields are valid
      alert("Address added succesffully!");
      navigate("/AddressCart");

  };

  if (!isOpen) return null; // Early return without breaking Hooks order

  return (
    <>
      <div className="add-address-container">
        <div className="modal" tabIndex="-1">
          <div className="address-modal-dialog modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header border-0 pt-3 pb-2 bg-white">
                <div className="d-flex align-items-center w-100">
                  <h5 className="address-title">Add Address</h5>
                  <button className="btn ms-auto" onClick={onClose}>
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="form-container">
                  <form className="address-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label">Pin Code</label>
                          <input
                            type="text"
                            className="form-control py-2"
                            placeholder="600042" 
                            value={pincode}
                            onChange={handlePincode}
                          />
                          {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
                        </div>
                      </div>
                      <div className="col">
                        <div className="mt-4">
                          <button className="btn location-btn text-nowrap py-2">
                            Use my location
                            <i className="fas fa-location ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control py-2"
                            placeholder="Chennai" 
                            value={city}
                            onChange={handleCity}
                          />
                          {errors.city && <small className="text-danger">{errors.city}</small>}
                          
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label">State</label>
                          <input
                            type="text"
                            className="form-control py-2"
                            placeholder="Tamil Nadu"
                            value={state}
                            onChange={handleState}
                          />
                          {errors.city && <small className="text-danger">{errors.state}</small>}
                          
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        House/Flat/Office No.
                      </label>
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="A1, 1st floor"
                            value={houseNo}
                            onChange={handleHouseNo}
                          />
                          {errors.houseNo && <small className="text-danger">{errors.houseNo}</small>}
                          
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Address line</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Balaji apartment, 6th main Road"
                            value={address}
                            onChange={handleAddress}
                          />
                          {errors.address && <small className="text-danger">{errors.address}</small>}
                          
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Landmark</label>
                      <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Velachery"
                            value={landmark}
                            onChange={handleLandmark}
                          />
                          {errors.landmark && <small className="text-danger">{errors.landmark}</small>}
                    </div>

                    <div className="mb-3 save-btn">
                      <label className="form-label">Save as</label>
                      <div>
                        <button className="btn me-2 px-4 py-2">Home</button>
                        <button className="btn px-4 py-2">Other</button>
                      </div>
                    </div>
                    
                    <div className="address-modal-footer border-0">
                      <button
                        className="save-address-btn"
                      >
                        Save Address
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop show"></div>
      </div>
    </>
  );
};

export default AddAddress;
