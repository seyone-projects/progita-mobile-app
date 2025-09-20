import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid d-flex justify-content-between align-items-center ">
                  <Link to="/home" ><div className='home-icon'>
                        <i className="fas fa-home" />
                        <p className='m-0'>Home</p>
                    </div></Link>  
                    <div className='message-icon'>
                        <i class="fas fa-comment-alt" />
                        <p className='m-0'>Message</p>

                    </div>
                    <div className='booking-icon'>
                        <i class="fas fa-tasks" />
                        <p className='m-0'>Bookings</p>
                    </div>
                    <div className='booking-icon'>
                    <i class="far fa-credit-card"></i>
                        <p className='m-0'>Payment</p>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer
