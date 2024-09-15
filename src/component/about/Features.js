import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { X } from 'lucide-react';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const GallerySection = styled.section`
  padding: 2rem;
  background-color: transparent;
  max-width: 1200px;
  margin: 0 auto;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #ff4500;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #0a2f1d;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ProjectCard = styled.div`
  flex: 0 0 33.333%;
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
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  max-width: 80%;
  max-height: 80%;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #0a2f1d;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #ff0000;
`;

const Gallary = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.pexels.com/v1/search', {
          params: {
            query: 'printing press,design,typography',
            per_page: 6,
            orientation: 'landscape'
          },
          headers: {
            Authorization: PEXELS_API_KEY
          }
        });

        const fetchedProjects = response.data.photos.map(photo => ({
          id: photo.id,
          image: photo.src.large,
          alt: photo.alt
        }));

        setProjects(fetchedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to load images. Please try again later.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (project) => {
    setSelectedImage(project);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return <LoadingMessage>Loading projects...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

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
      {/* {selectedImage && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>
              <X size={24} />
            </CloseButton>
            <ModalImage src={selectedImage.image} alt={selectedImage.alt} />
          </ModalContent>
        </Modal>
      )} */}
    </GallerySection>
  );
};

export default Gallary;