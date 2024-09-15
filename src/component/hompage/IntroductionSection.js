import React from 'react';
import styled from 'styled-components';
import { Printer, Settings, Package,  } from 'lucide-react';

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const RightColumn = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const FeatureList = styled.div`
  margin-top: 20px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  margin-right: 15px;
  color: #ff0000;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0 0 5px 0;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const CustomIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid currentColor;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '₹';
    font-weight: bold;
  }
`;

const ARCPrintLanding = () => (
  <Container>
    <LeftColumn>
      <Title>Welcome to ARC Print – India's leading Custom Printing Company</Title>
      <Paragraph>
        Since its inception, ARC Print has been constantly serving all small, medium and large 
        entrepreneurs and individuals to create their own identities with custom printing solutions 
        and professional marketing. Our online printing solutions offer a wide assortment of 
        customizable products including office stationeries, corporate branding materials, visiting 
        cards, water bottles and many more to meet the diverse needs of businesses across all 
        industrial verticals. In short, this is a one-stop shop to find all sorts of marketing collateral 
        products and custom printed gifting items.
      </Paragraph>
    </LeftColumn>
    <RightColumn>
      <Title>Key Features That Set Us Apart</Title>
      <FeatureList>
        <FeatureItem>
          <IconWrapper>
            <CustomIcon />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Unmatched Quality At An Unbeatable Price</FeatureTitle>
            <FeatureDescription>
              At ARC Print, we are committed to provide high-quality printing products at 
              affordable prices no matter how big or small the requirement is.
            </FeatureDescription>
          </FeatureContent>
        </FeatureItem>
        <FeatureItem>
          <IconWrapper>
            <Settings size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Effortless Customization</FeatureTitle>
            <FeatureDescription>
              We make it easy for you to customize your products in just a few clicks. Just upload 
              your design, text and logo online and get it printed on your products.
            </FeatureDescription>
          </FeatureContent>
        </FeatureItem>
        <FeatureItem>
          <IconWrapper>
            <Package size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Free Shipping</FeatureTitle>
            <FeatureDescription>
              No matter where your location is, we provide free shipping to our customers across 
              all regions of India.
            </FeatureDescription>
          </FeatureContent>
        </FeatureItem>
        <FeatureItem>
          <IconWrapper>
            <Package size={24} />
          </IconWrapper>
          <FeatureContent>
            <FeatureTitle>Dedicated customer support</FeatureTitle>
            <FeatureDescription>
              We have an expert team of customer support professionals who are always ready to 
              attend all your queries round the clock.
            </FeatureDescription>
          </FeatureContent>
        </FeatureItem>
      </FeatureList>
    </RightColumn>
  </Container>
);

export default ARCPrintLanding;