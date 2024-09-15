import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Lock, Headphones, DollarSign, ThumbsUp } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FeatureBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 1.5rem;
  background-color: #f8f8f8;
  
  @media (max-width: 1024px) {
    // flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;
  opacity: 0;

  &:hover {
    background-color: #e8e8e8;
    transform: translateY(-2px);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 1rem);
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 50%;
  transition: all 0.3s ease;

  ${FeatureItem}:hover & {
    background-color: #d0d0d0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

const Description = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const features = [
  { icon: Lock, title: 'Payment Secure', description: '100% secure payment' },
  { icon: Headphones, title: 'Support 24/7', description: 'Dedicated support' },
  { icon: DollarSign, title: '100% Money Back', description: 'Satisfaction guaranteed' },
  { icon: ThumbsUp, title: 'Quality Products', description: 'High-quality assurance' },
];

const FeatureBar = ({ customFeatures }) => {
  const featuresToRender = customFeatures || features;

  return (
    <FeatureBarContainer>
      {featuresToRender.map((feature, index) => (
        <FeatureItem key={index} index={index}>
          <IconWrapper>
            <feature.icon size={24} color="#4a4a4a" />
          </IconWrapper>
          <TextWrapper>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </TextWrapper>
        </FeatureItem>
      ))}
    </FeatureBarContainer>
  );
};

export default FeatureBar;