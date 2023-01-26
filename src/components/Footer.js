import React from 'react';
import {Link} from 'react-router-dom'

export default function footer() {
  return (
      <footer>
         <img src='footerlogo.png' alt="footer logo" height="100px" class='footer-img'></img>
          <ul className='footer-ul'>
          <h4>Navigation Map</h4>
          <li><Link to="About">About</Link></li>
          <li><Link to="Order">Menu</Link></li>
          <li><Link to="Booking">Booking</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="Login">Login</Link></li>
          </ul>

          <ul>
          <h4>Contact</h4>
          <li>1234 Lemon Hill,</li><li>Chicago Illinois (555)-555-5555</li>
         <li>hello@littlelemon.com</li>
          </ul>

          <ul>
          <h4>Social Media</h4>
          <li>Instagram</li>
          <li>Tiktok</li>
          <li>Email List</li>
          </ul>
      </footer>
  );
};

