import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    {
      name: "Frames",
      products: [
        {
          id: "frame-001",
          name: "Multiple Design Frames",
          description: "Various frame designs to suit your style",
          image: "/images/frames-multiple.jpg",
          price: "$24.99",
          specifications: [
            "Available sizes: 4x6\", 5x7\", 8x10\"",
            "Materials: Wood, Metal, Plastic",
            "Colors: Black, White, Brown, Silver",
            "Wall-mountable",
            "Landscape and portrait orientations"
          ]
        },
        {
          id: "frame-002",
          name: "Non-breakable Mirror",
          description: "Durable and safe mirror frames",
          image: "/images/frames-mirror.jpg",
          price: "$34.99",
          specifications: [
            "Sizes: 12x12\", 16x20\", 24x36\"",
            "Material: Shatterproof acrylic",
            "Frame: Aluminum alloy",
            "Thickness: 3mm",
            "Easy wall mounting"
          ]
        },
        {
          id: "frame-003",
          name: "Nepali Handicraft Antique Style",
          description: "Unique frames with traditional Nepali design",
          image: "/images/frames-nepali.jpg",
          price: "$49.99",
          specifications: [
            "Size: 8x10\", 11x14\"",
            "Material: Hand-carved wood",
            "Finish: Antique gold or silver",
            "Each piece is unique",
            "Comes with a certificate of authenticity"
          ]
        }
      ]
    },
    // Add ids to products in other services similarly
    {
      name: "Cushions",
      products: [
        {
          id: "cushion-001",
          name: "Single Side Print Cushion",
          description: "Custom printed cushions on one side",
          image: "/images/cushion-single.jpg",
          price: "$19.99",
          specifications: [
            "Size: 18x18 inches",
            "Material: 100% polyester cover",
            "Filling: Polyester fiberfill",
            "Printing: Dye-sublimation on one side",
            "Zipper closure for easy washing"
          ]
        },
        // ... other cushion products
      ]
    },
    // ... other services
  ],
  selectedService: null,
  selectedProduct: null,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedService, setSelectedProduct } = servicesSlice.actions;

export default servicesSlice.reducer;