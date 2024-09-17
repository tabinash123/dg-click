import React from 'react';
import styled from 'styled-components';
import { Printer, PenTool, Box, Layers } from 'lucide-react';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
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
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;


`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

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
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`;

const FeatureTitle = styled.h3`
 color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;

`;

const FeatureDescription = styled.p`
  color: #4A5568;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;


`;

const Service = () => {
  const features = [
    { title: 'Digital Printing', icon: Printer, color: '#4ade80' },
    { title: 'Brand Printing', icon: PenTool, color: '#fbbf24' },
    { title: '3d Printing', icon: Box, color: '#3b82f6' },
    { title: 'Offset Printing', icon: Layers, color: '#ef4444' },
  ];

  return (
    <Container>
      <CompanyFeature>—  —</CompanyFeature>
      <Title>What We Do</Title>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper style={{ backgroundColor: feature.color }}>
              <feature.icon color="white" size={32} />
            </IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>
              Dis duis auctor an cum vel enim felis proins parturient port nostra penas
            </FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Container>
  );
};

export default Service;