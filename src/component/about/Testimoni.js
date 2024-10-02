import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  max-width: 1000px;
  margin: 60px auto;
  padding: 24px;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1e2a4a;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 600;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMemberCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MemberImageContainer = styled.div`
  position: relative;
  padding-top: 75%; // 4:3 Aspect ratio
  background-color: ${props => props.bgColor};
`;

const MemberInfo = styled.div`
  padding: 15px;
`;

const MemberName = styled.h3`
  font-size: 1rem;
  color: #1e2a4a;
  margin-bottom: 4px;
  font-weight: 600;
`;

const MemberPosition = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const MemberQuote = styled.p`
  font-size: 0.85rem;
  color: #e74c3c;
  font-style: italic;
`;

const IconBadge = styled.div`
  width: 30px;
  height: 30px;
  background-color: #e74c3c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  position: absolute;
  bottom: 10px;
  left: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const teamMembers = [
  {
    name: 'CAMSTIIQ ANA 7',
    position: 'Photographer and Studio Manager',
    quote: 'Capturing moments, creating memories',
    bgColor: '#3498db', // Blue background color
  },
  {
    name: 'CUSLTT 74',
    position: 'Soulcanagne Hinlvainde Z M.S.L.',
    quote: '18 Instru fax',
    bgColor: '#2ecc71', // Green background color
  },
  {
    name: 'John Doe',
    position: 'Founder and CEO',
    quote: '"DG-Click has been my passion project"',
    bgColor: '#e67e22', // Orange background color
  },
  // Add a fourth member to demonstrate the new grid layout
  {
    name: 'Jane Smith',
    position: 'Marketing Director',
    quote: 'Bringing vision to life through marketing',
    bgColor: '#9b59b6', // Purple background color
  },
];

const TeamMember = ({ member }) => (
  <TeamMemberCard>
    <MemberImageContainer bgColor={member.bgColor}>
      <IconBadge>{member.name.charAt(0)}</IconBadge>
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