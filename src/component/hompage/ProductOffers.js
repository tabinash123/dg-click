import React from 'react';
import styled from 'styled-components';
import { Star, ShoppingCart } from 'lucide-react';
import id from '../../assets/gallary/id.jpg';
import id2 from '../../assets/gallary/id2.jpg';
import id4 from '../../assets/gallary/id4.jpg';
import tshirt1 from '../../assets/gallary/tshirt1.jpg';
import tshirt3 from '../../assets/gallary/tshirt3.jpg';
import tshirt4 from '../../assets/gallary/tshirt4.jpg';
import cap1 from '../../assets/gallary/cap1.jpg';
import cap2 from '../../assets/gallary/cap2.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 20px;
  font-family: 'Arial', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 60px;
  text-align: center;
  color: #333;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  justify-content: center;
`;

const ProductCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
`;

const ProductInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  color: #ff4d4d;
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-right: 0.5rem;
  font-size: 14px;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
`;

const BuyButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff3333;
  }
`;

const FeaturedProductsSection = () => {
  const products = [
    { name: "Premium ID Card Holder", price: "$19.99", oldPrice: "$29.99", image: id },
    { name: "Exclusive ID Badge", price: "$14.99", oldPrice: "$24.99", image: id2 },
    { name: "Deluxe ID Lanyard", price: "$9.99", oldPrice: "$19.99", image: id4 },
    { name: "Classic White Tee", price: "$24.99", oldPrice: "$34.99", image: tshirt1 },
  ];


  
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Featured Products</SectionTitle>
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
                <BuyButton>
                  <ShoppingCart size={16} />
                  Add to Cart
                </BuyButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </ContentWrapper>
    </Section>
  );
};

export default FeaturedProductsSection;