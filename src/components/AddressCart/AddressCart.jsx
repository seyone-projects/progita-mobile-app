import React from "react";
import "./addresscart.css";
import Virtual from "../../assets/virtual.png";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const AddressCart = () => {
    const navigate = useNavigate();
    return (
        <div className="address-cart-container">
            <div className="address-cart-container-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <h2 className="cart-title">Your cart</h2>
            </div>

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

                <div className="cart-options">
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

            <div className="address-footer">
                <div className="address-section">
                    <div className="address-box">
                        <div className="address-content">
                            <p className="address-option-title">Home</p>
                            <p className="address-option-desc">A1, 1st floor, Balaji apartment, 6th main Road,...</p>
                        </div>
                        <div className="address-cart-icon">
                            <i className="fa-solid fa-pencil-alt"></i>
                        </div>
                    </div>
                </div>
                <Link to="/booked"  className="add-addresscart">Proceed to pay</Link>
            </div>
        </div>
    );
};

export default AddressCart;