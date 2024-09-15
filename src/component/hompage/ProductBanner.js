import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import img1 from '../../assets/download .jpg'
const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const BannerContainer = styled.div`
  // background-color: #E5E9EC;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  font-family: Arial, sans-serif;
`;

const ContentSection = styled.div`
  max-width: 50%;
`;

const OriginalProductText = styled.p`
  color: #FF6B35;
  font-size: 16px;
  margin: 0 0 10px 0;
`;

const ProductTitle = styled.h1`
  color: #004225;
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 20px 0;
  line-height: 1.2;
`;

const PriceText = styled.p`
  color: #333;
  font-size: 18px;
  margin: 0 0 30px 0;
`;

const ShopNowButton = styled.button`
  background-color: #FF6B35;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 15px;
`;

const PlayButton = styled.button`
  background-color: white;
  border: 2px solid #FF6B35;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 12px solid #FF6B35;
  border-bottom: 8px solid transparent;
  margin-left: 3px;
`;

const ImageSection = styled.div`
  max-width: 50%;
  position: relative;
`;

const ProductImage = styled.img`
  max-width: 100%;
  transform: rotate(-15deg);
  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const ProductBanner = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=white+tshirt&per_page=1',
          {
            headers: { Authorization: PEXELS_API_KEY },
          }
        );
        setImageUrl(response.data.photos[0].src.large);
      } catch (error) {
        console.error('Error fetching image:', error);
        setImageUrl('/api/placeholder/500/500');
      }
    };

    fetchImage();
  }, []);

  return (
    <BannerContainer>
      <ContentSection>
        <OriginalProductText>100% Original Products</OriginalProductText>
        <ProductTitle>Peach Color Up Neck Blouson Top.</ProductTitle>
        <PriceText>This Month From $59.00</PriceText>
        <div>
          <ShopNowButton>Shop Now</ShopNowButton>
          <PlayButton>
            <PlayIcon />
          </PlayButton>
        </div>
      </ContentSection>
      <ImageSection>
        <ProductImage src={img1} alt="Peach Color Up Neck Blouson Top" />
      </ImageSection>
    </BannerContainer>
  );
};

export default ProductBanner;