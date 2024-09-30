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
  padding: 64px 24px;
  gap: 48px;
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
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
  align-items: flex-start;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: none;
  background: ${props => props.active ? '#FF4D4D' : 'transparent'};
  cursor: pointer;
  color: ${props => props.active ? '#FFFFFF' : '#4A5568'};
  font-weight: 600;
  font-size: 14px;
  border-radius: 16px;
  transition: all 0.3s ease;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: ${props => props.active ? '#FF4D4D' : '#f0f0f0'};
  }
`;

const ContentList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  color: #4A5568;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;

  &:before {
    content: '';
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    background-color: #FF4D4D;
    border-radius: 50%;
    margin-right: 16px;
    margin-top: 8px;
  }
`;

const TabIcon = styled.span`
  margin-right: 8px;
`;

const VisionMissionPhilosophy = () => {
  const [activeTab, setActiveTab] = useState('VISION');
  const [imageUrl, setImageUrl] = useState('');

  const tabs = [
    { key: 'VISION', icon: Eye, label: 'Our Vision' },
    { key: 'MISSION', icon: Target, label: 'Our Mission' },
  ];

  const content = {
    VISION: [
      "Become Nepal's leading innovator in printing and photography solutions.",
      "Empower creativity through cutting-edge visual technologies.",
      "Set new standards for eco-friendly practices in our industry."
    ],
    MISSION: [
      "Deliver unparalleled quality in every print and photograph.",
      "Invest continuously in advanced technology and staff development.",
      "Create a collaborative environment that brings customer ideas to life.",
      "Champion sustainable printing and photography practices."
    ],

  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          params: {
            query: 'printing studio photography',
            per_page: 1,
            size: 'large'
          },
          headers: {
            Authorization: PEXELS_API_KEY
          }
        });
        setImageUrl(response.data.photos[0].src.large);
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageUrl('/api/placeholder/600/400');
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
          <Image src={imageUrl} alt="DG-Click Printing and Photography Studio" />
        </ImageContainer>
      </ImageSection>
      <ContentSection>
        <Title>Shaping the Future of Printing and Photography Service</Title>
        <TabsContainer>
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => handleTabClick(tab.key)}
            >
              <TabIcon>
                <tab.icon size={16} />
              </TabIcon>
              {tab.label}
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