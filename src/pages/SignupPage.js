import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { User, Mail, Lock, EyeOff, Eye } from 'lucide-react';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 2rem 0;
`;

const SignupForm = styled.form`
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
  color: #333;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a5568;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  border: 1px solid ${props => props.error ? '#e53e3e' : '#d1d5db'};
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  color: #9ca3af;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
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

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #4a5568;

  a {
    color: #3b82f6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some(user => user.email === email)) {
        setErrors({ form: 'User with this email already exists' });
        setIsLoading(false);
        return;
      }

      // Create new user
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Set login status
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(newUser));

      // Redirect to home page or dashboard
      navigate('/');
    } catch (error) {
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <SignupForm onSubmit={handleSubmit}>
        <Title>Create Your Account</Title>
        <InputGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            error={errors.name}
          />
          <InputIcon><User size={20} /></InputIcon>
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            error={errors.email}
          />
          <InputIcon><Mail size={20} /></InputIcon>
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            error={errors.password}
          />
          <InputIcon clickable onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </InputIcon>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            error={errors.confirmPassword}
          />
          <InputIcon><Lock size={20} /></InputIcon>
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </InputGroup>
        {errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </Button>
        <LoginLink>
          Already have an account? <a href="/login">Log in</a>
        </LoginLink>
      </SignupForm>
    </PageContainer>
  );
};

export default SignupPage;