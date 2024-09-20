import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart } from '../store/shoppingCartSlice';
// ... (previous styled components remain the same)

const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 40px;
`;

const ProductImage = styled.img`
  width: 50%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const ProductSpecifications = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SpecItem = styled.li`
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const services = useSelector(state => state.services.services);

  const product = services.flatMap(service => service.products).find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Product added to cart!');
  };

  return (
    <ProductDetailContainer>
      <BackButton onClick={handleBack}>← Back to Service</BackButton>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <h2>Specifications:</h2>
        <ProductSpecifications>
          {product.specifications.map((spec, index) => (
            <SpecItem key={index}>{spec}</SpecItem>
          ))}
        </ProductSpecifications>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

export default ProductDetailPage;