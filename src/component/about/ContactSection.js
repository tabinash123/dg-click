import React from 'react';
import styled from 'styled-components';
import { Phone, Mail } from 'lucide-react';

const BannerSection = styled.section`
  background: linear-gradient(135deg, #FDE2E0 25%, #E6E9F0 25%, #E6E9F0 50%, #FDE2E0 50%, #FDE2E0 75%, #E6E9F0 75%);
  background-size: 100% 100%;
  padding: 60px 20px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 60px;
  height: 4px;
  background-color: #FF6347;
  margin: 0 auto 20px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CallButton = styled(Button)`
  background-color: #FF6347;
  color: white;
`;

const EmailButton = styled(Button)`
  background-color: white;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactSection = () => {
  return (
    <BannerSection>
      <Container>
        <Title>Bring Your Ideas to Life with DG CLICK</Title>
        <Underline />
        <Subtitle>
          Looking for high-quality digital printing solutions? From personal items to business materials, we offer a wide range of printing services to meet your needs. Contact us now to discuss your project or request a quote!
        </Subtitle>
        <ButtonContainer>
          <CallButton>
            <Phone size={18} style={{ marginRight: '8px' }} />
            Call Us Now
          </CallButton>
          <EmailButton>
            <Mail size={18} style={{ marginRight: '8px' }} />
            Email Us
          </EmailButton>
        </ButtonContainer>
      </Container>
    </BannerSection>
  );
};

export default ContactSection;