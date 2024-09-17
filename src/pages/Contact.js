import React, { useState } from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail, Clock, Globe, Send, Facebook, Instagram } from 'lucide-react';

// ... (previous styled components remain the same)

const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
     color: #0A2540;
  font-size: 28px;
  font-weight: 700;
  
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;

  text-align: center;
  margin-bottom: 50px;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  background-color: white;
  border-radius: 10px;
  // box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 40px;
  // background-color: #0a3d2a;
  color: black;
`;

const InfoTitle = styled.h3`
  color: #4A5568;
  margin-bottom: 20px;
  font-size: 16px;

`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  margin-left: 15px;
  font-size: 14px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialIcon = styled.a`
  color: white;
  &:hover {
    color: #ffd700;
  }
`;

const ContactForm = styled.form`
  flex: 1;
  min-width: 300px;
  padding: 40px;
`;

const FormTitle = styled.h3`
 color: #0A2540;
  font-size: 28px;
  font-weight: 700;

  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 150px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #0a3d2a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0c4d34;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 60px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const BusinessHours = styled.div`
  margin-top: 30px;
`;

const HoursTitle = styled.h4`
  font-size: 15px;
  margin-bottom: 10px;
`;

const HoursText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const SuccessMessage = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email is invalid";
    if (!formData.subject.trim()) formErrors.subject = "Subject is required";
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // Hide success message after 5 seconds
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <ContactSection>
      <Title>Get in Touch</Title>
      <Subtitle>We're here to help and answer any question you might have. We look forward to hearing from you!</Subtitle>
      <ContactWrapper>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          <InfoItem>
            <MapPin size={24} />
            <InfoText>123 Printing Avenue, Inkville, PR 12345</InfoText>
          </InfoItem>
          <InfoItem>
            <Phone size={24} />
            <InfoText>+1 (555) 123-4567</InfoText>
          </InfoItem>
          <InfoItem>
            <Mail size={24} />
            <InfoText>contact@printmaster.com</InfoText>
          </InfoItem>
          <InfoItem>
            <Globe size={24} />
            <InfoText>www.printmaster.com</InfoText>
          </InfoItem>
          <BusinessHours>
            <HoursTitle>Business Hours</HoursTitle>
            <HoursText>Monday - Friday: 9:00 AM - 6:00 PM</HoursText>
            <HoursText>Saturday: 10:00 AM - 4:00 PM</HoursText>
            <HoursText>Sunday: Closed</HoursText>
          </BusinessHours>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook"><Facebook size={24} /></SocialIcon>
            <SocialIcon href="#" aria-label="Instagram"><Instagram size={24} /></SocialIcon>
          </SocialLinks>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send Us a Message</FormTitle>
          {submitted && <SuccessMessage>Thank you for your message. We'll get back to you soon!</SuccessMessage>}
          <Input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          <Input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <Input 
            type="tel" 
            name="phone" 
            placeholder="Your Phone (optional)" 
            value={formData.phone} 
            onChange={handleChange} 
          />
          <Input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.subject ? "true" : "false"}
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
          <TextArea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          <SubmitButton type="submit">
            Send Message
            <Send size={18} style={{ marginLeft: '10px' }} />
          </SubmitButton>
        </ContactForm>
      </ContactWrapper>
      <Map>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412734716447!2d-73.98823368459442!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1630619200000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
          title="Google Map"
        ></iframe>
      </Map>
    </ContactSection>
  );
};

export default ContactUs;