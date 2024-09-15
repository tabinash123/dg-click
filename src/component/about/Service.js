import React from 'react';
import styled from 'styled-components';
import { Printer, PenTool, Box, Layers } from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const CompanyFeature = styled.p`
  color: #ff6b6b;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  color: #1e3a8a;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
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
  color: #1e3a8a;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  color: #64748b;
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