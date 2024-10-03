import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CREATE_ORDER,
  UPDATE_ORDER_STATUS,
  FETCH_ORDER_HISTORY,
  CLEAR_CART
} from './actions';
import productData from '../data/productData';

const initialProductState = {
  items: productData,
  filteredItems: productData,
  loading: false,
  error: null
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload || [],
        filteredItems: action.payload || [],
        loading: false
      };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        filteredItems: state.items.filter(item => 
          item && item.category && item.category.toLowerCase() === action.payload.toLowerCase()
        )
      };
    default:
      return state;
  }
};

const initialCartState = {
  items: [],
  total: 0
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = action.payload;
      const existItem = state.items.find(item => item.id === addedItem.id);
      if (existItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === addedItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          total: state.total + addedItem.basePrice
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...addedItem, quantity: 1 }],
          total: state.total + addedItem.basePrice
        };
      }
    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.basePrice * itemToRemove.quantity)
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
        total: state.items.reduce((total, item) => 
          item.id === action.payload.id 
            ? total + (item.basePrice * action.payload.quantity)
            : total + (item.basePrice * item.quantity)
        , 0)
      };
    case CLEAR_CART:
      return initialCartState;
    default:
      return state;
  }
};

const initialOrderState = {
  orders: [],
  loading: false,
  error: null
};

const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case UPDATE_ORDER_STATUS:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId
            ? { ...order, status: action.payload.status }
            : order
        )
      };
    case FETCH_ORDER_HISTORY:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer
});

export default rootReducer;