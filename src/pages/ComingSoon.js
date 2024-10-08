import React from 'react'
import HeroSection from '../component/coming soon/HeroSection'
import IntroductionSection from '../component/coming soon/IntroductionSection'
import ComingSoonSection from '../component/coming soon/ComingSoonSection'
import CustomPrintingSection from '../component/coming soon/CustomPrintingSection'
import CustomProductProcess from '../component/coming soon/CustomProductProcess'

const ComingSoon = () => {
  return (
    <div>
        <HeroSection />
        <IntroductionSection />
        {/* <ComingSoonSection /> */}
        <CustomPrintingSection />
        <CustomProductProcess />
    </div>
  )
}

export default ComingSoon