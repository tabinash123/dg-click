import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #006400;
  color: white;
  padding: 60px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Feature = styled.div`
  flex: 1;
  text-align: center;
`;

const FeatureTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const FeaturesSection = () => {
  return (
    <Section>
      <Container>
        <Feature>
          <FeatureTitle>Personalized Service</FeatureTitle>
          <FeatureDescription>
            Our custom photography and printing services are fully tailored to your needs. Whether it's a wedding, event, or personalized merchandise, we create bespoke solutions that match your vision perfectly. Every project is meticulously crafted to deliver a world-class experience for you.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Quality Assurance</FeatureTitle>
          <FeatureDescription>
            Quality is always our top priority. We have a handpicked team of skilled photographers and printing professionals who are dedicated to ensuring the highest standards throughout your project. From capturing your special moments to delivering flawless prints, we're committed to 100% satisfaction.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Great Value for Money</FeatureTitle>
          <FeatureDescription>
            We are committed to providing top-notch photography and printing services with great value for your money. Our packages are carefully designed and delivered to make your experience not only special but also affordable. We offer competitive pricing without compromising on quality.
          </FeatureDescription>
        </Feature>
      </Container>
    </Section>
  );
};

export default FeaturesSection;