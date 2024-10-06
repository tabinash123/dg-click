import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const ColorBlock = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props => props.color};
  border-radius: 8px;
`;

const Subtitle = styled.p`
  color: #ff4d4d;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: #ff4d4d;
  color: white;

  &:hover {
    background-color: #ff3333;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #ffe6e6;
  color: #ff4d4d;

  &:hover {
    background-color: #ffd6d6;
  }
`;

const AboutAndTestimonialSections = () => {
  return (
    <Container>
      <Section>
        <Column>
          <ColorBlock color="#f0f0f0" />
        </Column>
        <Column>
          <Subtitle>About Us</Subtitle>
          <Title>Who We Are</Title>
          <Description>
            Founded in the heart of Nepal, our e-commerce platform is dedicated to showcasing the vibrant culture, rich heritage, and skilled craftsmanship of our We're DG Click, a passion project born from our love for Nepal's vibrant culture and stunning landscapes. Our mission is to bring the beauty of this Himalayan paradise to you through our unique collection of printed apparel and accessories.
          </Description>
          <ButtonContainer>
            <PrimaryButton>Learn More</PrimaryButton>
            <SecondaryButton>Get in Touch</SecondaryButton>
          </ButtonContainer>
        </Column>
      </Section>

    </Container>
  );
};

export default AboutAndTestimonialSections;