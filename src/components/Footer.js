import React from 'react';

export default function footer() {
  return (
      <footer>
         <img src='footerlogo.png' alt="footer logo" height="100px" class='footer-img'></img>
          <ul className='footer-ul'>
          <h4>Navigation Map</h4>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order</li>
          <li>Login</li>
          </ul>

          <ul>
          <h4>Contact</h4>
          <li>2395 Maldove Way,</li><li>Chicago Illinois (629)-243-6827</li>
         <li>info@littlelemon.com</li>
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
