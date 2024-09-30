import React, { useState } from 'react';
import styled from 'styled-components';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Container = styled.div`
  max-width: 1200px;
  margin: 64px auto;
  padding: 48px 24px;
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const Description = styled.p`
  color: #4A5568;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #FF4D4D;
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  background-color: #FF4D4D;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #E63939;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #4A5568;
  font-size: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #FF4D4D;
  border-radius: 50%;
  color: white;
`;

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Subscribing email:', email);
    // Reset the form
    setEmail('');
    // Optionally, show a success message to the user
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <Container>
      <Grid>
        <Section>
          <Title>Stay Updated with DG-Click</Title>
          <Description>
            Subscribe to our newsletter for the latest updates on our services, special offers, and tips on printing and photography. Join our creative community today!
          </Description>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">
              <Send size={18} />
              Subscribe
            </Button>
          </Form>
        </Section>
        <Section>
          <Title>Get in Touch</Title>
          <Description>
            Have questions or need a quote? Reach out to us directly. Our team is always ready to assist you with your printing and photography needs.
          </Description>
          <ContactInfo>
            <ContactItem>
              <IconWrapper>
                <Phone size={20} />
              </IconWrapper>
              +977 1234567890
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <Mail size={20} />
              </IconWrapper>
              info@dgclick.com
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <MapPin size={20} />
              </IconWrapper>
              Chabahil, Kathmandu, Nepal
            </ContactItem>
          </ContactInfo>
        </Section>
      </Grid>
    </Container>
  );
};

export default ContactSection;