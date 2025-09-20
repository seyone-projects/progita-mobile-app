import React, { useState } from "react";
import AddAddress from "../Address/AddAddress";
import "./cart.css";
import Virtual from "../../assets/virtual.png";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="cart-container">
            <div className="cart-container-header">
                {/* Back Button */}
                <button className="back-button">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>

                <h2 className="cart-title">Your cart</h2>
            </div>

            {/* Main Cart Section */}
            <div className="cart-content">
                <div className="cart-item">
                    <div className="cart-details">
                        <h3>Graha doshas</h3>
                        <div className="rating">
                            <span className="star-icon">
                                <i className="fa-solid fa-star"></i>
                            </span>
                            <span>4.5 (1.5k reviews)</span>
                        </div>
                        <div className="price-time d-flex">
                            <div className="price">
                                <p className="text-nowrap">
                                    &#8377;<b> 1500</b> &#8377;
                                    <del>2500</del>
                                </p>
                            </div>
                            <div className="time">
                                <p className="text-nowrap">2 hrs 40 mins</p>
                            </div>
                        </div>
                        <button className="view-details">View details</button>
                    </div>
                    <div className="cart-image">
                        <img src={Virtual} alt="Puja Image" className="img-fluid" />
                    </div>
                </div>

                {/* Customization and Date/Time */}
                <div className="cart-options">
                    {/* Customization Options */}
                    <div className="option-box">
                        <div className="icon">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="option-content">
                            <p className="option-title">Customization Options</p>
                            <p className="option-desc">
                                At Home, Auto Assign Priest, I will arrange the materials
                            </p>
                        </div>
                        <div className="cart-icon">
                            <i className="fa-solid fa-pencil-alt"></i>
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="option-box">
                        <div className="icon">
                            <i className="fa-solid fa-calendar"></i>
                        </div>
                        <div className="option-content">
                            <p className="option-title">Date & Time</p>
                            <p className="option-desc">Tue, Feb 11 - 12PM</p>
                        </div>
                        <div className="cart-icon">
                            <i className="fa-solid fa-pencil-alt"></i>
                        </div>
                    </div>
                </div>

                {/* Payment Summary */}
                <div className="payment-summary">
                    <h4>Payment summary</h4>
                    <div className="summary-item">
                        <span>Pujai total</span> <span>&#8377;1500</span>
                    </div>
                    <div className="summary-item">
                        <span>Taxes & fee</span> <span>&#8377;100</span>
                    </div>
                    <hr />
                    <div className="summary-item total">
                        <span>Total amount</span> <span>&#8377;1600</span>
                    </div>
                </div>
            </div>

            {/* Add Address Button */}
            <div className="address">
                <NavLink
                    className="add-address"
                    onClick={() => setIsModalOpen(true)}
                >
                    Add address
                </NavLink>
                <AddAddress
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>

        </div>
    );
};

export default Cart;
