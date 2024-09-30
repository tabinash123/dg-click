import React from 'react';
import styled from 'styled-components';
import img1 from '../../assets/service/intro.jpg'

const IntroductionContainer = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  background-color: #ffffff;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 90%;
  }
    
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem auto;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column; 
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background-color: #FFD700;
    margin-top: 0.75rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroductionText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  max-width: 500px;
  max-height: 500px;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 100%;
    max-height: none;
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

`;

const ServiceIntroduction = () => {
  return (
    <IntroductionContainer>
      <TextSection>
        <Title>Our Premium Print Services</Title>
        <IntroductionText>
          Welcome to Nepal's premier print shop, where we blend traditional craftsmanship with cutting-edge technology. Our comprehensive range of services includes professional photography, capturing the vibrant essence of Nepal through studio portraits and event coverage. We excel in diverse printing solutions, from high-quality photo prints to custom framing that showcases your memories in elegant style.
        </IntroductionText>
      </TextSection>
      <ImageSection>
        <Image src={img1} alt="Premium Print Services" />
      </ImageSection>
    </IntroductionContainer>
  );
};

export default ServiceIntroduction;