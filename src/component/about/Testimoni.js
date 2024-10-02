import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 32px;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1e2a4a;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMemberCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MemberImageContainer = styled.div`
  position: relative;
  // height: 0;
  padding-top: 100%; // 1:1 Aspect ratio
`;

const MemberImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  max-height:200px;
  object-fit: cover;
`;

const MemberInfo = styled.div`
  padding: 20px;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  color: #1e2a4a;
  margin-bottom: 8px;
  font-weight: 600;
`;

const MemberPosition = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const MemberQuote = styled.p`
  font-size: 0.95rem;
  color: #e74c3c;
  font-style: italic;
`;

const IconBadge = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e74c3c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  bottom: 15px;
  left: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const teamMembers = [
  {
    name: 'CAMSTIIQ ANA 7',
    position: 'Photographer and Studio Manager',
    quote: 'Capturing moments, creating memories',
    image: '/path/to/camstiiq-image.jpg',
  },
  {
    name: 'CUSLTT 74',
    position: 'Soulcanagne Hinlvainde Z M.S.L.',
    quote: '18 Instru fax',
    image: '/path/to/cusltt-image.jpg',
  },
  {
    name: 'John Doe',
    position: 'Founder and CEO',
    quote: '"DG-Click has been my passion project"',
    image: '/path/to/john-image.jpg',
  },
];

const TeamMember = ({ member }) => (
  <TeamMemberCard>
    <MemberImageContainer>
      <MemberImage src={member.image} alt={member.name} />
    </MemberImageContainer>
    <MemberInfo>
      <MemberName>{member.name}</MemberName>
      <MemberPosition>{member.position}</MemberPosition>
      <MemberQuote>{member.quote}</MemberQuote>
    </MemberInfo>
  </TeamMemberCard>
);

const MeetTheTeam = () => {
  return (
    <SectionContainer>
      <SectionTitle>Meet the DG-Click Team</SectionTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </TeamGrid>
    </SectionContainer>
  );
};

export default MeetTheTeam;