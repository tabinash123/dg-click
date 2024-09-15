import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ShoppingCart, Printer } from 'lucide-react';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

// Styled Components

const DealSection = styled.section`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleTimerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;

const Timer = styled.div`
  display: flex;
  gap: 5px;
`;

const TimerUnit = styled.span`
  background-color: #e74c3c;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
  font-weight: bold;
`;

const ViewAllLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Product = styled.div`
  text-align: center;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const DiscountedPrice = styled.span`
  color: #e74c3c;
  font-weight: bold;
  margin-right: 5px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

const DiscountBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #e74c3c;
  color: white;
  padding: 2px 5px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const OrderButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #c0392b;
  }
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
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  ${props => props.direction === 'left' ? 'left: -20px;' : 'right: -20px;'}
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
  }
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide > div {
    padding: 0 10px;
  }
  .slick-track {
    margin-left: 0;
  }
`;

// DealOfTheDay Component

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);
  const [allProducts, setAllProducts] = useState([
    { name: 'Brochure Blue', price: 16, originalPrice: 20, discount: 20, type: 'Brochure' },
    { name: 'Catalogue Green', price: 18, type: 'Catalogue' },
    { name: 'Creative Life', price: 18, type: 'Poster' },
    { name: 'Invitation cards yellow', price: 12, type: 'Invitation' },
    { name: 'Business Cards Red', price: 10, originalPrice: 15, discount: 33, type: 'Business Card' },
    { name: 'Posters White', price: 25, originalPrice: 30, discount: 16, type: 'Poster' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 24 * 60 * 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=product&per_page=6',
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        const updatedProducts = allProducts.map((product, index) => ({
          ...product,
          image: response.data.photos[index]?.src.medium || 'https://via.placeholder.com/200',
        }));
        setAllProducts(updatedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const formatTime = (time) => time.toString().padStart(2, '0');

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

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

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
  };

  const handleOrder = (product) => {
    console.log('Ordered:', product);
    // Implement your order logic here
  };

  if (loading) return <div>Loading...</div>;

  return (
    <DealSection>
      <Header>
        <TitleTimerWrapper>
          <Title>Deal of The Day</Title>
          <Timer>
            <TimerUnit>{formatTime(hours)}</TimerUnit>:
            <TimerUnit>{formatTime(minutes)}</TimerUnit>:
            <TimerUnit>{formatTime(seconds)}</TimerUnit>
          </Timer>
        </TitleTimerWrapper>
        <ViewAllLink href="#">View All Products →</ViewAllLink>
      </Header>
      <StyledSlider {...settings}>
        {allProducts.map((product, index) => (
          <Product key={index}>
            {product.discount && <DiscountBadge>-{product.discount}%</DiscountBadge>}
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              <DiscountedPrice>${product.price.toFixed(2)}</DiscountedPrice>
              {product.originalPrice && (
                <OriginalPrice>${product.originalPrice.toFixed(2)}</OriginalPrice>
              )}
            </ProductPrice>
            <ActionsContainer>
              <IconButton title="Add to Cart" onClick={() => handleAddToCart(product)}>
                <ShoppingCart size={20} />
              </IconButton>
              <OrderButton onClick={() => handleOrder(product)}>
                Order Now
              </OrderButton>
            </ActionsContainer>
          </Product>
        ))}
      </StyledSlider>
    </DealSection>
  );
};

export default DealOfTheDay;