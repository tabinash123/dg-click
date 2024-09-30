import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Camera, Frame, Image, Coffee, Award, Palette, Shirt } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const HeroContainer = styled.div`
  background: linear-gradient(15deg, #542f50 0%, #359ffe 100%);
  color: #ecf0f1;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.5s both;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const ServiceItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  animation: ${slideIn} 0.5s ease-out both;
  animation-delay: ${props => props.delay};

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ServiceIcon = styled.div`
  margin-bottom: 0.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: #e74c3c;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out 1s both;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-3px);
  }
`;

const services = [
  { icon: Camera, title: "Photography" },
  { icon: Image, title: "Photo Printing" },
  { icon: Frame, title: "Custom Framing" },
  { icon: Coffee, title: "Custom Cups" },
  { icon: Award, title: "Trophies & Awards" },
  { icon: Palette, title: "Graphic Design" },
  { icon: Shirt, title: "T-Shirt Printing" }
];

const ServiceHero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <HeroTitle>Nepal's Premier Printing Services</HeroTitle>
        <HeroSubtitle>
          From capturing moments to creating lasting memories, we offer a wide range of 
          high-quality printing and photography services in the heart of Nepal.
        </HeroSubtitle>
        <CtaButton href="#services">Explore Our Services</CtaButton>
        <ServiceGrid>
          
        </ServiceGrid>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default ServiceHero;