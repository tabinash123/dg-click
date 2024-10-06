import React from 'react';
import styled from 'styled-components';
import cap1 from '../../assets/gallary/cap1.jpg';
import cap2 from '../../assets/gallary/cap2.jpg';
import cap3 from '../../assets/gallary/cap3 (2).jpg';
import cap4 from '../../assets/gallary/cap4.jpg';
import tshirt1 from '../../assets/gallary/tshirt1.jpg';
import tshirt3 from '../../assets/gallary/tshirt3.jpg';
import tshirt4 from '../../assets/gallary/tshirt4.jpg';
import frame3 from '../../assets/gallary/frame3.jpg';
import frame4 from '../../assets/gallary/frame4.jpg';
import frame5 from '../../assets/gallary/frame5.jpg';
import trophy3 from '../../assets/gallary/trophy3.jpg';
import trophy4 from '../../assets/gallary/trophy4.jpg';

const Section = styled.section`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 15px;
  font-family: 'Arial', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  background-color: #fff;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 130px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`;

const ProductInfo = styled.div`
  padding: 0.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProductPrice = styled.p`
  font-weight: 700;
  color: #ff4d4d;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const OtherProductsSection = () => {
  const products = [
    { name: "Stylish Cap 1", price: "$29.99", image: cap1 },
    { name: "Stylish Cap 2", price: "$34.99", image: cap2 },
    { name: "Stylish Cap 3", price: "$31.99", image: cap3 },
    { name: "Stylish Cap 4", price: "$27.99", image: cap4 },
    { name: "Comfortable T-Shirt 1", price: "$19.99", image: tshirt1 },
    { name: "Comfortable T-Shirt 2", price: "$24.99", image: tshirt3 },
    { name: "Comfortable T-Shirt 3", price: "$22.99", image: tshirt4 },
    { name: "Elegant Frame 1", price: "$39.99", image: frame3 },
    { name: "Elegant Frame 2", price: "$44.99", image: frame4 },
    { name: "Elegant Frame 3", price: "$41.99", image: frame5 },
    { name: "Trophy 1", price: "$49.99", image: trophy3 },
    { name: "Trophy 2", price: "$54.99", image: trophy4 },
  ];

  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Other Products</SectionTitle>
        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </ContentWrapper>
    </Section>
  );
};

export default OtherProductsSection;