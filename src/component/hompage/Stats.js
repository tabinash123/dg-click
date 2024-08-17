import React from 'react';
import styled from 'styled-components';
import { FaPenNib, FaPaintBrush, FaTrophy, FaSmile } from "react-icons/fa";

const StatsSection = styled.section`
  background-image: url('path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const StatItem = styled.div`
  text-align: center;
  color: white;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 576px) {
    width: 48%;
  }

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 992px) {
    width: 18%;
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.div`
  font-size: 20px;
  color: #e53935;
  transform: rotate(-45deg);
`;

const StatNumber = styled.h3`
  font-size: 28px;
  color: #e53935;
  margin: 0;
  font-weight: 700;
  font-family: 'Arial', sans-serif;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 992px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.p`
  font-size: 12px;
  color: #999;
  margin: 5px 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Arial', sans-serif;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const Stats = () => {
  const statsData = [
    { number: '910+', label: 'Tattoos Design', icon: FaPenNib },
    { number: '509+', label: 'Piercing Done', icon: FaPenNib },
    { number: '352+', label: 'Corrective Makeup', icon: FaPaintBrush },
    { number: '204+', label: 'Number of Awards', icon: FaTrophy },
    { number: '2524+', label: 'Happy Clients', icon: FaSmile },
  ];

  return (
    <StatsSection>
      <StatsContainer>
        {statsData.map((stat, index) => (
          <StatItem key={index}>
            <IconWrapper>
              <StyledIcon as={stat.icon} />
            </IconWrapper>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;