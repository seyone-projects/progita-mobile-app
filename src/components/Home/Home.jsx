import React, { useState, useRef } from 'react';
import './home.css';
import Content from '../../assets/content.png';
import Gruha from '../../assets/gruha.jpg';
import Home from '../../assets/home.png';
import Temple from '../../assets/temple.png';
import Virtual from '../../assets/virtual.png';
import Ganesh from '../../assets/ganesh.png';
import Pooja1 from '../../assets/pooja1.png';
import Pooja2 from '../../assets/pooja2.png';
import Pooja3 from '../../assets/pooja3.png';
import Daily from '../../assets/dialy.png';
import Special from '../../assets/special.png';
import Homam from '../../assets/homam.png';
import Lifeevent from '../../assets/lifeevent.png';
import Dosha from '../../assets/dosha.png';
import Gruha2 from '../../assets/gruha2.jpg';
import Rasi from '../../assets/circleimg.png';
import Vector from '../../assets/vector.png';
import { Link } from 'react-router-dom';


const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="home-container">
      {/* Background Image */}
      <div className="home-header">
        <img src={Content} alt="content-logo" className="home-new-logo" />

        {/* User Info */}
        <div className="user-info">
          <div className="user-details">
            <i className="fa-regular fa-circle-user"></i>
            <div className="user-text">
              <p className="welcome-text">Welcome back, <b>Shriram</b></p>
              <div className="dropdown">
                <p
                  className="location-text dropdown-toggle"
                  onClick={() => setIsOpen(!isOpen)}
                  data-bs-toggle="dropdown"
                >
                  Dhandeswaram Nagar, Velachery
                </p>
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                  <li><Link to="/login" className="dropdown-item">Logout</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Discount Overlay */}
        <div className="search-discount-container">
          <div className="search-bar">
            <Link to="/search_page">
              <input type="text" placeholder='Search for “Navratri pujas”' />
            </Link>
          </div>
          <div className="discount-text">
            <span className="discount-bold">GET 50% - </span><span className="first-order">FIRST ORDER</span>
          </div>

          {/* Carousel Inside Image */}
          <div className="home-carousel-container">
            <div className="carousel">
              <div className="card">
                <span className="offer-tag">Up to 70% off</span>
                <p className="home-carousal-text">Festivals pujas</p>
                <img src={Ganesh} alt="Festivals pujas" className="home-carousal-img" />
              </div>
              <div className="card">
                <span className="offer-tag">Up to 50% off</span>
                <p className="home-carousal-text">Graha doshas</p>
                <img src={Pooja1} alt="Graha doshas" className="home-carousal-img" />
              </div>
              <div className="card">
                <span className="offer-tag">Up to 70% off</span>
                <p className="home-carousal-text">Navagraha pujas</p>
                <img src={Pooja2} alt="Navagraha pujas" className="home-carousal-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container service">
        <div className="rasi-banner">
          <div className="rasi-container">
            <img src={Rasi} alt="Rasi" className="rasi-img" />
          </div>
          <div className="vector-container">
            <img src={Vector} alt="vector" className="vector-img" />
            <span className="rasi-text">Today Rasi plan</span>
          </div>
        </div>


        <div className="row slide near-by-service">
          <div className="category-header">
            <span>Explore Categories</span>
          </div>

          {[
            { img: Pooja3, title: "" },
            { img: Daily, title: "Daily Pujas" },
            { img: Special, title: "Special Pujas" },
            { img: Homam, title: "Homam Rituals" },
            { img: Lifeevent, title: "Life Event Pujas" },
            { img: Dosha, title: "Dosha Remedies" }
          ].map((category, index) => (
            <div className="col-4" key={index}>
              <div className="slide-img">
                <img src={category.img} alt={category.title} />
                <div className="overlay">
                  <h2 className="category-title">{category.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row slide near-by-service">
          <div class="category-header">
            <span>Nearby Service</span>
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
          </div><div className="col-6">
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
        <div className="row d-flex justify-content-between mt-3">
          <div className="col-4">
            <div className="card category-card">
              <p>At Home</p>
              <img src={Home} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="card category-card">
              <p>At Temple</p>
              <img src={Temple} alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="card category-card">
              <p>Virtual</p>
              <img src={Virtual} alt="" />
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
};

export default Homepage;
