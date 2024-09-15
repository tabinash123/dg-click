import React, { useState } from 'react';
import styled from 'styled-components';

const OffersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OfferCard = styled.div`
  flex: 1;
  background-color: ${props => props.bgColor};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const OfferText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #FF4D00;
  margin: 0 0 8px 0;
`;

const OfferTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #1A1A1A;
  margin: 0 0 24px 0;
  max-width: 60%;
`;

const ShopNowButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #1A1A1A;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #1A1A1A;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #FF4D00;
  }
`;

const ProductImage = styled.img`
  position: absolute;
  right: 24px;
  bottom: 24px;
  max-width: 40%;
  max-height: 80%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${OfferCard}:hover & {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const productData = [
  {
    id: 1,
    title: "Give The Gift Of Choice",
    bgColor: "#F9F5F0",
    imageUrl: "/api/placeholder/200/200",
    alt: "Gift box"
  },
  {
    id: 2,
    title: "Paper Cups Coffee",
    bgColor: "#F0F7FC",
    imageUrl: "/api/placeholder/200/200",
    alt: "Coffee cup"
  },
  {
    id: 3,
    title: "Cardboard Package Box",
    bgColor: "#F9F5F0",
    imageUrl: "/api/placeholder/200/200",
    alt: "Cardboard boxes"
  }
];

const ProductOffers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShopNow = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <OffersContainer>
        {productData.map((product) => (
          <OfferCard key={product.id} bgColor={product.bgColor}>
            <OfferText>Flat 25% off</OfferText>
            <OfferTitle>{product.title}</OfferTitle>
            <ShopNowButton onClick={() => handleShopNow(product)}>Shop Now</ShopNowButton>
            <ProductImage src={product.imageUrl} alt={product.alt} />
          </OfferCard>
        ))}
      </OffersContainer>
      {selectedProduct && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h2>{selectedProduct.title}</h2>
            <p>You selected: {selectedProduct.title}</p>
            <p>Enjoy your 25% discount!</p>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ProductOffers;