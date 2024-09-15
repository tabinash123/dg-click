import React from 'react';
import styled from 'styled-components';
import { Coffee, Disc, CreditCard, Shirt, Image, Calendar, Frame } from 'lucide-react';

const SidebarContainer = styled.div`
  width: 250px;
  height: max-content;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #ff0000;
  color: white;
  padding: 15px;
  font-weight: bold;
  text-align: center;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  flex-grow: 1;
`;

const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CategoryIcon = styled.span`
  margin-right: 10px;
`;

const CategoryText = styled.span`
  flex-grow: 1;
`;

const ShopSidebar = ({ onCategorySelect }) => {
  const categories = [
    { name: 'All', icon: Image },
    { name: 'Cup', icon: Coffee },
    { name: 'Plate', icon: Image },
    { name: 'Cap', icon: Image },
    { name: 'T-shirt', icon: Shirt },
    { name: 'CD/DVD', icon: Disc },
    { name: 'PVC Card', icon: CreditCard },
    { name: 'Tiles', icon: Image },
    { name: 'Calendar', icon: Calendar },
    { name: 'Frame', icon: Frame },
  ];

  return (
    <SidebarContainer>
      <Header>SHOP BY CATEGORIES</Header>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem key={index} onClick={() => onCategorySelect(category.name)}>
            <CategoryIcon>
              {React.createElement(category.icon, { size: 18 })}
            </CategoryIcon>
            <CategoryText>{category.name}</CategoryText>
          </CategoryItem>
        ))}
      </CategoryList>
    </SidebarContainer>
  );
};

export default ShopSidebar;