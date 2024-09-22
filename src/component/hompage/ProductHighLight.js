import React from 'react';
import styled from 'styled-components';

// Import the images
import canvas2 from '../../assets/gallary/canvas2.jpg';
import canvas3 from '../../assets/gallary/canvas3.jpg';
import cap1 from '../../assets/gallary/cap1.jpg';
import cap2 from '../../assets/gallary/cap2.jpg';

const Section = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: left;
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  // background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 0.5rem;
  text-align: left;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin: 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.25rem 0 0;
  color: #666;
`;

const products = [
  { id: 1, name: "Welcome Kit", price: 796, image: canvas2 },
  { id: 2, name: "Coffee Mugs", price: 153, image: canvas3 },
  { id: 3, name: "Water Bottles", price: 353, image: cap1 },
  { id: 4, name: "Acrylic Photo Frames", price: 531, image: cap2 },
  { id: 5, name: "Diaries", price: 443, image: canvas2 },
];

const MostPopularProducts = () => {
  return (
    <Section>
      <Title>Most Popular Products</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>₹{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </Section>
  );
};

export default MostPopularProducts;