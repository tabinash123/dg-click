import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
`;

const Banner = styled.div`
  width: 380px;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.bgColor};
  display: flex;
`;

const BannerImage = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const BannerContent = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Tag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${props => props.bgColor};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
`;

const Title = styled.h3`
  font-size: 18px;
  color: ${props => props.color || '#333'};
  margin: 0 0 10px 0;
`;

const ShopNowLink = styled.a`
  color: ${props => props.color || '#333'};
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;

  &::after {
    content: '→';
    margin-left: 5px;
  }
`;

const ProductBannersRow = () => {
  return (
    <BannerContainer>
      <Banner bgColor="#FFE4E1">
        <Tag bgColor="#FF0000">BEST SELLER</Tag>
        <BannerImage src="/api/placeholder/190/220" alt="Colorful Sticker Pack" />
        <BannerContent>
          <Title>Colorful Sticker Pack</Title>
          <ShopNowLink href="#">Shop Now</ShopNowLink>
        </BannerContent>
      </Banner>

      <Banner bgColor="#F0F0F0">
        <Tag bgColor="#FF0000">SAVE 20%</Tag>
        <BannerImage src="/api/placeholder/190/220" alt="Gift card for your friend" />
        <BannerContent>
          <Title>Gift card for your friend</Title>
          <ShopNowLink href="#">Shop Now</ShopNowLink>
        </BannerContent>
      </Banner>

      <Banner bgColor="#66CDAA">
        <Tag bgColor="#FFD700">SAVE 30%</Tag>
        <BannerImage src="/api/placeholder/190/220" alt="Cardboard Package Box" />
        <BannerContent>
          <Title color="white">Cardboard Package Box</Title>
          <ShopNowLink color="white" href="#">Shop Now</ShopNowLink>
        </BannerContent>
      </Banner>
    </BannerContainer>
  );
};

export default ProductBannersRow;