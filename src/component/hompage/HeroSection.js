import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../../assets/hero/hero1.png';
import hero2 from '../../assets/hero/hero2.png';
import hero3 from '../../assets/hero/hero3.png';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;  // Subtracting 60px to account for 30px margin on each side
  height: 500px;
  overflow: hidden;
 // Adding 30px margin on left and right
`;

const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheadline = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CTAButton = styled.button`
  background-color: #007bff;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
`;

const Indicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 80%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const heroContent = [
  {
    image: hero1,
    alt: 'Hero Image 1',
    headline: 'Welcome to Our Amazing Product',
    subheadline: 'Revolutionize your workflow with cutting-edge technology',
    ctaText: 'Get Started'
  },
  {
    image: hero2,
    alt: 'Hero Image 2',
    headline: 'Boost Your Productivity',
    subheadline: 'Streamline your tasks and achieve more in less time',
    ctaText: 'Learn More'
  },
  {
    image: hero3,
    alt: 'Hero Image 3',
    headline: 'Join Our Community',
    subheadline: 'Connect with like-minded professionals and grow together',
    ctaText: 'Sign Up Now'
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      {heroContent.map((content, index) => (
        <HeroSlide key={index} active={index === currentIndex}>
          <HeroImage src={content.image} alt={content.alt} />
          <Overlay />
          <ContentWrapper>
            <Headline>{content.headline}</Headline>
            <Subheadline>{content.subheadline}</Subheadline>
            <CTAButton>{content.ctaText}</CTAButton>
          </ContentWrapper>
        </HeroSlide>
      ))}
      
      {/* <NavButton left onClick={prevSlide}>
        <ChevronLeft size={20} />
      </NavButton> */}
      
      {/* <NavButton onClick={nextSlide}>
        <ChevronRight size={20} />
      </NavButton> */}
      
      <IndicatorWrapper>
        {heroContent.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </IndicatorWrapper>
    </HeroContainer>
  );
};

export default HeroSection;