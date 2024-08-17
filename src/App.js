// src/App.js
import React from 'react';
import Footer  from './component/Footer';
import Navbar from './component/NavbarContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallary from './pages/Gallary';
// import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallary />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
