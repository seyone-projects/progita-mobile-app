import React, { useState } from "react";
import { useRef } from "react";
import "./Service.css";
import home from "../../assets/home.png";
import temple from "../../assets/temple.png";
import Gruha from "../../assets/gruha.jpg";
import Virtual from "../../assets/virtual.png";
import Rasi from "../../assets/circleimg.png";
import Gruha2 from "../../assets/gruha2.jpg";
import { Link } from 'react-router-dom';


function Service() {
    const [activeTab, setActiveTab] = useState("All");
    const tabRef = useRef(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleScroll = (e) => {
        e.preventDefault();
        tabRef.current.scrollLeft += e.deltaY;
    };
    return (
        <div>
            <div className="container servicepage">
                <div className="row title-fixed shadow-sm bg-white rounded text-center">
                    <div className="col-12">
                        <h1 className="servicepage-header">Services</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="book-card">
                            <h3>Book your special festive puja now</h3>
                            <p>Get up to 20% OFF!</p>
                            <button className="book-btn">
                                Book now <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-between mt-3">
                    <div className="col-4">
                        <div className="card category-card">
                            <p>At Home</p>
                            <img src={home} alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card category-card">
                            <p>At Temple</p>
                            <img src={temple} alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card category-card">
                            <p>Virtual</p>
                            <img src={Virtual} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row slide near-by-service">
                    <div class="category-header">
                        <span>Most Booking Services</span>
                    </div>
                    <div className="col-6">
                        <div className="slide-img">
                            <Link to="/single_page"><img src={Gruha} alt="" /></Link>
                        </div>
                        <div className="slide-details">
                            <div className="title">
                                <p className="service-title">Graha doshas</p>
                                <div className="rating">
                                    <p className="service-rating">
                                        <span>
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                        <span>4.5(1.5k reviews)</span>
                                    </p>
                                </div>
                                <div className="price-time d-flex">
                                    <div className="price">
                                        <p className="text-nowrap">
                                            &#8377;<b> 1500</b> &#8377;
                                            <del>
                                                <b>2500</b>
                                            </del>
                                        </p>
                                    </div>
                                    <div className="time">
                                        <p className="text-nowrap">2 hrs 40 mins</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="slide-img">
                            <Link to="/single_page"><img src={Gruha} alt="" /></Link>
                        </div>
                        <div className="slide-details">
                            <div className="title">
                                <p className="service-title">Graha doshas</p>
                                <div className="rating">
                                    <p className="service-rating">
                                        <span>
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                        <span>4.5(1.5k reviews)</span>
                                    </p>
                                </div>
                                <div className="price-time d-flex">
                                    <div className="price">
                                        <p className="text-nowrap">
                                            &#8377;<b> 1500</b> &#8377;
                                            <del>
                                                <b>2500</b>
                                            </del>
                                        </p>
                                    </div>
                                    <div className="time">
                                        <p className="text-nowrap">2 hrs 40 mins</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row popular-service">
                    <div className="col-12">
                        <div class="category-header">
                            <span>Popular Services</span>
                        </div>
                    </div>
                    <div className="tabs-carousel-container">
                        <div className="tabs-wrapper" ref={tabRef} onWheel={handleScroll}>
                            <button
                                className={activeTab === "All" ? "active orange" : ""}
                                onClick={() => handleTabClick("All")}
                            >
                                All
                            </button>
                            <button
                                className={activeTab === "Recent" ? "active orange" : ""}
                                onClick={() => handleTabClick("Recent")}
                            >
                                Recent
                            </button>
                            <button
                                className={activeTab === "Trending" ? "active orange" : ""}
                                onClick={() => handleTabClick("Trending")}
                            >
                                Trending
                            </button>
                            <button
                                className={activeTab === "Top rating" ? "active orange" : ""}
                                onClick={() => handleTabClick("Top rating")}
                            >
                                Top Rating
                            </button>
                            <button
                                className={activeTab === "Near you" ? "active orange" : ""}
                                onClick={() => handleTabClick("Near you")}
                            >
                                Near You
                            </button>
                        </div>
                    </div>
                    {activeTab === "All" && (
                        <>
                            <div className="col-6 mb-3">
                                <div className="tab-details">
                                    <div className="slide-details">
                                        <div className="title">
                                            <p className="service-title">Graha doshas</p>
                                            <div className="rating">
                                                <p className="service-rating">
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    <span>4.5(1.5k reviews)</span>
                                                </p>
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
                                            <div className="view-btn">
                                                <button className="popular-view-btn">View details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-img">
                                    <img src={Gruha} alt="" className="img-fluid" />
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-details">
                                    <div className="slide-details">
                                        <div className="title">
                                            <p className="service-title">Graha doshas</p>
                                            <div className="rating">
                                                <p className="service-rating">
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    <span>4.5(1.5k reviews)</span>
                                                </p>
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
                                            <div className="view-btn">
                                                <button className="popular-view-btn">View details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-img">
                                    <img src={Gruha} alt="" className="img-fluid" />
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-details">
                                    <div className="slide-details">
                                        <div className="title">
                                            <p className="service-title">Graha doshas</p>
                                            <div className="rating">
                                                <p className="service-rating">
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    <span>4.5(1.5k reviews)</span>
                                                </p>
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
                                            <div className="view-btn">
                                                <button className="popular-view-btn">View details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-img">
                                    <img src={Gruha} alt="" className="img-fluid" />
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab === "Recent" && (
                        <>
                            <div className="col-6 mb-3">
                                <div className="tab-details">
                                    <div className="slide-details">
                                        <div className="title">
                                            <h3>Graha doshas</h3>
                                            <div className="rating">
                                                <p>
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    <span>4.5(1.5k reviews)</span>
                                                </p>
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
                                            <div className="view-btn">
                                                <button className="popular-view-btn">View details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-img">
                                    <img src={Gruha} alt="" className="img-fluid" />
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab === "Trending" && (
                        <>
                            <div className="col-6 mb-3">
                                <div className="tab-details">
                                    <div className="slide-details">
                                        <div className="title">
                                            <h3>Graha doshas</h3>
                                            <div className="rating">
                                                <p>
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    <span>4.5(1.5k reviews)</span>
                                                </p>
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
                                            <div className="view-btn">
                                                <button className="popular-view-btn">View details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-img">
                                    <img src={Virtual} alt="" className="img-fluid" />
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab === "Top rating" && (
                        <>
                            <div className="col-6 mb-3">
                                <div className="tab-details">
                                    <div className="slide-details">
                                        <div className="title">
                                            <h3>Graha doshas</h3>
                                            <div className="rating">
                                                <p>
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    <span>4.5(1.5k reviews)</span>
                                                </p>
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
                                            <div className="view-btn">
                                                <button className="popular-view-btn">View details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-img">
                                    <img src={Gruha} alt="" className="img-fluid" />
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab === "Near you" && (
                        <>
                            <div className="col-6 mb-3">
                                <div className="tab-details">
                                    <div className="slide-details">
                                        <div className="title">
                                            <h3>Graha doshas</h3>
                                            <div className="rating">
                                                <p>
                                                    <span>
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    <span>4.5(1.5k reviews)</span>
                                                </p>
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
                                            <div className="view-btn">
                                                <button className="popular-view-btn">View details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="tab-img">
                                    <img src={Gruha2} alt="" className="img-fluid" />
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="bottom-navbar">
                <div className="nav-item">
                    <Link to="/home" className="nav-link">
                        <i className="fa fa-home"></i>
                        <span>Home</span>
                    </Link>
                </div>

                <div className="center-icon">
                    <img src={Rasi} alt="Rasi Icon" className="rasi-footer-icon" />
                </div>

                <div className="nav-item2">
                    <Link to="/service" className="nav-link">
                        <i className="fa fa-building"></i>
                        <span>Service</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Service;

