import React from 'react';
import styled from 'styled-components';
import { Printer, Image as ImageIcon, Award, Clock, Palette, Shield } from 'lucide-react';
import img1 from '../../assets/whyus.jpg'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding-right: 20px;
    margin-bottom: 0;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.h3`
  color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;
`;

const Description = styled.p`
  color: #4A5568;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  color: #4A5568;
  font-size: 14px;
`;

const StyledIcon = styled.div`
  color: #FF4D4D;
  margin-right: 8px;
  background-color: rgba(255, 77, 77, 0.1);
  padding: 6px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #FF4D4D;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 25px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E63939;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 350px;
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #0A2540;
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  font-size: 12px;
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <ContentArea>
        <SubTitle>Why Choose Us</SubTitle>
        <Title>Why People Choose DG CLICK</Title>
        <Description>
          We offer comprehensive, high-quality digital printing solutions with state-of-the-art equipment and an experienced team for all your printing needs.
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
                <feature.icon size={14} />
              </StyledIcon>
              {feature.text}
            </FeatureItem>
          ))}
        </FeatureList>
        <Button>Learn More</Button>
      </ContentArea>
      <ImageArea>
        <Image src={img1} alt="DG CLICK@ CHABAHIL printing services" />
        <ExperienceBadge>
          Full Digital<br />Lab & Studio<br />Services
        </ExperienceBadge>
      </ImageArea>
    </Section>
  );
};

export default WhyChooseUs;