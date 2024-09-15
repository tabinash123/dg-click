import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
`;

const Subtitle = styled.h3`
  color: #FF6B35;
  font-size: 18px;
  text-align: center;
  margin: 0;
  font-weight: normal;
`;

const Title = styled.h2`
  color: #004225;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 30px;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${props => props.active ? '#FF6B35' : '#333'};
  margin: 0 15px;
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
    background-color: #FF6B35;
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.3s ease;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  // background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  background-color: #004225;
  color: white;
  padding: 2px 8px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 14px;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h4`
  margin: 10px 0;
  font-size: 18px;
  color: #333;
`;

const Stars = styled.div`
  color: #FFD700;
  font-size: 18px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
  font-size: 14px;
`;

const NewPrice = styled.span`
  font-weight: bold;
  color: #FF6B35;
  font-size: 18px;
`;

const products = [
  { id: 1, name: 'Eco Shopping Bag', oldPrice: 270.50, newPrice: 230.50, discount: 60, query: 'eco shopping bag', rating: 4, category: 'Bags & Caps' },
  { id: 2, name: 'Promo Trucker Hat', oldPrice: 270.50, newPrice: 230.50, discount: 70, query: 'trucker hat', rating: 4, category: 'Bags & Caps' },
  { id: 3, name: 'Paper Cups Coffee', oldPrice: 270.50, newPrice: 230.50, discount: 80, query: 'paper coffee cup', rating: 4, category: 'Mug & Paper Cups' },
  { id: 4, name: 'Business card', oldPrice: 270.50, newPrice: 230.50, discount: 85, query: 'business card', rating: 4, category: 'Business Card' },
  { id: 2, name: 'Promo Trucker Hat', oldPrice: 270.50, newPrice: 230.50, discount: 70, query: 'trucker hat', rating: 4, category: 'Bags & Caps' },
  { id: 3, name: 'Paper Cups Coffee', oldPrice: 270.50, newPrice: 230.50, discount: 80, query: 'paper coffee cup', rating: 4, category: 'Mug & Paper Cups' },
  { id: 4, name: 'Business card', oldPrice: 270.50, newPrice: 230.50, discount: 85, query: 'business card', rating: 4, category: 'Business Card' },
];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [productImages, setProductImages] = useState({});

  const categories = ['All', 'Business Card', 'Mug & Paper Cups', 'Branding', 'Bags & Caps'];

  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = products.map(product =>
        axios.get(`https://api.pexels.com/v1/search?query=${product.query}&per_page=1`, {
          headers: { Authorization: PEXELS_API_KEY }
        })
      );

      try {
        const responses = await Promise.all(imagePromises);
        const images = responses.reduce((acc, response, index) => {
          acc[products[index].id] = response.data.photos[0].src.medium;
          return acc;
        }, {});
        setProductImages(images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

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
              <ProductImage src={productImages[product.id] || '/api/placeholder/300/200'} alt={product.name} />
              <DiscountTag>-{product.discount}%</DiscountTag>
            </ProductImageWrapper>
            <ProductInfo>
              <Stars>{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</Stars>
              <ProductName>{product.name}</ProductName>
              <Price>
                {/* <OldPrice>${product.oldPrice.toFixed(2)}</OldPrice> */}
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