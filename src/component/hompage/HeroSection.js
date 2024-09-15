import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Star, Box, Package, Play, Loader } from 'lucide-react';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0px auto;
  margin-top:50px;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 20px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (min-width: 768px) {
    padding-right: 40px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #003366;
  margin-bottom: 20px;
  line-height: 1.2;
  animation: ${slideIn} 0.5s ease-out;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
  animation: ${slideIn} 0.5s ease-out 0.2s backwards;
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  animation: ${slideIn} 0.5s ease-out 0.4s backwards;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #003366;
  background-color: #f0f4f8;
  padding: 8px 12px;
  border-radius: 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.span`
  margin-right: 8px;
  color: #003366;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  animation: ${slideIn} 0.5s ease-out 0.6s backwards;
`;

const SignupButton = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 10px;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #e55c00;
    transform: translateY(-2px);
  }
`;

const HowItWorks = styled.a`
  display: flex;
  align-items: center;
  color: #666;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #003366;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const TShirtImage = styled(ProductImage)`
  grid-column: 2;
  grid-row: 1 / span 2;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled(Loader)`
  animation: ${spin} 1s linear infinite;
`;

const PrintOnDemandBanner = () => {
  const [images, setImages] = useState({
    mug: '',
    tshirt: '',
    toteBag: '',
    capAndPhone: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const queries = ['coffee mug', 'white t-shirt', 'tote bag', 'cap and smartphone'];
      const imagePromises = queries.map(query =>
        axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
          headers: { Authorization: PEXELS_API_KEY }
        })
      );

      try {
        const responses = await Promise.all(imagePromises);
        const newImages = {
          mug: responses[0].data.photos[0].src.medium,
          tshirt: responses[1].data.photos[0].src.medium,
          toteBag: responses[2].data.photos[0].src.medium,
          capAndPhone: responses[3].data.photos[0].src.medium
        };
        setImages(newImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <Container>
      {loading && (
        <LoadingOverlay>
          <LoadingSpinner size={48} />
        </LoadingOverlay>
      )}
      <LeftSection>
        <Title>Start Print on Demand Dropshipping Store!</Title>
        <Subtitle>
          Print on demand (POD) is a printing and order fulfilment method where 
          products are printed after an order is received.
        </Subtitle>
        <FeatureList>
          <Feature>
            <FeatureIcon><Star size={16} /></FeatureIcon>
            Premium Products
          </Feature>
          <Feature>
            <FeatureIcon><Box size={16} /></FeatureIcon>
            Custom Branding
          </Feature>
          <Feature>
            <FeatureIcon><Package size={16} /></FeatureIcon>
            10 Million+ Delivered
          </Feature>
        </FeatureList>
        <ButtonContainer>
          <SignupButton>Signup</SignupButton>
          <HowItWorks href="#">
            <Play size={20} style={{ marginRight: '8px' }} />
            How it works?
          </HowItWorks>
        </ButtonContainer>
      </LeftSection>
      <RightSection>
        <ProductImage src={images.mug} />
        <TShirtImage src={images.tshirt} />
        <ProductImage src={images.toteBag} />
        <ProductImage src={images.capAndPhone} />
      </RightSection>
    </Container>
  );
};

export default PrintOnDemandBanner;