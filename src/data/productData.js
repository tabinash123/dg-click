import canvas1 from '../assets/gallary/canvas1.jpg';
import canvas2 from '../assets/gallary/canvas2.jpg';
import canvas3 from '../assets/gallary/canvas3.jpg';
import canvas4 from '../assets/gallary/canvas4.jpg';
import canvas5 from '../assets/gallary/canvas5.jpg';
import cap1 from '../assets/gallary/cap1.jpg';
import cap2 from '../assets/gallary/cap2.jpg';
import cap3 from '../assets/gallary/cap3 (2).jpg';
import cap4 from '../assets/gallary/cap4.jpg';
import frame3 from '../assets/gallary/frame3.jpg';
import frame4 from '../assets/gallary/frame4.jpg';
import frame5 from '../assets/gallary/frame5.jpg';
import id from '../assets/gallary/id.jpg';
import id2 from '../assets/gallary/id2.jpg';
import id4 from '../assets/gallary/id4.jpg';
import trophy3 from '../assets/gallary/trophy3.jpg';
import trophy4 from '../assets/gallary/trophy4.jpg';
import tshirt1 from '../assets/gallary/tshirt1.jpg';
import tshirt3 from '../assets/gallary/tshirt3.jpg';
import tshirt4 from '../assets/gallary/tshirt4.jpg';

const productData = [
    {
      id: "canvas001",
      category: "Canvas",
      name: "Custom Canvas Print - Style 1",
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
      imageUrl: canvas1
    },
    {
      id: "canvas002",
      category: "Canvas",
      name: "Custom Canvas Print - Style 2",
      description: "Elegant canvas prints for your home or office",
      basePrice: 44.99,
      options: [
        {
          type: "Size",
          choices: ["16x20", "18x24", "24x36"],
          priceModifiers: {
            "18x24": 12.00,
            "24x36": 22.00
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
      imageUrl: canvas2
    },
    {
      id: "canvas003",
      category: "Canvas",
      name: "Custom Canvas Print - Style 3",
      description: "High-quality canvas prints with vibrant colors",
      basePrice: 49.99,
      options: [
        {
          type: "Size",
          choices: ["16x20", "18x24", "24x36"],
          priceModifiers: {
            "18x24": 15.00,
            "24x36": 25.00
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
      imageUrl: canvas3
    },
    {
      id: "canvas004",
      category: "Canvas",
      name: "Custom Canvas Print - Style 4",
      description: "Premium canvas prints for lasting memories",
      basePrice: 54.99,
      options: [
        {
          type: "Size",
          choices: ["16x20", "18x24", "24x36"],
          priceModifiers: {
            "18x24": 18.00,
            "24x36": 28.00
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
      imageUrl: canvas4
    },
    {
      id: "canvas005",
      category: "Canvas",
      name: "Custom Canvas Print - Style 5",
      description: "Artistic canvas prints for a unique touch",
      basePrice: 59.99,
      options: [
        {
          type: "Size",
          choices: ["16x20", "18x24", "24x36"],
          priceModifiers: {
            "18x24": 20.00,
            "24x36": 30.00
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
      imageUrl: canvas5
    },
    {
      id: "cap001",
      category: "Caps",
      name: "Custom Printed Cap - Style 1",
      description: "Personalized caps for everyday wear",
      basePrice: 19.99,
      options: [
        {
          type: "Size",
          choices: ["S/M", "L/XL"],
          priceModifiers: { "L/XL": 2.00 }
        },
        {
          type: "Color",
          choices: ["Black", "White", "Red", "Blue"]
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
      imageUrl: cap1
    },
    {
      id: "cap002",
      category: "Caps",
      name: "Custom Printed Cap - Style 2",
      description: "Stylish caps with your personal touch",
      basePrice: 24.99,
      options: [
        {
          type: "Size",
          choices: ["S/M", "L/XL"],
          priceModifiers: { "L/XL": 2.00 }
        },
        {
          type: "Color",
          choices: ["Black", "White", "Red", "Blue"]
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
      imageUrl: cap2
    },
    {
      id: "cap003",
      category: "Caps",
      name: "Custom Printed Cap - Style 3",
      description: "Premium caps for a unique look",
      basePrice: 29.99,
      options: [
        {
          type: "Size",
          choices: ["S/M", "L/XL"],
          priceModifiers: { "L/XL": 2.00 }
        },
        {
          type: "Color",
          choices: ["Black", "White", "Red", "Blue"]
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
      imageUrl: cap3
    },
    {
      id: "cap004",
      category: "Caps",
      name: "Custom Printed Cap - Style 4",
      description: "Durable caps for everyday adventures",
      basePrice: 22.99,
      options: [
        {
          type: "Size",
          choices: ["S/M", "L/XL"],
          priceModifiers: { "L/XL": 2.00 }
        },
        {
          type: "Color",
          choices: ["Black", "White", "Red", "Blue"]
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
      imageUrl: cap4
    },
    {
      id: "frame001",
      category: "Frames",
      name: "Custom Photo Frame - Style 1",
      description: "Elegant frames for your cherished memories",
      basePrice: 34.99,
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
      imageUrl: frame3
    },
    {
      id: "frame002",
      category: "Frames",
      name: "Custom Photo Frame - Style 2",
      description: "Stylish frames to showcase your favorite photos",
      basePrice: 39.99,
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
      imageUrl: frame4
    },
    {
      id: "frame003",
      category: "Frames",
      name: "Custom Photo Frame - Style 3",
      description: "Premium frames for a touch of elegance",
      basePrice: 44.99,
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
      imageUrl: frame5
    },
    {
      id: "id001",
      category: "ID Cards",
      name: "Custom ID Card - Style 1",
      description: "Professional ID cards for your organization",
      basePrice: 9.99,
      options: [
        {
          type: "Material",
          choices: ["PVC", "Plastic", "Paper"]
        }
      ],
      customizationOptions: [
        {
          type: "DesignUpload",
          description: "Upload your design"
        },
        {
          type: "TextCustomization",
          description: "Add custom text and details"
        }
      ],
      imageUrl: id
    },
    {
      id: "id002",
      category: "ID Cards",
      name: "Custom ID Card - Style 2",
      description: "Durable ID cards with your custom design",
      basePrice: 12.99,
      options: [
        {
          type: "Material",
          choices: ["PVC", "Plastic", "Paper"]
        }
      ],
      customizationOptions: [
        {
          type: "DesignUpload",
          description: "Upload your design"
        },
        {
          type: "TextCustomization",
          description: "Add custom text and details"
        }
      ],
      imageUrl: id2
    },
    {
      id: "id003",
      category: "ID Cards",
      name: "Custom ID Card - Style 3",
      description: "High-quality ID cards for secure identification",
      basePrice: 14.99,
      options: [
        {
          type: "Material",
          choices: ["PVC", "Plastic", "Paper"]
        }
      ],
      customizationOptions: [
        {
          type: "DesignUpload",
          description: "Upload your design"
        },
        {
          type: "TextCustomization",
          description: "Add custom text and details"
        }
      ],
      imageUrl: id4
    },
    {
      id: "trophy001",
      category: "Trophies",
      name: "Custom Trophy - Style 1",
      description: "Elegant trophies for your events and competitions",
      basePrice: 49.99,
      options: [
        {
          type: "Size",
          choices: ["Small", "Medium", "Large"],
          priceModifiers: {
            "Medium": 10.00,
            "Large": 20.00
          }
        },
        {
          type: "Material",
          choices: ["Plastic", "Metal", "Glass"]
        }
      ],
      customizationOptions: [
        {
          type: "Engraving",
          description: "Add custom engraving"
        }
      ],
      imageUrl: trophy3
    },
    {
      id: "trophy002",
      category: "Trophies",
      name: "Custom Trophy - Style 2",
      description: "Premium trophies to honor achievements",
      basePrice: 59.99,
      options: [
        {
          type: "Size",
          choices: ["Small", "Medium", "Large"],
          priceModifiers: {
            "Medium": 15.00,
            "Large": 25.00
          }
        },
        {
          type: "Material",
          choices: ["Plastic", "Metal", "Glass"]
        }
      ],
      customizationOptions: [
        {
          type: "Engraving",
          description: "Add custom engraving"
        }
      ],
      imageUrl: trophy4
    },
    {
      id: "tshirt001",
      category: "T-Shirts",
      name: "Custom T-Shirt - Style 1",
      description: "Comfortable t-shirts with your design",
      basePrice: 19.99,
      options: [
        {
          type: "Size",
          choices: ["S", "M", "L", "XL", "XXL"],
          priceModifiers: { "XXL": 2.00 }
        },
        {
          type: "Color",
          choices: ["White", "Black", "Gray", "Red", "Blue"]
        }
      ],
      customizationOptions: [
        {
          type: "DesignUpload",
          description: "Upload your custom design"
        },
        {
          type: "TextCustomization",
          description: "Add custom text"
        }
      ],
      imageUrl: tshirt1
    },
    {
      id: "tshirt002",
      category: "T-Shirts",
      name: "Custom T-Shirt - Style 2",
      description: "High-quality t-shirts for your unique style",
      basePrice: 24.99,
      options: [
        {
          type: "Size",
          choices: ["S", "M", "L", "XL", "XXL"],
          priceModifiers: { "XXL": 2.00 }
        },
        {
          type: "Color",
          choices: ["White", "Black", "Gray", "Red", "Blue"]
        }
      ],
      customizationOptions: [
        {
          type: "DesignUpload",
          description: "Upload your custom design"
        },
        {
          type: "TextCustomization",
          description: "Add custom text"
        }
      ],
      imageUrl: tshirt3
    },
    {
      id: "tshirt003",
      category: "T-Shirts",
      name: "Custom T-Shirt - Style 3",
      description: "Premium t-shirts for a perfect fit",
      basePrice: 29.99,
      options: [
        {
          type: "Size",
          choices: ["S", "M", "L", "XL", "XXL"],
          priceModifiers: { "XXL": 2.00 }
        },
        {
          type: "Color",
          choices: ["White", "Black", "Gray", "Red", "Blue"]
        }
      ],
      customizationOptions: [
        {
          type: "DesignUpload",
          description: "Upload your custom design"
        },
        {
          type: "TextCustomization",
          description: "Add custom text"
        }
      ],
      imageUrl: tshirt4
    }
  ];
  
  export default productData;