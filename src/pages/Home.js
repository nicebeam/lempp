import React from 'react';
import Header from '../components/Header'
import SpecialsSection from '../components/SpecialsSection'
import Testimonials from '../components/Testimonials'
import Lemon from '../components/Lemon'

export default function Home() {
    return (
        <>
        <main>
            <Header />
            <SpecialsSection />
            <Testimonials />
            <Lemon />
        </main>
        </>
);
    }

