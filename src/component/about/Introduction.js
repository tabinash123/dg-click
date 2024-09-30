import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Printer, Camera, CheckCircle } from 'lucide-react';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 1200px;
  margin: 0px auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
  gap: 40px;

  @media (max-width: 1023px) {
    padding: 30px 15px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IllustrationContainer = styled.div`
  flex: 1;
  max-width: 35%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 767px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  flex: 2;
  max-width: 65%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const Subtitle = styled.p`
  color: #FF4D4D;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 1023px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  color: #4A5568;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 1023px) {
    font-size: 15px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 8px;
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #666;
  font-size: 16px;
`;

const HighlightsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  color: #4A5568;
`;

const CheckIcon = styled(CheckCircle)`
  color: #FF4D4D;
  margin-right: 10px;
`;

const AboutUsSection = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=printing+photography+studio&per_page=1',
          {
            headers: { Authorization: PEXELS_API_KEY },
          }
        );
        setImageUrl(response.data.photos[0].src.large);
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageUrl('/api/placeholder/400/533'); // Fallback to placeholder if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <Section>
      <ContentContainer>
        <Subtitle>
          <IconWrapper><Printer size={18} /></IconWrapper>
          <IconWrapper><Camera size={18} /></IconWrapper>
          About DG-Click
        </Subtitle>
        <Title>Bringing Your Vision to Life in Nepal</Title>
        <Description>
          Welcome to DG-Click, Nepal's premier destination for high-quality printing and professional photography services. Since our establishment, we've been committed to delivering excellence in every project we undertake, serving clients across Kathmandu and beyond.
        </Description>
        <Description>
          At DG-Click, we combine cutting-edge technology with artistic expertise to offer a comprehensive range of services. From vibrant digital prints and custom framing to stunning studio portraits and dynamic event coverage, our team of skilled professionals is dedicated to bringing your vision to life.
        </Description>
        <Description>
          Located in the heart of Kathmandu, we take pride in our Nepali heritage while delivering world-class results. Our attention to detail, commitment to quality, and passion for customer satisfaction set us apart in the industry.
        </Description>
        <HighlightsList>
          <HighlightItem><CheckIcon size={20} /> State-of-the-art printing technology</HighlightItem>
          <HighlightItem><CheckIcon size={20} /> Professional photography studio</HighlightItem>
          <HighlightItem><CheckIcon size={20} /> Wide range of customization options</HighlightItem>
          <HighlightItem><CheckIcon size={20} /> Expert team with years of experience</HighlightItem>
          <HighlightItem><CheckIcon size={20} /> Timely delivery and excellent customer service</HighlightItem>
        </HighlightsList>
      </ContentContainer>
      <IllustrationContainer>
        {loading ? (
          <LoadingPlaceholder>Loading image...</LoadingPlaceholder>
        ) : (
          <Image src={imageUrl} alt="DG-Click Printing and Photography Studio" />
        )}
      </IllustrationContainer>
    </Section>
  );
};

export default AboutUsSection;