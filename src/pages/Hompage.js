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
import Features from '../component/hompage/Features';
import ProductShowcase from '../component/hompage/ProductShowcase';
import ProductOffers from '../component/hompage/ProductOffers';
import PrintingShopGallery from '../component/hompage/PrintingShopGallery';
import ProductBanner from '../component/hompage/ProductBanner';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureBar />
      <ProductOffers />
      <IntroductionSection />
      <Features />
      <Services />
      <ProductHighLight />
      <ProductBanner />
      {/* <ProductShowcase /> */}
      {/* <FAQComponent /> */}
      <PrintingShopGallery />
      <FAQComponent />
    </div>
  );
};

export default Homepage;
