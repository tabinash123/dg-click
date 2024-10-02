import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 32px;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const Subtitle = styled.h3`
  color: #ff6347;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  color: #1e2a3a;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #4a4a4a;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ExploreButton = styled.button`
  background-color: #1e2a3a;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c3e50;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabletImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ExperienceOurHistory = () => {
  return (
    <Section>
      <ImageWrapper>
        <TabletImage src="/api/placeholder/500/400" alt="Tablet showing company website" />
      </ImageWrapper>
      <ContentWrapper>
        <Subtitle>Experience Our History</Subtitle>
        <Title>Pioneering the Photography and</Title>
        <Description>
          Founded in 2010, our company has been at the forefront of the
          photography and printing industry in Kathmandu, continuously
          innovating and adapting to the changing needs of our clients. With
          a rich history of providing exceptional service and quality, we have
          become the trusted partner for individuals and businesses alike,
          helping them capture and preserve their most cherished moments
          and memories.
        </Description>
      </ContentWrapper>
    </Section>
  );
};

export default ExperienceOurHistory;