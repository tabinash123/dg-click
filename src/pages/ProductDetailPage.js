import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/actions';
import styled from 'styled-components';
import { Star, ShoppingCart, CreditCard } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #34495e;
  margin-bottom: 20px;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const OptionContainer = styled.div`
  margin-bottom: 20px;
`;

const OptionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const OptionSelect = styled.select`
  width: ;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const AddToCartButton = styled(Button)`
  background-color: #3498db;
  color: white;

  &:hover {
    background-color: #2980b9;
  }
`;

const BuyNowButton = styled(Button)`
  background-color: #2ecc71;
  color: white;

  &:hover {
    background-color: #27ae60;
  }
`;

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => 
    state.products.items.find(item => item.id === productId)
  );

  if (!product) {
    return <PageContainer>Product not found</PageContainer>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    // Implement navigation to checkout page
    // history.push('/checkout');
  };

  return (
    <PageContainer>
      <ProductContainer>
        <ImageContainer>
          <ProductImage src={product.imageUrl || 'https://via.placeholder.com/400x400'} alt={product.name} />
        </ImageContainer>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.basePrice.toFixed(2)}</ProductPrice>
          <ProductRating>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={i < product.rating ? "#f1c40f" : "none"} stroke="#f1c40f" />
            ))}
          </ProductRating>
          <ProductDescription>{product.description}</ProductDescription>
          {product.options.map((option, index) => (
            <OptionContainer key={index}>
              <OptionTitle>{option.type}</OptionTitle>
              <OptionSelect>
                {option.choices.map((choice, choiceIndex) => (
                  <option key={choiceIndex} value={choice}>{choice}</option>
                ))}
              </OptionSelect>
            </OptionContainer>
          ))}
          <ButtonContainer>
            <AddToCartButton onClick={handleAddToCart}>
              <ShoppingCart size={20} />
              Add to Cart
            </AddToCartButton>
            <BuyNowButton onClick={handleBuyNow}>
              <CreditCard size={20} />
              Buy Now
            </BuyNowButton>
          </ButtonContainer>
        </ProductInfo>
      </ProductContainer>
    </PageContainer>
  );
};

export default ProductDetailPage;