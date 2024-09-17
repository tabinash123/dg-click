import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Pen, FileText, CheckSquare, Printer } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Subtitle = styled.h3`
  color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;

  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h2`
    color: #0A2540;
  font-size: 28px;
  font-weight: 700;

  margin-bottom:12px;
  position: relative;
  display: inline-block;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: ${props => props.delay}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${Item}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
   color: #0A2540;
  font-size: 16px;
  font-weight: 600;

  margin: 0 0 5px 0;
`;

const ItemDescription = styled.p`
  color: #666;
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
`;

const StepNumber = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: #f0f0f0;
  position: absolute;
  top: -15px;
  right: 10px;
  z-index: 0;
`;

const HowItWorks = () => {
  const items = [
    { icon: Pen, title: "Booking Online", color: "#ff6347" },
    { icon: FileText, title: "Received Work", color: "#ffd700" },
    { icon: CheckSquare, title: "Satisfied Design", color: "#00008b" },
    { icon: Printer, title: "Start Printing", color: "#ff6347" }
  ];

  return (
    <Section>
      <Header>
        <Subtitle>Working Process</Subtitle>
        <Title>HOW IT WORKS</Title>
      </Header>
      <Grid>
        {items.map((item, index) => (
          <Item key={index} delay={index * 0.1}>
            <IconWrapper style={{ backgroundColor: item.color }}>
              <item.icon size={24} color="white" />
            </IconWrapper>
            <Content>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>
                God They moving an firmament seed over herb gathering multis ply morning fruitful
              </ItemDescription>
            </Content>
            <StepNumber>{index + 1}</StepNumber>
          </Item>
        ))}
      </Grid>
    </Section>
  );
};

export default HowItWorks;