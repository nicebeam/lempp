import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import SpecialsSection from './components/SpecialsSection'
import Testimonials from './components/Testimonials'
import Lemon from './components/Lemon'
import Routing from './Routing';


export default function App() {
  return (
    <>
    <main>
    <Routing />
    <Nav />
    <Header />
    <SpecialsSection />
    <Testimonials />
    <Lemon />
    <Footer/>
    </main>
    </>
  );
}


