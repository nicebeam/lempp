import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav>
                <ul className='nav'>
                <img src="logo.png" alt="Logo" width="200px" className='nav-img'></img>
                    <li><Link to="About">About</Link></li>
                    <li><Link to="Order">Order</Link></li>
                    <li><Link to="Booking">Booking</Link></li>
                    <li><Link to="Confirmation">Confirmation</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Login">Login</Link></li>
                </ul>
            </nav>
            </>
);
    }