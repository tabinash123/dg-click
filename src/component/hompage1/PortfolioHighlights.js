import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const PortfolioItem = styled.div`
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const PortfolioTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const StyledChevronRight = styled(ChevronRight)`
  color: #e91e63;
  margin-left: 5px;
`;

const Button = styled.button`
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c2185b;
  }
`;

const PortfolioHighlights = () => {
  const portfolios = [
    {
      image: 'https://source.unsplash.com/featured/?wedding,couple',
      title: 'Bhim & Rakshya Wedding Highlights',
    },
    {
      image: 'https://source.unsplash.com/featured/?wedding,ceremony',
      title: 'Wedding Highlights',
    },
    {
      image: 'https://source.unsplash.com/featured/?wedding,celebration',
      title: 'Bimal Weds Kristina Wedding Highlights',
    },
  ];

  return (
    <Section>
      <Title>Photo Choice Nepal Portfolio Highlights</Title>
      <Subtitle>
        "Dive into our wedding portfolio, a captivating visual journey encapsulating the essence of love and cherished moments, where
        each frame tells a unique story of timeless romance and joy."
      </Subtitle>
      <PortfolioGrid>
        {portfolios.map((portfolio, index) => (
          <PortfolioItem key={index}>
            <Image src={portfolio.image} alt={portfolio.title} />
            <PortfolioTitle>
              {portfolio.title}
              <StyledChevronRight size={20} />
            </PortfolioTitle>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
      <Button>View More Portfolios</Button>
    </Section>
  );
};

export default PortfolioHighlights;