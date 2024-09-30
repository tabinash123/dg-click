import React from 'react'
import BookVendorCTA from '../component/services/BookVendorCTA'
import PrintingServices from '../component/services/PrintingServices'
import HowItWorks from '../component/services/HowItWorks'
import ServiceHero from '../component/services/HeroSection'
import IntroductionSection from '../component/services/IntroductionSection'

const OurService = () => {
  return (
    <div>
    <ServiceHero />
    <IntroductionSection />
    <PrintingServices />
    <HowItWorks />

    <BookVendorCTA />
    </div>
  )
}

export default OurService