import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111;
  color: #d4af37;
  padding: 60px 40px;
  font-family: 'Cinzel Decorative', cursive;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path_to_your_tattoo_pattern.png');
    opacity: 0.05;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  margin-bottom: 40px;
  color: #cccccc;
  font-size: 16px;
  max-width: 600px;
  font-family: 'Fira Sans', sans-serif;
  line-height: 1.6;
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const InfoBlock = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
  color: #d4af37;
`;

const InfoText = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #cccccc;
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 10px;
  
  &::before {
    content: '${props => props.icon}';
    margin-right: 10px;
    font-size: 24px;
  }
`;

const SocialMediaSection = styled.div`
  margin-top: 60px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const SocialMediaLink = styled.a`
  color: #d4af37;
  transition: all 0.3s ease;
  
  &:hover {
    color: #f2d472;
    transform: scale(1.2);
  }
`;

const ContactUs = () => {
  return (
    <ContactSection>
      <ContentWrapper>
        <Title>Connect With Us</Title>
        <Description>
          Step into our world of artistry at Teyungs Tattoo Ink. Whether you're seeking a new tattoo, considering removal, or just want to chat about design, we're here to bring your vision to life in the heart of Kathmandu.
        </Description>
        <InfoSection>
          <InfoBlock>
            <InfoTitle>Our Studio</InfoTitle>
            <InfoText >
              Chabahil, Kathmandu, Nepal
            </InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoTitle>Reach Out</InfoTitle>
            <InfoText icon="📞">
              +977-9823024510
            </InfoText>
            <InfoText icon="✉️">
              teyungstattoink@gmail.com
            </InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoTitle>Studio Hours</InfoTitle>
            <InfoText icon="🕒">
              Sun-Fri: 10:00 am – 5:00 pm<br />
              Sat:Closed<br />
            </InfoText>
          </InfoBlock>
        </InfoSection>
        <SocialMediaSection>
          <InfoTitle>Join Our Community</InfoTitle>
          <SocialMediaLinks>
            <SocialMediaLink href="https://www.facebook.com/profile.php?id=100045144070566" target="_blank" rel="noopener noreferrer">
              <Facebook size={32} />
            </SocialMediaLink>
            <SocialMediaLink 
              href="https://www.instagram.com/teyung_tattoo_removal?igsh=MWYzdmNkZDlzNDR2ZQ%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram size={32} />
            </SocialMediaLink>
          
          </SocialMediaLinks>
        </SocialMediaSection>
      </ContentWrapper>
    </ContactSection>
  );
};

export default ContactUs;