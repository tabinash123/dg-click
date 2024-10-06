// src/App.js
import React from 'react';
import Footer from './component/Footer';
import Navbar from './component/NavbarContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OurService from './pages/OurService';
import ServiceDetail from './component/services/ServiceDetail';
import UserAccount from './userAuth/UserAccount';
import ProductDetailPage from './pages/ProductDetailPage';
import OrderPage from './pages/OrderPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './userAuth/LoginPage';
import SignupPage from './userAuth/SignupPage';
import OtpPage from './userAuth/OtpPage';
import UserInfoPage from './userAuth/UserInfoPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ourservice" element={<OurService />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />

        <Route path="/orders" element={<OrderPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/user-info" element={<UserInfoPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/useraccount" element={<UserAccount />} />

        {/* Updated routes for each Category based on our product data */}
        <Route path="/canvas" element={<ProductPage category="Canvas" />} />
        <Route path="/caps" element={<ProductPage category="Caps" />} />
        <Route path="/frames" element={<ProductPage category="Frames" />} />
        <Route path="/id-cards" element={<ProductPage category="ID Cards" />} />
        <Route path="/trophies" element={<ProductPage category="Trophies" />} />
        <Route path="/t-shirts" element={<ProductPage category="T-Shirts" />} />

        <Route path="/product/:productId" element={<ProductDetailPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;