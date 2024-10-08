import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Mail, ShoppingBag } from 'lucide-react';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const CTAContainer = styled.section`
  background: linear-gradient(135deg, #FF6347, #4169E1);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;

const SubscribeButton = styled(Button)`
  background-color: white;
  color: #FF6347;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const NotifyButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const EmailInput = styled.input`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  margin-right: 1rem;
  width: 250px;
  max-width: 100%;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const CTASection = () => {
  return (
    <CTAContainer>
      <Content>
        <Title>Your Designs, Our Expertise</Title>
        <Subtitle>
          Dg-click is almost here! Get ready to bring your custom designs to life on caps, cups, t-shirts, and more. Be the first to access our state-of-the-art print-on-demand platform.
        </Subtitle>
        <ButtonContainer>
          <EmailInput type="email" placeholder="Enter your email" />
          <SubscribeButton>
            <Mail size={18} />
            Join Waitlist
          </SubscribeButton>
          <NotifyButton>
            <ShoppingBag size={18} />
            Notify at Launch
          </NotifyButton>
        </ButtonContainer>
      </Content>
    </CTAContainer>
  );
};

export default CTASection;