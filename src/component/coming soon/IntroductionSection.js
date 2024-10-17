import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Printer, Palette, ShoppingBag } from 'lucide-react';
import customDesign from "../../assets/hero/custom_design.jpg";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionContainer = styled.section`
  display: flex;
  padding: 5rem 8%;
  background-color: #fff;
  color: #333;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    padding: 4rem 6%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 5%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 1024px) {
    padding-right: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #ff6b6b;
  font-weight: 600;
  letter-spacing: 0.04rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #666;
  max-width: 550px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;

  svg {
    margin-right: 0.75rem;
    color: #ff6b6b;
    transition: color 0.3s ease;
    flex-shrink: 0;
  }

  &:hover svg {
    color: #ff5252;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    svg {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 0.85rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #ff5252;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

const IntroductionSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Tagline>Coming Soon: Revolutionizing Custom Printing</Tagline>
        <Heading>Your Design, Our Innovation: DiGiClick Arrives</Heading>
        <Description>
          Get ready for DiGiClick – Nepali diaspora's top choice for printing photo frames, art collections, and designs. We ship directly from Kathmandu, bringing a touch of our cultural heritage with each order. </Description>
        <FeatureList>
          <FeatureItem>
            <Printer size={24} />
            State-of-the-art printing on a wide range of products
          </FeatureItem>
          <FeatureItem>
            <Palette size={24} />
            AI-assisted design tools for stunning customization
          </FeatureItem>
          <FeatureItem>
            <ShoppingBag size={24} />
            Streamlined ordering and nationwide delivery
          </FeatureItem>
        </FeatureList>
      </ContentContainer>
      <ImageContainer>
        <Image src={customDesign} alt="DiGiClick custom printed products preview" />
      </ImageContainer>
    </SectionContainer>
  );
};

export default IntroductionSection;