// AboutUs.js
import React from 'react';
import ContactSection from '../component/about/ContactSection';
import Introduction from '../component/about/Introduction';
import MissionVision from '../component/about/MissionVision';
import WhyChooseUs from '../component/about/WhyChooseUs';
import WorkProcessComponent from '../component/about/WorkProcessComponent';
import Features from '../component/about/Features';
import Service from '../component/about/Service';

const AboutUs = () => {
  return (
    <div>
      <Introduction />
      <Service />
      <Features />
      <MissionVision />
      <WorkProcessComponent />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
};

export default AboutUs;
