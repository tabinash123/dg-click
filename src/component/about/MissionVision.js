import React from 'react';
import styled from 'styled-components';
import { Target, Eye } from 'lucide-react';

const Section = styled.section`
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  font-family: 'Arial', sans-serif;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  color: #FF5722;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

const IconWrapper = styled.div`
  margin-right: 0.75rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const CardContent = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #555;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const MissionVision = () => {
  return (
    <Section>
      <Container>
        <Title>Our Mission & Vision</Title>
        <Grid>
          <Card>
            <CardTitle>
              <IconWrapper>
                <Target size={24} />
              </IconWrapper>
              Our Mission
            </CardTitle>
            <CardContent>
              At DG CLICK@ CHABAHIL PVT. LTD., our mission is to provide high-quality digital printing solutions that bring our customers' ideas to life. We are committed to delivering exceptional service, innovative designs, and timely results that exceed expectations.
            </CardContent>
          </Card>
          <Card>
            <CardTitle>
              <IconWrapper>
                <Eye size={24} />
              </IconWrapper>
              Our Vision
            </CardTitle>
            <CardContent>
              We aspire to be the leading digital printing studio in Kathmandu, known for our cutting-edge technology, creative expertise, and unwavering commitment to customer satisfaction. Our vision is to continually expand our services, embrace new technologies, and set the standard for excellence in the digital printing industry.
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

export default MissionVision;