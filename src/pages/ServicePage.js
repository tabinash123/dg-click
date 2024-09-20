import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// ... (previous styled components remain the same)

const ServicePageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ServiceTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
  background-color: white;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #007bff;
  font-size: 1.1rem;
  margin: 0;
`;

const ServicePage = ({ serviceName }) => {
  const { serviceName: urlServiceName } = useParams();
  const navigate = useNavigate();
  const serviceNameToUse = serviceName || urlServiceName;

  const services = useSelector(state => state.services.services);
  const service = services.find(s => s.name.toLowerCase() === serviceNameToUse.toLowerCase());

  if (!service) {
    return <div>Service not found</div>;
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <ServicePageContainer>
      <ServiceTitle>{service.name}</ServiceTitle>
      <ProductGrid>
        {service.products.map((product) => (
          <ProductCard key={product.id} onClick={() => handleProductClick(product.id)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ServicePageContainer>
  );
};

export default ServicePage;