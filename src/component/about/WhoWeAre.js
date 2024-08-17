import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Roboto', Arial, sans-serif;
  background-color: #ffffff;
  animation: ${fadeIn} 0.5s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-right: 40px;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #2b2d42;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #ff6b35;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #2b2d42;
  }
`;

const ExploreButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  box-shadow: 0 2px 4px rgba(255, 107, 53, 0.4);

  &:hover {
    background-color: #e85a2d;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 107, 53, 0.6);
  }
`;

const PrintXtoreComponent = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/path/to/your/print-xtore-image.jpg" alt="Print Xtore process" />
      </ImageContainer>
      <ContentContainer>
        <Title>Our PrintXtore</Title>
        <Description>
          As a team of four female founders, we started Aloisia Beauty to pursue a
          shared passion: creating clean, effective, affordably luxurious skincare that
          leads to real results. We believe in high-performing formulas that can be used
          on all skin types, while also targeting individual concerns to help everyone and
          anyone achieves their dream skin.
        </Description>
        <Description>
          We took the leap to develop our own brand after spending our careers building
          others across the fashion, celebrities, science wellness industries. As fate would
          have it, our friend Jacob, a scientist from South Korea, was interested in joining
          our mission as a founding partner and introduced us to the Korean Beauty
          Philosophy. Representing various ethnicities, we were already well-versed in
          exploring and appreciating different cultural approaches to skincare.
        </Description>
        <ExploreButton>Explore</ExploreButton>
      </ContentContainer>
    </Container>
  );
};

export default PrintXtoreComponent;