import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart, Printer } from 'lucide-react';
import ShopSidebar from './ShopSidebar';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';  // Replace with your Pexels API Key

const PageContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  @media (min-width: 768px) {
    padding: 15px;
    min-height: 50vh;
  }
`;

const ProductSection = styled.div`
  flex-grow: 1;
  padding-left: 20px;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  overflow-y: auto;
  flex-grow: 1;
`;

// Updated ProductCard styling
const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 200px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductTitle = styled.h3`
  margin: 5px 0;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

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

const allProducts = [
  { id: 1, name: 'Custom Printed Cup', price: 19.99, category: 'Cup' },
  { id: 2, name: 'Decorative Plate', price: 29.99, category: 'Plate' },
  { id: 3, name: 'Customized Cap', price: 24.99, category: 'Cap' },
  { id: 4, name: 'Printed T-shirt', price: 34.99, category: 'T-shirt' },
  { id: 5, name: 'Custom CD/DVD Print', price: 9.99, category: 'CD/DVD' },
  { id: 6, name: 'PVC Card Printing', price: 4.99, category: 'PVC Card' },
  { id: 7, name: 'Custom Tile Print', price: 39.99, category: 'Tiles' },
  { id: 8, name: 'Personalized Calendar', price: 14.99, category: 'Calendar' },
  { id: 9, name: 'Custom Photo Frame', price: 24.99, category: 'Frame' },
];

const ShopPage = () => {
  const [products, setProducts] = useState(allProducts);
  const [displayedProducts, setDisplayedProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const updatedProducts = await Promise.all(
        allProducts.map(async (product) => {
          try {
            const response = await axios.get('https://api.pexels.com/v1/search', {
              headers: {
                Authorization: PEXELS_API_KEY,
              },
              params: {
                query: product.category,
                per_page: 1,
              },
            });
            const imageUrl = response.data.photos[0]?.src?.medium || 'https://via.placeholder.com/200x200.png?text=No+Image';
            return { ...product, image: imageUrl };
          } catch (error) {
            console.error(`Error fetching image for ${product.name}:`, error);
            return { ...product, image: 'https://via.placeholder.com/200x200.png?text=Error' };
          }
        })
      );
      setProducts(updatedProducts);
      setDisplayedProducts(updatedProducts);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchTerm, products]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    filterProducts();
  };

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedProducts(filtered);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
  };

  const handleOrder = (product) => {
    console.log('Ordered:', product);
    // Implement your order logic here
  };

  return (
    <PageContainer>
      <ShopSidebar onCategorySelect={handleCategorySelect} />
      <ProductSection>
        {/* <form onSubmit={handleSearchSubmit}>
          <SearchBar>
            <SearchInput 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchButton type="submit">
              <Search size={20} />
            </SearchButton>
          </SearchBar>
        </form> */}
        <ProductGrid>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductType>
                <Printer size={14} />
                {product.category}
              </ProductType>
              <ProductImageContainer>
                <ProductImage src={product.image} alt={product.name} />
              </ProductImageContainer>
              <ProductTitle>{product.name}</ProductTitle>
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
      </ProductSection>
    </PageContainer>
  );
};

export default ShopPage;