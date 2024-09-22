import img1 from '../assets/gallary/cap1.jpg'

const productData = [
    {
      id: "photo001",
      category: "Photo",
      name: "Custom Photo Print",
      description: "High-quality photo prints in various sizes",
      basePrice: 9.99,
      options: [
        {
          type: "Size",
          choices: ["4x6", "5x7", "6x8", "8x10", "8x12", "10x12"],
          priceModifiers: {
            "8x10": 5.00,
            "8x12": 7.00,
            "10x12": 10.00
          }
        }
      ],
      customizationOptions: [
        {
          type: "PhotoUpload",
          description: "Upload your photo"
        }
      ],
      imageUrl: img1
    },
    {
      id: "tshirt001",
      category: "T-shirt Printing",
      name: "Custom T-Shirt",
      description: "Customize your own T-shirt with various print options",
      basePrice: 15.99,
      options: [
        {
          type: "Size",
          choices: ["S", "M", "L", "XL", "XXL"],
          priceModifiers: { "XXL": 2.00 }
        },
        {
          type: "Color",
          choices: ["White", "Black", "Red", "Blue"]
        }
      ],
      customizationOptions: [
        {
          type: "PrintType",
          description: "Choose your print type",
          choices: ["Logo only", "Front & back logo", "Full color", "DTF Print", "Screen Print", "Sublimation print"]
        },
        {
          type: "DesignUpload",
          description: "Upload your custom design"
        }
      ],
      imageUrl: img1
    },
    {
      id: "frame001",
      category: "Frames",
      name: "Modal frame",
      description: "Elegant frames in multiple designs and materials",
      basePrice: 24.99,
      options: [
        {
          type: "Size",
          choices: ["8x10", "11x14", "16x20"],
          priceModifiers: {
            "11x14": 5.00,
            "16x20": 10.00
          }
        },
        {
          type: "Material",
          choices: ["Wood", "Metal", "Plastic"]
        }
      ],
      customizationOptions: [
        {
          type: "Design",
          description: "Choose frame design",
          choices: ["Classic", "Modern", "Ornate"]
        }
      ],
      imageUrl: img1
    },
    {
      id: "frame002",
      category: "Frames",
      name: "Nepali frame",
      description: "Elegant frames in multiple designs and materials",
      basePrice: 24.99,
      options: [
        {
          type: "Size",
          choices: ["8x10", "11x14", "16x20"],
          priceModifiers: {
            "11x14": 5.00,
            "16x20": 10.00
          }
        },
        {
          type: "Material",
          choices: ["Wood", "Metal", "Plastic"]
        }
      ],
      customizationOptions: [
        {
          type: "Design",
          description: "Choose frame design",
          choices: ["Classic", "Modern", "Ornate"]
        }
      ],
      imageUrl: img1
    },
    {
      id: "cup001",
      category: "Cup",
      name: "Custom Printed Cup",
      description: "Personalized cups for your morning coffee or tea",
      basePrice: 12.99,
      options: [
        {
          type: "Type",
          choices: ["Normal Cup", "Coffee Cup", "Magic Cup", "Two Tones Cup"]
        },
        {
          type: "Size",
          choices: ["Small (8oz)", "Medium (12oz)", "Large (16oz)"],
          priceModifiers: {
            "Medium (12oz)": 2.00,
            "Large (16oz)": 4.00
          }
        }
      ],
      customizationOptions: [
        {
          type: "DesignUpload",
          description: "Upload your design"
        },
        {
          type: "TextCustomization",
          description: "Add custom text"
        }
      ],
      imageUrl: img1
    },
    {
      id: "canvas001",
      category: "Canvas",
      name: "Custom Canvas Print",
      description: "Turn your photos into beautiful canvas art",
      basePrice: 39.99,
      options: [
        {
          type: "Size",
          choices: ["16x20", "18x24", "24x36"],
          priceModifiers: {
            "18x24": 10.00,
            "24x36": 20.00
          }
        }
      ],
      customizationOptions: [
        {
          type: "PhotoUpload",
          description: "Upload your photo"
        },
        {
          type: "FramingOption",
          description: "Choose framing option",
          choices: ["No frame", "Floating frame", "Traditional frame"]
        }
      ],
      imageUrl: img1
    }
  ];
  
  export default productData;
