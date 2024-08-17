import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, Search, Menu } from 'lucide-react';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
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
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 1rem;
  }
`;

const NavItem = styled.div`
  position: relative;
  
  &:hover > ul {
    display: block;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4500;
  }

  @media (max-width: 1024px) {
    padding: 0.75rem 1rem;
  }
`;

const Dropdown = styled.ul`
  display: none;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 150px;
  z-index: 1;

  @media (max-width: 1024px) {
    position: static;
    box-shadow: none;
    padding-left: 1rem;
  }
`;

const DropdownItem = styled.li`
  list-style: none;
  
  a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const SearchIcon = styled(Search)`
  margin-left: 1rem;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4500;
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
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e63900;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ArrowIcon = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.3s ease;

  ${GetQuoteButton}:hover & {
    transform: translateX(3px);
  }
`;

const MenuIcon = styled(Menu)`
  display: none;
  cursor: pointer;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src="/api/placeholder/120/40" alt="Printex Logo" />
      </Logo>
      <MenuIcon onClick={toggleMenu} size={24} />
      <Nav isOpen={isMenuOpen}>
        <NavItem>
          <NavLink href="#" active>
            Home <ChevronDown size={12} style={{ marginLeft: '4px' }} />
          </NavLink>
          <Dropdown>
            <DropdownItem><a href="#">Home Style 1</a></DropdownItem>
            <DropdownItem><a href="#">Home Style 2</a></DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Pages <ChevronDown size={12} style={{ marginLeft: '4px' }} />
          </NavLink>
          <Dropdown>
            <DropdownItem><a href="#">Team</a></DropdownItem>
            <DropdownItem><a href="#">Pricing</a></DropdownItem>
            <DropdownItem><a href="#">FAQ</a></DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Services <ChevronDown size={12} style={{ marginLeft: '4px' }} />
          </NavLink>
          <Dropdown>
            <DropdownItem><a href="#">Offset Printing</a></DropdownItem>
            <DropdownItem><a href="#">Digital Printing</a></DropdownItem>
            <DropdownItem><a href="#">Design Services</a></DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Projects <ChevronDown size={12} style={{ marginLeft: '4px' }} />
          </NavLink>
          <Dropdown>
            <DropdownItem><a href="#">Project Grid</a></DropdownItem>
            <DropdownItem><a href="#">Project Masonry</a></DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Blog <ChevronDown size={12} style={{ marginLeft: '4px' }} />
          </NavLink>
          <Dropdown>
            <DropdownItem><a href="#">Blog Grid</a></DropdownItem>
            <DropdownItem><a href="#">Blog Single</a></DropdownItem>
          </Dropdown>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
        <SearchIcon size={20} aria-label="Search" />
        <GetQuoteButton>
          Get Quote <ArrowIcon>→</ArrowIcon>
        </GetQuoteButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;