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
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #333;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  justify-content: center;
`;

const CategoryItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  background-color: #fff;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CategoryName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 12px;
  margin: 0;
  text-align: center;
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