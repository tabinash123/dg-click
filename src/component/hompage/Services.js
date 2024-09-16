import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

// Import local images
import calenderPrinting from '../../assets/services/calenderPrinting.jpg';
import capPrinting from '../../assets/services/capPrinting.jpg';
import cdPrinting from '../../assets/services/cdPrinting.jpg';
import cupPrinting from '../../assets/services/cupPrinting.jpg';
import photoFramePrinting from '../../assets/services/photoFramePrinting.jpg';
import platePrinting from '../../assets/services/platePrinting.jpg';
import pvcCardPrinting from '../../assets/services/pvcCardPrinting.jpg';
import tilePrinting from '../../assets/services/tilePrinting.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  margin-top: 50px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #1e0e4b;
  margin: 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceName = styled.p`
  font-size: 18px;
  text-align: center;
  color: #333;
  font-weight: 600;
  margin: 0;
`;

const ExploreButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 20px auto;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: #1e0e4b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #2a1368;
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
          <ServiceCard key={index}>
            <ImageWrapper>
              <ServiceImage src={service.image} alt={`${service.name} service`} />
            </ImageWrapper>
            <ServiceName>{service.name}</ServiceName>
          </ServiceCard>
        ))}
      </ServicesGrid>
      <ExploreButton to="/shop">Explore More</ExploreButton>
    </Section>
  );
};

export default PrintingServices;