import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart, Printer, ChevronLeft, ChevronRight } from 'lucide-react';
import ShopSidebar from './ShopSidebar';

// Import images
import canvas2 from '../../assets/gallary/canvas2.jpg';
import canvas3 from '../../assets/gallary/canvas3.jpg';
import canvas4 from '../../assets/gallary/canvas4.jpg';
import canvas5 from '../../assets/gallary/canvas5.jpg';
import cap1 from '../../assets/gallary/cap1.jpg';
import cap2 from '../../assets/gallary/cap2.jpg';
import cap3 from '../../assets/gallary/cap3 (2).jpg';
import cap4 from '../../assets/gallary/cap4.jpg';
import frame3 from '../../assets/gallary/frame3.jpg';
import frame4 from '../../assets/gallary/frame4.jpg';
import frame5 from '../../assets/gallary/frame5.jpg';
import id from '../../assets/gallary/id.jpg';
import id2 from '../../assets/gallary/id2.jpg';
import id4 from '../../assets/gallary/id4.jpg';
import trophy3 from '../../assets/gallary/trophy3.jpg';
import trophy4 from '../../assets/gallary/trophy4.jpg';
import tshirt1 from '../../assets/gallary/tshirt1.jpg';
import tshirt3 from '../../assets/gallary/tshirt3.jpg';
import tshirt4 from '../../assets/gallary/tshirt4.jpg';

// ... (keep all the existing styled components)

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
// New styled components for pagination
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? '#e74c3c' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #e74c3c;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#c0392b' : '#f8d7da'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const allProducts = [
  { id: 1, name: 'Canvas Print 1', price: 59.99, category: 'Canvas', image: canvas2 },
  { id: 2, name: 'Canvas Print 2', price: 64.99, category: 'Canvas', image: canvas3 },
  { id: 3, name: 'Canvas Print 3', price: 69.99, category: 'Canvas', image: canvas4 },
  { id: 4, name: 'Canvas Print 4', price: 74.99, category: 'Canvas', image: canvas5 },
  { id: 5, name: 'Cap Design 1', price: 24.99, category: 'Cap', image: cap1 },
  { id: 6, name: 'Cap Design 2', price: 26.99, category: 'Cap', image: cap2 },
  { id: 7, name: 'Cap Design 3', price: 28.99, category: 'Cap', image: cap3 },
  { id: 8, name: 'Cap Design 4', price: 29.99, category: 'Cap', image: cap4 },
  { id: 9, name: 'Photo Frame 1', price: 34.99, category: 'Frame', image: frame3 },
  { id: 10, name: 'Photo Frame 2', price: 39.99, category: 'Frame', image: frame4 },
  { id: 11, name: 'Photo Frame 3', price: 44.99, category: 'Frame', image: frame5 },
  { id: 12, name: 'ID Card 1', price: 9.99, category: 'ID Card', image: id },
  { id: 13, name: 'ID Card 2', price: 10.99, category: 'ID Card', image: id2 },
  { id: 14, name: 'ID Card 3', price: 11.99, category: 'ID Card', image: id4 },
  { id: 15, name: 'Trophy Design 1', price: 49.99, category: 'Trophy', image: trophy3 },
  { id: 16, name: 'Trophy Design 2', price: 54.99, category: 'Trophy', image: trophy4 },
  { id: 17, name: 'T-Shirt Print 1', price: 19.99, category: 'T-shirt', image: tshirt1 },
  { id: 18, name: 'T-Shirt Print 2', price: 21.99, category: 'T-shirt', image: tshirt3 },
  { id: 19, name: 'T-Shirt Print 3', price: 23.99, category: 'T-shirt', image: tshirt4 },
];

const ITEMS_PER_PAGE = 6;

const ShopPage = () => {
  const [products, setProducts] = useState(allProducts);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchTerm, currentPage]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
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

    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setDisplayedProducts(filtered.slice(startIndex, endIndex));
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Implement your add to cart logic here
  };

  const handleOrder = (product) => {
    console.log('Ordered:', product);
    // Implement your order logic here
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <PageContainer>
      <ShopSidebar onCategorySelect={handleCategorySelect} />
      <ProductSection>
        <form onSubmit={handleSearchSubmit}>
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
        </form>
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
        <PaginationContainer>
          <PageButton 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20} />
          </PageButton>
          {[...Array(totalPages).keys()].map((page) => (
            <PageButton 
              key={page + 1} 
              onClick={() => handlePageChange(page + 1)}
              active={currentPage === page + 1}
            >
              {page + 1}
            </PageButton>
          ))}
          <PageButton 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={20} />
          </PageButton>
        </PaginationContainer>
      </ProductSection>
    </PageContainer>
  );
};

export default ShopPage;