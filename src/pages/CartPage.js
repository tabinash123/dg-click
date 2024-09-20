import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeFromCart, updateQuantity, clearCart, calculateTotal } from '../store/shoppingCartSlice';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CartTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 5px 0;
`;

const QuantityInput = styled.input`
  width: 50px;
  margin: 0 10px;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #c82333;
  }
`;

const TotalSection = styled.div`
  margin-top: 20px;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #218838;
  }
`;

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [items, dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const handleCheckout = () => {
    alert(`Order placed! Total: $${total.toFixed(2)}`);
    dispatch(clearCart());
    navigate('/');
  };

  return (
    <CartContainer>
      <CartTitle>Your Shopping Cart</CartTitle>
      {items.map(item => (
        <CartItem key={item.id}>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{item.price}</ItemPrice>
          </ItemInfo>
          <QuantityInput 
            type="number" 
            min="1" 
            value={item.quantity}
            onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
          />
          <RemoveButton onClick={() => handleRemoveItem(item.id)}>Remove</RemoveButton>
        </CartItem>
      ))}
      <TotalSection>
        Total: ${total.toFixed(2)}
      </TotalSection>
      <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
    </CartContainer>
  );
};

export default CartPage;