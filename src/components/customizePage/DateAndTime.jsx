import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import gruha from "../../assets/gruha2.jpg";
import "./CustomizePage.css";
import {  useNavigate } from "react-router-dom";
import { validateDateTime } from ".././validation/validate";

const DateAndTime = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setErrors((prev) => ({ ...prev, date: null }));
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setErrors((prev) => ({ ...prev, time: null }));
  };

  const handleContinue = () => {
    const validation = validateDateTime(selectedDate, selectedTime);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // If validation passes, navigate to cart
    navigate('/cart');
  };

  return (
    <>
      <div
        className="modal rounded-top-4"
        style={{ display: "block", top: "20%", height: "80%" }}
        tabIndex="-1"
      >
        <div className="date-modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header border-0 py-3 bg-white">
              <div className="d-flex align-items-center w-100">
                <IoArrowBack
                  className="fs-4 me-3 cursor-pointer"
                  onClick={onClose}
                />
                <div className="d-flex align-items-center">
                  <img
                    src={gruha}
                    alt="Graha doshas"
                    className="rounded-circle me-2 object-fit-cover"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0">Graha doshas</h6>
                    <small className="text-muted me-5">₹ 1500</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="date-modal-body">
              <div className="schedule-step">
                <h6 className="mb-4 d-flex fs-5 fw-semibold">Date & Time Selection</h6>

                {/* Date Selection */}
                <div className="mb-4">
                  <p className="mb-3 d-flex fw-semibold">Choose date</p>
                  <div className="d-flex gap-3 mb-4">
                    <button 
                      className={`btn px-3 py-2 ${selectedDate === 'today' ? 'next-btn text-white' : 'btn-light'}`}
                      onClick={() => handleDateSelect('today')}
                    >
                      <div className="fw-bold">Today</div>
                      <small>09 Feb</small>
                    </button>
                    <button 
                      className={`btn px-3 py-2 ${selectedDate === 'tomorrow' ? 'next-btn text-white' : 'btn-light'}`}
                      onClick={() => handleDateSelect('tomorrow')}
                    >
                      <div className="fw-bold">Tomorrow</div>
                      <small>10 Feb</small>
                    </button>
                    <button 
                      className={`btn px-3 py-2 ${selectedDate === 'tuesday' ? 'next-btn text-white' : 'btn-light'}`}
                      onClick={() => handleDateSelect('tuesday')}
                    >
                      <div className="fw-bold">Tuesday</div>
                      <small>11 Feb</small>
                    </button>
                  </div>
                  {errors.date && <div className="text-danger small">{errors.date}</div>}
                </div>

                {/* Time Slots */}
                <div>
                  <p className="mb-3 d-flex fw-semibold">Choose time slot</p>

                  {/* Morning Slots */}
                  <div className="mb-4">
                    <p className="text-muted small mb-3 d-flex">Morning</p>
                    <div className="d-flex flex-wrap gap-2">
                      <button 
                        className={`btn ${selectedTime === 'morning-1' ? 'next-btn text-white' : 'btn-light'}`}
                        onClick={() => handleTimeSelect('morning-1')}
                      >
                        9AM - 10AM
                      </button>
                      <button 
                        className={`btn ${selectedTime === 'morning-2' ? 'next-btn text-white' : 'btn-light'}`}
                        onClick={() => handleTimeSelect('morning-2')}
                      >
                        10AM - 11AM
                      </button>
                      <button 
                        className={`btn ${selectedTime === 'morning-3' ? 'next-btn text-white' : 'btn-light'}`}
                        onClick={() => handleTimeSelect('morning-3')}
                      >
                        11AM - 12PM
                      </button>
                    </div>
                  </div>

                  {/* Afternoon Slots */}
                  <div className="mb-4">
                    <p className="text-muted small mb-3 d-flex">Afternoon</p>
                    <div className="d-flex flex-wrap gap-2">
                      <button 
                        className={`btn ${selectedTime === 'afternoon-1' ? 'next-btn text-white' : 'btn-light'}`}
                        onClick={() => handleTimeSelect('afternoon-1')}
                      >
                        12PM - 1PM
                      </button>
                      <button 
                        className={`btn ${selectedTime === 'afternoon-2' ? 'next-btn text-white' : 'btn-light'}`}
                        onClick={() => handleTimeSelect('afternoon-2')}
                      >
                        1PM - 2PM
                      </button>
                      <button 
                        className={`btn ${selectedTime === 'afternoon-3' ? 'next-btn text-white' : 'btn-light'}`}
                        onClick={() => handleTimeSelect('afternoon-3')}
                      >
                        2PM - 3PM
                      </button>
                    </div>
                  </div>

                  {/* Evening Slots */}
                  <div className="mb-4">
                    <p className="text-muted small mb-3 d-flex">Evening</p>
                    <div className="slot-unavailable p-2 text-center text-muted bg-secondary-subtle rounded-3 d-flex" style={{width:'10rem'}}>
                      <button className="btn mx-auto">No slot available</button>
                    </div>
                  </div>
                  {errors.time && <div className="text-danger small">{errors.time}</div>}
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer border-0">
                <div className="text-center mt-5 px-2 w-100">
                  <button 
                    className="btn next-btn w-100 fw-semibold py-2 text-white rounded-3"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
};

export default DateAndTime;