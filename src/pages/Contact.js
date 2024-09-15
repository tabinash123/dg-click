import React, { useState } from 'react';
import styled from 'styled-components';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #0a3d2a;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 18px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
`;

const InfoTitle = styled.h2`
  color: #0a3d2a;
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #333;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: #ff6347;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #666;
`;

const Form = styled.form`
  flex: 1;
  min-width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #0a3d2a;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5573e;
  }

  svg {
    margin-left: 10px;
  }
`;

const EnhancedContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <PageContainer>
      <Header>
        <Title>Contact Us</Title>
        <Subtitle>We'd love to hear from you. Here's how you can reach us...</Subtitle>
      </Header>
      <ContentWrapper>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          <InfoItem>
            <IconWrapper><Phone size={20} /></IconWrapper>
            +1 (123) 456-7890
          </InfoItem>
          <InfoItem>
            <IconWrapper><Mail size={20} /></IconWrapper>
            contact@example.com
          </InfoItem>
          <InfoItem>
            <IconWrapper><MapPin size={20} /></IconWrapper>
            123 Business St, City, State 12345
          </InfoItem>
          <MapPlaceholder>
            Map placeholder - integrate your preferred map service here
          </MapPlaceholder>
        </ContactInfo>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">
            Send Message
            <Send size={20} />
          </SubmitButton>
        </Form>
      </ContentWrapper>
    </PageContainer>
  );
};

export default EnhancedContactUsPage;