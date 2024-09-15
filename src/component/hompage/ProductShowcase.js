import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  animation: ${fadeIn} 0.5s ease-in;
`;

const Section = styled.div`
  width: 23%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e74c3c;
    transition: width 0.3s ease;
  }

  ${Section}:hover &::after {
    width: 100%;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Product = styled.div`
  display: flex;
  gap: 15px;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #f8f8f8;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transform: scale(1.02);
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 5px;

  ${Product}:hover & {
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductName = styled.h3`
  font-size: 14px;
  margin: 0;
  font-weight: normal;
  transition: color 0.3s ease;

  ${Product}:hover & {
    color: #e74c3c;
  }
`;

const ProductPrice = styled.p`
  font-size: 14px;
  margin: 5px 0;
  font-weight: bold;
`;

const DiscountedPrice = styled.span`
  color: #e74c3c;
  margin-right: 5px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-weight: normal;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const Banner = styled.div`
  width: 23%;
  background-color: #fdf0d5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

const SaveTag = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  transition: transform 0.3s ease;
  border-radius: 3px;

  ${Banner}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const BannerTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const BannerImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  border-radius: 5px;

  ${Banner}:hover & {
    transform: scale(1.05);
  }
`;

const ShopNowButton = styled.button`
  background-color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e74c3c;
    color: white;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #e74c3c;
    transform: scale(1.2);
  }
`;

const ProductShowcase = () => {
  const [images, setImages] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=product&per_page=10',
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        setImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const renderStars = (rating) => {
    return Array(5).fill().map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        fill={i < rating ? "#ffc107" : "none"} 
        stroke={i < rating ? "#ffc107" : "#999"}
        style={{ transition: 'all 0.3s ease', transform: hoveredProduct ? 'scale(1.2)' : 'scale(1)' }}
      />
    ));
  };

  const getImage = (index) => images[index]?.src.medium || '/api/placeholder/80/80';

  return (
    <Container>
      <Section>
        <SectionTitle>Best Seller</SectionTitle>
        <ProductList>
          <Product 
            onMouseEnter={() => setHoveredProduct('coffee-mugs')}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <ProductImage src={getImage(0)} alt="Coffee Mugs" />
            <ProductInfo>
              <ProductName>Coffee Mugs</ProductName>
              <Rating>{renderStars(4.5)}</Rating>
              <ProductPrice>$16.00 - $26.00</ProductPrice>
            </ProductInfo>
          </Product>
          <Product 
            onMouseEnter={() => setHoveredProduct('box-package')}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <ProductImage src={getImage(1)} alt="Box Package" />
            <ProductInfo>
              <ProductName>Box Package</ProductName>
              <ProductPrice>$10.00</ProductPrice>
            </ProductInfo>
          </Product>
          <Product 
            onMouseEnter={() => setHoveredProduct('brochure-blue')}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <ProductImage src={getImage(2)} alt="Brochure Blue" />
            <ProductInfo>
              <ProductName>Brochure Blue</ProductName>
              <ProductPrice>
                <DiscountedPrice>$16.00</DiscountedPrice>
                <OriginalPrice>$20.00</OriginalPrice>
              </ProductPrice>
            </ProductInfo>
          </Product>
        </ProductList>
        <NavigationButtons>
          <NavButton><ChevronLeft size={20} /></NavButton>
          <NavButton><ChevronRight size={20} /></NavButton>
        </NavigationButtons>
      </Section>

      <Section>
        <SectionTitle>Top Sale</SectionTitle>
        <ProductList>
          <Product>
            <ProductImage src={getImage(3)} alt="Product Price by Options Toggle" />
            <ProductInfo>
              <ProductName>Product Price by Options Toggle</ProductName>
              <ProductPrice>$16.00 - $26.00</ProductPrice>
            </ProductInfo>
          </Product>
          <Product>
            <ProductImage src={getImage(4)} alt="Product Price by Options" />
            <ProductInfo>
              <ProductName>Product Price by Options</ProductName>
              <ProductPrice>$16.00 - $26.00</ProductPrice>
            </ProductInfo>
          </Product>
          <Product>
            <ProductImage src={getImage(5)} alt="Brochure Blue" />
            <ProductInfo>
              <ProductName>Brochure Blue</ProductName>
              <ProductPrice>
                <DiscountedPrice>$16.00</DiscountedPrice>
                <OriginalPrice>$20.00</OriginalPrice>
              </ProductPrice>
            </ProductInfo>
          </Product>
        </ProductList>
        <NavigationButtons>
          <NavButton><ChevronLeft size={20} /></NavButton>
          <NavButton><ChevronRight size={20} /></NavButton>
        </NavigationButtons>
      </Section>

      <Section>
        <SectionTitle>Top Rated</SectionTitle>
        <ProductList>
          <Product>
            <ProductImage src={getImage(6)} alt="Corporate trifold Package" />
            <ProductInfo>
              <ProductName>Corporate trifold Package</ProductName>
              <Rating>{renderStars(4)}</Rating>
              <ProductPrice>$36.00</ProductPrice>
            </ProductInfo>
          </Product>
          <Product>
            <ProductImage src={getImage(7)} alt="Corporate trifold brochure" />
            <ProductInfo>
              <ProductName>Corporate trifold brochure</ProductName>
              <ProductPrice>$28.00</ProductPrice>
            </ProductInfo>
          </Product>
          <Product>
            <ProductImage src={getImage(8)} alt="Elegant Business Card" />
            <ProductInfo>
              <ProductName>Elegant Business Card</ProductName>
              <ProductPrice>
                <DiscountedPrice>$28.00</DiscountedPrice>
                <OriginalPrice>$32.00</OriginalPrice>
              </ProductPrice>
            </ProductInfo>
          </Product>
        </ProductList>
        <NavigationButtons>
          <NavButton><ChevronLeft size={20} /></NavButton>
          <NavButton><ChevronRight size={20} /></NavButton>
        </NavigationButtons>
      </Section>

      <Banner>
        <SaveTag>SAVE 20%</SaveTag>
        <BannerTitle>Kraft Paper Postal Package</BannerTitle>
        <BannerImage src={getImage(9)} alt="Kraft Paper Postal Package" />
        <ShopNowButton>Shop Now</ShopNowButton>
      </Banner>
    </Container>
  );
};

export default ProductShowcase;