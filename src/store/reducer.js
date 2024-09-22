import { combineReducers } from 'redux';
import {  FETCH_PRODUCTS,FILTER_PRODUCTS_BY_CATEGORY,ADD_TO_CART,REMOVE_FROM_CART,UPDATE_QUANTITY} from './actions';
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
          items: action.payload || [],  // Ensure we always have an array
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
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;