import productData from '../data/productData';

// Action Types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Action Creators
export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
    payload: productData  // Use the imported productData here
  });
  
  export const filterProductsByCategory = (category) => ({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: category
  });

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id: productId, quantity }
});