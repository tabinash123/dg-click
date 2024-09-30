import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProductCard = styled.div`
  width: 250px;
  text-align: left;
`;

const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  height: 44px;
  overflow: hidden;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreDetails = styled.a`
  color: #333;
  text-decoration: underline;
  cursor: pointer;
`;

const Price = styled.span`
  color: #e91e63;
  font-weight: bold;
`;

const Stock = styled.span`
  color: green;
  font-size: 14px;
`;

const NavigationArrow = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #e91e63;
  display: flex;
  align-items: center;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${props => props.active ? '#e91e63' : '#bbb'};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`;

const ViewMoreButton = styled.button`
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

const products = [
  {
    title: 'Pre Wedding Photography Service',
    price: 'Rs 15,000.00',
    inStock: true
  },
  {
    title: 'Customized T-shirt Print',
    price: 'Rs 800.00',
    inStock: true
  },
  {
    title: 'Wedding Mala Framing',
    price: 'Rs 2,500.00',
    inStock: true
  },
  {
    title: 'Cushion print',
    price: 'Rs 1,000.00',
    inStock: true
  }
];

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const ProductShowcase = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          params: {
            query: 'photography printing',
            per_page: products.length
          },
          headers: {
            Authorization: PEXELS_API_KEY
          }
        });
        setProductImages(response.data.photos.map(photo => photo.src.medium));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(products.length / 4));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(products.length / 4)) % Math.ceil(products.length / 4));
  };

  return (
    <Section>
      <Title>Our Product</Title>
      <Subtitle>"Our clients' testimonials speak louder than words, echoing the trust and satisfaction they've found in our exceptional services."</Subtitle>
      <ProductGrid>
        <NavigationArrow onClick={prevPage}><ChevronLeft size={32} /></NavigationArrow>
        {products.slice(currentPage * 4, (currentPage + 1) * 4).map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={productImages[index] || 'https://via.placeholder.com/250'} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDetails>
              <MoreDetails>More Details</MoreDetails>
              <Price>{product.price}</Price>
            </ProductDetails>
            {product.inStock && <Stock>In Stock</Stock>}
          </ProductCard>
        ))}
        <NavigationArrow onClick={nextPage}><ChevronRight size={32} /></NavigationArrow>
      </ProductGrid>
      <Dots>
        {[...Array(Math.ceil(products.length / 4))].map((_, i) => (
          <Dot key={i} active={i === currentPage} />
        ))}
      </Dots>
      <ViewMoreButton>View More Products</ViewMoreButton>
    </Section>
  );
};

export default ProductShowcase;