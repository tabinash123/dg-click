import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';
import ima from '../../assets/services/5.jpg'

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  background-color: #1a1a1a;
  color: white;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    flex-direction: column;
    max-width: 768px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Section = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const VisitSection = styled(Section)`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #f44336;
  }
`;

const PricingSection = styled(Section)`
  background-color: #f44336;
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url(${ima});
  background-size: cover;
  background-position: center;
  min-height: 300px;

  @media (max-width: 1024px) {
    order: -1;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const DayTime = styled.div`
  margin-bottom: 10px;
`;

const Day = styled.span`
  font-weight: bold;
`;

const Time = styled.span`
  color: #a0a0a0;
  margin-left: 10px;
`;

const AppointmentButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  font-weight: bold;
`;

const PriceList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceItem = styled.div`
  margin-bottom: 10px;
`;

const Service = styled.span`
  font-weight: bold;
`;

const Price = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  display: block;
`;

const VisitUsComponent = () => {
  return (
    <OuterContainer>
      <Container>
        <VisitSection>
          <div>
            <Title>VISIT US</Title>
            <DayTime><Day>Monday-Friday</Day> <Time>10AM - 8PM</Time></DayTime>
            <DayTime><Day>Saturday</Day> <Time>10AM - 6PM</Time></DayTime>
            <DayTime><Day>Sunday</Day> <Time>CLOSED</Time></DayTime>
            <p style={{ color: '#a0a0a0', fontSize: '14px', marginTop: '20px' }}>
              We will be glad to see you anytime at our salon.
            </p>
          </div>
          <AppointmentButton>
            MAKE AN APPOINTMENT <ArrowRight size={16} style={{ marginLeft: '10px' }} />
          </AppointmentButton>
        </VisitSection>
        
        <ImageSection />
        
        <PricingSection>
          <Title>PRICING</Title>
          <PriceList>
            <PriceItem><Service>Tattooing</Service> <Price>FROM $90.00</Price></PriceItem>
            <PriceItem><Service>Piercing</Service> <Price>FROM $45.00</Price></PriceItem>
            <PriceItem><Service>Permanent Make-Up</Service> <Price>FROM $60.00</Price></PriceItem>
            <PriceItem><Service>Tattoo Cover Up</Service> <Price>FROM $35.00</Price></PriceItem>
            <PriceItem><Service>Laser Removal</Service> <Price>FROM $50.00</Price></PriceItem>
          </PriceList>
        </PricingSection>
      </Container>
    </OuterContainer>
  );
};

export default VisitUsComponent;