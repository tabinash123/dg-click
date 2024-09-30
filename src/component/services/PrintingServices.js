import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronRight, ChevronLeft, Camera, Frame, Palette, Coffee, Box, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.5rem;

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

 
`;

const ServiceImage = styled.div`
  height: 170px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 767px) {
    height: 140px;
  }
`;

const ServiceIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 6px;
`;

const ServiceContent = styled.div`
  padding: 0.75rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h2`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.25rem;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;

  @media (max-width: 767px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const LearnMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #4CAF50;
  color: white;
  max-width:100px;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background-color 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: #45a049;
  }

  svg {
    margin-left: 0.3rem;
  }

  @media (max-width: 767px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  @media (max-width: 767px) {
    margin-top: 1.25rem;
  }
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? '#4CAF50' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #4CAF50;
  padding: 0.4rem 0.8rem;
  margin: 0 0.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  font-size: 0.85rem;

  &:hover {
    background-color: ${props => props.active ? '#45a049' : '#e8f5e9'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.8rem;
  }
`;

const iconMap = {
  Camera, Frame, Palette, Coffee, Box, Shirt
};

const ITEMS_PER_PAGE = 6;

const PrintingServices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PageContainer>
      <ServicesGrid>
        {currentServices.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Box;
          return (
            <ServiceCard key={index}>
              <ServiceImage image={service.image || "/api/placeholder/300/200"}>
             
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>{service.category}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <LearnMoreButton to={`/service/${service.category.toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn More
                  <ChevronRight size={12} />
                </LearnMoreButton>
              </ServiceContent>
            </ServiceCard>
          );
        })}
      </ServicesGrid>
      <PaginationContainer>
        <PageButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          <ChevronLeft size={12} />
        </PageButton>
        {[...Array(totalPages).keys()].map(number => (
          <PageButton
            key={number + 1}
            onClick={() => paginate(number + 1)}
            active={currentPage === number + 1}
          >
            {number + 1}
          </PageButton>
        ))}
        <PageButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          <ChevronRight size={12} />
        </PageButton>
      </PaginationContainer>
    </PageContainer>
  );
};

export default PrintingServices;