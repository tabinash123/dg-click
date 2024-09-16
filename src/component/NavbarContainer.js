import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Linkedin, ChevronDown, Globe, Menu, X } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const HeaderWrapper = styled.header`
  font-family: 'Poppins', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  transition: all 0.3s ease;
  ${props => props.scrolled && `
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `}
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  ${props => props.scrolled && `
    padding: 5px 5%;
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled.a`
  color: #333;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #0056b3;
    transform: translateY(-2px);
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background-color: white;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${props => props.scrolled && `
    padding: 10px 5%;
  `}
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ff6347;
  margin-right: 10px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: transform 0.3s ease;

  ${Logo}:hover & {
    transform: rotate(180deg);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 1024px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    animation: ${slideDown} 0.3s ease;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? '#ff6347' : '#333'};
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;

  &:hover {
    color: #ff6347;
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ff6347;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  ${props => props.active && `
    &::after {
      transform: scaleX(1);
    }
  `}
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
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 5px 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 10;
  animation: ${fadeIn} 0.3s ease;
`;

const LanguageOption = styled.div`
  padding: 5px 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const QuoteButton = styled(Link)`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff5335;
    transform: translateY(-2px);
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  const location = useLocation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pages', path: '/pages' },
    { name: 'Services', path: '/services' },
    { name: 'Project', path: '/project' },
    { name: 'Article', path: '/article' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <HeaderWrapper scrolled={scrolled}>
      <TopBar scrolled={scrolled}>
        <ContactInfo>
          <ContactItem>
            <Phone size={16} color="#ff6347" />
            <span>+2 (202) 588-6500</span>
          </ContactItem>
          <ContactItem>
            <Mail size={16} />
            <span>info@pixento24.com</span>
          </ContactItem>
        </ContactInfo>
        <SocialIcons>
          <Icon href="#"><Facebook size={18} /></Icon>
          <Icon href="#"><Twitter size={18} /></Icon>
          <Icon href="#"><Linkedin size={18} /></Icon>
        </SocialIcons>
      </TopBar>
      <MainHeader scrolled={scrolled}>
        <Logo to="/">
          <LogoIcon />
          PIXEN
        </Logo>
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuToggle>
        <Nav isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavItem 
              key={item.name} 
              to={item.path} 
              active={location.pathname === item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavItem>
          ))}
        </Nav>
        <RightSection>
         
          <QuoteButton to="/quote">GET A QUOTE</QuoteButton>
        </RightSection>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;