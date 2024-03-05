import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
    <div className='nav'> 
    <img className='image' src={logo} alt='logo'/>
    <ul>
    <li><a href='#'>About Us</a></li>
    <li><a href="#">Program</a></li>
    <li><a href="#">Contact Us</a></li>
    </ul>
    </div>
    </nav>
  )
}

export default Navbar;