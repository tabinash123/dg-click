import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import img1 from '../../assets/gallary/1723366699267.jpg';
import img2 from '../../assets/gallary/1723366699280.jpg';
import img3 from '../../assets/gallary/1723366699291.jpg';
import img4 from '../../assets/gallary/1723366699308.jpg';
import img5 from '../../assets/gallary/1723366699322.jpg';
import img6 from '../../assets/gallary/1723366699350.jpg';
import img7 from '../../assets/gallary/1723366699363.jpg';

// import tattooing from '../../assets/services/1.jpg';
// import piercing from '../../assets/services/2.jpg';
// import consultation from '../../assets/services/3.jpg';
// import tribal from '../../assets/services/4.jpg';
// import Modification from '../../assets/services/5.jpg';
// import design from '../../assets/services/6.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const GallerySection = styled.section`
  // max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #111;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #d4af37;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Cinzel Decorative', cursive;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
  }
`;

const MasonryGrid = styled.div`
  column-count: 3;
  column-gap: 20px;
  
  @media (max-width: 1024px) {
    column-count: 3;
  }
  
  @media (max-width: 768px) {
    column-count: 2;
  }
  
  @media (max-width: 480px) {
    column-count: 1;
  }
`;

const GalleryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 15px rgba(212, 175, 55, 0.4);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  display: block;
  transition: filter 0.3s ease;

  ${GalleryItem}:hover & {
    filter: brightness(0.7);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 20px;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const ImageTitle = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: calc(100vh - 160px);
  object-fit: contain;
  border: 3px solid #d4af37;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 40px;
  color: #d4af37;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const ThumbnailGallery = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-x: auto;
  padding: 10px 0;
`;

const Thumbnail = styled.img`
  height: 60px;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#d4af37' : 'transparent'};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const LatestWorks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { src: img1, alt: "Intricate Arm Tattoo" },
    { src: img2, alt: "Delicate Ear Piercing" },
    { src: img3, alt: "Tattoo Design Consultation" },
    { src: img4, alt: "Bold Tribal Back Piece" },

  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    if (event.key === 'ArrowRight') setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <GallerySection>
      <Title>Inked Masterpieces</Title>
      <MasonryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index} onClick={() => openModal(index)}>
            <GalleryImage src={image.src} alt={image.alt} />
            <ImageOverlay>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </MasonryGrid>
      {modalIsOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage 
              src={images[selectedImageIndex].src} 
              alt={images[selectedImageIndex].alt} 
            />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ThumbnailGallery>
              {images.map((image, index) => (
                <Thumbnail 
                  key={index} 
                  src={image.src} 
                  alt={image.alt} 
                  onClick={() => setSelectedImageIndex(index)}
                  selected={index === selectedImageIndex}
                />
              ))}
            </ThumbnailGallery>
          </ModalContent>
        </ModalOverlay>
      )}
    </GallerySection>
  );
};

export default LatestWorks;