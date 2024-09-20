import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;

  @media (max-width: 1023px) {
    padding: 15px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const IllustrationContainer = styled.div`
  flex: 1;
  max-width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1023px) {
    height: 300px;
  }

  @media (max-width: 767px) {
    display: none;
  }
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

  @media (max-width: 1023px) {
    padding-left: 20px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding-left: 0;
  }
`;

const Subtitle = styled.p`
  color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 1023px) {
    font-size: 13px;
  }
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;

  @media (max-width: 1023px) {
    font-size: 24px;
  }

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  color: #4A5568;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 1023px) {
    font-size: 13px;
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

  @media (max-width: 1023px) {
    font-size: 14px;
  }
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
      </ContentContainer>
    </Section>
  );
};

export default AboutUsSection;