import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Camera, Frame, Palette, Coffee, Box, Shirt, ChevronRight } from 'lucide-react';

const services = [
  {
    category: "Photography",
    description: "Professional photography for passports, portraits, products, and events.",
    icon: Camera,
    tags: ["Passport", "Portraits"],
    image: "/api/placeholder/300/200"
  },
  {
    category: "Custom Framing",
    description: "Wide range of framing options including Nepali Handicraft Antique style.",
    icon: Frame,
    tags: ["Antique", "Modern"],
    image: "/api/placeholder/300/200"
  },
  {
    category: "Cushion Printing",
    description: "Personalize your cushions with high-quality, vibrant designs.",
    icon: Palette,
    tags: ["Custom Design"],
    image: "/api/placeholder/300/200"
  },
  {
    category: "Canvas Printing",
    description: "Transform photos into stunning canvas prints, sizes up to 86 inches.",
    icon: Box,
    tags: ["Wall Art"],
    image: "/api/placeholder/300/200"
  },
  {
    category: "Custom Cups",
    description: "Personalize cups, mugs, and water bottles with your designs.",
    icon: Coffee,
    tags: ["Magic Cups"],
    image: "/api/placeholder/300/200"
  },
  {
    category: "T-Shirt Printing",
    description: "High-quality t-shirt customization with various printing methods.",
    icon: Shirt,
    tags: ["DTF", "Screen Print"],
    image: "/api/placeholder/300/200"
  }
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f7f7f7;
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.div`
  height: 120px;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 2;
  }
`;

const ServiceContent = styled.div`
  padding: 0.75rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h2`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

const ServiceDescription = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0.5rem;
    flex-grow: 1;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Tag = styled.span`
  background-color: #e0e0e0;
  color: #333;
  padding: 0.15rem 0.3rem;
  border-radius: 4px;
  font-size: 0.6rem;

  @media (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const LearnMoreButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(76, 175, 80, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.4s ease;
  }

  &:hover {
    background-color: #45a049;
    box-shadow: 0 4px 6px rgba(76, 175, 80, 0.3);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.2);
  }

  svg {
    margin-left: 0.3rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const ButtonText = styled.span`
  z-index: 2;
`;

const ServiceComponent = () => {
  return (
    <PageContainer>
      <Title>Our Printing Services</Title>
      <Subtitle>Discover our range of high-quality printing services</Subtitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceImage image={service.image}>
              <service.icon size={36} />
            </ServiceImage>
            <ServiceContent>
              <ServiceTitle>
                <IconWrapper>
                  <service.icon size={14} />
                </IconWrapper>
                {service.category}
              </ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <LearnMoreButton>
                <ButtonText>Learn More</ButtonText>
                <ChevronRight size={14} />
              </LearnMoreButton>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </PageContainer>
  );
};

export default ServiceComponent;