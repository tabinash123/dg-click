import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ChevronRight as ArrowRight } from 'lucide-react';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  margin-bottom: 0px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const ViewAllLink = styled.a`
  display: flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  svg {
    margin-left: 5px;
  }
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const CategoryName = styled.p`
  font-size: 14px;
  text-align: center;
  max-width: 120px;
  word-wrap: break-word;
  color: #444;
  font-weight: 500;
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

const categories = [
  { name: "Visiting Cards", query: "business cards", description: "Professional business cards for networking and brand identity." },
  { name: "Custom Polo T-shirts", query: "polo shirt", description: "Personalized polo shirts for corporate or casual wear." },
  { name: "Custom T-shirts", query: "custom t-shirt", description: "Design your own t-shirts for events, promotions, or personal use." },
  { name: "Custom Winter Wear", query: "winter jacket", description: "Branded winter jackets and accessories for cold weather." },
  { name: "Custom Stamps & Ink", query: "rubber stamp", description: "Create custom stamps for business or personal use." },
  { name: "Photo Gifts", query: "photo mug", description: "Turn your favorite photos into unique gifts and keepsakes." },
  { name: "Labels, Stickers & Packaging", query: "product label", description: "Custom labels and packaging solutions for your products." },
  { name: "Custom Stationery", query: "custom stationery", description: "Personalized stationery sets for professional or personal use." },
  { name: "Signs, Posters & Marketing Materials", query: "marketing poster", description: "Eye-catching promotional materials for your business." },
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
              `https://api.pexels.com/v1/search?query=${category.query}&per_page=1&orientation=square`,
              {
                headers: {
                  Authorization: PEXELS_API_KEY,
                },
              }
            );
            return response.data.photos[0]?.src.medium || '/api/placeholder/120/120';
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
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  const handleViewAllClick = (e) => {
    e.preventDefault();
    console.log("View All Categories clicked");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Header>
        <Title>Explore all categories</Title>
        <ViewAllLink href="#" onClick={handleViewAllClick}>
          View All <ArrowRight size={18} />
        </ViewAllLink>
      </Header>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <ImageWrapper>
              <CategoryImage src={categoryImages[index]} alt={category.name} />
            </ImageWrapper>
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        ))}
      </Slider>
    </Section>
  );
};

export default ExploreCategories;
