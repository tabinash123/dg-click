import React, { useState } from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import axios from 'axios';
import { message } from 'antd';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 5rem 8%;
  text-align: center;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    padding: 4rem 6%;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FooterIntro = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const SocialIcon = styled.a`
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

const EmailInput = styled.input`
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
`;

const SubscribeButton = styled.button`
  padding: 0.85rem 1.25rem;
  font-size: 0.9rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: #ff5252;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    border-radius: 4px;
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.8rem;
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



const Footer = () => {
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
    <FooterContainer>
      <FooterContent>
        <FooterIntro>
          DiGiClick is your premier destination for custom printing excellence in Nepal. 
          We blend cutting-edge technology with local artistry to bring your unique designs to life.
        </FooterIntro>
        <SocialIcons>
          <SocialIcon href="https://www.facebook.com/DIGIClickOfficial/" aria-label="Facebook"><Facebook size={24} /></SocialIcon>
          <IconWrapper href="mailto:dgclickchabahil@gmail.com"><Mail size={24} /> </IconWrapper>
          {/* <SocialIcon href="#" aria-label="Instagram"><Instagram size={24} /></SocialIcon>
          <SocialIcon href="#" aria-label="Twitter"><Twitter size={24} /></SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn"><Linkedin size={24} /></SocialIcon> */}
        </SocialIcons>
        <NewsletterForm onSubmit={handleSubmit}>
          <EmailInput 
            type="email" 
            placeholder="Enter your email" 
            name="email"
            required
          />
          <SubscribeButton type="submit">Subscribe</SubscribeButton>
        </NewsletterForm>
        <Copyright>
          © {new Date().getFullYear()} DiGiClick. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;