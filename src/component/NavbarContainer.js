import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Search, Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff'};
  box-shadow: ${props => props.scrolled ? '0 4px 6px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.1)'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 40px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #ff4500;
    transition: all 0.3s ease;
  }

  &:hover, &:focus {
    color: #ff4500;

    &::after {
      width: 100%;
      left: 0;
    }
  }
`;

const SearchIcon = styled(Search)`
  margin-left: 1rem;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover, &:focus {
    color: #ff4500;
    transform: scale(1.1);
  }
`;

const GetQuoteButton = styled.button`
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover, &:focus {
    background-color: #e63900;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(230, 57, 0, 0.3);

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
      transform: scale(1.05);
    }
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  z-index: 1001;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  
  ${props => props.isOpen && css`
    transform: translateX(0);
    animation: ${slideIn} 0.3s ease-in-out;
  `}
`;

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

  ${props => props.isOpen && css`
    opacity: 1;
    pointer-events: auto;
    animation: ${fadeIn} 0.3s ease-in-out;
  `}
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

const DrawerCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4500;
    transform: rotate(90deg);
  }
`;

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const DrawerLink = styled(NavLink)`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
    padding-left: 1.5rem;
  }
`;

const DrawerGetQuoteButton = styled(GetQuoteButton)`
  display: flex;
  margin: 1rem;
`;

const DrawerFooter = styled.div`
  margin-top: auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-top: 1px solid #e0e0e0;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 0.9rem;

  svg {
    margin-right: 0.5rem;
    color: #ff4500;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Logo>
          <img src="/api/placeholder/120/40" alt="Printex Logo" />
        </Logo>
        <Nav>
          <NavLink href="/" active>Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <SearchIcon size={20} aria-label="Search" tabIndex={0} />
          <GetQuoteButton>
            Get Quote <span>→</span>
          </GetQuoteButton>
        </Nav>
        <MenuIcon onClick={toggleMenu} aria-label="Open menu">
          <Menu size={24} />
        </MenuIcon>
      </HeaderContainer>

      <DrawerOverlay isOpen={isMenuOpen} onClick={toggleMenu} />
      <Drawer isOpen={isMenuOpen}>
        <DrawerHeader>
          <Logo>
            <img src="/api/placeholder/120/40" alt="Printex Logo" />
          </Logo>
          <DrawerCloseButton onClick={toggleMenu} aria-label="Close menu">
            <X size={24} />
          </DrawerCloseButton>
        </DrawerHeader>
        <DrawerNav>
          <DrawerLink href="/" active>Home <ChevronRight size={20} /></DrawerLink>
          <DrawerLink href="/about">About <ChevronRight size={20} /></DrawerLink>
          <DrawerLink href="/contact">Contact <ChevronRight size={20} /></DrawerLink>
        </DrawerNav>
        <DrawerGetQuoteButton>
          Get Quote <span>→</span>
        </DrawerGetQuoteButton>
        <DrawerFooter>
          <ContactInfo>
            <Phone size={16} /> +1 (123) 456-7890
          </ContactInfo>
          <ContactInfo>
            <Mail size={16} /> info@printex.com
          </ContactInfo>
          <ContactInfo>
            <MapPin size={16} /> 123 Printing St, Design City, 12345
          </ContactInfo>
        </DrawerFooter>
      </Drawer>
    </>
  );
};

export default Header;