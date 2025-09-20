import React from "react";
import "./BookingDetails.css";
import Virtual from "../../assets/virtual.png";
import { useNavigate } from "react-router-dom";

const BookingDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-details">
      <div className="booking-details-header d-flex align-items-center position-relative">
        <div className="back-icon position-absolute start-0" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="title w-100 text-center">
          <h2 className="d-inline">Graha doshas</h2>
        </div>
      </div>
      <div className="container booking-details-container">
        <div className="row">
          <div className="col-8 details-container">
            <div>
              <h5>Graha doshas</h5>
              <div className="rating">
                <p className="text-sm text-gray-600 my-0">
                  <i class="fa-solid fa-star"></i> 4.5 (1.5k reviews)
                </p>
              </div>
              <div className="price-time d-flex">
                <div className="price">
                  <p className="font-bold my-1 text-nowrap">
                    &#8377; 1500 &#8377;<del> 2500</del>
                  </p>
                </div>
                <div className="time px-2">
                  <p className="text-sm text-secondary my-1 text-nowrap">
                    2 hrs 40 mins
                  </p>
                </div>
              </div>

              <button className="px-0 btn view-btn">View details</button>
            </div>
          </div>
          <div className="col-4 reschedule">
            <div className="reschedule-img">
              <img src={Virtual} alt="" />
              <button className="reschedule-btn">Reschedule</button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b pb-4"></div>
        <h4 className="text-md font-medium mb-2">Booking details</h4>
        <div className="mt-4 details-border">
          <div className="mb-3 flex items-start gap-3">
            <div className="row my-2 customize-border">
              <div className="col-2">
              <i class="fas fa-user-edit px-3"></i>
              </div>
              <div className="col-10">
                <h6 className="my-1">Customization Options</h6>
                <p className="text-sm text-secondary my-0">
                  At Home, Auto Assign Priest, I will arrange the materials
                </p>

              </div>
            </div>
            <hr />
          </div>

          <div className="mb-3 flex items-start gap-3">
            <div className="row my-2 customize-border">
              <div className="col-2">
              <i class="fas fa-clock px-3"></i>
              </div>
              <div className="col-10">
                <h6 className="my-1">Date & Time</h6>
                <p className="text-sm text-secondary my-0">
                 Tue, Fe 11-12PM
                </p>
              </div>
            </div>
            <hr />
          </div>
     
          <div className="mb-3 flex items-start gap-3">
            <div className="row my-2 customize-border">
              <div className="col-2">
              <i class="fa-solid fa-location-dot px-3"></i>
              </div>
              <div className="col-10">
                <h6 className="my-1">Address - Home</h6>
                <p className="text-sm text-secondary my-0">
                 A1, 1st floor, balaji apartment, dhanseswarama, adayar, chennai-600034
                </p>
              </div>
            </div>
            <hr />
          </div>
    
          <div className="mb-3 flex items-start gap-3">
            <div className="row my-2 customize-border">
              <div className="col-2">
              <i class="fa-solid fa-user px-3"></i>
              </div>
              <div className="col-8">
                <h6 className="my-1">Your Details</h6>
                <p className="text-sm text-secondary my-0">
                 Shriram- +91 7838892739
                </p>
              </div>
              <div className="col-2">
              <i class="fas fa-pencil-alt pe-2 text-secondary"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 customize-border-cancel">
        <div className="row">
              <div className="col-1">
              <i class="fa-solid fa-x"></i>
              </div>
              <div className="col-9">
                <h6 className="my-1">Cancel</h6>
                <p className="text-sm text-secondary my-0 text-nowrap">
                 Free cancellation before 24 hours.
                </p>
              </div>
              <div className="col-2">
              <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
