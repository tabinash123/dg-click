import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { services } from '../../data/services';
import { Camera, Frame, Palette, Coffee, Box, Shirt, CheckCircle, Star, ChevronDown, ChevronUp } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const BreadcrumbNav = styled.nav`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;

  a {
    color: #4CAF50;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  background-color: #f0f8f0;
  padding: 2rem;
  border-radius: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
`;

const ServiceIcon = styled.div`
  background-color: #4CAF50;
  color: white;
  border-radius: 50%;
  padding: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const ServiceTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServiceTagline = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 968px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  flex: 2;
  margin-bottom: 2rem;

  @media (min-width: 968px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ServiceDescription = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Sidebar = styled.div`
  flex: 1;
`;

const SidebarCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: #333;

  svg {
    color: #4CAF50;
    margin-right: 0.5rem;
  }
`;

const CTAButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #45a049;
  }
`;

const PricingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;

  th, td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const ReviewCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ReviewerName = styled.span`
  font-weight: bold;
`;

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  color: #ffc107;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
`;

const FAQQuestion = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FAQAnswer = styled.div`
  margin-top: 0.5rem;
  color: #666;
`;

const iconMap = {
  Camera, Frame, Palette, Coffee, Box, Shirt
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.category.toLowerCase().replace(/\s+/g, '-') === serviceId);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  if (!service) {
    return <PageContainer>Service not found</PageContainer>;
  }

  const IconComponent = iconMap[service.icon] || Box;

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const dummyFAQs = [
    { question: "What is the turnaround time for this service?", answer: "Our standard turnaround time is 3-5 business days. We also offer rush services for an additional fee." },
    { question: "Do you offer bulk discounts?", answer: "Yes, we offer discounts for large orders. Please contact us for a custom quote." },
    { question: "What file formats do you accept?", answer: "We accept most common file formats including PDF, JPG, PNG, and AI files." },
  ];

  return (
    <PageContainer>
      <BreadcrumbNav>
        <a href="/">Home</a> &gt; <a href="/ourservice">Our-Services</a> &gt; {service.category}
      </BreadcrumbNav>
      <ServiceHeader>
        <ServiceIcon>
          <IconComponent size={48} />
        </ServiceIcon>
        <div>
          <ServiceTitle>{service.category}</ServiceTitle>
          <ServiceTagline>Professional {service.category} for all your needs</ServiceTagline>
        </div>
      </ServiceHeader>
      <ContentWrapper>
        <MainContent>
          <ImageGallery>
            {[service.image, "/api/placeholder/300/200", "/api/placeholder/300/200"].map((img, index) => (
              <GalleryImage key={index} src={img} alt={`${service.category} ${index + 1}`} />
            ))}
          </ImageGallery>
          <ServiceDescription>
            <h2>About Our {service.category}</h2>
            <p>{service.description}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </ServiceDescription>
          <SidebarCard>
            <h3>Pricing</h3>
            <PricingTable>
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Price</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic</td>
                  <td>$XX.XX</td>
                  <td>Lorem ipsum dolor sit amet</td>
                </tr>
                <tr>
                  <td>Standard</td>
                  <td>$XX.XX</td>
                  <td>Consectetur adipiscing elit</td>
                </tr>
                <tr>
                  <td>Premium</td>
                  <td>$XX.XX</td>
                  <td>Sed do eiusmod tempor incididunt</td>
                </tr>
              </tbody>
            </PricingTable>
          </SidebarCard>
          <SidebarCard>
            <h3>Customer Reviews</h3>
            <ReviewCard>
              <ReviewHeader>
                <ReviewerName>John D.</ReviewerName>
                <ReviewRating>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" />
                  ))}
                </ReviewRating>
              </ReviewHeader>
              <p>Great service! The quality of the prints exceeded my expectations. Will definitely use again.</p>
            </ReviewCard>
            <ReviewCard>
              <ReviewHeader>
                <ReviewerName>Sarah M.</ReviewerName>
                <ReviewRating>
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" />
                  ))}
                  <Star size={16} />
                </ReviewRating>
              </ReviewHeader>
              <p>Fast turnaround and good customer service. The prints came out great.</p>
            </ReviewCard>
          </SidebarCard>
          <SidebarCard>
            <h3>Frequently Asked Questions</h3>
            {dummyFAQs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  {expandedFAQ === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </FAQQuestion>
                {expandedFAQ === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
              </FAQItem>
            ))}
          </SidebarCard>
        </MainContent>
        <Sidebar>
          <SidebarCard>
            <h3>Features:</h3>
            <FeaturesList>
              {service.attributes.map((attribute, index) => (
                <FeatureItem key={index}>
                  <CheckCircle size={16} />
                  {attribute}
                </FeatureItem>
              ))}
            </FeaturesList>
          </SidebarCard>
          <CTAButton>Request a Quote</CTAButton>
        </Sidebar>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ServiceDetail;