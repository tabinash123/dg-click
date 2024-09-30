import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { Search, ShoppingCart, User, Bell, Menu, X, Home, Info, ShoppingBag, Briefcase, FileText, Mail, Image, Package, Coffee, Award, Shirt } from 'lucide-react';
import { useSelector } from 'react-redux';




const HeaderWrapper = styled.header`
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  color: #333333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;

  @media (max-width: 1023px) {
    padding: 12px 4%;
  }

  @media (max-width: 767px) {
    padding: 10px 3%;
  }
`;

const Logo = styled(Link)`
  font-size: 32px;
  font-weight: 800;
  color: #ff6347;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: -1px;

  &:hover {
    color: #ff4500;
    transform: scale(1.05);
  }

  @media (max-width: 1023px) {
    font-size: 28px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const SearchBar = styled.form`
  display: flex;
  flex-grow: 1;
  margin: 0 20px;
  max-width: 600px;
  position: relative;

  @media (max-width: 1023px) {
  max-width: 400px;
    margin: 15px 0;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6347;
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.2);
  }

  @media (max-width: 1023px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ff6347;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff4500;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 1023px) {
    padding: 6px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 1023px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    gap: 15px;
  }
`;

const NavItem = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  // align-items: center;
  gap: 5px;

  &:hover {
    color: #ff6347;
    transform: translateY(-2px);
  }

  @media (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const CartButton = styled(NavItem)`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff6347;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 10px;
    padding: 1px 4px;
  }
`;

const MainNav = styled.nav`
  background-color: #ffffff;
  padding: 20px 3%;
  border-top: 1px solid #eaeaea;

  @media (max-width: 1023px) {
    padding: 15px 4%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  // gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 1023px) {
    gap: 20px;
  }
`;

const AccountDropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const NotificationBadge = styled.div`
  position: relative;
  cursor: pointer;
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff6347;
  color: white;
  border-radius: 50%;
  padding: 2px 5px;
  font-size: 10px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 8px;
    padding: 1px 3px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #333333;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6347;
    transform: translateY(-2px);
  }

  &.active {
    color: #ff6347;
    border-bottom: 2px solid #ff6347;
  }

  @media (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: #333333;

  @media (max-width: 767px) {
    display: block;
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 350px;
  background-color: #ffffff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    max-width: none;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eaeaea;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333333;
  font-size: 18px;
`;

const DrawerNavItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`;

const DrawerNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  color: #333333;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
    color: #ff6347;
  }

  &.active {
    color: #ff6347;
    background-color: #fff0ee;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 8px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;
const DrawerDivider = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea;
  margin: 5px 0;
`;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <HeaderWrapper>
      <TopBar>
        <Logo to="/">DG-Click</Logo>
        <SearchBar onSubmit={handleSearchSubmit}>
          <SearchInput 
            type="text" 
            placeholder="Search for products, brands and more..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton type="submit">
            <Search size={20} color="#ffffff" />
          </SearchButton>
        </SearchBar>
        <RightSection>
          <AccountDropdown onClick={toggleAccountDropdown}>
            <NavItem as="div">
              <User size={20} />
            </NavItem>
          </AccountDropdown>
          <NavItem to="/orders">
            Orders
          </NavItem>
          <CartButton to="/cart">
            <ShoppingCart size={24} />
            <CartCount>{totalItems}</CartCount>
          </CartButton>
          <NotificationBadge>
            <Bell size={24} />
            <Badge>2</Badge>
          </NotificationBadge>
          <MenuButton onClick={toggleDrawer}>
            <Menu size={24} />
          </MenuButton>
        </RightSection>
      </TopBar>
      <MainNav>
        <NavItems>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/frames">Frames</StyledNavLink>
          <StyledNavLink to="/cushions">Cushions</StyledNavLink>
          <StyledNavLink to="/canvas">Canvas</StyledNavLink>
          <StyledNavLink to="/cups">Cups</StyledNavLink>
          <StyledNavLink to="/ad-materials">Ad Materials</StyledNavLink>
          <StyledNavLink to="/trophies">Trophies</StyledNavLink>
          <StyledNavLink to="/t-shirt-printing">T-Shirt Printing</StyledNavLink>
          <StyledNavLink to="/ourservice">Our Services</StyledNavLink>
          <StyledNavLink to="/about">About-Us</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavItems>
      </MainNav>
      <Drawer isOpen={isDrawerOpen}>
        <DrawerHeader>
          <Logo to="/" onClick={toggleDrawer}>DG-Click</Logo>
          <CloseButton onClick={toggleDrawer}>
            <X size={24} />
          </CloseButton>
        </DrawerHeader>
        <DrawerNavItems>
          <DrawerNavLink to="/" end onClick={toggleDrawer}>
            Home
          </DrawerNavLink>
          <DrawerDivider />       
          <DrawerNavLink to="/frames" onClick={toggleDrawer}>
           Frames
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/cushions" onClick={toggleDrawer}>
            Cushions
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/canvas" onClick={toggleDrawer}>
            Canvas
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/cups" onClick={toggleDrawer}>
            Cups
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/ad-materials" onClick={toggleDrawer}>
             Ad Materials
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/trophies" onClick={toggleDrawer}>
             Trophies
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/t-shirt-printing" onClick={toggleDrawer}>
             T-Shirt Printing
          </DrawerNavLink>
          <DrawerNavLink to="/ourservice" onClick={toggleDrawer}>
             Our Services
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/about" onClick={toggleDrawer}>
            About
          </DrawerNavLink>
          <DrawerDivider />
          <DrawerNavLink to="/contact" onClick={toggleDrawer}>
            Contact
          </DrawerNavLink>
        </DrawerNavItems>
       
      </Drawer>
      <Overlay isOpen={isDrawerOpen} onClick={toggleDrawer} />
    </HeaderWrapper>
  );
};

export default Header;