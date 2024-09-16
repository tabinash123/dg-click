import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Phone, Mail, Facebook, Twitter, Linkedin, ChevronDown, Globe } from 'lucide-react';

const HeaderWrapper = styled.header`
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #495057;
  font-weight: 400;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

const PhoneIcon = styled(Phone)`
  color: #ff6347;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: #6c757d;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff6347;
    transform: translateY(-2px);
  }
`;

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background-color: white;
`;

const Logo = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  letter-spacing: -1px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 30px;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  font-size: 16px;
  padding: 5px 0;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ff6347;
    transition: width 0.3s ease;
  }

  &:hover, &.active {
    color: #ff6347;
    &::after {
      width: 100%;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LanguageSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const LanguageOptions = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 5px 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const LanguageOption = styled.div`
  padding: 8px 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const QuoteButton = styled(Link)`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff4500;
    transform: translateY(-2px);
  }
`;

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  return (
    <HeaderWrapper>
      <TopBar>
        <ContactInfo>
          <ContactItem>
            <PhoneIcon size={16} />
            +2 (202) 588-6500
          </ContactItem>
          <ContactItem>
            <Mail size={16} />
            info@pixento24.com
          </ContactItem>
        </ContactInfo>
        <SocialIcons>
          <SocialIcon href="#"><Facebook size={18} /></SocialIcon>
          <SocialIcon href="#"><Twitter size={18} /></SocialIcon>
          <SocialIcon href="#"><Linkedin size={18} /></SocialIcon>
        </SocialIcons>
      </TopBar>
      <MainNav>
        <Logo to="/">PIXEN</Logo>
        <NavItems>
          <NavItem to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavItem>
          <NavItem to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavItem>
          <NavItem to="/shop" className={location.pathname === '/pages' ? 'active' : ''}>Shop</NavItem>
          <NavItem to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</NavItem>
          <NavItem to="/project" className={location.pathname === '/project' ? 'active' : ''}>Project</NavItem>
          <NavItem to="/article" className={location.pathname === '/article' ? 'active' : ''}>Article</NavItem>
          <NavItem to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavItem>
        </NavItems>
        <RightSection>
          
          <QuoteButton to="/quote">GET A QUOTE</QuoteButton>
        </RightSection>
      </MainNav>
    </HeaderWrapper>
  );
};

export default Header;