import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ShoppingCart, Printer } from 'lucide-react';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

// Styled Components

const ProductsSection = styled.section`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Product = styled.div`
  text-align: center;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductPrice = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const DiscountedPrice = styled.span`
  color: #e74c3c;
  font-weight: bold;
  margin-right: 5px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
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
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 4px;

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

// AllProducts Component

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productTypes = ['Brochure', 'Business Card', 'Flyer', 'Poster', 'Sticker', 'Banner'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/v1/search?query=print+design&per_page=12',
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        const fetchedProducts = response.data.photos.map(photo => ({
          name: photo.photographer,
          price: Math.floor(Math.random() * 50) + 10, // Mock price
          image: photo.src.medium,
          type: productTypes[Math.floor(Math.random() * productTypes.length)],
        }));
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
  };

  const handleOrder = (product) => {
    console.log('Ordered:', product);
    // Implement your order logic here
  };

  if (loading) return <div>Loading...</div>;

  return (
    <ProductsSection>
      <Header>
        <Title>All Print Products</Title>
      </Header>
      <ProductGrid>
        {products.map((product, index) => (
          <Product key={index}>
            <ProductType>
              <Printer size={14} />
              {product.type}
            </ProductType>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
              <DiscountedPrice>${product.price.toFixed(2)}</DiscountedPrice>
            </ProductPrice>
            <ActionsContainer>
              <IconButton title="Add to Cart" onClick={() => handleAddToCart(product)}>
                <ShoppingCart size={20} />
              </IconButton>
              <OrderButton onClick={() => handleOrder(product)}>
                Order Now
              </OrderButton>
            </ActionsContainer>
          </Product>
        ))}
      </ProductGrid>
    </ProductsSection>
  );
};

export default AllProducts;