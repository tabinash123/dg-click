import React, { useState } from 'react';
import styled from 'styled-components';
import { Image, Shirt, CreditCard, Award, Square, ChevronRight, Search } from 'lucide-react';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 8px;
`;

const SearchInput = styled.input`
  border: none;
  flex-grow: 1;
  font-size: 14px;
  outline: none;
`;

const SearchIcon = styled(Search)`
  color: #888;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ff0000;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff0000;
  }
`;

const CategoryText = styled.span`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
`;

const ShopSidebar = ({ onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'All', icon: Image },
    { name: 'Canvas', icon: Square },
    { name: 'Cap', icon: Image },
    { name: 'Frame', icon: Square },
    { name: 'ID Card', icon: CreditCard },
    { name: 'Trophy', icon: Award },
    { name: 'T-shirt', icon: Shirt },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can implement search functionality here
  };

  return (
    <SidebarContainer>
      <SearchContainer>
        <SearchInput 
          type="text" 
          placeholder="Search Product"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SearchIcon size={20} />
      </SearchContainer>

      <SectionTitle>Category</SectionTitle>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem key={index} onClick={() => onCategorySelect(category.name)}>
            <CategoryText>
              <IconWrapper>
                {React.createElement(category.icon, { size: 18 })}
              </IconWrapper>
              {category.name}
            </CategoryText>
            <ChevronRight size={16} />
          </CategoryItem>
        ))}
      </CategoryList>
    </SidebarContainer>
  );
};

export default ShopSidebar;