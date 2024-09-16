import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Eye, Target, Lightbulb } from 'lucide-react';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  padding-bottom: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.active ? '#1e3a8a' : '#4b5563'};
  border-bottom: ${props => props.active ? '2px solid #1e3a8a' : 'none'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const ContentList = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
`;

const ListItem = styled.li`
  color: #4b5563;
  margin-bottom: 0.5rem;
`;

const VisionMissionPhilosophy = () => {
  const [activeTab, setActiveTab] = useState('VISION');
  const [imageUrl, setImageUrl] = useState('');

  const tabs = [
    { key: 'VISION', icon: Eye },
    { key: 'MISSION', icon: Target },
    { key: 'PHILOSOPHY', icon: Lightbulb }
  ];

  const content = {
    VISION: [
      "To be a globally recognized leader in consumer products and services.",
      "To inspire and improve the lives of people through innovative solutions.",
      "To set new standards of excellence in every industry we operate in."
    ],
    MISSION: [
      "Understand consumer insights and meet their needs with safe, effective and world-class products.",
      "Integrate our dealers, distributors, retailers, suppliers and JV partners into the Chaudhary Group Family.",
      "Recruit, develop, motivate and retain the best talent within the country, recruit if needed from abroad and provide them a challenging and demanding environment.",
      "Foster a strong emotive feeling of oneness and ownership with the Chaudhary Group."
    ],
    PHILOSOPHY: [
      "Customer-centric approach in all our endeavors.",
      "Commitment to quality and continuous improvement.",
      "Ethical business practices and corporate social responsibility.",
      "Empowerment of employees and fostering a culture of innovation."
    ]
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          params: {
            query: 'business team',
            per_page: 1,
            size: 'medium'
          },
          headers: {
            Authorization: PEXELS_API_KEY
          }
        });
        setImageUrl(response.data.photos[0].src.medium);
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageUrl('/api/placeholder/400/300'); // Fallback to placeholder if API call fails
      }
    };

    fetchImage();
  }, []);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <Container>
      <ImageSection>
        <ImageContainer>
          <Image src={imageUrl} alt="Company leaders" />
        </ImageContainer>
      </ImageSection>
      <ContentSection>
        <Title>
          Vision
          Mission
          Philosophy
        </Title>
        <TabsContainer>
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => handleTabClick(tab.key)}
            >
              <tab.icon size={20} />
              <span style={{ marginLeft: '4px' }}>{tab.key}</span>
            </TabButton>
          ))}
        </TabsContainer>
        <ContentList>
          {content[activeTab].map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ContentList>
      </ContentSection>
    </Container>
  );
};

export default VisionMissionPhilosophy;