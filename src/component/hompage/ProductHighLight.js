import React, { useState } from 'react';
import styled from 'styled-components';
import canvas2 from '../../assets/gallary/canvas2.jpg';
import canvas3 from '../../assets/gallary/canvas3.jpg';
import cap1 from '../../assets/gallary/cap1.jpg';
import cap2 from '../../assets/gallary/cap2.jpg';
import frame3 from '../../assets/gallary/frame3.jpg';
import id from '../../assets/gallary/id.jpg';
import trophy3 from '../../assets/gallary/trophy3.jpg';
import tshirt1 from '../../assets/gallary/tshirt1.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;  // Increased top and bottom padding
  font-family: 'Arial', sans-serif;
`;

const Subtitle = styled.h3`
  color: #FF4D4D;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 20px 0;  // Increased bottom margin
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 40px 0;  // Increased bottom margin
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;  // Increased margin
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${props => props.active ? '#FF4D4D' : '#4A5568'};
  margin: 0 20px;  // Increased horizontal margin
  cursor: pointer;
  padding: 5px 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #FF4D4D;
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.3s ease;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;  // Increased gap
`;

const ProductCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  // Added subtle shadow
`;

const ProductImageWrapper = styled.div`
  position: relative;
  height: 200px;
  background-color: #e0e0e0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #0A2540;
  color: white;
  padding: 4px 10px;  // Increased padding
  border-radius: 3px;
  font-weight: 600;
  font-size: 16px;
`;

const ProductInfo = styled.div`
  padding: 20px;  // Increased padding
`;

const ProductName = styled.h4`
  margin: 0 0 15px 0;  // Adjusted margin
  font-size: 17px;
  font-weight: 600;
  color: #0A2540;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const NewPrice = styled.span`
  font-weight: 600;
  color: #FF4D4D;
  font-size: 16px;
`;

// ... (products array remains unchanged)
const products = [
  { id: 1, name: 'Canvas Print', oldPrice: 270.50, newPrice: 230.50, discount: 60, image: canvas2, category: 'Canvas' },
  { id: 2, name: 'Promo Cap', oldPrice: 270.50, newPrice: 230.50, discount: 70, image: cap1, category: 'Caps' },
  { id: 3, name: 'Photo Frame', oldPrice: 270.50, newPrice: 230.50, discount: 80, image: frame3, category: 'Frames' },
  { id: 4, name: 'ID Card', oldPrice: 270.50, newPrice: 230.50, discount: 85, image: id, category: 'ID Cards' },
  { id: 5, name: 'Trophy', oldPrice: 270.50, newPrice: 230.50, discount: 75, image: trophy3, category: 'Trophies' },
  { id: 6, name: 'T-Shirt Print', oldPrice: 270.50, newPrice: 230.50, discount: 65, image: tshirt1, category: 'T-Shirts' },
  { id: 7, name: 'Canvas Art', oldPrice: 270.50, newPrice: 230.50, discount: 60, image: canvas3, category: 'Canvas' },
  { id: 8, name: 'Stylish Cap', oldPrice: 270.50, newPrice: 230.50, discount: 70, image: cap2, category: 'Caps' },
];
const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Canvas', 'Caps', 'Frames', 'ID Cards', 'Trophies', 'T-Shirts'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <Section>
      <Subtitle>Our Product</Subtitle>
      <Title>Featured Product</Title>
      <CategoryFilter>
        {categories.map(category => (
          <FilterButton 
            key={category} 
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </CategoryFilter>
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImageWrapper>
              <ProductImage src={product.image} alt={product.name} />
            </ProductImageWrapper>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <Price>
                <NewPrice>${product.newPrice.toFixed(2)}</NewPrice>
              </Price>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </Section>
  );
};

export default FeaturedProducts;