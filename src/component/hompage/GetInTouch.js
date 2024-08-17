import React from 'react';
import styled from 'styled-components';
import artist from '../../assets/pmporiqo.png'

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const ContactSection = styled.section`
  display: flex;
  background-color: #1a1a1a;
  color: white;
  padding: 50px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Image = styled.img`
  max-height: 500px;
  width: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.desktop}) {
    max-height: 400px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding-left: 50px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 0;
    margin-top: 30px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 30px;
  color: #cccccc;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #2a2a2a;
  border: none;
  color: white;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #2a2a2a;
  border: none;
  color: white;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #ff4b4b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  align-self: flex-start;

  @media (max-width: ${breakpoints.mobile}) {
    align-self: stretch;
  }
`;

const GetInTouch = () => {
  return (
    <ContactSection>
      <ImageContainer>
        <Image src={artist} alt="Stylish man with tattoos" />
      </ImageContainer>
      <FormContainer>
        <Title>GET IN TOUCH</Title>
        <Subtitle>
          Have any questions? Feel free to use the contact form below to get
          in touch with us. We will answer you as soon as possible!
        </Subtitle>
        <Form>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="tel" placeholder="Your Phone" />
          <TextArea placeholder="Your Message" rows={4} />
          <SubmitButton type="submit">SEND MESSAGE</SubmitButton>
        </Form>
      </FormContainer>
    </ContactSection>
  );
};

export default GetInTouch;