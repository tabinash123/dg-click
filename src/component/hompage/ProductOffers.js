import React from 'react';
import styled from 'styled-components';
import gift from '../../assets/productOffer/gift.png';
import cup from '../../assets/productOffer/cup.png';
import box from '../../assets/productOffer/box.png';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin:0px 40px;
`;

const Card = styled.div`
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 12px;
  padding: 24px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const DiscountText = styled.p`
  color: #ff6347;
  font-size: 13px;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

const Title = styled.h2`
  color: #1e1e1e;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 16px 0;
  line-height: 1.2;
`;

const ShopNowButton = styled.button`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  color: #1e1e1e;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 14px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff6347;
    color: #fff;
  }
`;

const ProductImage = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;
  margin-left: 20px;
`;

const ProductOfferCards = () => {
  const cardData = [
    {
      title: 'Give The Gift Of Choice',
      image: gift,
      bgColor: '#FFF8E6'
    },
    {
      title: 'Paper Cups Coffee',
      image: cup,
      bgColor: '#F0F5F9'
    },
    {
      title: 'Cardboard Package Box',
      image: box,
      bgColor: '#FFF8E6'
    }
  ];

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card key={index} $bgColor={card.bgColor}>
          <ContentWrapper>
            <DiscountText>Flat 25% off</DiscountText>
            <Title>{card.title}</Title>
            <ShopNowButton>Shop Now</ShopNowButton>
          </ContentWrapper>
          <ProductImage src={card.image} alt={card.title} />
        </Card>
      ))}
    </CardContainer>
  );
};

export default ProductOfferCards;