import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroContainer = styled.div`
  background: linear-gradient(135deg, #1e2a4a 0%, #2c3e50 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
  animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExploreButton = styled(Link)`
  display: inline-block;
  background-color: #e74c3c;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 0.8s ease-out 0.4s forwards;
  opacity: 0;

  &:hover {
    background-color: #c0392b;
  }
`;

const CurvedOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-color: #e74c3c;
  clip-path: ellipse(75% 100% at 50% 100%);
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>DG-Click: Printing and Photography</Title>
        <Subtitle>
          At DG-Click, we are passionate about capturing the essence of your
          moments and bringing your creative vision to life
        </Subtitle>
        <ExploreButton to="/services">Explore Our Services</ExploreButton>
      </Content>
      <CurvedOverlay />
    </HeroContainer>
  );
};

export default HeroSection;