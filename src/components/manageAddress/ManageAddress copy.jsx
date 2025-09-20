import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addressValidation, pincodeValidation, landmarkValidation } from "../validation/validate";
import $ from "jquery";
import "select2/dist/js/select2.min";
import "select2/dist/css/select2.min.css";

const ManageAddress = () => {
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [errors, setErrors] = useState({});
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!$(".select2").data("select2")) {
      $(".select2").select2();
    }

    $(".select2").on("change", function () {
      const field = $(this).attr("name");
      const value = $(this).val();
      if (field === "city") setCity(value);
      if (field === "state") setState(value);
    });
  }, []);

  const handleChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (field === currentErrorField) {
      setCurrentErrorField(null);
    }
  };

  const validateFields = () => {
    let newErrors = {};

    if (!pincode.trim()) {
      newErrors.pincode = "Please enter pincode.";
      setCurrentErrorField("pincode");
    } else if (!pincodeValidation(pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode.";
      setCurrentErrorField("pincode");
    } else if (!city.trim()) {
      newErrors.city = "Please select your city.";
      setCurrentErrorField("city");
    } else if (!state.trim()) {
      newErrors.state = "Please select your state.";
      setCurrentErrorField("state");
    } else if (!houseNumber.trim()) {
      newErrors.houseNumber = "Enter your house/flat/office number.";
      setCurrentErrorField("houseNumber");
    } else if (!address.trim()) {
      newErrors.address = "Please enter your address.";
      setCurrentErrorField("address");
    } else if (!addressValidation(address)) {
      newErrors.address = "Address must be at least 10 characters.";
      setCurrentErrorField("address");
    } else if (!landmark.trim()) {
      newErrors.landmark = "Please enter a landmark.";
      setCurrentErrorField("landmark");
    } else if (!landmarkValidation(landmark)) {
      newErrors.landmark = "Landmark must be at least 3 characters.";
      setCurrentErrorField("landmark");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      alert("Address updated successfully!");
      navigate("/profile");
    }
  };

  return (
    <div className="container b-white">
      <div className="row">
        <div className="col-12 px-1">
          <nav className="d-flex align-items-center py-3">
            <button className="back-button" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <h3 className="m-0 flex-grow-1 text-center me-4 fw-medium">
              Manage Address
            </h3>
          </nav>

          <form onSubmit={handleSubmit} className="p-2">
            <div className="mb-2">
              <label className="small text-muted fw-medium">Pincode</label>
              <input
                type="text"
                className="form-control border-btn"
                value={pincode}
                onChange={handleChange(setPincode, "pincode")}
                placeholder="123456"
              />
              {currentErrorField === "pincode" && <small className="text-danger">{errors.pincode}</small>}
            </div>

            <div className="col">
              <div className="mt-4">
                <button className="btn location-btn text-nowrap py-2">
                  Use my location
                  <i className="fas fa-location ms-2"></i>
                </button>
              </div>
            </div>
        <div className="row mb-2">
          <div className="col-6 pe-2">
            <label className="small text-muted fw-medium">City</label>
            <select
              className="form-control select2"
              name="city"
              value={city}
              onChange={handleChange(setCity, "city")}
            >
              <option value="">Select your city</option>
              <option value="City 1">City 1</option>
              <option value="City 2">City 2</option>
            </select>
            {currentErrorField === "city" && <small className="text-danger">{errors.city}</small>}
          </div>

          <div className="col-6 pe-3">
            <label className="small text-muted fw-medium">State</label>
            <select
              className="form-control select2"
              name="state"
              value={state}
              onChange={handleChange(setState, "state")}
            >
              <option value="">Select your state</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
              <option value="New York">New York</option>
              <option value="Florida">Florida</option>
            </select>
            {currentErrorField === "state" && <small className="text-danger">{errors.state}</small>}
          </div>
        </div>

        <div className="mb-2">
          <label className="small text-muted">House/Flat/Office No.</label>
          <input
            type="text"
            className="form-control border-btn"
            value={houseNumber}
            onChange={handleChange(setHouseNumber, "houseNumber")}
            placeholder="A1 101"
          />
          {currentErrorField === "houseNumber" && <small className="text-danger">{errors.houseNumber}</small>}
        </div>

        <div className="mb-2">
          <label className="small text-muted fw-medium">Address Line</label>
          <input
            type="text"
            className="form-control border-btn"
            value={address}
            onChange={handleChange(setAddress, "address")}
            placeholder="Balaji apartment unit main block"
          />
          {currentErrorField === "address" && <small className="text-danger">{errors.address}</small>}
        </div>

        <div className="mb-3">
          <label className="small text-muted fw-medium">Landmark</label>
          <input
            type="text"
            className="form-control border-btn"
            value={landmark}
            onChange={handleChange(setLandmark, "landmark")}
          />
          {currentErrorField === "landmark" && <small className="text-danger">{errors.landmark}</small>}
        </div>

        <label className="small text-muted fw-medium">Save as</label>
        <div className="mb-4 mt-2 d-flex gap-2 align-items-center">
          <button type="button" className="btn next-btn text-white">Save</button>
          <button type="button" className="btn btn-light border-btn" disabled>Other</button>
        </div>

        <div className="d-flex justify-content-end" style={{ marginTop: "130px" }}>
          <button type="submit" className="btn w-100 text-white mt-3 next-btn p-2">
            Update Address
          </button>
        </div>
      </form>
    </div>
      </div >
    </div >
  );
};

export default ManageAddress;
