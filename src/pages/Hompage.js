// Homepage.js
import React from 'react';
import CTAComponent from './../component/hompage/CTAComponent';
import DealOfTheDay from './../component/hompage/DealOfTheDay';
import FAQComponent from './../component/hompage/FAQComponent';
import FeatureBar from './../component/hompage/FeatureBar';
// import GetInTouch from './../component/hompage/GetInTouch';
import HeroSection from './../component/hompage/HeroSection';
import IntroductionSection from './../component/hompage/IntroductionSection';
import ProductHighLight from '../component/hompage/ProductHighLight';
import Services from './../component/hompage/Services';
import TestimonialComponent from './../component/hompage/TestimonialComponent';
import ProductShowcase from '../component/hompage/ProductShowcase';
import TrendingProducts from '../component/hompage/TrendingProducts';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureBar />
      {/* <DealOfTheDay /> */}
      <Services />
      <TrendingProducts />
      <ProductHighLight />
      <TestimonialComponent />
      {/* <ProductShowcase /> */}
      <IntroductionSection />
      {/* <FAQComponent /> */}
      {/* <GetInTouch /> */}
    </div>
  );
};

export default Homepage;
