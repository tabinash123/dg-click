import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Phone, MapPin, Mail } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 3rem 0 1rem;
  animation: ${fadeIn} 0.5s ease-in;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Logo = styled.div`
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 40px;
  }
`;

const CompanyInfo = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  opacity: 0.7;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff4500;
  }

  svg {
    margin-right: 0.5rem;
    color: #ff4500;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 2px;
    background-color: #ff4500;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 50px;
  }
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
  
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    opacity: 0.7;
    transition: opacity 0.3s ease, transform 0.3s ease;
    
    &:before {
      content: '»';
      color: #ff4500;
      margin-right: 0.5rem;
      transition: transform 0.3s ease;
    }

    &:hover {
      opacity: 1;
      transform: translateX(5px);

      &:before {
        transform: translateX(3px);
      }
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const EmailInput = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

const SubscribeButton = styled.button`
  padding: 0.75rem;
  background-color: #ff4500;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff6347;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #333;
  font-size: 0.9rem;
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  
  a {
    color: #ffffff;
    background-color: #333;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #ff4500;
      transform: translateY(-3px);
    }
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Please enter your email');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
      console.log('Subscribed:', email);
      // Here you would typically send the email to your server
      setEmail('');
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Logo>
            <img src="/api/placeholder/120/40" alt="Printex Logo" />
          </Logo>
          <CompanyInfo>
            We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
          </CompanyInfo>
          <ContactInfo>
            <Phone size={18} aria-hidden="true" />
            <a href="tel:+21236547898" aria-label="Phone number">+2 123 654 7898</a>
          </ContactInfo>
          <ContactInfo>
            <MapPin size={18} aria-hidden="true" />
            <address>25/B Milford Road, New York</address>
          </ContactInfo>
          <ContactInfo>
            <Mail size={18} aria-hidden="true" />
            <a href="mailto:info@example.com" aria-label="Email address">info@example.com</a>
          </ContactInfo>
        </Column>
        
        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <LinkList>
            <LinkItem><a href="#about">About Us</a></LinkItem>
            <LinkItem><a href="#faq">FAQ's</a></LinkItem>
            <LinkItem><a href="#terms">Terms Of Service</a></LinkItem>
            <LinkItem><a href="#privacy">Privacy policy</a></LinkItem>
            <LinkItem><a href="#services">Our Services</a></LinkItem>
            <LinkItem><a href="#blog">Latest Blog</a></LinkItem>
          </LinkList>
        </Column>
        
        <Column>
          <ColumnTitle>Our Services</ColumnTitle>
          <LinkList>
            <LinkItem><a href="#offset">Offset Printing</a></LinkItem>
            <LinkItem><a href="#business-card">Business Card</a></LinkItem>
            <LinkItem><a href="#design">Design & Branding</a></LinkItem>
            <LinkItem><a href="#3d-printing">3D Design & Printing</a></LinkItem>
            <LinkItem><a href="#mug-printing">Mug Printing</a></LinkItem>
            <LinkItem><a href="#tshirt-printing">T-Shirt Printing</a></LinkItem>
          </LinkList>
        </Column>
        
        <Column>
          <ColumnTitle>Newsletter</ColumnTitle>
          <CompanyInfo>Subscribe Our Newsletter To Get Latest Update And News</CompanyInfo>
          <NewsletterForm onSubmit={handleSubmit}>
            <EmailInput 
              type="email" 
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
              aria-invalid={emailError ? "true" : "false"}
            />
            {emailError && <p role="alert" style={{color: '#ff4500', fontSize: '0.8rem'}}>{emailError}</p>}
            <SubscribeButton type="submit">
              Subscribe Now
            </SubscribeButton>
          </NewsletterForm>
        </Column>
      </FooterContent>
      
      <Copyright>
        <span>© Copyright 2024 PRINTEX All Rights Reserved.</span>
        <SocialIcons>
          <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
          <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
          <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
        </SocialIcons>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;