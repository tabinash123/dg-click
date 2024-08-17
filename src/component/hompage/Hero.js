import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

const LeftSection = styled.div`
  width: 55%;
  background-color: #1a2352;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
  z-index: 1;
`;

const RightSection = styled.div`
  width: 45%;
  background-color: #ff5733;
  position: relative;
`;

const WelcomeText = styled.h3`
  color: #ff5733;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: normal;
`;

const MainHeading = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const SubText = styled.p`
  color: #a0a0a0;
  font-size: 16px;
  margin-bottom: 30px;
  max-width: 80%;
  line-height: 1.6;
`;

const CtaButton = styled.button`
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
`;

const ProductImage = styled.img`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  height: 90%;
  object-fit: contain;
  z-index: 2;
`;

const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`;

const LeftArrow = styled(NavArrow)`
  left: 20px;
`;

const RightArrow = styled(NavArrow)`
  right: 20px;
`;

const Shape = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Circle = styled(Shape)`
  border-radius: 50%;
`;

const HalfCircle = styled(Shape)`
  border-radius: 50% 50% 0 0;
`;

const Triangle = styled(Shape)`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <LeftSection>
        <WelcomeText>Welcome To Printex!</WelcomeText>
        <MainHeading>Digital Printing Solution For You</MainHeading>
        <SubText>
          There are many variations of passages orem ipsum available but the majority
          have suffered alteration in some form by injected humour or randomised words
          which don't look even slightly believable.
        </SubText>
        <CtaButton>About More</CtaButton>
      </LeftSection>
      <RightSection>
        <ProductImage src="/api/placeholder/400/600" alt="Printed Products" />
        <Circle style={{ width: '100px', height: '100px', top: '10%', right: '20%' }} />
        <Circle style={{ width: '50px', height: '50px', top: '30%', right: '10%' }} />
        <Circle style={{ width: '150px', height: '150px', bottom: '20%', right: '-5%' }} />
        <HalfCircle style={{ width: '80px', height: '40px', top: '60%', left: '10%' }} />
        <Triangle style={{ width: '60px', height: '60px', top: '20%', left: '30%' }} />
      </RightSection>
      <LeftArrow>&lt;</LeftArrow>
      <RightArrow>&gt;</RightArrow>
    </HeroContainer>
  );
};

export default HeroSection;