import React, { useState } from 'react';
import styled from 'styled-components';
import { User, ShoppingBag, CreditCard, MapPin, Bell, Heart, LogOut, Package, Percent, UserCheck } from 'lucide-react';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f3f4f6;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

const SidebarHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 1rem;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  
  ${props => props.active ? `
    background-color: #e6f2ff;
    color: #3b82f6;
  ` : `
    &:hover {
      background-color: #f3f4f6;
    }
  `}
`;

const IconWrapper = styled.span`
  margin-right: 0.75rem;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #6b7280;
  transition: color 0.2s;

  &:hover {
    color: #1f2937;
  }
`;

const ContentHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const InfoCard = styled(Card)`
  background-color: ${props => props.bgColor || '#e6f2ff'};
`;

const ProgressBar = styled.div`
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.5rem;
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: #3b82f6;
  height: 100%;
  width: ${props => props.width || '0%'};
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const tabs = [
    { name: 'Dashboard', icon: User },
    { name: 'Orders', icon: ShoppingBag },
    { name: 'Payment', icon: CreditCard },
    { name: 'Addresses', icon: MapPin },
    { name: 'Notifications', icon: Bell },
    { name: 'Wishlist', icon: Heart },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <>
            <ContentHeader>Welcome back, John!</ContentHeader>
            <InfoCard bgColor="#e6f2ff">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconWrapper><Package size={24} /></IconWrapper>
                <div>
                  <p style={{ fontWeight: 500 }}>You have 2 orders in progress</p>
                  <Button style={{ marginTop: '0.5rem' }}>View Orders</Button>
                </div>
              </div>
            </InfoCard>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <InfoCard bgColor="#ecfdf5">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconWrapper><Percent size={24} /></IconWrapper>
                  <div>
                    <p style={{ fontWeight: 500 }}>5% off your next order</p>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>Use code: SAVE5</p>
                  </div>
                </div>
              </InfoCard>
              <InfoCard bgColor="#f3e8ff">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconWrapper><UserCheck size={24} /></IconWrapper>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 500 }}>Complete your profile</p>
                    <ProgressBar style={{ marginTop: '0.5rem' }}>
                      <Progress width="75%" />
                    </ProgressBar>
                  </div>
                </div>
              </InfoCard>
            </div>
          </>
        );
      case 'Orders':
        return <p>Your order history will be displayed here.</p>;
      case 'Payment':
        return <p>Manage your payment methods here.</p>;
      case 'Addresses':
        return <p>Your saved addresses will appear here.</p>;
      case 'Notifications':
        return <p>Customize your notification preferences here.</p>;
      case 'Wishlist':
        return <p>Items you've saved for later will be shown here.</p>;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Sidebar>
        <SidebarHeader>My Account</SidebarHeader>
        <NavList>
          {tabs.map((tab) => (
            <NavItem key={tab.name}>
              <NavButton
                onClick={() => setActiveTab(tab.name)}
                active={activeTab === tab.name}
              >
                <IconWrapper>
                  <tab.icon size={20} />
                </IconWrapper>
                {tab.name}
              </NavButton>
            </NavItem>
          ))}
        </NavList>
        <div style={{ marginTop: 'auto' }}>
          <LogoutButton>
            <IconWrapper>
              <LogOut size={20} />
            </IconWrapper>
            Log Out
          </LogoutButton>
        </div>
      </Sidebar>
      <MainContent>
        {renderContent()}
      </MainContent>
    </Container>
  );
};

export default UserAccount;