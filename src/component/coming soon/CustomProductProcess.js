import React from 'react';
import styled from 'styled-components';
import { Mail, Phone, MapPin } from 'lucide-react';

const SectionContainer = styled.section`
  padding: 2rem 6rem;
  background-color: #f5f5f5;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
`;

const ContactType = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContactInfo = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ContactSubInfo = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const ContactInfoSection = () => {
  return (
    <SectionContainer>
      <ContactGrid>
        <ContactItem>
          <IconWrapper>
            <Mail size={24} />
          </IconWrapper>
          <ContactType>Email</ContactType>
          <ContactInfo>Get in touch with us for any inquiries or updates.</ContactInfo>
          <ContactSubInfo>hello@custom.au</ContactSubInfo>
        </ContactItem>
        <ContactItem>
          <IconWrapper>
            <Phone size={24} />
          </IconWrapper>
          <ContactType>Phone</ContactType>
          <ContactInfo>We're here to assist you with any questions.</ContactInfo>
          <ContactSubInfo>+1 (555) 000-0000</ContactSubInfo>
        </ContactItem>
        <ContactItem>
          <IconWrapper>
            <MapPin size={24} />
          </IconWrapper>
          <ContactType>Office</ContactType>
          <ContactInfo>Visit us at our headquarters for more information.</ContactInfo>
          <ContactSubInfo>123 Sample St, Sydney NSW 2000 AU</ContactSubInfo>
        </ContactItem>
      </ContactGrid>
    </SectionContainer>
  );
};

export default ContactInfoSection;