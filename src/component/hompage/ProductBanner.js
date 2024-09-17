import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Palette, Layout, Upload, Printer, Type, Grid } from 'lucide-react';

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 80px;
  font-family: Arial, sans-serif;
  background-color: #F8F9FA;
`;

const ContentSection = styled.div`
  max-width: 50%;
`;

const CustomDesignText = styled.p`
  color: #FF4D4D;
  font-size: 14px;
  font-weight: 600;

  margin: 0 0 10px 0;
`;

const DesignTitle = styled.h1`
   color: #0A2540;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;

`;

const DescriptionText = styled.p`
   color: #4A5568;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;

`;

const StartDesigningButton = styled.button`
  background-color: #FF6B35;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  color: #FF6B35;
`;

const FeatureText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #333;
`;

const ImageSection = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const ProductText = styled.div`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.textColor};
  text-align: center;
  max-width: 80%;
  word-wrap: break-word;
`;

const ColorPicker = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ColorOption = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${props => props.selected ? '#004225' : 'transparent'};
  background-color: ${props => props.color};
  cursor: pointer;
`;

const ProductSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const ProductOption = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.selected ? '#FF6B35' : '#E5E5E5'};
  color: ${props => props.selected ? 'white' : '#333'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
`;

const CustomizationSection = styled.div`
  margin-top: 20px;
`;

const CustomizationTitle = styled.h3`
  color: #004225;
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FontSizeSelector = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LayoutSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const LayoutOption = styled.button`
  padding: 8px;
  background-color: ${props => props.selected ? '#FF6B35' : '#E5E5E5'};
  color: ${props => props.selected ? 'white' : '#333'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CustomDesignBanner = () => {
  const [selectedColor, setSelectedColor] = useState('#FF6B35');
  const [selectedProduct, setSelectedProduct] = useState('T-Shirt');
  const [customText, setCustomText] = useState('Your Custom Text');
  const [fontSize, setFontSize] = useState(24);
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [layout, setLayout] = useState('center');

  const colors = ['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FFEB3B'];
  const products = ['T-Shirt', 'Mug', 'Canvas'];
  const layouts = ['center', 'top', 'bottom'];

  useEffect(() => {
    // Set text color based on background color brightness
    const r = parseInt(selectedColor.slice(1, 3), 16);
    const g = parseInt(selectedColor.slice(3, 5), 16);
    const b = parseInt(selectedColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    setTextColor(brightness > 128 ? '#000000' : '#FFFFFF');
  }, [selectedColor]);

  const getTextPosition = () => {
    switch(layout) {
      case 'top': return 'flex-start';
      case 'bottom': return 'flex-end';
      default: return 'center';
    }
  };

  return (
    <BannerContainer>
      <ContentSection>
        <CustomDesignText>Unleash Your Creativity</CustomDesignText>
        <DesignTitle>Create Your Custom Design</DesignTitle>
        <DescriptionText>
          Bring your ideas to life with our easy-to-use design tools. Perfect for any occasion or style.
        </DescriptionText>
        <StartDesigningButton>Start Designing Now</StartDesigningButton>
        
        <CustomizationSection>
          <CustomizationTitle>Customize Your Design</CustomizationTitle>
          <TextInput 
            type="text" 
            value={customText} 
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Enter your custom text"
          />
          <FontSizeSelector value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))}>
            {[16, 20, 24, 28, 32, 36].map(size => (
              <option key={size} value={size}>{size}px</option>
            ))}
          </FontSizeSelector>
          <ColorPicker>
            {colors.map(color => (
              <ColorOption 
                key={color} 
                color={color} 
                selected={selectedColor === color}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </ColorPicker>
          <LayoutSelector>
            {layouts.map(l => (
              <LayoutOption
                key={l}
                selected={layout === l}
                onClick={() => setLayout(l)}
              >
                <Grid size={24} />
              </LayoutOption>
            ))}
          </LayoutSelector>
        </CustomizationSection>

        <ProductSelector>
          {products.map(product => (
            <ProductOption
              key={product}
              selected={selectedProduct === product}
              onClick={() => setSelectedProduct(product)}
            >
              {product}
            </ProductOption>
          ))}
        </ProductSelector>

        <FeatureGrid>
          <FeatureItem>
            <IconWrapper><Palette size={24} /></IconWrapper>
            <FeatureText>Choose from a wide range of colors</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><Layout size={24} /></IconWrapper>
            <FeatureText>Customize layout and composition</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><Upload size={24} /></IconWrapper>
            <FeatureText>Upload your own artwork or images</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper><Printer size={24} /></IconWrapper>
            <FeatureText>High-quality printing on various materials</FeatureText>
          </FeatureItem>
        </FeatureGrid>
      </ContentSection>
      <ImageSection bgColor={selectedColor} style={{ alignItems: getTextPosition() }}>
        <ProductText fontSize={fontSize} textColor={textColor}>
          {customText}
        </ProductText>
      </ImageSection>
    </BannerContainer>
  );
};

export default CustomDesignBanner;