// AboutUs.js
import React from 'react';
import ContactSection from '../component/about/ContactSection';
import Introduction from '../component/about/Introduction';
import MissionVision from '../component/about/MissionVision';
import WhyChooseUs from '../component/about/WhyChooseUs';
import Testimoni from '../component/about/Testimoni';
import Features from '../component/about/Features';
import Service from '../component/about/Service';
import HeroSection from '../component/about/HeroSection';

const AboutUs = () => {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <Service />
      <MissionVision />
      {/* <Features /> */}
      <Testimoni />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
};

export default AboutUs;
