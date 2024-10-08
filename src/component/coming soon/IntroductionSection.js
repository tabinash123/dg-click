import React from 'react';
import styled from 'styled-components';
import { Printer, Palette, ShoppingBag } from 'lucide-react';
import customDesign  from "../../assets/hero/custom_design.jpg"

const SectionContainer = styled.section`
  display: flex;
  padding: 4rem 10%;
  background-color: #ffffff;
  color: #333333;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 5%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const Tagline = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #FF6347; // Tomato red, consistent with hero section
  font-weight: 600;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #333333;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #666666;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333333;

  svg {
    margin-right: 1rem;
    color: #4169E1; // Royal Blue, consistent with hero section
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IntroductionSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Tagline>Unleash Your Creativity</Tagline>
        <Heading>Custom Prints, Limitless Possibilities</Heading>
        <Description>
          Welcome to Dg-click, your premier destination for print-on-demand excellence. Based in Nepal, we blend cutting-edge technology with local artistry to bring your unique designs to life on a wide range of products.
        </Description>
        <FeatureList>
          <FeatureItem>
            <Printer size={24} />
            High-quality printing on caps, cups, t-shirts, and more
          </FeatureItem>
          <FeatureItem>
            <Palette size={24} />
            Easy-to-use design tools for perfect customization
          </FeatureItem>
          <FeatureItem>
            <ShoppingBag size={24} />
            Seamless ordering process and worldwide shipping
          </FeatureItem>
        </FeatureList>
      </ContentContainer>
      <ImageContainer>
        <img src={customDesign} alt="Custom printed products showcase" />
      </ImageContainer>
    </SectionContainer>
  );
};

export default IntroductionSection;