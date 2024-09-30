import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import axios from 'axios';

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const TestimonialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px;
  font-family: 'Arial', sans-serif;
`;

const InnerContainer = styled.div`
  background-color: #ffffff;
  padding: 48px;
`;

const SmallTitle = styled.h3`
  color: #FF4D4D;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
  text-align: center;
`;

const LargeTitle = styled.h2`
  color: #0A2540;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  line-height: 1.2;
  text-align: center;
`;

const TestimonialContent = styled.div`
  position: relative;
  padding: 0 48px;
`;

const TestimonialText = styled.p`
  color: #4A5568;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 24px;
  font-style: italic;
`;

const ClientInfo = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const ClientName = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #0A2540;
  margin-bottom: 4px;
`;

const ClientPosition = styled.p`
  font-size: 16px;
  color: #4A5568;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 8px;
  opacity: 0.5;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    width: 80px;
    height: 80px;
    opacity: 1;
    border: 3px solid #FF4D4D;
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
  background: #ffffff;
  border: none;
  cursor: pointer;
  color: #0A2540;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #FF4D4D;
    color: #ffffff;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 0;
`;

const NextButton = styled(NavigationButton)`
  right: 0;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const StarIcon = styled(Star)`
  color: #FFD700;
  margin: 0 2px;
`;

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: "DG-Click transformed our wedding memories into stunning prints. The quality of their photo albums and canvas prints exceeded our expectations. Their attention to detail and professionalism made our special day even more memorable.",
      name: "Priya and Rahul Sharma",
      position: "Newlyweds, Kathmandu",
      avatar: "",
      rating: 5
    },
    {
      text: "As a local business owner, I've been using DG-Click for all my promotional materials. From business cards to large format posters, their printing quality is consistently excellent. Their quick turnaround time has saved me on numerous occasions!",
      name: "Bijay Thapa",
      position: "Owner, Himalayan Cafe",
      avatar: "",
      rating: 5
    },
    {
      text: "I'm amazed by DG-Click's custom framing service. They helped me create a beautiful display for my traditional Nepali artwork. The craftsmanship of their frames, especially the Nepali Handicraft Antique style, is truly remarkable.",
      name: "Samjhana Gurung",
      position: "Art Collector, Pokhara",
      avatar: "",
      rating: 5
    },
    {
      text: "DG-Click's t-shirt printing service is top-notch! We ordered custom tees for our trekking group, and the designs came out vibrant and durable. Even after multiple washes, the prints look as good as new. Highly recommended!",
      name: "Mark Johnson",
      position: "Tourist and Trekking Enthusiast",
      avatar: "",
      rating: 5
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          params: {
            query: 'professional headshot',
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
      <InnerContainer>
        <SmallTitle>Testimonials</SmallTitle>
        <LargeTitle>What Our Clients Say</LargeTitle>
        <TestimonialContent>
          <AvatarContainer>
            {testimonials.map((testimonial, index) => (
              <Avatar 
                key={index} 
                className={index === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(index)}
              >
                <AvatarImage 
                  src={testimonial.avatar || `/api/placeholder/${index === activeIndex ? '80' : '64'}/${index === activeIndex ? '80' : '64'}`} 
                  alt={`Client ${index + 1}`} 
                />
              </Avatar>
            ))}
          </AvatarContainer>
          <RatingContainer>
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <StarIcon key={i} size={20} fill="#FFD700" />
            ))}
          </RatingContainer>
          <TestimonialText>
            "{testimonials[activeIndex].text}"
          </TestimonialText>
          <ClientInfo>
            <ClientName>{testimonials[activeIndex].name}</ClientName>
            <ClientPosition>{testimonials[activeIndex].position}</ClientPosition>
          </ClientInfo>
          <PrevButton onClick={handlePrev}><ChevronLeft size={24} /></PrevButton>
          <NextButton onClick={handleNext}><ChevronRight size={24} /></NextButton>
        </TestimonialContent>
      </InnerContainer>
    </TestimonialContainer>
  );
};

export default Testimonial;