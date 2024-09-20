import React from 'react';
import styled from 'styled-components';
import createAccountImage from '../../assets/icon1.png';
import placeOrderImage from '../../assets/icon2.png';
import deliveryImage from '../../assets/icon3.png';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  color: red;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-top: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Step = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 0 1rem 2rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const StepImage = styled.img`
  width: 100px;
  height: 170px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const StepNumber = styled.h2`
  color: red;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  max-width: 200px;
  margin: 0 auto;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    max-width: 250px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Arrow = styled.div`
  font-size: 2rem;
  color: red;
  margin: 0 1rem;
  align-self: center;

  @media (max-width: 768px) {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
`;

const HowItWorks = () => {
  return (
    <Container>
      <Title>HOW PRINTPASAL WORKS ?</Title>
      <Subtitle>Print Pasal awaits in just 3 steps. Start Ordering now!</Subtitle>
      <StepsContainer>
        <Step>
          <StepImage src={createAccountImage} alt="Create Account" />
          <StepNumber>Step 1</StepNumber>
          <StepTitle>Create Account</StepTitle>
          <StepDescription>Sign up, verify, and dive into a world of possibilities!</StepDescription>
        </Step>
        <Arrow>→</Arrow>
        <Step>
          <StepImage src={placeOrderImage} alt="Place Order" />
          <StepNumber>Step 2</StepNumber>
          <StepTitle>Place Order</StepTitle>
          <StepDescription>Select your item or upload your design, and let the magic begin!</StepDescription>
        </Step>
        <Arrow>→</Arrow>
        <Step>
          <StepImage src={deliveryImage} alt="Delivery" />
          <StepNumber>Step 3</StepNumber>
          <StepTitle>Delivery</StepTitle>
          <StepDescription>Confirm your order and get items to your location - it's that simple!</StepDescription>
        </Step>
      </StepsContainer>
    </Container>
  );
};

export default HowItWorks;