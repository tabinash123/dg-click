import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  font-family: 'Arial', sans-serif;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 40px;
  color: #0A2540;
  margin-bottom: 20px;
  font-weight: 700;color: #0A2540;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;

`;

const Description = styled.p`
   color: #4A5568;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;

`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid #E2E8F0;
  border-radius: 25px;
  flex-grow: 1;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  background-color: #FF4D4D;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E63939;
  }
`;


const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <Container>
      <Title>Subcribe To Our Newsletter</Title>
      <Description>
        Professional printing services can provide you with high-quality prints that will look
        great and last a long time. We have the equipment and expertise.
      </Description>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe Now</Button>
      </Form>
    </Container>
  );
};

export default NewsletterSubscription;