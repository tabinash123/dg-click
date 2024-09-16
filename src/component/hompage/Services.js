import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import local images (unchanged)
import calenderPrinting from '../../assets/services/calenderPrinting.jpg';
import capPrinting from '../../assets/services/capPrinting.jpg';
import cdPrinting from '../../assets/services/cdPrinting.jpg';
import cupPrinting from '../../assets/services/cupPrinting.jpg';
import photoFramePrinting from '../../assets/services/photoFramePrinting.jpg';
import platePrinting from '../../assets/services/platePrinting.jpg';
import pvcCardPrinting from '../../assets/services/pvcCardPrinting.jpg';
import tilePrinting from '../../assets/services/tilePrinting.jpg';

const Section = styled.section`
  max-width: 1000px;
  margin: 30px auto;
  padding: 15px;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #1e0e4b;
  margin: 0;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 2px;
    background-color: #1e0e4b;
  }
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
  width: 85%;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  ${ServiceCardContainer}:hover & {
    bottom: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const ServiceName = styled.p`
  font-size: 14px;
  color: #1e0e4b;
  font-weight: 600;
  margin: 0 0 5px 0;
  text-align: center;
`;

const LearnMoreButton = styled.button`
  background-color: #1e0e4b;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 3px;
  margin: 0 auto;
  font-size: 12px;

  &:hover {
    background-color: #2a1368;
  }
`;

const ExploreButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 20px auto 0;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #1e0e4b;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(30, 14, 75, 0.3);

  &:hover {
    background-color: #2a1368;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 14, 75, 0.4);
  }
`;

const services = [
  { name: "Calendar Printing", image: calenderPrinting },
  { name: "Cap Printing", image: capPrinting },
  { name: "CD/DVD Printing", image: cdPrinting },
  { name: "Cup Printing", image: cupPrinting },
  { name: "Photo Frame Printing", image: photoFramePrinting },
  { name: "Plate Printing", image: platePrinting },
  { name: "PVC Card Printing", image: pvcCardPrinting },
  { name: "Tile Printing", image: tilePrinting },
];

const PrintingServices = () => {
  return (
    <Section>
      <Header>
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
              <LearnMoreButton>
                Learn More <ArrowRight size={12} />
              </LearnMoreButton>
            </OverlappingDiv>
          </ServiceCardContainer>
        ))}
      </ServicesGrid>
    </Section>
  );
};

export default PrintingServices;