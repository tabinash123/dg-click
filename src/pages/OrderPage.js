import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Package, ChevronDown, ChevronUp } from 'lucide-react';

const PageContainer = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const OrderList = styled.div`
  display: grid;
  gap: 20px;
`;

const OrderCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const OrderHeader = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderLabel = styled.span`
  font-size: 0.9rem;
  color: #777;
`;

const OrderValue = styled.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`;

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  background-color: ${props => {
    switch (props.status.toLowerCase()) {
      case 'delivered':
        return '#e7f7ed';
      case 'shipped':
        return '#e3effd';
      case 'processing':
        return '#fff6e6';
      default:
        return '#f0f0f0';
    }
  }};
  color: ${props => {
    switch (props.status.toLowerCase()) {
      case 'delivered':
        return '#2ecc71';
      case 'shipped':
        return '#3498db';
      case 'processing':
        return '#f39c12';
      default:
        return '#777';
    }
  }};
`;

const OrderDetails = styled(motion.div)`
  padding: 0 20px 20px;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.span`
  font-size: 1rem;
  color: #333;
`;

const ItemPrice = styled.span`
  font-size: 1rem;
  color: #666;
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #777;
  text-align: center;
  margin-top: 50px;
`;

const OrderHistoryPage = () => {
  const orders = useSelector(state => state.orders.orders);
  const [expandedOrder, setExpandedOrder] = React.useState(null);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (orders.length === 0) {
    return (
      <PageContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Title>
          <Package size={36} />
          Order History
        </Title>
        <EmptyMessage>You haven't placed any orders yet.</EmptyMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>
        <Package size={36} />
        Order History
      </Title>
      <OrderList>
        {orders.map((order, index) => (
          <OrderCard
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <OrderHeader onClick={() => toggleOrderDetails(order.id)}>
              <OrderInfo>
                <OrderLabel>Order ID</OrderLabel>
                <OrderValue>{order.id}</OrderValue>
              </OrderInfo>
              <OrderInfo>
                <OrderLabel>Date</OrderLabel>
                <OrderValue>{new Date(order.date).toLocaleDateString()}</OrderValue>
              </OrderInfo>
              <OrderInfo>
                <OrderLabel>Total</OrderLabel>
                <OrderValue>${order.total.toFixed(2)}</OrderValue>
              </OrderInfo>
              <StatusBadge status={order.status}>
                {order.status}
              </StatusBadge>
              {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </OrderHeader>
            {expandedOrder === order.id && (
              <OrderDetails
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {order.items.map(item => (
                  <OrderItem key={item.id}>
                    <ItemName>{item.name} x {item.quantity}</ItemName>
                    <ItemPrice>${(item.basePrice * item.quantity).toFixed(2)}</ItemPrice>
                  </OrderItem>
                ))}
              </OrderDetails>
            )}
          </OrderCard>
        ))}
      </OrderList>
    </PageContainer>
  );
};

export default OrderHistoryPage;