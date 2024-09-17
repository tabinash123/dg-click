import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

// ... (all styled components remain the same)

const TestimonialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 60px 20px;
  font-family: 'Arial', sans-serif;
`;

const SmallTitle = styled.h3`
  color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;

`;

const LargeTitle = styled.h2`
   color: #0A2540;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;

`;

const TestimonialContent = styled.div`
  position: relative;
  padding: 0 60px;
`;

const TestimonialText = styled.p`
  color: #4A5568;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;

`;

const ClientInfo = styled.div`
  margin-top: 20px;
`;

const ClientName = styled.h4`
  font-size: 22px;
  font-weight: bold;
  color: #0a3d2a;
  margin-bottom: 5px;
`;

const ClientPosition = styled.p`
  font-size: 16px;
  color: #666;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 5px;
  opacity: 0.5;
  overflow: hidden;
  transition: all 0.3s ease;

  &.active {
    width: 70px;
    height: 70px;
    opacity: 1;
    // border: 3px solid #ff6347;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #0a3d2a;
`;

const PrevButton = styled(NavigationButton)`
  left: 0;
`;

const NextButton = styled(NavigationButton)`
  right: 0;
`;

const Testimoni = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: "You could even ask influencers to write a blog post for their own website that reviews your product or services, plus the tips they learned through working with you. This gets your business in front of even more readers and prospective target clients.",
      name: "Glean Philips",
      position: "Product Manager",
      avatar: ""
    },
    {
      text: "The printing quality exceeded our expectations. The team was professional and delivered on time. Highly recommended for all your printing needs!",
      name: "Sarah Johnson",
      position: "Marketing Director",
      avatar: ""
    },
    {
      text: "Outstanding service! They helped us design and print materials for our company rebrand. The results were fantastic and our clients love the new look.",
      name: "Michael Chen",
      position: "CEO",
      avatar: ""
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          params: {
            query: 'business portrait',
            per_page: testimonials.length,
            size: 'small'
          },
          headers: {
            Authorization: PEXELS_API_KEY
          }
        });

        const updatedTestimonials = testimonials.map((testimonial, index) => ({
          ...testimonial,
          avatar: response.data.photos[index].src.small
        }));

        setTestimonials(updatedTestimonials);
      } catch (error) {
        console.error('Error fetching avatars:', error);
      }
    };

    fetchAvatars();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <TestimonialContainer>
      <SmallTitle>Testimonial</SmallTitle>
      <LargeTitle>What Our Client Says</LargeTitle>
      <TestimonialContent>
        <AvatarContainer>
          {testimonials.map((testimonial, index) => (
            <Avatar 
              key={index} 
              className={index === activeIndex ? 'active' : ''}
            >
              <AvatarImage 
                src={testimonial.avatar || `/api/placeholder/${index === activeIndex ? '70' : '50'}/${index === activeIndex ? '70' : '50'}`} 
                alt={`Client ${index + 1}`} 
              />
            </Avatar>
          ))}
        </AvatarContainer>
        <TestimonialText>
          {testimonials[activeIndex].text}
        </TestimonialText>
        <ClientInfo>
          <ClientName>{testimonials[activeIndex].name}</ClientName>
          <ClientPosition>{testimonials[activeIndex].position}</ClientPosition>
        </ClientInfo>
        <PrevButton onClick={handlePrev}><ChevronLeft size={32} /></PrevButton>
        <NextButton onClick={handleNext}><ChevronRight size={32} /></NextButton>
      </TestimonialContent>
    </TestimonialContainer>
  );
};

export default Testimoni;