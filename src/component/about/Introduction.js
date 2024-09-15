import React from 'react';
import styled, { keyframes } from 'styled-components';
import imag1 from '../../assets/aboutus.jpg'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 65px auto;
  padding: 10px;
  font-family: 'Roboto', Arial, sans-serif;
  background-color: #ffffff;
  animation: ${fadeIn} 0.5s ease-in;
  
  @media (max-width: 768px) {
    padding: 0px;
    margin-top:72px;
  }

`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;


  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 400px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #2b2d42;
  margin-bottom: 15px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #ff6b35;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 80px;
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #2b2d42;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const ExploreButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 0.9rem;
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

  @media (min-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 12px 30px;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <ImageContainer>
      <Image src={imag1} alt="DG Click Studio" />
      </ImageContainer>
      <ContentContainer>
        <Title>Who We Are</Title>
        <Description>
          Welcome to DG CLICK@ CHABAHIL PVT. LTD, your one-stop solution for all your digital printing needs. As a full digital lab and studio, we specialize in creating high-quality, customized products that bring your ideas to life.
        </Description>
        <Description>
          Founded with a passion for digital innovation, we offer a wide range of services including cup printing, plate printing, cap printing, t-shirt printing, CD/DVD printing, PVC card printing, tiles printing, calendar printing, photo frame printing, and high-quality flex printing. Our team of experts uses cutting-edge technology to ensure that every product we create meets the highest standards of quality and creativity.
        </Description>
        <Description>
          Located in the heart of Kathmandu, Chabahil-7, we pride ourselves on our commitment to customer satisfaction and our ability to turn your vision into reality. Whether you're looking for personalized merchandise or marketing materials, DG CLICK is here to exceed your expectations.
        </Description>
      </ContentContainer>
    </Container>
  );
};

export default Introduction;