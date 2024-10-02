import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 32px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 30px;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 0.9rem;
  color: #e74c3c;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const MainTitle = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const MissionItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const MissionTitle = styled.h4`
  font-size: 0.95rem;
  color: #2c3e50;
  margin-bottom: 4px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 6px;
    color: #e74c3c;
  }
`;

const MissionDescription = styled.p`
  font-size: 0.85rem;
  color: #7f8c8d;
  line-height: 1.3;
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-image: url('/path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const missionItems = [
  { title: 'Expert', description: 'Our team of professionals are skilled and passionate about delivering excellence.' },
  { title: 'Uncompromising', description: 'Quality is at the heart of everything we do at DG-Click.' },
  { title: 'Cutting-Edge', description: 'We constantly invest in the latest photographic and printing technologies.' },
  { title: 'Exceptional', description: 'We provide more than just a service; we create an experience.' },
  { title: 'Personalized', description: 'Every client is unique and deserves a tailored approach.' },
  { title: 'Boundless', description: 'We believe that creativity knows no bounds, and neither do we.' },
];

const OurMission = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <SectionTitle>Our Mission</SectionTitle>
        <MainTitle>Passion for Excellence</MainTitle>
        <Description>
          At DG-Click, we are driven by a deep passion for photography and a commitment to exceptional printing services.
        </Description>
        <MissionGrid>
          {missionItems.map((item, index) => (
            <MissionItem
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <MissionTitle>
                <Camera size={14} />
                {item.title}
              </MissionTitle>
              <MissionDescription>{item.description}</MissionDescription>
            </MissionItem>
          ))}
        </MissionGrid>
      </ContentContainer>
      <ImageContainer
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
    </SectionContainer>
  );
};

export default OurMission;