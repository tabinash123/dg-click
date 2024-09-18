import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Search, ShoppingCart, User, Bell } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeaderWrapper = styled.header`
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  color: #333333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background-color: #f8f9fa;
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
`;

const SearchBar = styled.form`
  display: flex;
  flex-grow: 1;
  margin: 0 20px;
  max-width: 600px;
  position: relative;
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
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const NavItem = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #ff6347;
    transform: translateY(-2px);
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
`;

const MainNav = styled.nav`
  background-color: #ffffff;
  padding: 20px 5%;
  border-top: 1px solid #eaeaea;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
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
`;

const StyledNavLink = styled(NavLink)`
  color: #333333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6347;
    transform: translateY(-2px);
  }

  &.active {
    color: #ff6347;
    border-bottom: 2px solid #ff6347;
  }
`;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
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
            <CartCount>3</CartCount>
          </CartButton>
          <NotificationBadge>
            <Bell size={24} />
            <Badge>2</Badge>
          </NotificationBadge>
        </RightSection>
      </TopBar>
      <MainNav>
        <NavItems>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/shop">Shop</StyledNavLink>
          <StyledNavLink to="/services">Services</StyledNavLink>
          <StyledNavLink to="/projects">Projects</StyledNavLink>
          <StyledNavLink to="/articles">Articles</StyledNavLink>
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </NavItems>
      </MainNav>
    </HeaderWrapper>
  );
};

export default Header;