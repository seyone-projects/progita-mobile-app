import React from 'react';
import Splash from '../assets/splash.png';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <>
      <div className='container first-page '>
        <div className='first-img'>
          <Link to="/welcome"> <img src={Splash} alt='splash' ></img></Link>
        </div>
      </div>
    </>
  )
}

export default FirstPage
