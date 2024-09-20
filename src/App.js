// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Footer from './component/Footer';
import Navbar from './component/NavbarContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Contact from './pages/Contact';
// import Services from './pages/Services';
// import Shop from './pages/Shop';
// import Project from './pages/Project';
// import ServiceList from './pages/ServiceList';
// import ProductList from './pages/ProductList';
// import ProductDetails from './pages/ProductDetails';
import ServicePage from './pages/ServicePage'; // New import
import ProductDetailPage from './pages/ProductDetailPage'; // New import
import CartPage from './pages/CartPage';  // New import

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         {/* <Route path="/shop" element={<Shop />} /> */}
          {/* <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-list" element={<ServiceList />} />
          <Route path="/service/:serviceName" element={<ServicePage />} />
          <Route path="/product/:productName" element={<ProductDetails />} /> */}
          {/* New routes for each service */}

          <Route path="/product/:productId" element={<ProductDetailPage />} /> {/* New route */}
          <Route path="/cart" element={<CartPage />} />  {/* New route */}


          <Route path="/frames" element={<ServicePage serviceName="Frames" />} />
          <Route path="/cushions" element={<ServicePage serviceName="Cushions" />} />
          <Route path="/canvas" element={<ServicePage serviceName="Canvas" />} />
          <Route path="/cups" element={<ServicePage serviceName="Cups" />} />
          <Route path="/ad-materials" element={<ServicePage serviceName="Ad Materials" />} />
          <Route path="/trophies" element={<ServicePage serviceName="Trophies" />} />
          <Route path="/t-shirt-printing" element={<ServicePage serviceName="T-Shirt Printing" />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;