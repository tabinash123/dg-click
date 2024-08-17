import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Check, Printer, Layers, Award } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  animation: ${fadeIn} 0.6s ease-out;
`;

const ContentArea = styled.div`
  flex: 1;
  padding-right: 3rem;
`;

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
`;

const SubTitle = styled.h3`
  color: #FF6B52;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h2`
  color: #0E4721;
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  max-width: 90%;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
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
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 107, 82, 0.3);

  &:hover {
    background-color: #e55a41;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 82, 0.4);
  }
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LargeImage = styled(Image)`
  width: 65%;
  height: 350px;
`;

const SmallImage = styled(Image)`
  width: calc(35% - 1rem);
  height: 250px;
  align-self: flex-end;
`;

const ExperienceBadge = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: #1A6334;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 15px rgba(26, 99, 52, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <ContentArea>
        <SubTitle>Why Choose Us</SubTitle>
        <Title>Why People Choose Our Printfix?</Title>
        <Description>
          We offer unparalleled printing solutions that combine cutting-edge technology with expert craftsmanship. Our commitment to quality and customer satisfaction sets us apart in the industry.
        </Description>
        <FeatureList>
          {[
            { text: 'Printed in full-color', icon: Printer },
            { text: 'Variety of paper sizes', icon: Layers },
            { text: 'Double-sided printing', icon: Printer },
            { text: 'Optional premium finishing', icon: Award },
            { text: 'Professional designs', icon: Layers },
            { text: 'Quality assurance expertise', icon: Check },
          ].map((feature, index) => (
            <FeatureItem key={index}>
              <StyledIcon>
                <feature.icon size={18} />
              </StyledIcon>
              {feature.text}
            </FeatureItem>
          ))}
        </FeatureList>
        <Button>Explore Our Services</Button>
      </ContentArea>
      <ImageArea>
        <LargeImage src="/api/placeholder/500/350" alt="Professional printer working" />
        <SmallImage src="/api/placeholder/300/250" alt="High-quality printing machine" />
        <ExperienceBadge>
          25+<br />Years
          <div style={{ fontSize: '0.8rem', fontWeight: 'normal', marginTop: '5px' }}>Of experience in<br />printing excellence</div>
        </ExperienceBadge>
      </ImageArea>
    </Section>
  );
};

export default WhyChooseUs;