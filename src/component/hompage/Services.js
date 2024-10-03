import React from 'react';
import styled from 'styled-components';

// Import your images here (keep the existing imports)
import canvasPrinting from '../../assets/gallary/canvas2.jpg';
import capPrinting from '../../assets/gallary/cap2.jpg';
import framePrinting from '../../assets/gallary/frame3.jpg';
import idCardPrinting from '../../assets/gallary/id.jpg';
import trophyPrinting from '../../assets/gallary/trophy4.jpg';
import tshirtPrinting from '../../assets/gallary/tshirt3.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  font-family: 'Arial', sans-serif;

  @media (max-width: 1200px) {
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background-color: #e0e0e0;
  border: 1px solid #e0e0e0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CategoryItem = styled.div`
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    z-index: 1;
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }

  @media (max-width: 320px) {
    height: 120px;
  }
`;

const CategoryName = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: #333;
  padding: 10px;
  margin: 0;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }

  @media (max-width: 320px) {
    font-size: 11px;
    padding: 6px;
  }
`;

const categories = [
  { name: "Visiting Cards", image: canvasPrinting },
  { name: "Custom Polo T-shirts", image: capPrinting },
  { name: "Custom T-shirts", image: tshirtPrinting },
  { name: "Custom Winter Wear", image: framePrinting },
  { name: "Custom Stamps & Ink", image: trophyPrinting },
  { name: "Photo Gifts", image: idCardPrinting },
  { name: "Banners", image: canvasPrinting },
  { name: "Posters", image: capPrinting },
];

const Services = () => {
  return (
    <Section>
      <ContentWrapper>
        <Title>Popular Categories</Title>
        <Subtitle>Discover our curated selection of best-selling custom-printed products</Subtitle>
        <CategoryGrid>
          {categories.map((category, index) => (
            <CategoryItem key={index}>
              <CategoryImage src={category.image} alt={category.name} />
              <CategoryName>{category.name}</CategoryName>
            </CategoryItem>
          ))}
        </CategoryGrid>
      </ContentWrapper>
    </Section>
  );
};

export default Services;