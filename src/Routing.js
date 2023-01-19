import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Order from './pages/Order';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';


export default function Routing() {
    return (
        <>
    <Routes>
    <Route path='/' element={
        <Home />
        } />

    <Route path='/About' element={
        <About />
        } />
    <Route path='/Booking' element={
        <Booking />
        } />
    <Route path='/Order' element={
        <Order />
        }/>
    <Route path='/Login' element={
        <Login />
        }/>
    <Route path='/Confirmation' element={
        <Confirmation />
        }/>
    </Routes>
    </>
    );

}

