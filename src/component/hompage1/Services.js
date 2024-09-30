import React from 'react';
import styled from 'styled-components';

import canvasPrinting from '../../assets/gallary/canvas2.jpg';
import capPrinting from '../../assets/gallary/cap2.jpg';
import framePrinting from '../../assets/gallary/frame3.jpg';
import idCardPrinting from '../../assets/gallary/id.jpg';
import trophyPrinting from '../../assets/gallary/trophy4.jpg';
import tshirtPrinting from '../../assets/gallary/tshirt3.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #8B0000;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 180px;
  height: 3px;
  background-color: #FFD700;
  margin-bottom: 20px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ServiceName = styled.h3`
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
`;

const services = [
  {
    name: "Canvas Printing",
    image: canvasPrinting
  },
  {
    name: "Cap Printing",
    image: capPrinting
  },
  {
    name: "Frame Printing",
    image: framePrinting
  },
  {
    name: "ID Card Printing",
    image: idCardPrinting
  },
  {
    name: "Trophy Printing",
    image: trophyPrinting
  },
  {
    name: "T-Shirt Printing",
    image: tshirtPrinting
  }
];

const OurServices = () => {
  return (
    <Section>
      <Title>Our Services</Title>
      <Underline />
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceName>{service.name}</ServiceName>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </Section>
  );
};

export default OurServices;