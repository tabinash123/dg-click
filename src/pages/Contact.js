import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Phone, Clock, Mail, MapPin, Send } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 50px auto;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

const MainSection = styled.div`
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url('/api/placeholder/600/400');
  background-size: cover;
  background-position: center;
  min-height: 400px;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: #FF1493;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: white;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #1E0933;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #1E0933;
  }
`;

const SubmitButton = styled.button`
  background-color: #1E0933;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  align-self: flex-start;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2E1A43;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  background-color: #1E0933;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  margin-right: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 50%;
`;

const InfoContent = styled.div`
  font-size: 0.9rem;

  > div:first-child {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageContainer>
      <MainSection>
        <ImageSection />
        <FormSection>
          <Title>Get In Touch</Title>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <TextArea 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <SubmitButton type="submit">
              SUBMIT <Send size={18} />
            </SubmitButton>
          </Form>
        </FormSection>
      </MainSection>
      <InfoSection>
        <InfoCard>
          <IconWrapper><Phone size={24} /></IconWrapper>
          <InfoContent>
            <div>Contact</div>
            <div>+111-222-333</div>
            <div>+123-456-789</div>
          </InfoContent>
        </InfoCard>
        <InfoCard>
          <IconWrapper><Clock size={24} /></IconWrapper>
          <InfoContent>
            <div>Opening Hours</div>
            <div>Mon - Fri : 10am - 6pm</div>
            <div>Sat - Sun : 12am - 4pm</div>
          </InfoContent>
        </InfoCard>
        <InfoCard>
          <IconWrapper><Mail size={24} /></IconWrapper>
          <InfoContent>
            <div>Email</div>
            <div>abc@gmail.com</div>
            <div>xyz@gmail.com</div>
          </InfoContent>
        </InfoCard>
        <InfoCard>
          <IconWrapper><MapPin size={24} /></IconWrapper>
          <InfoContent>
            <div>Address</div>
            <div>Karachi, Pakistan</div>
          </InfoContent>
        </InfoCard>
      </InfoSection>
    </PageContainer>
  );
};

export default ContactPage;