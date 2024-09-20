import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  max-width: 100%;
  overflow: hidden;
  padding: 60px 0;
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;

  @media (max-width: 1023px) {
    padding: 50px 0;
  }

  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

const TrustedBy = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 1023px) {
    font-size: 22px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin: 5px 0 40px 0;
  text-transform: uppercase;

  @media (max-width: 1023px) {
    font-size: 18px;
    margin: 5px 0 30px 0;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 5px 0 25px 0;
  }
`;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  width: 200%; // Double the width to allow for seamless looping
  animation: ${slide} 30s linear infinite;

  @media (max-width: 1023px) {
    animation: ${slide} 25s linear infinite;
  }

  @media (max-width: 767px) {
    animation: ${slide} 20s linear infinite;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%; // Half of the container width
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0 30px;
  white-space: nowrap;
  transition: transform 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  @media (max-width: 1023px) {
    font-size: 20px;
    padding: 0 25px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

const getLogoColor = (companyName) => {
  const colorMap = {
    'नेपाल टेलिकम': '#0056A4',
    'एनसेल': '#9B2582',
    'नेपाल इन्भेष्टमेन्ट बैंक': '#00A651',
    'नेपाल एयरलाइन्स': '#C8102E',
    'नबिल बैंक': '#1C4595',
    'दराज': '#F85606',
  };
  return colorMap[companyName] || '#333';
};

const TrustedPartners = () => {
  const partners = [
    'नेपाल टेलिकम',
    'एनसेल',
    'नेपाल इन्भेष्टमेन्ट बैंक',
    'नेपाल एयरलाइन्स',
    'नबिल बैंक',
    'दराज'
  ];

  return (
    <Section>
      <TrustedBy>
        <Title>Trusted By</Title>
        <Subtitle>100,000+ Businesses</Subtitle>
        <LogoContainer>
          <LogoWrapper>
            {partners.map((partner, index) => (
              <LogoText key={index} style={{ color: getLogoColor(partner) }}>
                {partner}
              </LogoText>
            ))}
          </LogoWrapper>
          <LogoWrapper>
            {partners.map((partner, index) => (
              <LogoText key={`duplicate-${index}`} style={{ color: getLogoColor(partner) }}>
                {partner}
              </LogoText>
            ))}
          </LogoWrapper>
        </LogoContainer>
      </TrustedBy>
    </Section>
  );
};

export default TrustedPartners;