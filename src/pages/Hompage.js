import React from 'react'
import Hero from './../component/hompage/Hero';
import AboutUs from '../component/hompage/AboutUs';
import Services from '../component/hompage/Services';
import OurStaff from '../component/hompage/OurStaff';
import Gallery from '../component/hompage/Gallery';
import Video from '../component/hompage/Video';
import Map from '../component/hompage/Map';
import UserTestimonials from '../component/hompage/UserTestimonials';

const Hompage = () => {
  return (
      <div>
          <Hero />
      <Map />
          <AboutUs />
          <Services />
          <OurStaff />
      <Video />
      <Gallery />
      <UserTestimonials />
    </div>
  )
}

export default Hompage