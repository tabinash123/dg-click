import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const ProcessSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  background-color: #f9f9f9;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 60px 30px;
  }

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }
`;

const ProcessLabel = styled.div`
  background-color: #FFE6E6;
  color: #FF4A4A;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 16px;
  border-radius: 25px;
  display: inline-block;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(255, 74, 74, 0.2);
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 8px 20px;
    margin-bottom: 25px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  animation: ${fadeIn} 0.5s ease-out 0.2s both;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`;

const TitleHighlight = styled.span`
  color: #FF8A00;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #FF8A00;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

const Subtitle = styled.p`
  color: #666;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;
  font-size: 14px;
  animation: ${fadeIn} 0.5s ease-out 0.4s both;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
    line-height: 1.8;
  }

  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StepCard = styled.div`
  background: linear-gradient(135deg, #FF8A00, #FF4A4A);
  color: white;
  border-radius: 10px;
  padding: 20px 15px;
  box-shadow: 0 5px 15px rgba(255, 138, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out 0.6s both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(255, 138, 0, 0.3);
  }
`;

const StepNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const StepTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const StepDescription = styled.p`
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #FF8A00;
  border-radius: 50%;
  position: absolute;
  animation: ${float} 3s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media (min-width: 1024px) {
    width: 12px;
    height: 12px;
  }
`;

const Square = styled.div`
  width: 15px;
  height: 15px;
  background-color: #FF4A4A;
  position: absolute;
  animation: ${rotate} 10s linear infinite;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #FF8A00;
  border-radius: 50%;
  position: absolute;
  animation: ${pulse} 3s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
    border-width: 3px;
  }

  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 14px solid #FF4A4A;
  position: absolute;
  animation: ${float} 4s ease-in-out infinite;

  @media (min-width: 768px) {
    border-left-width: 9px;
    border-right-width: 9px;
    border-bottom-width: 16px;
  }

  @media (min-width: 1024px) {
    border-left-width: 10px;
    border-right-width: 10px;
    border-bottom-width: 17px;
  }
`;

const WorkProcessComponent = () => {
  return (
    <ProcessSection>
      <ProcessLabel>OUR WORK PROCESS</ProcessLabel>
      <Title>How Dose We <TitleHighlight>Works</TitleHighlight></Title>
      <Subtitle>Professionally pursue economically sound services resource sucking potentialities morph with premier catalysts for change awesome services you.</Subtitle>
      
      <StepContainer>
        {[
          { number: '01', title: 'Imagine Design', description: 'Professionally economically service resource of suckings service your business.' },
          { number: '02', title: 'Collect Information', description: 'Professionally economically service resource of suckings service your business.' },
          { number: '03', title: 'Select Your Design', description: 'Professionally economically service resource of suckings service your business.' },
          { number: '04', title: 'Print Out Result', description: 'Professionally economically service resource of suckings service your business.' },
        ].map((step, index) => (
          <StepCard key={index} style={{animationDelay: `${0.6 + index * 0.2}s`}}>
            <StepNumber>STEP {step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepCard>
        ))}
      </StepContainer>

      {/* Decorative elements */}
      <Dot style={{ top: '20px', left: '20px', animationDelay: '0s' }} />
      <Dot style={{ top: '20px', right: '20px', animationDelay: '1s' }} />
      <Dot style={{ bottom: '20px', left: '50%', animationDelay: '2s' }} />
      <Square style={{ top: '10%', right: '5%' }} />
      <Square style={{ bottom: '15%', left: '7%' }} />
      <Circle style={{ top: '15%', left: '10%' }} />
      <Circle style={{ bottom: '10%', right: '8%' }} />
      <Triangle style={{ top: '40%', left: '3%' }} />
      <Triangle style={{ bottom: '30%', right: '3%' }} />
      <Dot style={{ top: '50%', left: '2%', animationDelay: '1.5s' }} />
      <Dot style={{ bottom: '40%', right: '2%', animationDelay: '2.5s' }} />
    </ProcessSection>
  );
};

export default WorkProcessComponent;