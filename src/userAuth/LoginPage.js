import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Mail, Lock } from 'lucide-react';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f4f6;
`;

const LoginForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  color: #3b82f6;
  text-decoration: none;
  margin-top: 0.5rem;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;

  a {
    color: #3b82f6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user exists and password is correct
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Store login status in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Redirect to home page or dashboard
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <PageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Log In to Your Account</Title>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </InputGroup>
        <Button type="submit">Log In</Button>
        <ForgotPassword href="/forgot-password">Forgot password?</ForgotPassword>
        <SignupLink>
          Don't have an account? <a href="/signup">Sign up</a>
        </SignupLink>
      </LoginForm>
    </PageContainer>
  );
};

export default LoginPage;