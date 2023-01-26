import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Routing from './Routing';



export default function App() {
  return (
    <>
    <main>
    <Nav />
    <Routing />
    <Footer/>
    </main>
    </>
  );
}


