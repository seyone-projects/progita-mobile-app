import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { addressValidation, pincodeValidation, landmarkValidation } from "../validation/validate";

const ManageAddress = () => {
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
    navigate("/profile");

  };

  return (
    <div className="container b-white">
      <div className="row">
        <div className="col-12 px-1">
          <nav className="d-flex align-items-center py-3">
            <button className="back-button" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <h3 className="m-0 flex-grow-1 text-center me-4 fw-medium">Manage Address</h3>
          </nav>

          <form onSubmit={handleSubmit} className='p-2'>
            <div className="d-flex">
              <div className="col-6 pe-2 mb-2">
                <label className="small text-muted fw-medium">Pincode</label>
                <input
                  type="text"
                  className="form-control border-btn"
                  name="city"
                  value={pincode}
                  onChange={handlePincode}
                />
                {errors.pincode && <small className="text-danger">{errors.pincode}</small>}

              </div>
              <div className="col-6 ps-3">
                <button type="button" className="btn next-btn2 align-items-center w-100 mt-4">Use my location</button>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-6 pe-2">
                <label className="small text-muted fw-medium">City</label>
                <input
                  type="text"
                  className="form-control border-btn    "
                  name="city"
                  value={city}
                  onChange={handleCity}
                />
                {errors.city && <small className="text-danger">{errors.city}</small>}
              </div>

              <div className="col-6 pe-3">
                <label className="small text-muted fw-medium">State</label>
                <input
                  type="text"
                  className="form-control border-btn"
                  name="state"
                  value={state}
                  onChange={handleState}
                />
                {errors.city && <small className="text-danger">{errors.state}</small>}
              </div>
            </div>

            <div className="mb-2">
              <label className="small text-muted">House/Flat/Office No.</label>
              <input
                type="text"
                className="form-control border-btn"
                name="houseNumber"
                value={houseNo}
                onChange={handleHouseNo}
              />
              {errors.houseNo && <small className="text-danger">{errors.houseNo}</small>}

            </div>

            <div className="mb-2">
              <label className="small text-muted fw-medium">Address Line</label>
              <input
                type="text"
                className="form-control border-btn"
                name="addressLine"
                value={address}
                onChange={handleAddress}
              />
              {errors.address && <small className="text-danger">{errors.address}</small>}


            </div>

            <div className="mb-3">
              <label className="small text-muted fw-medium">Landmark</label>
              <input
                type="text"
                className="form-control border-btn"
                name="landmark"
                value={landmark}
                onChange={handleLandmark}
              />
              {errors.landmark && <small className="text-danger">{errors.landmark}</small>}
            </div>
            <label className="small text-muted fw-medium">Save as</label>
            <div className="mb-4 mt-2 d-flex gap-2 align-items-center">

              <button type="button" className="btn next-btn text-white">Save</button>
              <button type="button" className="btn btn-light border-btn" disabled>
                Other
              </button>
            </div>

            <div className='d-flex justify-content-end' style={{ marginTop: '130px' }}>
              <button type="submit" className="btn w-100 text-white mt-3 next-btn p-2" >
                Update Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
