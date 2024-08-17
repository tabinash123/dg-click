import React, { useState } from 'react';
import styled from 'styled-components';
import { Star, ShoppingBag } from 'lucide-react';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
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
`;

const MoreProductsButton = styled.button`
  background-color: #FF7F50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? '#FFE4E1' : 'white'};
  color: ${props => props.active ? '#FF7F50' : 'black'};
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #FFE4E1;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductCategory = styled.span`
  color: #777;
  font-size: 14px;
`;

const ProductName = styled.h3`
  margin: 5px 0;
  font-size: 18px;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DiscountedPrice = styled.span`
  color: #FF7F50;
  font-weight: bold;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #777;
  margin-right: 5px;
`;

const AddToCartButton = styled.button`
  background-color: #FFE4E1;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProductCategoryComponent = () => {
  const [activeCategory, setActiveCategory] = useState('View All');

  const categories = ['View All', 'Apparel', 'Branding', 'Calendars', 'Packaging', 'Present', 'Stationery'];
  
  const products = [
    { 
      id: 1, 
      name: 'Custom T-Shirt Printing', 
      category: 'Apparel', 
      image: '/path/to/tshirt-printing.jpg', 
      rating: 5, 
      price: 18.00, 
      originalPrice: 20.00 
    },
    { 
      id: 2, 
      name: 'Business Card Design', 
      category: 'Branding', 
      image: '/path/to/business-card.jpg', 
      rating: 5, 
      price: 45.00, 
      originalPrice: 50.00 
    },
    { 
      id: 3, 
      name: 'Custom Wall Calendar', 
      category: 'Calendars', 
      image: '/path/to/wall-calendar.jpg', 
      rating: 4, 
      price: 22.00 
    },
    { 
      id: 4, 
      name: 'Branded Gift Box', 
      category: 'Packaging', 
      image: '/path/to/gift-box.jpg', 
      rating: 5, 
      price: 15.00, 
      originalPrice: 18.00 
    },
    { 
      id: 5, 
      name: 'Personalized Mug Printing', 
      category: 'Present', 
      image: '/path/to/mug-printing.jpg', 
      rating: 4, 
      price: 12.00 
    },
    { 
      id: 6, 
      name: 'Custom Letterhead Design', 
      category: 'Stationery', 
      image: '/path/to/letterhead.jpg', 
      rating: 5, 
      price: 35.00, 
      originalPrice: 40.00 
    },
    { 
      id: 7, 
      name: 'Embroidered Cap', 
      category: 'Apparel', 
      image: '/path/to/embroidered-cap.jpg', 
      rating: 4, 
      price: 25.00 
    },
    { 
      id: 8, 
      name: 'Logo Design Service', 
      category: 'Branding', 
      image: '/path/to/logo-design.jpg', 
      rating: 5, 
      price: 150.00, 
      originalPrice: 180.00 
    }
  ];

  const filteredProducts = activeCategory === 'View All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <Container>
      <Header>
        <Title>List of Our Popular Products</Title>
        <MoreProductsButton>MORE PRODUCTS</MoreProductsButton>
      </Header>
      
      <CategoryFilter>
        {categories.map(category => (
          <CategoryButton 
            key={category} 
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>
      
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductCategory>{product.category}</ProductCategory>
            <ProductName>{product.name}</ProductName>
            <ProductRating>
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < product.rating ? "#FFD700" : "none"} stroke="#FFD700" size={16} />
              ))}
            </ProductRating>
            <ProductPrice>
              <div>
                {product.originalPrice && <OriginalPrice>${product.originalPrice.toFixed(2)}</OriginalPrice>}
                <DiscountedPrice>${product.price.toFixed(2)}</DiscountedPrice>
              </div>
              <AddToCartButton>
                <ShoppingBag size={20} color="#FF7F50" />
              </AddToCartButton>
            </ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductCategoryComponent;