import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';


// Import custom fonts
import '@fontsource/cinzel-decorative';
import '@fontsource/cormorant-garamond';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;


const PricingSection = styled.section`
  font-family: 'Cormorant Garamond', serif;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #111;
  color: #f5f5f5;
  position: relative;
  overflow: hidden;
  
  


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path_to_your_tattoo_pattern.png');
    opacity: 0.05;
    z-index: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 15px;
  }
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #d4af37, transparent);
  }

  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: #cccccc;
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 70%;
  line-height: 1.6;
  font-style: italic;
  position: relative;
  z-index: 1;

  &::before {
    content: '✦';
    color: #d4af37;
    margin-right: 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    max-width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  width: 40%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const RightColumn = styled.div`
  width: 55%;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.1);
  padding: 30px;
  border: 1px solid rgba(212, 175, 55, 0.3);

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0px;
  }
`;

const ServiceItem = styled.div`
  background-color: ${props => props.active ? 'rgba(212, 175, 55, 0.2)' : 'transparent'};
  color: ${props => props.active ? '#d4af37' : '#cccccc'};
  padding: 15px;
  margin-bottom: 15px;
  position: relative;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.active ? '#d4af37' : 'rgba(212, 175, 55, 0.3)'};
  
  &:hover {
    background-color: rgba(212, 175, 55, 0.1);
  }

  &::after {
    content: '>';
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 0.3s ease;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    padding: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    padding: 10px;
  }
`;

const TattooItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  
  padding-bottom: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
        padding:0px 6px;
            padding-bottom: 10px;


  }
`;

const TattooInfo = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 10px;
  }
`;

const TattooName = styled.h3`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 18px;
  margin: 0;
  color: #d4af37;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;

const TattooDescription = styled.p`
  font-size: 14px;
  color: #cccccc;
  margin: 5px 0 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const Price = styled.div`
  background-color: #d4af37;
  color: #111;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);

  @media (max-width: ${breakpoints.tablet}) {
    width: 55px;
    height: 55px;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 14px;
    align-self: flex-end;
  }
`;

const PricingPlans = () => {
  const [activeOption, setActiveOption] = useState('TATTOO DESIGN');

  const pricingOptions = [
    'PIERCINGS & MODS',
    'TATTOO DESIGN',
    'JEWELRY & MERCH',
    'TATTOO MODIFICATIONS',
    'PERMANENT MAKE-UP'
  ];

  const tattooDesigns = [
    { name: 'ARM TATTOO', price: 150, description: 'Intricate designs for your arm' },
    { name: 'FOOT TATTOO', price: 120, description: 'Delicate artwork for your feet' },
    { name: 'BACK TATTOO', price: 300, description: 'Large-scale masterpieces' },
    { name: 'REALISM TATTOO', price: 250, description: 'Lifelike portraits and scenes' },
    { name: 'LEG TATTOOS', price: 200, description: 'Bold statements for your legs' }
  ];

  return (
    <PricingSection>
      <Title>Pricing</Title>
      <Subtitle>Transform your body into a canvas of self-expression. Our pricing reflects the artistry, expertise, and precision that go into every piece we create.</Subtitle>
      <FlexContainer>
        <LeftColumn>
          {pricingOptions.map(option => (
            <ServiceItem 
              key={option} 
              active={option === activeOption}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </ServiceItem>
          ))}
        </LeftColumn>
        <RightColumn>
          <h3 style={{ color: '#d4af37', marginBottom: '20px', fontFamily: 'Cinzel Decorative, cursive' }}>{activeOption}</h3>
          {tattooDesigns.map(tattoo => (
            <TattooItem key={tattoo.name}>
              <TattooInfo>
                <TattooName>{tattoo.name}</TattooName>
                <TattooDescription>{tattoo.description}</TattooDescription>
              </TattooInfo>
              <Price>${tattoo.price}</Price>
            </TattooItem>
          ))}
        </RightColumn>
      </FlexContainer>
    </PricingSection>
  );
};

export default PricingPlans;