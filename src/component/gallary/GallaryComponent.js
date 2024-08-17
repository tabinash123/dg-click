import React from 'react';
import styled from 'styled-components';

// Import custom fonts
import '@fontsource/cinzel-decorative';
import '@fontsource/cormorant-garamond';

// Image imports
import img1 from '../../assets/gallary/1723366699267.jpg';
import img2 from '../../assets/gallary/1723366699280.jpg';
import img3 from '../../assets/gallary/1723366699291.jpg';
import img4 from '../../assets/gallary/1723366699308.jpg';
import img5 from '../../assets/gallary/1723366699322.jpg';
import img6 from '../../assets/gallary/1723366699350.jpg';
import img7 from '../../assets/gallary/1723366699363.jpg';
import img8 from '../../assets/gallary/1723366699378.jpg';
import img9 from '../../assets/gallary/1723366699391.jpg';
import img10 from '../../assets/gallary/1723366699418.jpg';
import img11 from '../../assets/gallary/1723366699432.jpg';
import img12 from '../../assets/gallary/1723366699447.jpg';
import img13 from '../../assets/gallary/1723366699459.jpg';
import img14 from '../../assets/gallary/1723366699471.jpg';
import img15 from '../../assets/gallary/1723366699485.jpg';
import img16 from '../../assets/gallary/1723366699496.jpg';

const breakpoints = {
  mobile: '576px',
  tablet: '992px',
  desktop: '1200px',
};

const GallerySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #111;
  color: #f5f5f5;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path_to_your_tattoo_pattern.png');
    opacity: 0.05;
    z-index: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 10px;
  }
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #d4af37;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
    margin: 20px auto 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 1 / 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(212, 175, 55, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
  transition: filter 0.3s ease;

  ${ImageContainer}:hover & {
    filter: brightness(70%) contrast(120%);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ImageContainer}:hover & {
    transform: translateY(0);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

const ImageTitle = styled.h3`
  font-family: 'Cinzel Decorative', cursive;
  color: #d4af37;
  margin: 0;
  font-size: 1.2rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ImageDescription = styled.p`
  font-family: 'Cormorant Garamond', serif;
  color: #cccccc;
  margin: 5px 0 0;
  font-size: 0.9rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

const Gallery = () => {
  const images = [
    { src: img1, alt: 'Gallery Image 1', title: 'Classic Rose', description: 'Traditional American tattoo style' },
    { src: img2, alt: 'Gallery Image 2', title: 'Tribal Pattern', description: 'Bold black tribal design' },
    { src: img3, alt: 'Gallery Image 3', title: 'Watercolor Bird', description: 'Vibrant watercolor technique' },
    { src: img4, alt: 'Gallery Image 4', title: 'Geometric Wolf', description: 'Modern geometric animal portrait' },
    { src: img5, alt: 'Gallery Image 5', title: 'Japanese Dragon', description: 'Traditional Irezumi style' },
    { src: img6, alt: 'Gallery Image 6', title: 'Floral Sleeve', description: 'Intricate botanical design' },
    { src: img7, alt: 'Gallery Image 7', title: 'Realistic Eye', description: 'Hyperrealistic black and grey' },
    { src: img8, alt: 'Gallery Image 8', title: 'Mandala', description: 'Detailed spiritual symbol' },
    { src: img9, alt: 'Gallery Image 9', title: 'Minimalist Lines', description: 'Simple yet elegant linework' },
    { src: img10, alt: 'Gallery Image 10', title: 'Dotwork Landscape', description: 'Intricate pointillism technique' },
    { src: img11, alt: 'Gallery Image 11', title: 'Biomechanical', description: 'Futuristic machine-organism hybrid' },
    { src: img12, alt: 'Gallery Image 12', title: 'Neo-Traditional', description: 'Bold lines with a modern twist' },
    { src: img13, alt: 'Gallery Image 13', title: 'Blackwork Pattern', description: 'Solid black ornamental design' },
    { src: img14, alt: 'Gallery Image 14', title: 'Watercolor Splash', description: 'Abstract color explosion' },
    { src: img15, alt: 'Gallery Image 15', title: 'Realistic Portrait', description: 'Lifelike black and grey portrait' },
    { src: img16, alt: 'Gallery Image 16', title: 'Sacred Geometry', description: 'Mystical mathematical patterns' },
  ];

  return (
    <GallerySection>
      <Title>Our Collections</Title>
      <GridContainer>
        {images.map((img, index) => (
          <ImageContainer key={index}>
            <Image src={img.src} alt={img.alt} />
            <ImageOverlay>
              <ImageTitle>{img.title}</ImageTitle>
              <ImageDescription>{img.description}</ImageDescription>
            </ImageOverlay>
          </ImageContainer>
        ))}
      </GridContainer>
    </GallerySection>
  );
};

export default Gallery;