import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../assets/bannerimages/banner1.jpg';
import img2 from '../../assets/bannerimages/banner2.jpg';
import img3 from '../../assets/bannerimages/banner3.jpg';
import img4 from '../../assets/bannerimages/banner4.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const HeroContainer = styled.div`
  height: 400px;
  position: relative;
  overflow: hidden;
  font-family: Arial, sans-serif;

  @media (max-width: 1023px) {
    height: 350px;
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out, transform 5s ease-in-out;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  background: ${props => props.overlay};
  color: ${props => props.textColor};
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 1023px) {
    max-width: 60%;
    padding-left: 30px;
  }

  @media (max-width: 767px) {
    max-width: 80%;
    padding-left: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  animation: ${slideInLeft} 0.5s ease-out 0.2s both;

  @media (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: bold;
  animation: ${slideInRight} 0.5s ease-out 0.4s both;

  @media (max-width: 1023px) {
    font-size: 30px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Price = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  animation: ${slideInLeft} 0.5s ease-out 0.6s both;

  @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const OrderButton = styled.button`
  background-color: ${props => props.buttonColor};
  color: ${props => props.buttonTextColor};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  animation: ${scaleIn} 0.5s ease-out 0.8s both;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  @media (max-width: 1023px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  color: white;
  opacity: 0.7;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 1;
  }

  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}

  @media (max-width: 767px) {
    font-size: 20px;
    padding: 8px;
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;

  @media (max-width: 767px) {
    bottom: 10px;
    gap: 8px;
  }
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${props => props.active ? 'scale(1.2)' : 'scale(1)'};

  @media (max-width: 767px) {
    width: 8px;
    height: 8px;
  }
`;

// Dummy data for each banner
const bannerData = [
  {
    image: img1,
    subtitle: "Pen down your thoughts in style with",
    title: "Personalized Notebook",
    price: "Starting From ₹136",
    textColor: "white",
    overlay: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
    buttonColor: "#ff3e3e",
    buttonTextColor: "white"
  },
  {
    image: img2,
    subtitle: "Unleash your creativity with our",
    title: "Premium Sketchbooks",
    price: "From ₹199 onwards",
    textColor: "black",
    overlay: "linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
     buttonColor: "#ff3e3e",
    buttonTextColor: "white"
  },
  {
    image: img3,
    subtitle: "Stay organized with our",
    title: "Customized Planners",
    price: "Starting at ₹249",
    textColor: "white",
    overlay: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
     buttonColor: "#ff3e3e",
    buttonTextColor: "white"
  },
  {
    image: img4,
    subtitle: "Express yourself through our",
    title: "Artistic Journals",
    price: "Priced from ₹179",
    textColor: "black",
    overlay: "linear-gradient(to right, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
    buttonColor: "#ff3e3e",
    buttonTextColor: "white"
  }
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeSlide = (newIndex) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsChanging(false);
    }, 300);
  };

  const goToPrevious = () => {
    changeSlide((prevIndex) => (prevIndex - 1 + bannerData.length) % bannerData.length);
  };

  const goToNext = () => {
    changeSlide((prevIndex) => (prevIndex + 1) % bannerData.length);
  };

  const currentBanner = bannerData[currentImageIndex];

  return (
    <HeroContainer>
      {bannerData.map((banner, index) => (
        <BackgroundImage
          key={index}
          image={banner.image}
          active={index === currentImageIndex}
        />
      ))}
      <ContentWrapper 
        textColor={currentBanner.textColor}
        overlay={currentBanner.overlay}
        style={{ opacity: isChanging ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
      >
        <Subtitle>{currentBanner.subtitle}</Subtitle>
        <Title>{currentBanner.title}</Title>
        <Price>{currentBanner.price}</Price>
        <OrderButton 
          buttonColor={currentBanner.buttonColor}
          buttonTextColor={currentBanner.buttonTextColor}
        >
          ORDER NOW
        </OrderButton>
      </ContentWrapper>
      <NavButton left onClick={goToPrevious}><ChevronLeft size={24} /></NavButton>
      <NavButton onClick={goToNext}><ChevronRight size={24} /></NavButton>
      <IndicatorContainer>
        {bannerData.map((_, index) => (
          <Indicator 
            key={index} 
            active={index === currentImageIndex} 
            onClick={() => changeSlide(index)}
          />
        ))}
      </IndicatorContainer>
    </HeroContainer>
  );
};

export default HeroSection;