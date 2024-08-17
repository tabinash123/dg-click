import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { MessageSquare, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: #000000;
  color: white;
  position: relative;
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at top left, rgba(255,69,0,0.2) 0%, rgba(0,0,0,0) 30%),
    radial-gradient(circle at bottom right, rgba(0,128,0,0.2) 0%, rgba(0,0,0,0) 30%);
  pointer-events: none;
`;

const FeedbackLabel = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 69, 0, 0.2);
  color: #FF6347;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: bold;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  color: #999;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  transition: transform 0.5s ease;
`;

const TestimonialCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 30px;
  text-align: left;
  width: 45%;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  }
`;

const QuoteIcon = styled.div`
  color: #FF6347;
  font-size: 36px;
  margin-bottom: 10px;
`;

const TestimonialTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #FF6347;
`;

const TestimonialText = styled.p`
  color: #ccc;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Customer = styled.div`
  display: flex;
  align-items: center;
`;

const CustomerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerName = styled.h4`
  margin: 0;
  font-size: 16px;
  color: white;
`;

const CustomerRole = styled.p`
  margin: 0;
  font-size: 14px;
  color: #FF6347;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const NavButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF6347;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      title: "Pleasure to do Business With!",
      text: "Printpark Printing does an outstanding job printing anything andeverything we send them. But the biggest reason I go to them time and again is the customer pleasure of the moment...",
      name: "Nathan Felix",
      role: "Manager_Create Corporate",
      rating: 4,
      image: "/path/to/nathan-felix.jpg"
    },
    {
      title: "Exceed My Expectations!",
      text: "Over the years, Printpark has been a reliable partner for our custom printing needs. When we have custom prints jobs, we turn to Printpark for value, careful atten- tion, and...",
      name: "Nora Penelope",
      role: "GM_Blackcats Security Service",
      rating: 5,
      image: "/path/to/nora-penelope.jpg"
    },
    // Add more testimonials here
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <Container>
      <GradientOverlay />
      <FeedbackLabel>
        <MessageSquare size={16} style={{marginRight: '5px'}} /> FEEDBACK
      </FeedbackLabel>
      <Title>Customers about Our Service</Title>
      <Subtitle>There are many variations of passages of lorem but the majority.</Subtitle>
      <TestimonialContainer style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialTitle>{testimonial.title}</TestimonialTitle>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <CustomerInfo>
              <Customer>
                <CustomerImage src={testimonial.image} alt={testimonial.name} />
                <CustomerDetails>
                  <CustomerName>{testimonial.name}</CustomerName>
                  <CustomerRole>{testimonial.role}</CustomerRole>
                </CustomerDetails>
              </Customer>
              <Rating>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    fill={i < testimonial.rating ? "#FFD700" : "none"} 
                    stroke="#FFD700" 
                    size={16} 
                  />
                ))}
              </Rating>
            </CustomerInfo>
          </TestimonialCard>
        ))}
      </TestimonialContainer>
      <NavigationButtons>
        <NavButton onClick={prevTestimonial} disabled={currentIndex === 0}>
          <ChevronLeft size={24} />
        </NavButton>
        <NavButton onClick={nextTestimonial} disabled={currentIndex === testimonials.length - 2}>
          <ChevronRight size={24} />
        </NavButton>
      </NavigationButtons>
    </Container>
  );
};

export default TestimonialComponent;