import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentColumn = styled.div`
  flex: 3;
  background-color: #2c2c2c;
  color: white;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageColumn = styled.div`
  flex: 2;
  background-color: #d32f2f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

const FAQSection = () => {
  return (
    <Section>
      <ContentColumn>
        <Title>Frequently Asked Questions</Title>
        <Description>
          At our Nepalese e-commerce site, we strive to provide a seamless and enjoyable shopping
          experience for our customers. If you have any questions or concerns, please don't hesitate to
          reach out to our dedicated support team. We're here to assist you every step of the way,
          ensuring you find the perfect custom-printed products that reflect your personal style and
          preferences.
        </Description>
      </ContentColumn>
      <ImageColumn>
        <Image src="/api/placeholder/400/400" alt="Saksham product box" />
      </ImageColumn>
    </Section>
  );
};

export default FAQSection;