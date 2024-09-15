import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PEXELS_API_KEY = 'E6KGz4qmpfLtUbCY2aVIS7KZvL3ZBQjsQlBUDqVHr2HjOsp0Gc4ruPkp';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  &::after {
    content: '99';
    position: absolute;
    top: -15px;
    right: -30px;
    font-size: 24px;
    color: #000;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 500px;
  margin: 0 auto 60px;
  line-height: 1.5;
`;

const TestimonialCard = styled.div`
  text-align: left;
  padding: 0 20px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Position = styled.p`
  font-size: 14px;
  color: #999;
  margin: 5px 0 15px;
`;

const Quote = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
`;

const CustomPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const PageNumber = styled.span`
  font-size: 16px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: ${props => props.active ? '#000' : '#999'};
  margin: 0 5px;
  cursor: pointer;
`;

const PageDivider = styled.span`
  width: 40px;
  height: 2px;
  background-color: ${props => props.active ? '#000' : '#ccc'};
  margin: 0 5px;
`;

const testimonials = [
  {
    name: "BELLA MATHIS",
    position: "Designer",
    quote: "Donec vel magna rhoncus tellus ultricies tristique. Proin et cursus nibh. Ut eu neque et dui dapibus laoreet sit amet id urna. Morbi odio enim. Cras in.",
  },
  {
    name: "ANGELA RANDALL",
    position: "Designer",
    quote: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec et tempor augue. Praesent sagittis metus id est varius ut.",
  },
  {
    name: "AMANDA DOE",
    position: "Designer",
    quote: "Sed a mauris sit amet urna posuere porta nec in libero. Maecenas a facilisis arcu, eu aliquet neque. Nam quis dictum ipsum, quis dapibus nunc sed.",
  },
  {
    name: "JOHN SMITH",
    position: "Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
  },
  {
    name: "EMMA WILSON",
    position: "Marketing Specialist",
    quote: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
  },
];

const TestimonialSection = () => {
  const [profileImages, setProfileImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesToShow = 3;
  const pageCount = Math.ceil(testimonials.length / slidesToShow);

  useEffect(() => {
    const fetchProfileImages = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=portrait&per_page=${testimonials.length}&orientation=square`,
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }
        );
        setProfileImages(response.data.photos.map(photo => photo.src.medium));
      } catch (error) {
        console.error('Error fetching profile images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds per slide
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Title>THEY SAID</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus ultrices nibh ut</Subtitle>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <ProfileImage src={profileImages[index]} alt={testimonial.name} />
            <Name>{testimonial.name}</Name>
            <Position>{testimonial.position}</Position>
            <Quote>{testimonial.quote}</Quote>
          </TestimonialCard>
        ))}
      </Slider>
      <CustomPagination>
        {[...Array(pageCount)].map((_, index) => (
          <React.Fragment key={index}>
            <PageNumber 
              active={Math.floor(activeSlide / slidesToShow) === index} 
              onClick={() => setActiveSlide(index * slidesToShow)}
            >
              0{index + 1}
            </PageNumber>
            {index < pageCount - 1 && <PageDivider active={Math.floor(activeSlide / slidesToShow) === index} />}
          </React.Fragment>
        ))}
      </CustomPagination>
    </Section>
  );
};

export default TestimonialSection;