import React from 'react';
import styled from 'styled-components';
import { Syringe, Scissors, PenTool, Droplet, Zap } from 'lucide-react';

const Container = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  position: relative;
  padding-left: 15px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: #f44336;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  border: 1px solid #333;
  padding: 20px;
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  color: #f44336;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ServiceDescription = styled.p`
  color: #a0a0a0;
  font-size: 14px;
  line-height: 1.5;
`;

const WhatWeDoComponent = () => {
  const services = [
    {
      icon: <Syringe size={24} />,
      title: 'Tattooing',
      description: 'For a premium result, at our tattoo salon we combine modern techniques with traditional ones.',
    },
    {
      icon: <Scissors size={24} />,
      title: 'Piercing',
      description: 'Want some extra holes in your body? Our piercing masters will make some for you.',
    },
    {
      icon: <PenTool size={24} />,
      title: 'Permanent Make-up',
      description: 'Permanent makeup is a cosmetic technique which employs tattoos as a means of producing designs.',
    },
    {
      icon: <Droplet size={24} />,
      title: 'Tattoo Cover Up',
      description: "Got some old tattoos that you don't find pretty? Our talented artists will cover them up for you.",
    },
    {
      icon: <PenTool size={24} />,
      title: 'Tattoo Design',
      description: 'Nothing can beat the challenge of creating a design that initially is only in your imagination.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Laser Removal',
      description: 'Laser Tattoo Removal offers an effective solution to your unwanted tattoos as a simple outpatient procedure.',
    },
  ];

  return (
    <Container>
      <Title>WHAT WE DO</Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServicesGrid>
    </Container>
  );
};

export default WhatWeDoComponent;