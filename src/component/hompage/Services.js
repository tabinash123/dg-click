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

  @media (max-width: 1024px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 55px;

  @media (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const Subtitle = styled.h3`
  color: #FF4D4D;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 250px;

  @media (max-width: 1024px) {
    max-width: 220px;
  }

  @media (max-width: 768px) {
    max-width: 160px;
  }
`;

const CircleContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  // &:hover {
  //   transform: translateY(-10px);
  //   box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  // }

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  // ${CircleContainer}:hover & {
  //   transform: scale(1.1);
  // }
`;

const ServiceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CircleContainer}:hover & {
    opacity: 1;
  }
`;

const ServiceDescription = styled.p`
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0 10px;
  }
`;

const ServiceName = styled.h4`
  color: #0A2540;
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 0;
  text-align: center;
  position: relative;
  padding-bottom: 10px;


  ${ServiceCard}:hover &::after {
    width: 75px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 15px 0 0;
    padding-bottom: 8px;

    &::after {
      width: 40px;
    }

    ${ServiceCard}:hover &::after {
      width: 60px;
    }
  }
`;

const services = [
  { name: "Canvas Printing", image: canvasPrinting, description: "High-quality canvas prints for your photos and artwork." },
  { name: "Cap Printing", image: capPrinting, description: "Customized cap printing for teams, events, and promotions." },
  { name: "Frame Printing", image: framePrinting, description: "Elegant frame printing to showcase your memories." },
  { name: "ID Card Printing", image: idCardPrinting, description: "Professional ID card printing for businesses and organizations." },
  { name: "Trophy Printing", image: trophyPrinting, description: "Custom trophy printing for awards and recognition." },
  { name: "T-Shirt Printing", image: tshirtPrinting, description: "High-quality t-shirt printing for all occasions." },
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
          <ServiceCard key={index}>
            <CircleContainer>
              <ServiceImage src={service.image} alt={`${service.name} service`} />
              {/* <ServiceOverlay>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceOverlay> */}
            </CircleContainer>
            <ServiceName>{service.name}</ServiceName>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Section>
  );
};

export default PrintingServices;