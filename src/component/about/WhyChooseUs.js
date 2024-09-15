import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Printer, Image as ImageIcon, Award, Clock, Palette, Shield } from 'lucide-react';
import img1 from '../../assets/whyus.jpg'
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  animation: ${fadeIn} 0.6s ease-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding-right: 0;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding-right: 2rem;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    padding-right: 3rem;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const SubTitle = styled.h3`
  color: #FF6B52;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.h2`
  color: #0E4721;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  max-width: 100%;
  line-height: 1.2;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #FF6B52;
  }

  @media (min-width: 768px) {
    font-size: 2.4rem;
    max-width: 90%;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 0.9rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledIcon = styled.div`
  color: #FF6B52;
  margin-right: 0.75rem;
  background-color: rgba(255, 107, 82, 0.1);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #FF6B52;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 107, 82, 0.3);
  width: 100%;

  &:hover {
    background-color: #e55a41;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 82, 0.4);
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;



  @media (min-width: 768px) {
    width: 90%;
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 450px;
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: #1A6334;
  color: white;
  padding: 0.8rem;
  border-radius: 12px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 15px rgba(26, 99, 52, 0.3);
  transition: transform 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <ContentArea>
        <SubTitle>Why Choose Us</SubTitle>
        <Title>Why People Choose DG CLICK</Title>
        <Description>
          At DG CLICk, we offer a comprehensive range of high-quality digital printing solutions. Our state-of-the-art equipment and experienced team ensure exceptional results for all your printing needs, from personal items to business materials.
        </Description>
        <FeatureList>
          {[
            { text: 'Full-color digital printing', icon: Printer },
            { text: 'Diverse product range', icon: ImageIcon },
            { text: 'Premium quality assurance', icon: Award },
            { text: 'Quick turnaround time', icon: Clock },
            { text: 'Custom design services', icon: Palette },
            { text: 'Reliable and durable prints', icon: Shield },
          ].map((feature, index) => (
            <FeatureItem key={index}>
              <StyledIcon>
                <feature.icon size={18} />
              </StyledIcon>
              {feature.text}
            </FeatureItem>
          ))}
        </FeatureList>
      </ContentArea>
      <ImageArea>
        <Image src={img1} alt="DG CLICK@ CHABAHIL printing services" />
        <ExperienceBadge>
          Full<br />Digital
          <div style={{ fontSize: '0.8rem', fontWeight: 'normal', marginTop: '5px' }}>Lab & Studio<br />Services</div>
        </ExperienceBadge>
      </ImageArea>
    </Section>
  );
};

export default WhyChooseUs;