import React from 'react';
import Countdown from 'react-countdown';
import styled from 'styled-components';


const PageContainer = styled.div`
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const SayHello = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ComingSoon = styled.div`
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountdownValue = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const CountdownLabel = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;

const Bubble = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
`;

const HeroSection = () => {
  const targetDate = new Date('2024-12-31T00:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>We're live!</span>;
    } else {
      return (
        <CountdownContainer>
          <CountdownItem>
            <CountdownValue>{days}</CountdownValue>
            <CountdownLabel>Days</CountdownLabel>
          </CountdownItem>
          <CountdownItem>
            <CountdownValue>{hours}</CountdownValue>
            <CountdownLabel>Hours</CountdownLabel>
          </CountdownItem>
          <CountdownItem>
            <CountdownValue>{minutes}</CountdownValue>
            <CountdownLabel>Mins.</CountdownLabel>
          </CountdownItem>
          <CountdownItem>
            <CountdownValue>{seconds}</CountdownValue>
            <CountdownLabel>Secs.</CountdownLabel>
          </CountdownItem>
        </CountdownContainer>
      );
    }
  };

  return (
    <PageContainer>
      <Logo>PMX</Logo>
      <SayHello>Say Hello</SayHello>
      <Heading>Something great is on the way</Heading>
      <ComingSoon>COMING SOON</ComingSoon>
      <Countdown date={targetDate} renderer={renderer} />
      {[...Array(5)].map((_, index) => (
        <Bubble
          key={index}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </PageContainer>
  );
};

export default HeroSection;