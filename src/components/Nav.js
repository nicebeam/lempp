import React from 'react';
import '../App.css';


export default function Nav() {
    return (
        <>
            <nav>
                <ul className='nav'>
                <img src="logo.png" alt="Logo" width="200px" className='nav-img'></img>
                    <li><a href="./components/pages/About.js">About</a></li>
                    <li><a href="./components/pages/Order.js">Order</a></li>
                    <li><a href="./components/pages/Booking.js">Booking</a></li>
                    <li><a href="./components/pages/Confirmation.js">Confirmation</a></li>
                    <li><a href="./components/pages/Home.js">Home</a></li>
                    <li><a href="./components/pages/Login.js">Login</a></li>
                </ul>
            </nav>
            </>
);
    }