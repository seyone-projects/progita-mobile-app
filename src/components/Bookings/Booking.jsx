import React, { useState } from "react";
import "./booking.css";
import Virtual from "../../assets/virtual.png";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const historyBookings = [
    {
        id: 1,
        title: "Graha Doshas",
        rating: 4.5,
        reviews: "1.5k",
        price: 1500,
        oldPrice: 2500,
        duration: "2 hrs 40 mins",
        status: "Completed",
    },
    {
        id: 2,
        title: "Graha Doshas",
        rating: 4.5,
        reviews: "1.5k",
        price: 1500,
        oldPrice: 2500,
        duration: "2 hrs 40 mins",
        status: "Cancelled",
    }
];

const Booking = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("upcoming");

    return (
        <div className="booking-container">
            {/* Header */}
            <div className="booking-container-header">
            <button className="back-button" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <h2 className="booking-title">My Bookings</h2>
            </div>

            {/* Booking Tabs */}
            <div className="booking-tabs">
                <div 
                    className={`tab ${activeTab === "upcoming" ? "active" : ""}`} 
                    onClick={() => setActiveTab("upcoming")}
                >
                    Upcoming Booking
                </div>
                <div 
                    className={`tab ${activeTab === "history" ? "active" : ""}`} 
                    onClick={() => setActiveTab("history")}
                >
                    History
                </div>
            </div>

            <div className="booking-content">
                {activeTab === "upcoming" ? (
                    <div className="booking-item">
                        <div className="booking-details">
                            <h3>Graha Doshas</h3>
                            <div className="rating">
                                <span className="star-icon">
                                    <i className="fa-solid fa-star"></i>
                                </span>
                                <span>4.5 (1.5k reviews)</span>
                            </div>
                            <div className="booking-price-time">
                                <div className="booking-price">
                                    <p>
                                        ₹<b>1500</b> <span className="old-price">₹2500</span>
                                    </p>
                                </div>
                                <div className="booking-time">
                                    <p>2 hrs 40 mins</p>
                                </div>
                            </div>
                            <button className="view-details">View Details</button>
                        </div>
                        <div className="booking-image">
                            <Link to="/bookingdetail"><img src={Virtual} alt="Puja Image" className="img-fluid" /></Link>
                            <button className="reschedule-btn">Reschedule</button>
                        </div>
                    </div>
                ) : (
                    <div className="booking-history">
                        {historyBookings.map((booking) => (
                            <div className="history-card" key={booking.id}>
                                <div className="history-top">
                                    <div className="history-info">
                                        <h3>{booking.title}</h3>
                                        <p><span className="star-icon">
                                    <i className="fa-solid fa-star"></i>
                                </span> {booking.rating} ({booking.reviews} reviews)</p>
                                        <p>₹{booking.price} <span className="old-price">₹{booking.oldPrice}</span> • {booking.duration}</p>
                                        <button className="view-btn">View Details</button>
                                    </div>
                                    <Link to="/bookingdetail"><img src={Virtual} alt="Puja" className="history-img" /></Link>
                                </div>
                                {/* Status Below the Details */}
                                <div className={`status-container ${booking.status.toLowerCase()}`}>
                                    <i className={`fa-solid ${booking.status === "Completed" ? "fa-circle-check" : "fa-circle-xmark"}`}></i>
                                    <span>{booking.status}</span>
                                    <i className="fa-solid fa-chevron-right status-arrow"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Booking;
