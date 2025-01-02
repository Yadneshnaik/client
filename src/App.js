import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Services from './pages/Services';
import BookingSlot from './pages/BookingSlot';
import WebDevelopmentPlans from './pages/WebDevelopmentPlans';
import Contact from './pages/Contact';
import Team from './pages/Team';
import OfferBanner from './pages/OfferBanner';

const App = () => (
    <Router>
        <Header />
        <OfferBanner />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/story' element={<Story />} />
                <Route path="/services" element={<Services />} />
                <Route path="/web-development-plan" element={<WebDevelopmentPlans />} />
                <Route path="/it-consultancy-booking" element={<BookingSlot />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </main>
        <Footer />
    </Router>
);

export default App;
