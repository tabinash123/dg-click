import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem('shoppingCart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToStorage = (cart) => {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
};

const initialState = {
  items: loadCartFromStorage(),
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((total, item) => {
        return total + (parseFloat(item.price.replace('$', '')) * item.quantity);
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;