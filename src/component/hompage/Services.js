import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import local images (you may need to update these imports)
import canvasPrinting from '../../assets/gallary/canvas2.jpg';
import capPrinting from '../../assets/gallary/cap2.jpg';
import framePrinting from '../../assets/gallary/frame3.jpg';
import idCardPrinting from '../../assets/gallary/id.jpg';
import trophyPrinting from '../../assets/gallary/trophy4.jpg';
import tshirtPrinting from '../../assets/gallary/tshirt3.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #0A2540;
 font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  margin: 0 0 30px 0;
`;

const Subtitle = styled.h3`
  color: #FF4D4D;
 font-size: 14px;
  font-weight: 600;

  text-align: center;
  margin: 0 0 10px 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCardContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 20px;
`;

const ServiceCard = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OverlappingDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  ${ServiceCardContainer}:hover & {
    bottom: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const ServiceName = styled.p`
  font-size: 14px;
  color: #0A2540;
  font-weight: 600;
  margin: 0 0 5px 0;
  text-align: center;
`;

const services = [
  { name: "Canvas Printing", image: canvasPrinting },
  { name: "Cap Printing", image: capPrinting },
  { name: "Frame Printing", image: framePrinting },
  { name: "ID Card Printing", image: idCardPrinting },
  { name: "Trophy Printing", image: trophyPrinting },
  { name: "T-Shirt Printing", image: tshirtPrinting },
];

const PrintingServices = () => {
  return (
    <Section>
      <Header>
        <Subtitle>Explore our wide range of high-quality printing solutions</Subtitle>
        <Title>Our Printing Services</Title>
      </Header>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCardContainer key={index}>
            <ServiceCard>
              <ServiceImage src={service.image} alt={`${service.name} service`} />
            </ServiceCard>
            <OverlappingDiv>
              <ServiceName>{service.name}</ServiceName>
            </OverlappingDiv>
          </ServiceCardContainer>
        ))}
      </ServicesGrid>
    </Section>
  );
};

export default PrintingServices;