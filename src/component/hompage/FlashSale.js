import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';
import id from '../../assets/gallary/id.jpg';
import id2 from '../../assets/gallary/id2.jpg';
import id4 from '../../assets/gallary/id4.jpg';
import tshirt1 from '../../assets/gallary/tshirt1.jpg';

const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px'
};

const Section = styled.section`
  max-width: 1400px;
  margin: 1rem auto;
  padding: 0 20px;
  font-family: 'Arial', sans-serif;

  @media (max-width: ${breakpoints.xl}) {
    max-width: 1200px;
  }

  @media (max-width: ${breakpoints.lg}) {
    max-width: 992px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 768px;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    padding: 0 15px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  color: #333;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  
  @media (max-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductCard = styled.div`
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    z-index: 1;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: ${breakpoints.md}) {
    height: 180px;
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 160px;
  }

  @media (max-width: ${breakpoints.xs}) {
    height: 140px;
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8f9fa;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 14px;
  }
`;

const ProductPrice = styled.p`
  font-weight: 700;
  color: #ff4d4d;
  font-size: 18px;
  margin-bottom: 0.5rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 16px;
  }
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-right: 0.5rem;
  font-size: 14px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 12px;
  }
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
`;

const FlashSale = () => {
  const products = [
    { name: "Premium ID Card Holder", price: "$19.99", oldPrice: "$29.99", image: id },
    { name: "Exclusive ID Badge", price: "$14.99", oldPrice: "$24.99", image: id2 },
    { name: "Deluxe ID Lanyard", price: "$9.99", oldPrice: "$19.99", image: id4 },
    { name: "Classic White Tee", price: "$24.99", oldPrice: "$34.99", image: tshirt1 },
  ];
 
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Flash Sale</SectionTitle>
        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>
                  {product.oldPrice && <OldPrice>{product.oldPrice}</OldPrice>}
                  {product.price}
                </ProductPrice>
                <ProductRating>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" stroke="#ffc107" />
                  ))}
                  <span style={{ fontSize: '14px' }}>(4.5)</span>
                </ProductRating>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </ContentWrapper>
    </Section>
  );
};

export default FlashSale;