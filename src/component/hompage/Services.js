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
  max-width: 1100px;
  margin: 0 auto;
  padding: 15px 0;
  font-family: 'Arial', sans-serif;

  @media (max-width: 1100px) {
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const CategoryGrid = styled.div`
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

const CategoryItem = styled.div`
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
`;

const CategoryImage = styled.img`
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

const CategoryName = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: #333;
  padding: 8px;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
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