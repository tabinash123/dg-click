import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus, Minus, X } from 'lucide-react';
import img1 from '../../assets/whyus.jpg'

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #FFF5EE;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }
`;

const FAQSection = styled.div`
  flex: 1;
`;

const SmallTitle = styled.h3`
  color: #FF6347;
  font-size: 16px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Title = styled.h2`
  color: #004d40;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
`;

const FAQQuestion = styled.div`
  background-color: ${props => props.isOpen ? '#FF4500' : 'white'};
  color: ${props => props.isOpen ? 'white' : 'black'};
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  font-weight: ${props => props.isOpen ? 'bold' : 'normal'};
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const FAQAnswer = styled.div`
  background-color: white;
  padding: 15px;
  margin-top: 2px;
  color: #666;
  line-height: 1.6;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${props => props.isOpen ? 'white' : '#004d40'};
  color: ${props => props.isOpen ? '#FF4500' : 'white'};
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
  display:none;
    margin-top: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1024px) {
    width: 450px;
    height: 450px;
  }
`;

const Dots = styled.div`
  position: absolute;
  right: -20px;
  bottom: -20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #FF4500;
  border-radius: 50%;
`;

const FAQComponent = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const questions = [
    {
      question: "What types of items can you print on?",
      answer: "At DG CLICK@ CHABAHIL PVT. LTD, we offer a wide range of printing services. We can print on cups, plates, caps, t-shirts, CDs/DVDs, PVC cards, tiles, calendars, and even create custom photo frames. Our versatile printing capabilities allow us to accommodate various personal and business needs."
    },
    {
      question: "How long does it take to complete an order?",
      answer: "The turnaround time depends on the specific item and quantity ordered. Simple items like PVC cards or cups may be ready within 1-2 business days, while more complex orders like custom calendars or large quantities of t-shirts might take 3-5 business days. We always strive to deliver your orders as quickly as possible without compromising on quality."
    },
    {
      question: "Do you offer design services?",
      answer: "Yes, we do! Our full digital lab and studio is equipped to help you with design services. Whether you need help creating a logo for your custom caps, designing a layout for your calendar, or preparing artwork for t-shirt printing, our experienced design team can assist you in bringing your ideas to life."
    },
    {
      question: "What file formats do you accept for printing?",
      answer: "We accept a variety of file formats to ensure we can work with your designs. Common formats include PDF, AI, PSD, JPEG, and PNG. For best results, we recommend using high-resolution files. If you're unsure about your file format or resolution, feel free to contact us, and we'll be happy to guide you."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <Container>
      <FAQSection>
        <SmallTitle>Have Any Questions?</SmallTitle>
        <Title>Frequently Asked Questions</Title>
        {questions.map((q, index) => (
          <FAQItem key={index}>
            <FAQQuestion isOpen={openQuestion === index} onClick={() => toggleQuestion(index)}>
              {q.question}
              <ToggleIcon isOpen={openQuestion === index}>
                {openQuestion === index ? <Minus size={16} /> : <Plus size={16} />}
              </ToggleIcon>
            </FAQQuestion>
            {openQuestion === index && <FAQAnswer>{q.answer}</FAQAnswer>}
          </FAQItem>
        ))}
      </FAQSection>
      <ImageSection>
        <Image src={img1} alt="DG CLICK Digital Lab & Studio" />
        <Dots>
          {[...Array(9)].map((_, i) => <Dot key={i} />)}
        </Dots>
      </ImageSection>
    </Container>
  );
};

export default FAQComponent;