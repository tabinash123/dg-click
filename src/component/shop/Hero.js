import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import hero1 from '../../assets/hero/hero1.png';
import hero2 from '../../assets/hero/hero2.png';
import hero3 from '../../assets/hero/hero3.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(1.1); }
  to { opacity: 1; transform: scale(1); }
`;

const HeroContainer = styled.div`
  position: relative;
  width: calc(100% - 60px);
  height: 300px;
  overflow: hidden;
  margin: 30px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  ${props => props.active && css`
    animation: ${fadeIn} 0.5s ease-in-out;
  `}
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
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheadline = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

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
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const Indicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const ControlButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const heroContent = [
  {
    image: hero1,
    alt: 'Hero Image 1',
    headline: 'Welcome to Our Amazing Product',
    subheadline: 'Revolutionize your workflow with cutting-edge technology',
    ctaText: 'Get Started',
  },
  {
    image: hero2,
    alt: 'Hero Image 2',
    headline: 'Boost Your Productivity',
    subheadline: 'Streamline your tasks and achieve more in less time',
    ctaText: 'Learn More',
  },
  {
    image: hero3,
    alt: 'Hero Image 3',
    headline: 'Join Our Community',
    subheadline: 'Connect with like-minded professionals and grow together',
    ctaText: 'Sign Up Now',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <HeroContainer>
      {heroContent.map((content, index) => (
        <HeroSlide key={index} active={index === currentIndex}>
          <HeroImage src={content.image} alt={content.alt} />
          <Overlay />
          <ContentWrapper>
            <Headline>{content.headline}</Headline>
            <Subheadline>{content.subheadline}</Subheadline>
          </ContentWrapper>
        </HeroSlide>
      ))}
      
      <NavButton left onClick={prevSlide}>
        <ChevronLeft size={24} />
      </NavButton>
      
      <NavButton onClick={nextSlide}>
        <ChevronRight size={24} />
      </NavButton>
      
      <IndicatorWrapper>
        {heroContent.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </IndicatorWrapper>

      <ControlButton onClick={togglePlayPause}>
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </ControlButton>
    </HeroContainer>
  );
};

export default HeroSection;