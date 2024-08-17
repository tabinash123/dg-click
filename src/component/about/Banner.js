import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Ship, CreditCard, Heart, Hash, Shield } from 'lucide-react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  background-color: #FF5722;
  color: white;
  padding: 6rem 2rem;
  font-family: 'Arial', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  animation: ${fadeInUp} 0.6s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: white;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const ValueItem = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1.5rem;
  background-color: white;
  color: #FF5722;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.5rem;
  transition: all 0.3s ease;

  ${ValueItem}:hover & {
    transform: scale(1.1);
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${ValueItem}:hover & {
    transform: scale(1.05);
  }
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const OurValues = () => {
  const values = [
    { icon: Box, title: 'Packaging Sustainability', description: 'We care for our forests | FSC Certified' },
    { icon: Ship, title: 'Worldwide Shipping', description: 'Low Charges | 1,99€ Standard Shipping' },
    { icon: CreditCard, title: 'Online Paying', description: 'Pay anytime, anywhere' },
    { icon: Heart, title: 'Handmade Product', description: 'Completely handmade product' },
    { icon: Hash, title: 'Brand', description: 'Our brand has more than 70 years' },
    { icon: Shield, title: 'Conserve', description: 'Preserving more than 100 traditional craft villages' },
  ];

  return (
    <Section>
      <Container>
        <Title>Our Values</Title>
        <Grid>
          {values.map((value, index) => (
            <ValueItem key={index} index={index}>
              <IconWrapper>
                <value.icon size={40} strokeWidth={2} />
              </IconWrapper>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default OurValues;