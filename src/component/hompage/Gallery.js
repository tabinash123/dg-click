import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus, Minus, X } from 'lucide-react';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  background-color: #FFF5EE;
  position: relative;
`;

const FAQSection = styled.div`
  flex: 1;
`;

const SmallTitle = styled.h3`
  color: #FF6347;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #004d40;
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
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
`;

const FAQAnswer = styled.div`
  background-color: white;
  padding: 15px;
  margin-top: 2px;
  color: #666;
  line-height: 1.6;
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
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CloseIcon = styled(X)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #FF4500;
  cursor: pointer;
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
      question: "Appropriate For Your Specific Business",
      answer: "The other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the of pleasure of the moment. Dislike men who are so beguiled demoralize worlds."
    },
    {
      question: "Design & Development Troubleshooting",
      answer: "Our design and development team is equipped to handle any issues that may arise during the printing process. We ensure that your designs are optimized for print and can troubleshoot any technical problems efficiently."
    },
    {
      question: "Online Support & Action",
      answer: "We offer comprehensive online support to address any questions or concerns you may have. Our team is ready to take swift action to resolve any issues and ensure your satisfaction with our printing services."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <Container>
      <FAQSection>
        <SmallTitle>Have Any Question</SmallTitle>
        <Title>Frequently Ask Question</Title>
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
        <Image src="/path/to/your/image.jpg" alt="Printing service workers" />
        <CloseIcon size={24} />
        <Dots>
          {[...Array(9)].map((_, i) => <Dot key={i} />)}
        </Dots>
      </ImageSection>
    </Container>
  );
};

export default FAQComponent;