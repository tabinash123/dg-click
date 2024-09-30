import React from 'react';
import styled from 'styled-components';
import { Printer, Camera, Frame, Palette, Box, Shirt, Coffee, Award } from 'lucide-react';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
`;

const CompanyFeature = styled.p`
  color: #FF4D4D;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  color: #4A5568;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  background-color: ${props => props.color};
`;

const FeatureTitle = styled.h3`
  color: #0A2540;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  color: #4A5568;
  font-size: 14px;
  line-height: 1.5;
`;

const Service = () => {
  const features = [
    { 
      title: 'Digital Printing', 
      icon: Printer, 
      color: '#4ade80',
      description: 'High-quality digital printing services for various materials, including brochures, flyers, and posters.'
    },
    { 
      title: 'Photography Services', 
      icon: Camera, 
      color: '#3b82f6',
      description: 'Professional photography for events, portraits, products, and more, captured with state-of-the-art equipment.'
    },
    { 
      title: 'Custom Framing', 
      icon: Frame, 
      color: '#fbbf24',
      description: 'Wide range of framing options, including Nepali Handicraft Antique style frames for your precious memories and artwork.'
    },
    { 
      title: 'Graphic Design', 
      icon: Palette, 
      color: '#ec4899',
      description: 'Creative graphic design services for logos, marketing materials, and web graphics to enhance your brand identity.'
    },
    { 
      title: '3D Printing', 
      icon: Box, 
      color: '#8b5cf6',
      description: 'Cutting-edge 3D printing services for prototypes, models, and custom objects with precision and detail.'
    },
    { 
      title: 'T-Shirt Printing', 
      icon: Shirt, 
      color: '#f43f5e',
      description: 'Customized t-shirt printing with various techniques including screen printing, DTG, and heat transfer for vibrant, long-lasting designs.'
    },
    { 
      title: 'Custom Merchandise', 
      icon: Coffee, 
      color: '#f97316',
      description: 'Personalized merchandise including mugs, cushions, and water bottles, perfect for gifts or promotional items.'
    },
    { 
      title: 'Trophies & Awards', 
      icon: Award, 
      color: '#facc15',
      description: 'Custom-designed trophies and awards for various occasions, crafted with quality materials and attention to detail.'
    },
  ];

  return (
    <Container>
      <CompanyFeature>Our Services</CompanyFeature>
      <Title>Comprehensive Printing & Photography Solutions</Title>
      <Subtitle>
        At DG-Click, we offer a wide range of high-quality printing and photography services to meet all your creative needs.
      </Subtitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper color={feature.color}>
              <feature.icon color="white" size={32} />
            </IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>
              {feature.description}
            </FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Container>
  );
};

export default Service;