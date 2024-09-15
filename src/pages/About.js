// AboutUs.js
import React from 'react';
import ContactSection from '../component/about/ContactSection';
import Introduction from '../component/about/Introduction';
import MissionVision from '../component/about/MissionVision';
import WhyChooseUs from '../component/about/WhyChooseUs';
import WorkProcessComponent from '../component/about/WorkProcessComponent';

const AboutUs = () => {
  return (
    <div>
      <Introduction />
      <MissionVision />
      <WhyChooseUs />
      <WorkProcessComponent />
      <ContactSection />
    </div>
  );
};

export default AboutUs;
