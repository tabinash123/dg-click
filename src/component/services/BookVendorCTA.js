import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  color: #333;
`;

const Answer = styled.div`
  padding: 0 1rem 1rem;
  color: #666;
`;

const faqData = [
  {
    question: "What are your operating hours?",
    answer: "Our shop is open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We are closed on Sundays and public holidays."
  },
  {
    question: "Do you offer rush orders or express services?",
    answer: "Yes, we do offer rush order services for most of our products. However, additional charges may apply depending on the complexity and volume of the order. Please contact us directly for more information on rush orders."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards (Visa and Mastercard), and popular mobile payment methods used in Nepal. For large orders, we also accept bank transfers."
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we offer delivery services within Kathmandu Valley. For orders outside the valley, we can arrange shipping through reliable courier services. Delivery charges may vary based on the location and size of the order."
  },
  {
    question: "Can I see samples of your work before placing an order?",
    answer: "Absolutely! We have a portfolio of our previous work available at our shop. You can also check our website gallery for examples of our printing and design work. For custom orders, we can provide digital proofs before proceeding with the final print."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      {faqData.map((faq, index) => (
        <FAQItem key={index}>
          <Question onClick={() => toggleQuestion(index)}>
            {faq.question}
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Question>
          {openIndex === index && <Answer>{faq.answer}</Answer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQSection;