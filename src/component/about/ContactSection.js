import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Container = styled.div`
  background-color: #1e2a3a;
  padding: 3rem 2rem;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  animation: ${slideUp} 0.5s ease-out;
`;

const Subtitle = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  animation: ${slideUp} 0.5s ease-out 0.1s backwards;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  animation: ${slideUp} 0.5s ease-out 0.2s backwards;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  border: 2px solid transparent;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const Button = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff4500;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out;

  ${({ $type }) => $type === 'success' && `
    background-color: #d4edda;
    color: #155724;
  `}

  ${({ $type }) => $type === 'error' && `
    background-color: #f8d7da;
    color: #721c24;
  `}

  svg {
    margin-right: 0.5rem;
  }
`;

const ConnectWithUs = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (email.includes('@')) {
        setMessage({ type: 'success', text: 'Thank you! We\'ll be in touch soon.' });
        setEmail('');
      } else {
        throw new Error('Invalid email address');
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Title>Connect with Us</Title>
      <Subtitle>Reach Out to Discuss Your Photography and Printing Needs</Subtitle>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                Get in Touch
                <Send size={18} style={{ marginLeft: '0.5rem' }} />
              </>
            )}
          </Button>
        </InputWrapper>
        {message && (
          <Message $type={message.type}>
            {message.type === 'success' ? (
              <CheckCircle size={18} />
            ) : (
              <AlertCircle size={18} />
            )}
            {message.text}
          </Message>
        )}
      </Form>
    </Container>
  );
};

export default ConnectWithUs;