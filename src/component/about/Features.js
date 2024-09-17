import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

// Import images
import canvas2 from '../../assets/gallary/canvas2.jpg';
import cap1 from '../../assets/gallary/cap1.jpg';
import frame3 from '../../assets/gallary/frame3.jpg';
import id from '../../assets/gallary/id.jpg';
import trophy3 from '../../assets/gallary/trophy3.jpg';
import tshirt3 from '../../assets/gallary/tshirt3.jpg';

const GallerySection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Subtitle = styled.h3`
  color: #FF4D4D;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 15px 0;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 40px 0;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ProjectCard = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

`;

const PrintingPressGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { id: 1, image: canvas2, alt: 'Canvas 2' },

    { id: 5, image: cap1, alt: 'Cap 1' },
    { id: 9, image: frame3, alt: 'Frame 3' },

    { id: 12, image: id, alt: 'ID' },
    { id: 15, image: trophy3, alt: 'Trophy 3' },

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
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} onClick={() => handleImageClick(project)}>
            <ProjectImage src={project.image} alt={project.alt} />
          </ProjectCard>
        ))}
      </ProjectContainer>
    </GallerySection>
  );
};

export default PrintingPressGallery;