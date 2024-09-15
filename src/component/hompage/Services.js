import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  margin-top:50px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #1e0e4b;
  margin: 0;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 0 10px;  // Add horizontal padding

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryName = styled.p`
  font-size: 16px;
  text-align: center;
  color: #333;
  font-weight: 600;
  margin: 0;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  ${props => props.direction === 'left' ? 'left: -20px;' : 'right: -20px;'}
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 10px;  // Add margin to create space between slides
  }

  .slick-list {
    margin: 0 -10px;  // Compensate for the added margin
  }
`;

const categories = [
  { name: "Card Design", query: "business card design" },
  { name: "Banner Printing", query: "banner printing" },
  { name: "Flyer Printing", query: "flyer printing" },
  { name: "Shirt Printing", query: "custom t-shirt printing" },
  { name: "Package Design", query: "package design" },
];

const ExploreCategories = () => {
  const [categoryImages, setCategoryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryImages = async () => {
      try {
        const images = await Promise.all(
          categories.map(async (category) => {
            const response = await axios.get(
              `https://api.pexels.com/v1/search?query=${category.query}&per_page=1`,
              {
                headers: {
                  Authorization: PEXELS_API_KEY,
                },
              }
            );
            return response.data.photos[0]?.src.medium || '/api/placeholder/400/200';
          })
        );
        setCategoryImages(images);
      } catch (error) {
        console.error('Error fetching category images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryImages();
  }, []);

  const CustomArrow = ({ direction, onClick }) => (
    <ArrowButton direction={direction} onClick={onClick}>
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </ArrowButton>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Header>
        <Title>Our Services</Title>
      </Header>
      <StyledSlider {...settings}>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <ImageWrapper>
              <CategoryImage src={categoryImages[index]} alt={category.name} />
            </ImageWrapper>
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        ))}
      </StyledSlider>
    </Section>
  );
};

export default ExploreCategories;