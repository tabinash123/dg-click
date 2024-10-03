// src/App.js
import React from 'react';
import Footer from './component/Footer';
import Navbar from './component/NavbarContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage'; // New import
import CartPage from './pages/CartPage';  // New import
import OurService from './pages/OurService';
import ServiceDetail from './component/services/ServiceDetail';
import UserAccount from './pages/UserAccount';

const App = () => {
  return (
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useraccount" element={<UserAccount />} />
        
          {/* New routes for each Category */}

          <Route path="/cart" element={<CartPage />} />  {/* New route */}
          <Route path="/frames" element={<ProductPage serviceName="Frames" />} />
          <Route path="/cushions" element={<ProductPage serviceName="Cushions" />} />
          <Route path="/canvas" element={<ProductPage serviceName="Canvas" />} />
          <Route path="/cups" element={<ProductPage serviceName="Cups" />} />
          <Route path="/t-shirt-printing" element={<ProductPage serviceName="T-Shirt Printing" />} />
        </Routes>
        <Footer />
      </Router>
    
  );
};

export default App;
