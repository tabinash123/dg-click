import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeFromCart, updateQuantity } from '../store/actions';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const CartContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CartItems = styled.div`
  flex: 2;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 10px 0;
`;

const ItemPrice = styled.p`
  font-weight: bold;
  color: #4a4a4a;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const QuantityButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
`;

const QuantityDisplay = styled.span`
  margin: 0 10px;
  font-size: 1rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #e74c3c;
`;

const CartSummary = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const EmptyCartMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 50px;
  color: #777;
`;

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, change) => {
    const item = cartItems.find(item => item.id === productId);
    const newQuantity = Math.max(1, item.quantity + change);
    dispatch(updateQuantity(productId, newQuantity));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const subtotal = total;
  const shipping = 10;
  const tax = subtotal * 0.1;
  const orderTotal = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <PageContainer>
        <Title>Your Cart</Title>
        <EmptyCartMessage>Your cart is empty. Start shopping!</EmptyCartMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Title>Your Cart</Title>
      <CartContainer>
        <CartItems>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ItemImage src={item.imageUrl || 'https://via.placeholder.com/100x100'} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.basePrice.toFixed(2)}</ItemPrice>
              </ItemDetails>
              <QuantityControl>
                <QuantityButton onClick={() => handleQuantityChange(item.id, -1)}><Minus size={16} /></QuantityButton>
                <QuantityDisplay>{item.quantity}</QuantityDisplay>
                <QuantityButton onClick={() => handleQuantityChange(item.id, 1)}><Plus size={16} /></QuantityButton>
              </QuantityControl>
              <RemoveButton onClick={() => handleRemove(item.id)}><Trash2 size={20} /></RemoveButton>
            </CartItem>
          ))}
        </CartItems>
        <CartSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </SummaryItem>
          <SummaryItem style={{ fontWeight: 'bold', marginTop: '20px' }}>
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </SummaryItem>
          <CheckoutButton onClick={handleCheckout}>
            <ShoppingBag size={20} style={{ marginRight: '10px' }} />
            Proceed to Checkout
          </CheckoutButton>
        </CartSummary>
      </CartContainer>
    </PageContainer>
  );
};

export default CartPage;