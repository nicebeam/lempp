import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import SpecialsSection from './components/SpecialsSection'
import Testimonials from './components/Testimonials'
import About from './components/About'


export default function App() {
  return (
    <>
    <main>
    <Nav />
    <Header />
    <SpecialsSection />
    <Testimonials />
    <About />
    <Footer/>
    </main>
    </>
  );
}