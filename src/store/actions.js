import productData from '../data/productData';

// Action Types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const CREATE_ORDER = 'CREATE_ORDER';
export const UPDATE_ORDER_STATUS = 'UPDATE_ORDER_STATUS';
export const FETCH_ORDER_HISTORY = 'FETCH_ORDER_HISTORY';
export const CLEAR_CART = 'CLEAR_CART';

// Action Creators
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: productData
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

export const createOrder = (orderData) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_ORDER,
      payload: orderData
    });
    dispatch({
      type: CLEAR_CART
    });
  };
};

export const updateOrderStatus = (orderId, status) => ({
  type: UPDATE_ORDER_STATUS,
  payload: { orderId, status }
});

export const fetchOrderHistory = () => {
  return (dispatch, getState) => {
    const { orders } = getState();
    dispatch({
      type: FETCH_ORDER_HISTORY,
      payload: orders.orders
    });
  };
};

export const clearCart = () => ({
  type: CLEAR_CART
});