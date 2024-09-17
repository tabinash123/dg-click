import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #0A2540;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;

`;

const FeatureDescription = styled.p`
 color: #4A5568;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;

`;
const Features = () => {
  return (
    <FeaturesContainer>
      <FeatureItem>
        <IconContainer style={{ backgroundColor: '#FFF4EA' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6667 10.6667H5.33333C4.59695 10.6667 4 11.2636 4 12V25.3333C4 26.0697 4.59695 26.6667 5.33333 26.6667H26.6667C27.403 26.6667 28 26.0697 28 25.3333V12C28 11.2636 27.403 10.6667 26.6667 10.6667Z" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 10.6667V8C21.3333 7.29276 21.0524 6.61448 20.5523 6.11438C20.0522 5.61428 19.3739 5.33333 18.6667 5.33333H13.3333C12.6261 5.33333 11.9478 5.61428 11.4477 6.11438C10.9476 6.61448 10.6667 7.29276 10.6667 8V10.6667" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 17.3333H4" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 21.3333V22.6667" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconContainer>
        <FeatureTitle>Local fulfillment</FeatureTitle>
        <FeatureDescription>Connect your store to Printes, added products, and set your own retail</FeatureDescription>
      </FeatureItem>
      
      <FeatureItem>
        <IconContainer style={{ backgroundColor: '#EBF5FF' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.7333 15.2667L15.6 19.1333L22.9333 11.8" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconContainer>
        <FeatureTitle>Reliable quality</FeatureTitle>
        <FeatureDescription>Connect your store to Printes, added products, and set your own retail</FeatureDescription>
      </FeatureItem>
      
      <FeatureItem>
        <IconContainer style={{ backgroundColor: '#E7F8F0' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#17B26A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 20L20 16L16 12" stroke="#17B26A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16H20" stroke="#17B26A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconContainer>
        <FeatureTitle>Smooth automation</FeatureTitle>
        <FeatureDescription>Connect your store to Printes, added products, and set your own retail</FeatureDescription>
      </FeatureItem>
      
      <FeatureItem>
        <IconContainer style={{ backgroundColor: '#EBF5FF' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6667 9.33333H5.33333C4.59695 9.33333 4 9.93028 4 10.6667V24C4 24.7364 4.59695 25.3333 5.33333 25.3333H26.6667C27.403 25.3333 28 24.7364 28 24V10.6667C28 9.93028 27.403 9.33333 26.6667 9.33333Z" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3333 21.3333L25.3333 17.3333L21.3333 13.3333" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 13.3333L6.66667 17.3333L10.6667 21.3333" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.6667 22L17.3333 12.6667" stroke="#2E90FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </IconContainer>
        <FeatureTitle>No order minimums</FeatureTitle>
        <FeatureDescription>Connect your store to Printes, added products, and set your own retail</FeatureDescription>
      </FeatureItem>
    </FeaturesContainer>
  );
};

export default Features;