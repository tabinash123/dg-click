import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, filterProductsByCategory, addToCart } from '../store/actions';
import styled from 'styled-components';
import { ShoppingCart, Star, Grid, List } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const FilterSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
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
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 170px;
  // object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin: 0 0 5px 0;
  color: #2c3e50;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 0 0 5px 0;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;
  margin-top: auto;

  &:hover {
    background-color: #2980b9;
  }
`;

const ServicePage = ({ serviceName }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.filteredItems);
  const loading = useSelector(state => state.products.loading);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (serviceName) {
      dispatch(filterProductsByCategory(serviceName));
    }
  }, [dispatch, serviceName]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
    // Implement sorting logic here
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
    if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    return 0;
  });

  if (loading) {
    return <PageContainer>Loading...</PageContainer>;
  }

  const ProductDisplay = viewMode === 'grid' ? ProductGrid : ProductList;

  return (
    <PageContainer>
      <Header>
        <Title>{serviceName}</Title>
        <ViewToggle>
          <ViewButton active={viewMode === 'grid'} onClick={() => setViewMode('grid')}><Grid /></ViewButton>
          <ViewButton active={viewMode === 'list'} onClick={() => setViewMode('list')}><List /></ViewButton>
        </ViewToggle>
      </Header>
      <FilterContainer>
        <FilterSelect onChange={handleSort} value={sortBy}>
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </FilterSelect>
        {/* Add more filters here */}
      </FilterContainer>
      <ProductDisplay>
        {sortedProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.imageUrl || 'https://via.placeholder.com/200x150'} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.basePrice.toFixed(2)}</ProductPrice>
              <ProductRating>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < product.rating ? "#f1c40f" : "none"} stroke="#f1c40f" />
                ))}
              </ProductRating>
              <AddToCartButton onClick={() => handleAddToCart(product)}>
                <ShoppingCart size={16} style={{ marginRight: '5px' }} />
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductDisplay>
    </PageContainer>
  );
};

export default ServicePage;