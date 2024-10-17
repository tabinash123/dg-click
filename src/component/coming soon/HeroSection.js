import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from '../../assets/download.png';
import imga from '../../assets/hero/artistic image (1).png';
import axios from 'axios';
import { message } from 'antd';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
  margin-right: 2rem;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out 0.5s backwards;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  img {
    height: 70px;
  }

  @media (max-width: 768px) {
    img {
      height: 60px;
    }
  }
`;

const ComingSoonMessage = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  color: #ff6b6b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #666;
  max-width: 80%;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const EmailForm = styled.form`
  display: flex;
  margin-bottom: 2rem;
  max-width: 380px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.85rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 0.9rem;
  font-weight: 400;
  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }

  @media (max-width: 768px) {
    border-radius: 4px;
    margin-bottom: 1rem;
  }
`;

const SubscribeButton = styled.button`
  padding: 0.85rem 1.25rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff5252;
  }

  @media (max-width: 768px) {
    border-radius: 4px;
    width: 100%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const IconWrapper = styled.a`
  color: #666;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #ff6b6b;
    transform: translateY(-3px);
  }
`;

const PhoneImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
    const result = await axios.post("https://develop.backend.dgclick.businessitpartners.website/api/commingsoon/subscribe",{email:e.target.email.value})
   
    console.log('Submitted email:', result);
    message.success("Thanks for subscribing to our news feed. Stay tuned!")
    
    } catch(error){
      message.error("Some error has occured while subscribing. Please try again")
    }
  };

  return (
    <PageContainer>
      <LeftSection>
        <Logo>
          {/* <img src={logo} alt="DiGiClick" /> */}
        </Logo>
        <ComingSoonMessage>Coming Soon</ComingSoonMessage>
        <Title>DiGiClick: Bridging Nepal and the USA with Custom Printing & Shipping</Title>
        <Subtitle>
        A printing company based in Nepal offering services to the Nepali diaspora in the USA, Europe, and worldwide. </Subtitle>
        <EmailForm onSubmit={handleSubmit}>
          <EmailInput 
            type="email" 
            placeholder="Please enter your email address" 
            name='email'
            required
          />
          <SubscribeButton type="submit">Subscribe</SubscribeButton>
        </EmailForm>
        <SocialIcons>
          <IconWrapper href="https://www.facebook.com/DIGIClickOfficial/"><Facebook size={24} /></IconWrapper>
          <IconWrapper href="mailto:dgclickchabahil@gmail.com"><Mail size={24} /> </IconWrapper>
  
        </SocialIcons>
      </LeftSection>
      <RightSection>
        {/* <PhoneImage src="https://www.drive.nepaldatabase.com/uploads/images/202311/image_750x_65428798736d8.jpg" alt="Product Preview" /> */}
      </RightSection>
    </PageContainer>
  );
};

export default ComingSoonPage;