import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { Maximize2, X } from 'lucide-react';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  max-width: 1200px;
  margin: 80px auto;
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    height: auto;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ExpandIcon = styled(Maximize2)`
  color: white;
  width: 24px;
  height: 24px;
`;

const loadingAnimation = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const LoadingSkeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1.5s infinite;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #333;
`;

const ModalDescription = styled.p`
  color: #666;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  margin-top: 20px;
  border-radius: 4px;
`;

const galleryItems = [
  { query: "flyer mockup design", alt: "Flyer mockups", description: "High-quality flyer designs for all your marketing needs" },
  { query: "magazine printing", alt: "Magazine printing", description: "Professional magazine printing services" },
  { query: "printed mug mockup", alt: "Mug printing", description: "Custom mug printing for personal and corporate gifts" },
  { query: "brochure design mockup", alt: "Brochure design", description: "Eye-catching brochure designs to showcase your business" },
  { query: "thank you card design", alt: "Thank you card", description: "Elegant thank you cards for all occasions" },
];

const PrintingShopGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagePromises = galleryItems.map(item =>
          axios.get(`https://api.pexels.com/v1/search?query=${item.query}&per_page=1`, {
            headers: { Authorization: PEXELS_API_KEY }
          })
        );

        const responses = await Promise.all(imagePromises);
        const fetchedImages = responses.map(response => response.data.photos[0]?.src.large);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Section>
      <Header>
        <Title>Our Gallary</Title>
      </Header>
      <GalleryGrid>
        {loading
          ? Array(5).fill(0).map((_, index) => (
              <GalleryItem key={index} style={index === 0 ? { gridRow: '1 / span 2' } : {}}>
                <LoadingSkeleton />
              </GalleryItem>
            ))
          : images.map((image, index) => (
              <GalleryItem 
                key={index} 
                style={index === 0 ? { gridRow: '1 / span 2' } : {}}
                onClick={() => handleImageClick(index)}
              >
                <GalleryImage src={image || `/api/placeholder/${index === 0 ? '800/600' : '400/300'}`} alt={galleryItems[index].alt} />
                <ImageOverlay>
                  <ExpandIcon />
                </ImageOverlay>
              </GalleryItem>
            ))
        }
      </GalleryGrid>
      {openModal && selectedImage !== null && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}><X /></CloseButton>
            <ModalTitle>{galleryItems[selectedImage].alt}</ModalTitle>
            <ModalDescription>{galleryItems[selectedImage].description}</ModalDescription>
            <ModalImage 
              src={images[selectedImage] || `/api/placeholder/${selectedImage === 0 ? '800/600' : '400/300'}`} 
              alt={galleryItems[selectedImage].alt}
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default PrintingShopGallery;