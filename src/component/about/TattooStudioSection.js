import React from 'react';
import styled from 'styled-components';
import { Users, Globe, Palette, Clock, Shield, PhoneCall } from 'lucide-react';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const SectionContainer = styled.section`
  background-color: #111;
  color: #d4af37;
  padding: 60px 20px;
  font-family: 'Fira Sans', sans-serif;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 40px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.tablet}) {
    flex: 1;
    margin-bottom: 0;
  }
`;

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex: 2;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2rem;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f2d472);
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #cccccc;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #d4af37, #f2d472);
  border: none;
  padding: 12px 25px;
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1rem;
  color: #111;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
  }

  @media (min-width: ${breakpoints.mobile}) {
    width: auto;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  background: linear-gradient(45deg, #d4af37, #f2d472);
  border-radius: 50%;
  padding: 10px;
  margin-right: 15px;
  flex-shrink: 0;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h3`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.1rem;
  margin-bottom: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
    color: #cccccc;

`;

const WhyChooseUsSection = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <LeftColumn>
          <Title>Why Choose Us?</Title>
          <Description>
            Teyung's Tattoo Studio is a premier destination for those seeking exceptional artistry and a transformative tattoo experience. Our commitment to excellence and creativity sets us apart in the world of body art.
          </Description>
        </LeftColumn>
        <RightColumn>
          <FeatureItem>
            <IconWrapper>
              <Users size={24} color="#111" />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Master Artists</FeatureTitle>
              <FeatureDescription>Our team of expert tattoo artists brings years of experience and a passion for pushing creative boundaries.</FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <Globe size={24} color="#111" />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Global Inspiration</FeatureTitle>
              <FeatureDescription>We draw inspiration from diverse cultural traditions and contemporary art movements worldwide.</FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <Palette size={24} color="#111" />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Custom Designs</FeatureTitle>
              <FeatureDescription>Every tattoo is a unique piece of art, tailored to reflect your personal story and vision.</FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <Clock size={24} color="#111" />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Timely Excellence</FeatureTitle>
              <FeatureDescription>We respect your time, ensuring punctual sessions without compromising on quality or attention to detail.</FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <Shield size={24} color="#111" />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Safety First</FeatureTitle>
              <FeatureDescription>Our studio adheres to the highest standards of hygiene and safety, using only premium, sterilized equipment.</FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <PhoneCall size={24} color="#111" />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Lifetime Support</FeatureTitle>
              <FeatureDescription>We offer ongoing care advice and touch-up services to ensure your tattoo remains vibrant for years to come.</FeatureDescription>
            </FeatureContent>
          </FeatureItem>
        </RightColumn>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;