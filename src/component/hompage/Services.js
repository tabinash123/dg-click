import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const HeadingWrapper = styled.div`
  margin-bottom: 40px;
`;

const SubHeading = styled.h3`
  display: inline-block;
  background-color: #FF4081;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 18px;
  margin-bottom: 10px;
`;

const MainHeading = styled.h2`
  font-size: 36px;
  color: #1A237E;
  margin: 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
  }
`;

const ServiceContent = styled.div`
  position: relative;
  padding: 20px;
  color: white;
  text-align: center;
  z-index: 1;
`;

const ServiceTitle = styled.h4`
  font-size: 20px;
  margin: 0 0 10px;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.9;
`;

const services = [
  {
    title: "Card Design",
    backgroundImage: "/path/to/card-design-image.jpg",
    description: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit."
  },
  {
    title: "Banner Printing",
    backgroundImage: "/path/to/banner-printing-image.jpg",
    description: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit."
  },
  {
    title: "Flyer Printing",
    backgroundImage: "/path/to/flyer-printing-image.jpg",
    description: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit."
  },
  {
    title: "Shirt Printing",
    backgroundImage: "/path/to/shirt-printing-image.jpg",
    description: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit."
  },
  {
    title: "Package Design",
    backgroundImage: "/path/to/package-design-image.jpg",
    description: "Lorem ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Consequatur Possimus Assumenda Dolores Odit."
  }
];

const PrintingServicesComponent = () => {
  return (
    <ServicesSection>
      <HeadingWrapper>
        <SubHeading>What We Offer</SubHeading>
        <MainHeading>Our Services</MainHeading>
      </HeadingWrapper>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} backgroundImage={service.backgroundImage}>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default PrintingServicesComponent;