import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

import User from '../../assets/user.avif';


const Menu = () => {
  return (
    <div className='menu-page'>
      <div className='logo-name d-flex justify-content-between align-items-center p-3'>
        <img src={User} alt="Logo" className='menu-logo' />
        <h1 className='menu-name '>User Name</h1>
      </div>
      <div className='menu-content pb-5'>
        <h5>Menu</h5>
        <div className='menu-ul py-3'>
        <Link to="/home">  <div > <i className="fas fa-home" />Home</div></Link>
          <div><i class="fas fa-boxes"></i>Products</div>
          <div><i class="fas fa-calendar-week"></i>Schedule</div>
          <div><i class="fas fa-tasks"></i>Task</div>
          <div><i class="fas fa-chart-pie"></i>Report</div>
        </div>
        <h5>Account</h5>
        <div className='menu-ul py-3'>
          <div><Link to="/profile"><i class="fas fa-user"></i>Profile</Link></div>
          <div>  <i class="fas fa-comment-alt"></i>Messages</div>
          <div><i class="fas fa-bell"></i>Notifications</div>
          <div><i class="fas fa-tasks"></i>Task</div>
          <div> <i class="fas fa-sign-out-alt"></i>Log out</div>
        </div>
      </div>
     
      
     
    </div>
  )
}

export default Menu
