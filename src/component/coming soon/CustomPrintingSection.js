import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import customDesign from "../../assets/hero/custom_design.jpg";
import customDesign1 from "../../assets/hero/product1.jpeg";
import customDesign2 from "../../assets/hero/product2.jpeg";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionContainer = styled.section`
  padding: 5rem 8%;
  background-color: #f8f9fa;
  text-align: center;
  color: #333;
  position: relative;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    padding: 4rem 6%;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.04rem;
  animation: ${fadeIn} 1s ease-out;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.3;
  animation: ${fadeIn} 1s ease-out 0.2s backwards;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  animation: ${fadeIn} 1s ease-out 0.4s backwards;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ServicesScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ServicesInnerContainer = styled.div`
  display: inline-flex;
  transition: transform 0.5s ease;
`;

const ServiceCard = styled.div`
  flex: 0 0 280px;
  text-align: left;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-right: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  white-space: normal;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex: 0 0 250px;
    margin-right: 15px;
  }
`;

const ImagePlaceholder = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const services = [
  {
    id: 1,
    title: "Custom T-Shirt Printing",
    description: "Express yourself with our premium quality custom-printed t-shirts. Perfect for individuals, teams, or events.",
    image: customDesign
  },
  {
    id: 2,
    title: "Personalized Cup and Mug Printing",
    description: "Start your day with a smile using our custom-printed cups and mugs. Ideal for gifts or promoting your brand.",
    image: customDesign1
  },
  {
    id: 3,
    title: "Custom Cap and Hat Printing",
    description: "Top off your style with our custom-printed caps and hats. Great for sports teams, corporate events, or fashion statements.",
    image: customDesign2
  },
  // Add more services as needed
];

const ServicesShowcase = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const step = 1;
    const interval = 30;

    const slideTimer = setInterval(() => {
      scrollContainer.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, interval);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <SectionContainer>
      <Tagline>Coming Soon</Tagline>
      <Heading>Custom Printing Services at Your Fingertips</Heading>
      <Description>
        DiGiClick is preparing to revolutionize the world of custom printing in Nepal. 
        Our state-of-the-art platform will offer a wide range of high-quality, personalized products to suit your unique style.
      </Description>
      <ServicesScrollContainer ref={scrollRef}>
        <ServicesInnerContainer>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ImagePlaceholder>
                <img src={service.image} alt={service.title} />
              </ImagePlaceholder>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesInnerContainer>
      </ServicesScrollContainer>
    </SectionContainer>
  );
};

export default ServicesShowcase;