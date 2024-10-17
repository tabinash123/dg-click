import React from 'react';
import styled from 'styled-components';
import { Mail, Phone, MapPin } from 'lucide-react';

const SectionContainer = styled.section`
  padding: 5rem 8%;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    padding: 4rem 6%;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  margin-right: 1rem;
  color: #ff6b6b;
`;

const ContactDetails = styled.div``;

const ContactType = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactSubInfo = styled.p`
  font-size: 1rem;
  color: #ff6b6b;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactInfoSection = () => {
  return (
    <SectionContainer>
      <SectionHeading>Contact Information</SectionHeading>
      <ContactGrid>
        <ContactItem>
          <IconWrapper>
            <Mail size={24} />
          </IconWrapper>
          <ContactDetails>
            <ContactType>Email</ContactType>
            <ContactInfo>Get in touch with us for any inquiries or updates.</ContactInfo>
            <ContactSubInfo>dgclickchabahil@gmail.com</ContactSubInfo>
          </ContactDetails>
        </ContactItem>
        <ContactItem>
          <IconWrapper>
            <Phone size={24} />
          </IconWrapper>
          <ContactDetails>
            <ContactType>Phone</ContactType>
            <ContactInfo>We're here to assist you with any questions.</ContactInfo>
            <ContactSubInfo>+977-01-4460151</ContactSubInfo>
          </ContactDetails>
        </ContactItem>
        <ContactItem>
          <IconWrapper>
            <MapPin size={24} />
          </IconWrapper>
          <ContactDetails>
            <ContactType>Office</ContactType>
            <ContactInfo>Visit us at our office for more information.</ContactInfo>
            <ContactSubInfo>Chabahil, Kathmandu, Nepal</ContactSubInfo>
          </ContactDetails>
        </ContactItem>
      </ContactGrid>
    </SectionContainer>
  );
};

export default ContactInfoSection;