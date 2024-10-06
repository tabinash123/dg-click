import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createOrder } from '../store/actions';
import { Edit, Check } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${props => props.readOnly ? '#f3f4f6' : 'white'};
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 15px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  color: #3498db;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const OrderSummary = styled.div`
  margin-top: 30px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    phoneNumber: '',
    paymentMethod: 'credit_card'
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    if (userData) {
      setFormData(prevState => ({
        ...prevState,
        name: userData.name || '',
        email: userData.email || '',
        address: userData.address || '',
        city: userData.city || '',
        country: userData.country || '',
        phoneNumber: userData.phoneNumber || ''
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      items: cartItems,
      total: total,
      status: 'Processing',
      ...formData
    };
    dispatch(createOrder(orderData));
    navigate('/order-confirmation');
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <PageContainer>
      <Title>Checkout</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly={!isEditing}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditing}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            readOnly={!isEditing}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            readOnly={!isEditing}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="country">Country</Label>
          <Input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            readOnly={!isEditing}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            readOnly={!isEditing}
            required
          />
        </FormGroup>
        <EditButton type="button" onClick={toggleEdit}>
          {isEditing ? (
            <>
              <Check size={18} style={{ marginRight: '5px' }} />
              Confirm Changes
            </>
          ) : (
            <>
              <Edit size={18} style={{ marginRight: '5px' }} />
              Edit Information
            </>
          )}
        </EditButton>
        <FormGroup>
          <Label htmlFor="paymentMethod">Payment Method</Label>
          <Select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank_transfer">Bank Transfer</option>
          </Select>
        </FormGroup>
        <Button type="submit">Place Order</Button>
      </Form>
      <OrderSummary>
        <SummaryTitle>Order Summary</SummaryTitle>
        {cartItems.map(item => (
          <SummaryItem key={item.id}>
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.basePrice * item.quantity).toFixed(2)}</span>
          </SummaryItem>
        ))}
        <SummaryItem>
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </SummaryItem>
      </OrderSummary>
    </PageContainer>
  );
};

export default CheckoutPage;