import React, { useState } from 'react';
import CustomizePage from '../customizePage/CustomizePage'; 
import "./SinglePage.css";
import gruha from "../../assets/gruha2.jpg"
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SinglePage = () => {
  
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="single-page container px-3 py-2">
      <nav className="d-flex align-items-center py-2">
        <button className="btn btn-link text-dark fs-2" onClick={() => navigate(-1)}><i class="bi bi-arrow-left-short fs-1"></i></button>
        <h3 className="m-0 flex-grow-1 text-center fw-bold">Graha doshas</h3>
      </nav>
      
      <div className="main-image rounded overflow-hidden mb-3">
        <img
          src={gruha}
          alt="Main Ritual"
          className="img-fluid w-100 rounded-4"
        />
      </div>

      <div className="details px-2">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-bold">Graha doshas</h4>
         <p><span className="star-icon fw-semibold fs-5">★ </span>4.5 (1.5k reviews)</p>
        </div>
        <p className="text-muted">
          <span className="text-dark fw-bold fs-5">₹ 1500</span>
          <span className="text-decoration-line-through text-muted ms-2">₹ 2500</span>
          <span className="ms-2 small">• 2 hrs 40 mins</span>
        </p>
      </div>

      <div className="description px-2">
        <h5 className="fw-bold">Description</h5>
        <p className="text-muted">
          A sacred Hindu ritual dedicated to Lord Vishnu for prosperity and well-being...
          <span className="star-icon fw-semibold"> view all</span>
        </p>
      </div>

      <div className="image-section w-100">
        <h3 className="fw-bold mb-2 ps-2">Image</h3>
        <div className="d-flex gap-2 position-relative px-3">
          <img src={gruha} alt="ritual" className="rounded-4 image-box img-fluid ms-1" />
          <img src={gruha} alt="ritual" className="rounded-4 image-box img-fluid" />
          <div className="position-relative">
            <img src={gruha} alt="ritual" className="rounded-4 image-box image-box-last " style={{width:"7rem"}} />
            <div className="more-images position-absolute top-0 start-0 image-box d-flex align-items-center justify-content-center rounded-4 bg-dark text-white opacity-75 fs-1 image-box-last" style={{width:"7rem"}}>+10</div>
          </div>
        </div>
      </div>

      <div className="benefits px-2 mt-3">
        <h5 className="fw-bold">Benefits of doing this pooja</h5>
        <ul className="text-muted">
          <li>A sacred Hindu ritual dedicated to Lord Vishnu.</li>
          <li className="mt-2">Brings prosperity and well-being.</li>
        </ul>
      </div>

      <div className="text-center mt-5 px-2">
        <NavLink className="btn next-btn w-100 fw-semibold py-2 text-white rounded-3"  onClick={() => setIsModalOpen(true)}>Add</NavLink>
        <CustomizePage 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      </div>
    </div>
  );
};

export default SinglePage;