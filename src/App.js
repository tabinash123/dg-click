// src/App.js
import React from 'react';
import Footer from './component/Footer';
import Navbar from './component/NavbarContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Contact from './pages/Contact';

import ServicePage from './pages/ServicePage'; // New import
import CartPage from './pages/CartPage';  // New import

const App = () => {
  return (
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        
          {/* New routes for each Category */}

          <Route path="/cart" element={<CartPage />} />  {/* New route */}
          <Route path="/frames" element={<ServicePage serviceName="Frames" />} />
          <Route path="/cushions" element={<ServicePage serviceName="Cushions" />} />
          <Route path="/canvas" element={<ServicePage serviceName="Canvas" />} />
          <Route path="/cups" element={<ServicePage serviceName="Cups" />} />
          <Route path="/t-shirt-printing" element={<ServicePage serviceName="T-Shirt Printing" />} />
        </Routes>
        <Footer />
      </Router>
    
  );
};

export default App;
