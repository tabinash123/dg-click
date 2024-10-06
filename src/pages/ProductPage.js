import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, filterProductsByCategory } from '../store/actions';
import styled from 'styled-components';
import { Star, Grid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px'
};

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;

  @media (max-width: ${breakpoints.xl}) {
    max-width: 1200px;
  }

  @media (max-width: ${breakpoints.lg}) {
    max-width: 992px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 768px;
  }

  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    padding: 15px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;

  @media (max-width: ${breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 10px;
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.active ? '#3498db' : '#95a5a6'};
  font-size: 1.5rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: ${props => props.viewMode === 'list' ? 'row' : 'column'};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: ${props => props.viewMode === 'list' ? '150px' : '200px'};
  object-fit: cover;

  @media (max-width: ${breakpoints.md}) {
    height: ${props => props.viewMode === 'list' ? '135px' : '180px'};
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 150px;
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f8f9fa;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin: 0 0 10px 0;
  color: #2c3e50;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 0.9rem;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 0 0 10px 0;

  @media (max-width: ${breakpoints.xs}) {
    font-size: 1rem;
  }
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPage = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products.filteredItems);
  const loading = useSelector(state => state.products.loading);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(filterProductsByCategory(category));
  }, [dispatch, category]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) {
    return <PageContainer>Loading...</PageContainer>;
  }

  const ProductDisplay = viewMode === 'grid' ? ProductGrid : ProductList;

  return (
    <PageContainer>
      <Header>
        <Title>{category}</Title>
        <ViewToggle>
          <ViewButton active={viewMode === 'grid'} onClick={() => setViewMode('grid')}><Grid /></ViewButton>
          <ViewButton active={viewMode === 'list'} onClick={() => setViewMode('list')}><List /></ViewButton>
        </ViewToggle>
      </Header>
      <ProductDisplay>
        {products.map(product => (
          <ProductCard key={product.id} viewMode={viewMode} onClick={() => handleProductClick(product.id)}>
            <ProductImage src={product.imageUrl || 'https://via.placeholder.com/200x200'} alt={product.name} viewMode={viewMode} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.basePrice.toFixed(2)}</ProductPrice>
              <ProductRating>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < (product.rating || 4) ? "#f1c40f" : "none"} stroke="#f1c40f" />
                ))}
              </ProductRating>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductDisplay>
    </PageContainer>
  );
};

export default ProductPage;