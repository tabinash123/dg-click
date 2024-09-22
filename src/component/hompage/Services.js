import React, { useRef } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const Title = styled.h2`
  color: #333;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: left;
`;

const CategoriesContainer = styled.div`
  position: relative;
  padding: 0px 40px;
`;

const CategoriesScroll = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  gap: 10px;
  padding: 10px 0;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  width: 180px;
`;

const CircleBackground = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  // object-fit: contain;
`;

const Categorycategory = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  max-width: 90%;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #e0e0e0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const LeftButton = styled(ScrollButton)`
  left: 0;
`;

const RightButton = styled(ScrollButton)`
  right: 0;
`;

const categories = [
  { category: "Visiting Cards", image: canvasPrinting },
  { category: "Custom Polo T-shirts", image: capPrinting },
  { category: "Custom T-shirts", image: tshirtPrinting },
  { category: "Custom Winter Wear", image: framePrinting },
  { category: "Custom Stamps & Ink", image: trophyPrinting },
  { category: "Photo Gifts", image: idCardPrinting },
];

const PrintingServices = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Section>
      <Title>Explore all categories</Title>
      <CategoriesContainer>
        <LeftButton onClick={() => scroll(-200)}>
          <ChevronLeft size={24} />
        </LeftButton>
        <CategoriesScroll ref={scrollRef}>
          {categories.map((category, index) => (
            <CategoryItem key={index}>
              <CircleBackground>
                <CategoryImage src={category.image} alt={category.category} />
              </CircleBackground>
              <Categorycategory>{category.category}</Categorycategory>
            </CategoryItem>
          ))}
        </CategoriesScroll>
        <RightButton onClick={() => scroll(200)}>
          <ChevronRight size={24} />
        </RightButton>
      </CategoriesContainer>
    </Section>
  );
};

export default PrintingServices;