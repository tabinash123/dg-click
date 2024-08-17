import React from 'react'
import WhoWeAre from './../component/about/WhoWeAre';
import TattooStudioSection from '../component/about/TattooStudioSection';
import LatestWorks from '../component/about/LatestWorks';
import OurStaff from '../component/hompage/OurStaff';
import UserTestimonials from '../component/hompage/UserTestimonials';
import CustomProductsBanner from '../component/about/Banner';
import Map from '../component/hompage/Map';

const About = () => {
  return (
      <div>
      <WhoWeAre />
      <CustomProductsBanner />
      <TattooStudioSection />
      <LatestWorks />
      <Map />
      {/* <UserTestimonials /> */}

    </div>
  )
}

export default About