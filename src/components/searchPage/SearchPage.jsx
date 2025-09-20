import React, { useState } from "react";
import "./SearchPage.css";
import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import img01 from "../../assets/special.png";
import img02 from "../../assets/virtual.png";
import img03 from "../../assets/gruha.jpg";

const SearchPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchItems = [
    { 
      id: 1, 
      title: "Festival 1", 
      image: img01,
      rating: 4.5,
      reviewCount: 54,
      price: 1500,
      duration: '2 hrs'
    },
    { 
      id: 2, 
      title: "Light Pass", 
      image: img02,
      rating: 4.3,
      reviewCount: 42,
      price: 2500,
      duration: '3 hrs'
    },
    { 
      id: 3, 
      title: "Special Pass", 
      image: img03,
      rating: 4.7,
      reviewCount: 38,
      price: 3000,
      duration: '4 hrs'
    },
    { 
      id: 4, 
      title: "Guitar festival", 
      image: img02,
      rating: 4.4,
      reviewCount: 29,
      price: 2000,
      duration: '2 hrs'
    },
  ];

  // Filter items based on search term
  const filteredItems = searchItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid py-3 bg-white">
      {/* Search Header */}
      <div className="row align-items-center mb-4">
        <div className="col-12 d-flex ps-2 align-items-center">
          <NavLink to="/home" className="btn btn-link text-dark p-1">
            <IoArrowBack className="fs-4 mx-3 align-items-center cursor-pointer" />
          </NavLink>
          <h3 className="mx-auto w-50 align-items-center fw-medium mt-1">
            Search
          </h3>
        </div>
        <div className="px-2 mt-2">
          <div className="position-relative">
            <i className="bi bi-search position-absolute top-50 translate-middle-y ms-3 text-secondary"></i>
            <input
              type="text"
              className="form-control ps-5 py-2 rounded-3 border-1"
              placeholder="Search for festival paper"
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                // Only unfocus if search term is empty
                if (!searchTerm) {
                  setIsFocused(false);
                }
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {!isFocused ? (
        // Show this content when input is not focused
        <>
          {/* Recent Searches */}
          <div className="mb-4">
            <h6 className="fw-semibold mb-3">Recent searches</h6>
            <div className="search-appearance">
              <p>
                <i className="bi bi-search translate-middle-y me-3 text-secondary"></i>
                Lorem ipsum
              </p>
              <p>
                <i className="bi bi-search translate-middle-y me-3 text-secondary"></i>
                Loremddv sdv
              </p>
              <p>
                <i className="bi bi-search translate-middle-y me-3 text-secondary"></i>
                Lorem vjdskk
              </p>
            </div>
            <div className="d-flex gap-3 overflow-auto pb-2 mt-3">
              {searchItems.slice(0, 3).map((item) => (
                <div key={item.id} className="text-center">
                  <div className="rounded-3 overflow-hidden mb-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid search-thumbnail"
                    />
                  </div>
                  <small className="text-secondary">{item.title}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Festivals */}
          <div>
            <h6 className="fw-semibold mb-3">Upcoming Festival pass</h6>
            <div className="d-flex gap-3 overflow-auto pb-2 mt-3">
              {searchItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="text-center"
                  style={{ minWidth: "150px" }}
                >
                  <div className="rounded-3 overflow-hidden mb-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid search-thumbnail"
                    />
                  </div>
                  <div className="text-start">
                    <div className="fw-medium">{item.title}</div>
                    <div className="d-flex align-items-center gap-1">
                      <span className="text-warning">★</span>
                      <span>{item.rating}</span>
                      <span className="text-secondary">
                        ({item.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="start-icon">₹{item.price}</span>
                      <div className="d-flex align-items-center">
                      <span className="text-secondary mx-1">•</span>
                      <span className="text-secondary">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Show search results when input is focused
        <div className="search-results">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center p-2 border-bottom"
            >
              <i className="bi bi-search me-3 text-secondary"></i>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
