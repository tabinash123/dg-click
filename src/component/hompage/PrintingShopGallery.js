import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

// Import images
import canvas2 from '../../assets/gallary/canvas2.jpg';
import canvas3 from '../../assets/gallary/canvas3.jpg';
import canvas4 from '../../assets/gallary/canvas4.jpg';
import canvas5 from '../../assets/gallary/canvas5.jpg';
import cap1 from '../../assets/gallary/cap1.jpg';
import cap2 from '../../assets/gallary/cap2.jpg';
import cap3 from '../../assets/gallary/cap3 (2).jpg';
import cap4 from '../../assets/gallary/cap4.jpg';
import frame3 from '../../assets/gallary/frame3.jpg';
import frame4 from '../../assets/gallary/frame4.jpg';
import frame5 from '../../assets/gallary/frame5.jpg';
import id from '../../assets/gallary/id.jpg';
import id2 from '../../assets/gallary/id2.jpg';
import id4 from '../../assets/gallary/id4.jpg';
import trophy3 from '../../assets/gallary/trophy3.jpg';
import trophy4 from '../../assets/gallary/trophy4.jpg';
import tshirt1 from '../../assets/gallary/tshirt1.jpg';
import tshirt3 from '../../assets/gallary/tshirt3.jpg';
import tshirt4 from '../../assets/gallary/tshirt4.jpg';

const GallerySection = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Subtitle = styled.h3`
  color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 10px 0;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 30px 0;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px; // Add gap between grid items
`;

const ProjectCard = styled.div`
  flex: 0 0 calc(33.333% - 10px); // Adjust width to account for gap
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  &:hover::after {
    content: 'View Project';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 37, 64, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  position: relative;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const PrintingPressGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { id: 1, image: canvas2, alt: 'Canvas 2' },
    { id: 2, image: canvas3, alt: 'Canvas 3' },
    { id: 3, image: canvas4, alt: 'Canvas 4' },
    { id: 4, image: canvas5, alt: 'Canvas 5' },
    { id: 5, image: cap1, alt: 'Cap 1' },
    { id: 6, image: cap2, alt: 'Cap 2' },
    { id: 7, image: cap3, alt: 'Cap 3' },
    { id: 8, image: cap4, alt: 'Cap 4' },
    { id: 9, image: frame3, alt: 'Frame 3' },
  ];

  const handleImageClick = (project) => {
    setSelectedImage(project);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <GallerySection>
      <Subtitle>Case studies</Subtitle>
      <Title>Explore our Recent Projects</Title>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} onClick={() => handleImageClick(project)}>
            <ProjectImage src={project.image} alt={project.alt} />
          </ProjectCard>
        ))}
      </ProjectGrid>

      {selectedImage && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>
              <X />
            </CloseButton>
            <ModalImage src={selectedImage.image} alt={selectedImage.alt} />
          </ModalContent>
        </Modal>
      )}
    </GallerySection>
  );
};

export default PrintingPressGallery;