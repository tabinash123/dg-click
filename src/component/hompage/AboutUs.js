import React from 'react';
import styled from 'styled-components';

const IntroductionContainer = styled.section`
  display: flex;
  padding: 60px 120px;
  background-color: #ffffff;
  position: relative;
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ExperienceBadge = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;
  background-color: #ff5733;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-left: 60px;
`;

const SubHeading = styled.h3`
  color: #ff5733;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const MainHeading = styled.h2`
  color: #1a2352;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Description = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
`;

const FeatureItem = styled.li`
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #ff5733;
    margin-right: 10px;
    font-weight: bold;
  }
`;

const ReadMoreButton = styled.button`
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:after {
    content: '>';
    margin-left: 10px;
  }
`;

const IntroductionSection = () => {
  return (
    <IntroductionContainer>
      <ImageContainer>
        <Image src="/api/placeholder/600/400" alt="Digital Printing Expert" />
        <ExperienceBadge>
          50<br />Years of<br />Experience
        </ExperienceBadge>
      </ImageContainer>
      <ContentContainer>
        <SubHeading>ABOUT COMPANY</SubHeading>
        <MainHeading>Best Solution For<br />Digital Printing</MainHeading>
        <Description>
          Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed
          dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl
          tristique, commodo vehicula arcu.
        </Description>
        <Description>
          Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere sapien.
          Morbi a dignissim enim. Fusce elementum, augue in elementum porta, sapien nunc volutpat ex,
          a accumsan nunc lectus eu lectus.
        </Description>
        <FeatureList>
          <FeatureItem>Aenean et pretium arcunterdum et malesuada fames ac ante ipsum primis.</FeatureItem>
          <FeatureItem>Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</FeatureItem>
          <FeatureItem>Interdum et malesuada fames ac ante ipsum primis in faucibus.</FeatureItem>
        </FeatureList>
        <ReadMoreButton>READ MORE</ReadMoreButton>
      </ContentContainer>
    </IntroductionContainer>
  );
};

export default IntroductionSection;