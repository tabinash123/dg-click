import React from 'react';
import styled from 'styled-components';
import { Image } from 'lucide-react';
import customDesign  from "../../assets/hero/custom_design.jpg"
import customDesign1  from "../../assets/hero/product1.jpeg"
import customDesign2  from "../../assets/hero/product2.jpeg"

const SectionContainer = styled.section`
  padding: 4rem 6rem;
  text-align: center;
`;

const Tagline = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ServiceCard = styled.div`
  text-align: left;
`;

const ImagePlaceholder = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ServicesShowcase = () => {
  return (
    <SectionContainer>
      <Tagline>Coming Soon</Tagline>
      <Heading>Custom Printing Services at Your Fingertips</Heading>
      <Description>
        Dg-click is preparing to revolutionize the world of custom printing in Nepal. 
        Our state-of-the-art platform will offer a wide range of high-quality, personalized products to suit your unique style.
      </Description>
      <ServicesGrid>
        <ServiceCard>
          <ImagePlaceholder>
            <img src={customDesign} style={{maxHeight:"100%", maxWidth:"100%"}}/>
          </ImagePlaceholder>
          <ServiceTitle>Custom T-Shirt Printing</ServiceTitle>
          <ServiceDescription>Express yourself with our premium quality custom-printed t-shirts. Perfect for individuals, teams, or events.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ImagePlaceholder>
          <img src={customDesign1} style={{maxHeight:"100%", maxWidth:"100%"}}/>
          </ImagePlaceholder>
          <ServiceTitle>Personalized Cup and Mug Printing</ServiceTitle>
          <ServiceDescription>Start your day with a smile using our custom-printed cups and mugs. Ideal for gifts or promoting your brand.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ImagePlaceholder>
          <img src={customDesign2} style={{maxHeight:"100%", maxWidth:"100%"}}/>
          </ImagePlaceholder>
          <ServiceTitle>Custom Cap and Hat Printing</ServiceTitle>
          <ServiceDescription>Top off your style with our custom-printed caps and hats. Great for sports teams, corporate events, or fashion statements.</ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
      <ButtonContainer>
        <Button>Learn More</Button>
        <Button>Join Waitlist</Button>
      </ButtonContainer>
    </SectionContainer>
  );
};

export default ServicesShowcase;