import React, { useState } from 'react';
import styled from 'styled-components';
import { Eye, ArrowRight } from 'lucide-react';

const CTAContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 100px auto;
  background-color: #ffffff;
  overflow: hidden;
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: linear-gradient(45deg rgba(255,69,0,0) 100%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #FF4500;
  border-bottom-left-radius: 50%;
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  span {
    color: #FF4500;
  }
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 80%;
  padding: 0.75rem;
  border: 2px solid transparent;
  background-color: #f0f0f0;
  border-radius: 4px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FF4500;
    box-shadow: 0 0 0 3px rgba(255, 69, 0, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid transparent;
  background-color: #f0f0f0;
  border-radius: 4px;
  grid-column: 1 / -1;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FF4500;
    box-shadow: 0 0 0 3px rgba(255, 69, 0, 0.1);
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background-color: #FF4500;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width:200px;

  &:hover {
    background-color: #E03E00;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CTAComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    comment: ''
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
    // Here you would typically send the data to your backend
  };

  return (
    <CTAContainer>
      <ImageSection>
        <img src="/api/placeholder/600/600" alt="Person using VR headset in an orange pod chair" />
      </ImageSection>
      <FormSection>
        <Logo>
          <Eye size={40} color="white" />
        </Logo>
        <Title>Let's <span>Talk</span></Title>
        <Subtitle>Printed and shipped on demand!</Subtitle>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="email"
              name="email"
              placeholder="E-Mail Address"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="E-Mail Address"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-label="Subject"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone"
            />
          </InputWrapper>
          <TextArea
            name="comment"
            placeholder="Write Comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            aria-label="Comment"
          />
          <SubmitButton type="submit">
            Submit Now
            <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </SubmitButton>
        </Form>
      </FormSection>
    </CTAContainer>
  );
};

export default CTAComponent;