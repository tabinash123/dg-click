import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
`;

const IllustrationContainer = styled.div`
  flex: 1;
  max-width: 50%;
  height: 400px; // Fixed height
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ContentContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding-left: 40px;
`;

const Subtitle = styled.p`
  color: #FF4D4D;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 20px 0;
`;

const Description = styled.p`
  color: #4A5568;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`;

const FeatureItem = styled.li`
  color: #4A5568;
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: '✓';
    color: #FF4D4D;
    margin-right: 10px;
    font-weight: bold;
  }
`;

const ReadMoreButton = styled.button`
  background-color: #FF4D4D;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E63939;
  }

  &:after {
    content: '→';
    margin-left: 10px;
  }
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #666;
  font-size: 16px;
`;

const AboutUsSection = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=office+worker&per_page=1',
          {
            headers: { Authorization: PEXELS_API_KEY },
          }
        );
        setImageUrl(response.data.photos[0].src.large);
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageUrl('/api/placeholder/600/400'); // Fallback to placeholder if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <Section>
      <IllustrationContainer>
        {loading ? (
          <LoadingPlaceholder>Loading image...</LoadingPlaceholder>
        ) : (
          <Image src={imageUrl} alt="Woman working at computer" />
        )}
      </IllustrationContainer>
      <ContentContainer>
        <Subtitle>About Us</Subtitle>
        <Title>From Structure To Conveyance</Title>
        <Description>
          Libero aliquam eiget rhoncus elit quis mattis tos neque ullco qua praesent
          interdum orc torristique aenean at dictumst velit fames molestie tristique
          magna sociosqu ine rhoncuis in cubilia magno senectus sociis tortor enim.
        </Description>
        <FeatureList>
          <FeatureItem>Magna cubilia sapien vivamus vestibulum iner consectetuer.</FeatureItem>
          <FeatureItem>Urna faucibus netus Inceptos qu hac sem iaculis lectus.</FeatureItem>
        </FeatureList>
        <ReadMoreButton>READ MORE</ReadMoreButton>
      </ContentContainer>
    </Section>
  );
};

export default AboutUsSection;