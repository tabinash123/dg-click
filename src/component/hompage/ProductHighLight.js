import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ShoppingBag, ShoppingCart, Printer } from 'lucide-react';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    height: 200px;
  }
`;

const ProductCategory = styled.span`
  color: #777;
  font-size: 12px;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const ProductName = styled.h3`
  margin: 5px 0;
  font-size: 16px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ProductPrice = styled.div`
  font-size: 14px;
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const OrderButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const ProductType = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ViewAllButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  svg {
    margin-left: 8px;
  }
`;


const ProductHighLight = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialProducts = [
    { id: 1, name: 'Custom Mug Printing', category: 'Cup & Plate', price: 15.00 },
    { id: 2, name: 'T-Shirt Printing', category: 'Apparel', price: 20.00 },
    { id: 3, name: 'PVC Card Printing', category: 'Cards', price: 5.00 },
    { id: 4, name: 'Photo Tile Printing', category: 'Photo Products', price: 25.00 },
    { id: 5, name: 'Custom Calendar', category: 'Calendars', price: 18.00 },
    { id: 6, name: 'Photo Frame Printing', category: 'Frames', price: 22.00 },
    { id: 7, name: 'Cap Printing', category: 'Apparel', price: 15.00 },
    { id: 8, name: 'Plate Printing', category: 'Cup & Plate', price: 18.00 }
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=product&per_page=8',
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        const shuffledProducts = [...initialProducts].sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 8).map((product, index) => ({
          ...product,
          image: response.data.photos[index].src.medium,
        }));
        setProducts(selectedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
  };

  const handleOrder = (product) => {
    console.log('Ordered:', product);
    // Implement your order logic here
  };

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <Header>
        <Title>Our Popular Products</Title>
      </Header>
      
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductType>
              <Printer size={14} />
              {product.category}
            </ProductType>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            <ActionsContainer>
              <IconButton title="Add to Cart" onClick={() => handleAddToCart(product)}>
                <ShoppingCart size={20} color="#e74c3c" />
              </IconButton>
              <OrderButton onClick={() => handleOrder(product)}>
                Order Now
              </OrderButton>
            </ActionsContainer>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductHighLight;