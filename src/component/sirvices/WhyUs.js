import React from 'react';
import styled from 'styled-components';
import imag from '../../assets/artist.png'
const Container = styled.div`
  display: flex;
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  margin: 0px auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 100%;
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 20px;
  }
`;

const WhyChooseUs = styled.h2`
  color: #f44336;
  margin-bottom: 10px;
  font-size: 24px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 10px;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  color: #a0a0a0;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BookNowButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const TattooComponent = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imag} alt="Tattoo 1" />
        <Image src={imag} alt="Tattoo 2" />
      </ImageContainer>
      <TextContainer>
        <WhyChooseUs>Why Choose Us</WhyChooseUs>
        <Title>Cras ut vestibulum tortor.</Title>
        <Paragraph>
          In in nisi sit amet metus varius pulvinar in vitae ipsum nec mi sollicitudin Fusce turpis massa.
        </Paragraph>
        <Paragraph>
          In ante sapien, dapibus luctus aliquet a, accumsan sit amet dolor. Mauris id facilisis dolor. Donec malesuada, est eu dignissim eleifend, est nulla dignissim nisl.
        </Paragraph>
        <Paragraph>
          Velit facilisis odio. Ut felis elit, facilisis at venenatis in, luctus vitae lectus. Morbi ornare eros vitae ante porta feugiat.
        </Paragraph>
        <BookNowButton>BOOK NOW</BookNowButton>
      </TextContainer>
    </Container>
  );
};

export default TattooComponent;