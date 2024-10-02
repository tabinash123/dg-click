import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';
import canvas1 from '../../assets/gallary/canvas1.jpg';
import canvas2 from '../../assets/gallary/canvas2.jpg';
import canvas3 from '../../assets/gallary/canvas3.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 5rem auto;
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
  margin-bottom: 50px;
  text-align: center;
  color: #333;
`;

const ShoeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  justify-content: center;
`;

const ShoeCard = styled.div`
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.bgColor || '#f0f0f0'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const NewTag = styled.span`
  background-color: #ff4d4d;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-weight: bold;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  margin-bottom: 0.75rem;
  color: white;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const FeaturedShoesSection = () => {
  const shoes = [
    { name: "Red Canvas Shoes", bgColor: "#ff4d4d", image: canvas1 },
    { name: "Black Canvas Sneakers", bgColor: "#333", image: canvas2 },
    { name: "Orange Canvas Shoes", bgColor: "#ff8c00", image: canvas3 },
   { name: "Yellow Canvas Sneakers", bgColor: "#f1c40f", image: canvas2 },
  ];


  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Featured Shoes</SectionTitle>
        <ShoeGrid>
          {shoes.map((shoe, index) => (
            <ShoeCard key={index} bgColor={shoe.bgColor}>
              <NewTag>New</NewTag>
              <ProductImage src={shoe.image} alt={shoe.name} />
              <ProductInfo>
                <ProductName>{shoe.name}</ProductName>
                <ProductRating>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="white" stroke="white" />
                  ))}
                </ProductRating>
              </ProductInfo>
            </ShoeCard>
          ))}
        </ShoeGrid>
      </ContentWrapper>
    </Section>
  );
};

export default FeaturedShoesSection;