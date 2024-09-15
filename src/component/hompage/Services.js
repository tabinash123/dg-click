import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import local images
import calenderPrinting from '../../assets/services/calenderPrinting.jpg';
import capPrinting from '../../assets/services/capPrinting.jpg';
import cdPrinting from '../../assets/services/cdPrinting.jpg';
import cupPrinting from '../../assets/services/cupPrinting.jpg';
import photoFramePrinting from '../../assets/services/photoFramePrinting.jpg';
import platePrinting from '../../assets/services/platePrinting.jpg';
import pvcCardPrinting from '../../assets/services/pvcCardPrinting.jpg';
import tilePrinting from '../../assets/services/tilePrinting.jpg';

const Section = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  margin-top: 50px;
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

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 0 10px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceName = styled.p`
  font-size: 19px;
  text-align: center;
  color: #333;
  font-weight: 600;
  margin: 0;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  ${props => props.direction === 'left' ? 'left: -20px;' : 'right: -20px;'}
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }
`;

const services = [
  { name: "Calendar Printing", image: calenderPrinting },
  { name: "Cap Printing", image: capPrinting },
  { name: "CD/DVD Printing", image: cdPrinting },
  { name: "Cup Printing", image: cupPrinting },
  { name: "Photo Frame Printing", image: photoFramePrinting },
  { name: "Plate Printing", image: platePrinting },
  { name: "PVC Card Printing", image: pvcCardPrinting },
  { name: "Tile Printing", image: tilePrinting },
];

const PrintingServices = () => {
  const CustomArrow = ({ direction, onClick }) => (
    <ArrowButton direction={direction} onClick={onClick}>
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </ArrowButton>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <Section>
      <Header>
        <Title>Our Printing Services</Title>
      </Header>
      <StyledSlider {...settings}>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ImageWrapper>
              <ServiceImage src={service.image} alt={`${service.name} service`} />
            </ImageWrapper>
            <ServiceName>{service.name}</ServiceName>
          </ServiceCard>
        ))}
      </StyledSlider>
    </Section>
  );
};

export default PrintingServices;