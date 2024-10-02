// Homepage.js
import React from 'react';
import FAQComponent from './../component/hompage/FAQComponent';
import FeatureBar from './../component/hompage/FeatureBar';
import HeroSection from './../component/hompage/HeroSection';
import IntroductionSection from './../component/hompage/IntroductionSection';
import ProductHighLight from '../component/hompage/ProductHighLight';
import Services from './../component/hompage/Services';
import ProductOffers from '../component/hompage/ProductOffers';
import PrintingShopGallery from '../component/hompage/PrintingShopGallery';
import PrintPasalHowItWorks from '../component/hompage/PrintPasalHowItWorks';
import PartnerLogos from '../component/hompage/PartnerLogos';
import PopularGiftItems from '../component/hompage/PopularProducts';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureBar />
      <ProductOffers />
      <Services />
      <ProductHighLight />
      <PopularGiftItems />
      {/* <PartnerLogos /> */}
      <IntroductionSection />
      <PrintPasalHowItWorks />
      <FAQComponent />
      {/* <PrintingShopGallery /> */}
    </div>
  );
};

export default Homepage;
